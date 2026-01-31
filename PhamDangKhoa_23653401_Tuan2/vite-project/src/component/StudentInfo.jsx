function StudentInfo(props) {
    return (
        <div>
            <p>Họ và tên: {props.name}</p>
            <p>Mã số sinh viên: {props.id}</p>
            <p>Lớp: {props.class}</p>
        </div>
    );
}
export default StudentInfo;