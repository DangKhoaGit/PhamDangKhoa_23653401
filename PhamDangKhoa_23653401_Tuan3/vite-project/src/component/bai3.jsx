import React from 'react'
import { use } from 'react';
import { useState, useEffect , useRef} from 'react';

function bai3() {

    var ds = [{name : 'Sản phẩm 1',giá : 10000}, 
        {name : 'Sản phẩm 2', giá : 20000}, 
        {name : 'Sản phẩm 3', giá : 30000}, 
        {name : 'Sản phẩm 4', giá : 40000}, 
        {name : 'Sản phẩm 5', giá : 50000}];
    var [mang, setMang] = useState(ds);
    var [total, setTotal ] = useState(0);
    var mangRef = useRef(mang);


    const dsSanPham = () => {
        
        return (
            <div>
                {mangRef.current.map(element => (
                    <div key={element.name}>
                        <p>{element.name} - Giá: {element.giá} VND</p>
                    </div>
                ))}
            </div>
        );
    };

    useEffect(() => {
        let sum = 0;
        mangRef.current.forEach(item => {
            sum += item.giá;
        });
        setTotal(sum);
    }, [mangRef.current]);

    
    return (
        <div>
            <div>
                <p>Product Filter + Tổng tiền</p>
            <input type="text" name="name" id="name" placeholder='Nhập tên sản phẩm'
            onBlur={()=>{
                var nameInput = document.getElementById('name').value;
                var filteredProducts = ds.filter(item => item.name.toLowerCase().includes(nameInput.toLowerCase()));
                mangRef.current = filteredProducts;
                setMang(filteredProducts);
            }}/>
            <input type="text" name="price" id="price" placeholder='Nhập giá sản phẩm'
            onBlur={()=>{
                var priceInput = document.getElementById('price').value;
                var filteredProducts = ds.filter(item => item.giá === parseInt(priceInput));   
                if(isNaN(priceInput) || priceInput === '') {
                    filteredProducts = ds; 
                } 
                mangRef.current = filteredProducts;
                setMang(filteredProducts);
            }}/>
            <p>Tổng tiền: {total} VND</p>
            </div>
            <div>
                {dsSanPham()}
            </div>
        </div>
    )
}

export default bai3;