import React, {useContext, useState} from 'react';
import {AppContext} from "../../Context/AppContext";
import axios from "axios";
import {URLS} from "../../Config/urls";

function EmployeeLoginForm() {

    const {setUser} = useContext(AppContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {

        setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {

        setPassword(event.target.value);
    };
    const handleFormSubmit = async (event) => {

        event.preventDefault();
        try {
            const response = await axios.post(URLS.login, {
                employeeId: username,
                password: password,
            });
            console.log(response.data)
            const {token} = response.data;
            let {user} = response.data;
            user.token = token
            sessionStorage.setItem('jwt', token);
            sessionStorage.setItem('user', JSON.stringify(user));
            setUser(response.data.user);
        } catch (error) {
            if (error.response.status === 404) {
                alert("Invalid username or password");
            }
        }

    };
    return (
        <div style={styles.container}>
            <h2>Username</h2>
            <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Enter your username"
                style={styles.input}
            />
            <h2>Password</h2>
            <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                style={styles.input}
            />
            <button type="submit" onClick={handleFormSubmit} style={styles.button}>Employee Login</button>
        </div>
    );

}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        padding: '2rem',
        margin: '1rem 0 10rem 0',
        backgroundColor: '#f5f5f5',
        borderRadius: '1rem',
        width: '40%'
    },
    input: {
        padding: '0.5rem',
        fontSize: '1.2rem',
        borderRadius: '5rem',
        border: '1px solid #ccc',
        width: '80%',
        height: '4rem',
        boxSizing: 'border-box',
        textAlign: 'center',
    },
    button: {
        padding: '0.5rem 3rem',
        fontSize: '1.2rem',
        borderRadius: '0.5rem',
        border: 'none',
        backgroundColor: '#0a6200',
        color: '#fff',
        marginTop: '1rem',
        cursor: 'pointer',
        fontWeight: 'bold',
    },
};

export default EmployeeLoginForm;
