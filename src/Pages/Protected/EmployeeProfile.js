import React, {useEffect} from "react";
import bg from "../../Assets/Images/bg.jpeg";
import Header from "../../Layouts/Header/Header";
import Profile from "../../Components/EmployeeProfile/Profile";
import {AppContext} from "../../Context/AppContext";
import axios from "axios";
import {URLS} from "../../Config/urls";


export const EmployeeProfile = () => {

    const {user}  = React.useContext(AppContext);

    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [contactNo, setContactNo] = React.useState('');
    const [address, setAddress] = React.useState('');

    useEffect(() => {
        return () => {
            if (user) {
                setName(user.name);
                setAge(user.age.toString());
                setContactNo(user.contactNumber);
                setAddress(user.address);
            }
        };
    }, [user]);


    const handleSave = () => {
        axios.patch( URLS.updateUser+user._id, {
            name: name,
            age: age,
            contactNumber: contactNo,
            address: address,
        }).then((res) => {
            alert("Profile updated successfully")
            console.log(res);
        }).catch((err) => {
            console.log(err);
            alert("Error occurred")
        });
    };

    const handleMarkAttendance = () => {
        axios.post(URLS.markAttendance, {
            employeeId: user.employeeId,
        }).then((res) => {
            alert("Attendance marked successfully")
            console.log(res);
        }).catch((err) => {
            console.log(err);
            alert("Error occurred")
        });
    };

    return (
        <div style={styles.container}>
            <Header/>
            <Profile value={name}
                     onChange={(e) => setName(e.target.value)}
                     value1={age}
                     onChange1={(e) => setAge(e.target.value)}
                     value2={contactNo}
                     onChange2={(e) => setContactNo(e.target.value)}
                     value3={address}
                     onChange3={(e) => setAddress(e.target.value)}
                     onClick={handleSave}
                     onClick1={handleMarkAttendance}/>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        minHeight: '100vh',
        borderRadius: "10px",
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    input: {
        padding: "10px",
        margin: "10px",
        border: "none",
        borderBottom: "2px solid #ccc",
        width: "100%",
        maxWidth: "400px",
        fontSize: "16px",
    },
    label: {
        fontWeight: "bold",
        fontSize: "18px",
    },
    button: {
        padding: "10px 20px",
        backgroundColor: "#4285F4",
        color: "#fff",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
        marginTop: "20px",
    },
    buttonRow: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "400px",
    },
};

export default EmployeeProfile;