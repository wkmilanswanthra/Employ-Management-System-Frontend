import React from "react";
import Sidebar from "../../Layouts/Sidebar/Sidebar";
import CardsLayout from "../../Layouts/CardsLayout";

export const Dashboard = () => {
    return (
        <div style={styles.container}>
            <Sidebar/>
            <div style={styles.content}>
                <h1 style={styles.title} >Dashboard</h1>
                <CardsLayout/>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        minHeight: '100vh',
        height: '100%',
    },
    content: {
        flex: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#03001F',
    },
    title: {
        color: '#fff',
        fontSize: '3rem',
        marginBottom: '5rem',
    },
}