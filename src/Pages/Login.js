import React from "react";
import Header from "../Layouts/Header/Header";
import bg from '../Assets/Images/bg.jpeg';
import LoginForm from "../Components/Login/LoginForm";
import EmployeeLoginForm from "../Components/Login/EmployeeLoginForm";

export default function Login() {
    return (
        <div style={styles.container}>
            <Header/>
            <LoginForm/>
            <EmployeeLoginForm/>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%' ,
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
}