import React from 'react';
import {Link} from 'react-router-dom';
import {
    LogOut,
    Apps,
    StatsChart,
    Ticket,
    Document,
    Calendar,
    Medical,
    Notifications, Settings
} from "react-ionicons";
import {AppContext} from "../../Context/AppContext";

const styles = {
    container: {
        minHeight: "100vh",
        backgroundColor: '#364153',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        padding: '0 1rem',
        flex: 1,
    },
    title: {
        fontSize: '2rem',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
    },
    subtitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        marginBottom: '3rem',
    },
    linkContainer: {
        marginBottom: '2rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    },
    link: {
        color: '#888',
        textDecoration: 'none',
        fontSize: '1.1rem',
        marginLeft: '1rem',
    },
    profileContainer: {
        display: 'flex',
        alignItems: 'center',
        justifySelf: 'flex-end',
        justifyContent: 'start',
        marginTop: 'auto',
        paddingTop: '2rem',
        paddingBottom: '1.5rem',
        borderTop: '1px solid #fff',
    },
    profileImage: {
        flex: 1,
        width: '70px',
        height: '70px',
        borderRadius: '10%',
        marginRight: '1rem',
    },
    logoutIcon: {
        fontSize: '1.5rem',
        cursor: 'pointer',
    },

    imgContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        flex: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    }
};

function Sidebar() {

    const {user, setUser} = React.useContext(AppContext);

    const handleLogout = () => {
        try {
            sessionStorage.removeItem('jwt');
            sessionStorage.removeItem('user');
        } catch (e) {
            console.log(e);
        }
        setUser(null);
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Animal Haven</h2>
            <p style={styles.subtitle}>Sidebar</p>
            <div style={styles.linkContainer}>
                <Apps color={'#888888'} height="30px" width="30px"/>
                <Link to="/" style={styles.link}>Dashboard</Link>
            </div>
            <div style={styles.linkContainer}>
                <StatsChart color={'#888888'} height="30px" width="30px"/>
                <Link to="/visitor-management" style={styles.link}>Visitor Management</Link>
            </div>
            <div style={styles.linkContainer}>
                <Ticket color={'#888888'} height="30px" width="30px"/>
                <Link to="/project-management" style={styles.link}>Project Management</Link>
            </div>
            <div style={styles.linkContainer}>
                <Document color={'#888888'} height="30px" width="30px"/>
                <Link to="/finance-management" style={styles.link}>Finance Management</Link>
            </div>
            <div style={styles.linkContainer}>
                <Calendar color={'#888888'} height="30px" width="30px"/>
                <Link to="/inventory-management" style={styles.link}>Inventory Management</Link>
            </div>
            <div style={styles.linkContainer}>
                <Medical color={'#888888'} height="30px" width="30px"/>
                <Link to="/handling-medical-records" style={styles.link}>Handling Medical records</Link>
            </div>
            <div style={styles.linkContainer}>
                <Notifications color={'#888888'} height="30px" width="30px"/>
                <Link to="/animal-management" style={styles.link}>Animal Management</Link>
            </div>
            <div style={styles.linkContainer}>
                <Ticket color={'#888888'} height="30px" width="30px"/>
                <Link to="/volunteer-management" style={styles.link}>Volunteer Management</Link>
            </div>
            <div style={styles.linkContainer}>
                <Settings color={'#888888'} height="30px" width="30px"/>
                <Link to="/employee-management" style={styles.link}>Employee Management</Link>
            </div>
            <div style={styles.profileContainer}>
                <div style={styles.imgContainer}><img src={user.img} style={styles.profileImage} alt={'profile'}/>
                </div>
                <div style={styles.textContainer}>
                    <span>{user.name}</span>
                    <LogOut color={'#888888'} height="30px" width="30px" style={{padding: '0.5rem'}} onClick={handleLogout}/>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;