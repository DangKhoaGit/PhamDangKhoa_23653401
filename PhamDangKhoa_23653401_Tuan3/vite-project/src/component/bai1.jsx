import React, { use } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef} from 'react'

const bai1 = () => {
    const [name , setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);

    // các tham số lưu giá trị cũ
    const nameRef = useRef();
    const emailRef = useRef();
    const ageRef = useRef();

    /**
     * Cập nhật giá trị của các ref sau khi render hoàn tất
     */
    useEffect(()=>{
        nameRef.current = name;
    }, [name]);
    useEffect(() => {
        ageRef.current = age;
    }, [age]);
    useEffect(() => {
        emailRef.current = email;
    }, [email]);

    
    return (
        <div>
            <input type="text" name="" id="name" placeholder='Tên người dùng'
            onBlur={(element)=>{
                setName(element.target.value);
            }}/>
            <input type="text" name="" id="email" placeholder='Email'
            onBlur={(e) => {
                setEmail(e.target.value);
            }}/>
            <input type="text" name="" id="age" placeholder='Tuổi'
            onBlur={(e) => {
                setAge(e.target.value);
            }}/>
            <hr />
            <div>
                <p>Giá trị hiện tại</p>
                <p>Tên: {name} </p>
                <p>Email: {email} </p>
                <p>Tuổi: {age} </p>
            </div>
            <div>
                <p>Giá trị trước đó</p>
                <p>Tên: {nameRef.current} </p>
                <p>Email: {emailRef.current} </p>
                <p>Tuổi: {ageRef.current} </p>
            </div>
        </div>
    );
};

export default bai1;