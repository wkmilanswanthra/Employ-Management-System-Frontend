import React from "react";
import Sidebar from "../../Layouts/Sidebar/Sidebar";
import {Link} from "react-router-dom";
import headerImage from '../../Assets/Images/employee_management_header.png';

export const EmployeeManagement = () => {
    return (
        <div style={styles.container}>
            <Sidebar/>
            <div style={styles.content}>
                <div style={styles.titleContainer}><h1 style={styles.title}>Employee Dashboard</h1></div>
                <div style={styles.imageContainer}>
                    <img src={headerImage} style={styles.image} alt={'header'}/>
                </div>
                <div style={styles.buttonContainer}>
                    <Link to={'/employee-registration'} style={styles.btn}>Add New Employees</Link>
                    <Link to={'/employee-list'} style={styles.btn}> Employee List</Link>
                </div>
            </div>
        </div>
    );
}

const styles ={
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
    },
    content: {
        flex: 5,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#03001F',
    },
    titleContainer:{
        width: '90%',
        marginBottom: '5rem',
        alignSelf: 'center',
    },
    title: {
        color: '#fff',
        fontSize: '3rem',
    },
    imageContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',

    },
    image: {
        width: '90%',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: '5rem',

    },
    btn:{
        textDecoration: 'none',
        backgroundColor: '#4D5384',
        padding: '2rem 3rem',
        color: '#fff',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        borderRadius: '1rem',
    },
}