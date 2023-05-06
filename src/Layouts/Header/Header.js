import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AppContext} from "../../Context/AppContext";

function Header() {

    const navigate = useNavigate();
    const {user, setUser} = React.useContext(AppContext);

    const logout = () => {
        try {
            sessionStorage.removeItem('jwt');
            sessionStorage.removeItem('user');
        } catch (e) {
            console.log(e);
        }
        setUser(null);
        navigate('/');
    }

    return (
        <header style={styles.container}>
            <h1 style={styles.title}>Animal Haven</h1>
            <nav style={styles.nav}>
                <ul style={styles.list}>
                    <li style={styles.navItem}><Link style={styles.link} to="/">Home</Link></li>
                    <li style={styles.navItem}><Link style={styles.link} to="/booking">Booking</Link></li>
                    <li style={styles.navItem}><Link style={styles.link} to="/animals">Animals</Link></li>
                    <li style={styles.navItem}><Link style={styles.link} to="/contact-us">Contact Us</Link></li>
                    <li style={styles.navItem}><Link style={styles.link} onClick={logout}>
                        {user ? 'Logout' : 'Login'}
                    </Link></li>
                </ul>
            </nav>
        </header>
    );
}

const styles = {
    container: {
        width: '100%',
        padding: '20px 0',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    title:{
        color: 'white',
        fontSize: '2rem',
        fontWeight: 'bold',
    },
    nav: {
        display: 'flex',
    },
    list:{
        display: 'flex',
        flexDirection: 'row',
        listStyle: 'none',
        margin: '0',
        padding: '0',
    },
    navItem: {
        listStyle: 'none',
        margin: '0 1rem',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.5rem',
        fontWeight: 'bold',
    }
}

export default Header;