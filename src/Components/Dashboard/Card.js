import React from "react";
import {Link} from 'react-router-dom';

const Card = ({ title, icon, path }) => {
    return (
        <Link to={path} style={styles.card}>
            <span style={styles.cardIcon}>{icon}</span>
            <span style={styles.cardTitle}>{title}</span>
        </Link>
    );
};

const styles = {
    card: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#364153',
        borderRadius: '10px',
        padding: '40px 20px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        flex: '1 1 300px',
        textDecoration: 'none',
        color: '#fff',
    },
    cardIcon: {
        fontSize: '40px',
    },
    cardTitle: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginTop: '20px',
        marginLeft: '10px',
        textAlign: 'center',
    }
};

export default Card;
