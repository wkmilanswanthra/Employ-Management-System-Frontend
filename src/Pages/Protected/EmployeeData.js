import React, {useEffect, useState} from "react";
import Sidebar from "../../Layouts/Sidebar/Sidebar";
import Form from "../../Components/EmployeeForm/Form";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {URLS} from "../../Config/urls";
import {AppContext} from "../../Context/AppContext";

export const EmployeeData = () => {

    const {user} = React.useContext(AppContext);

    const location = useLocation();
    const navigate = useNavigate();

    const [employee, setEmployee] = useState(location.state?.employee);

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [enrolledDate, setEnrolledDate] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [address, setAddress] = useState("");
    const [qualification, setQualification] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    useEffect(() => {
        return () => {
            if (employee) {
                setName(employee.name);
                setAge(employee.age);
                setGender(employee.gender);
                const dt = new Date(employee.enrolledDate);
                setEnrolledDate(dt.toISOString().split('T')[0]);
                setContactNo(employee.contactNumber);
                setAddress(employee.address);
                setQualification(employee.qualifications);
                setEmployeeId(employee.employeeId);
                setRole(employee.role);
            }
        };
    }, [employee]);


    const handleSubmit = async (e) => {
        e.preventDefault();


        if (employee) {
            const data = {
                name: name,
                age: age,
                gender: gender,
                enrolledDate: Date.parse(enrolledDate),
                contactNumber: contactNo,
                address: address,
                qualifications: qualification,
                employeeId: employeeId,
                role: role,
            };

            if (password !== "") data.password = password;

            try {
                await axios.patch(URLS.updateUser + employee._id, data);
                console.log('Update successful');
                navigate(-1)
            } catch (error) {
                if (error.response.data.error === 11000) {
                    alert('Employee ID already exists');
                }
            }
            return;
        }

        const data = {
            name: name,
            age: age,
            gender: gender,
            enrolledDate: Date.parse(enrolledDate),
            contactNumber: contactNo,
            address: address,
            qualifications: qualification,
            employeeId: employeeId,
            password: password,
            role: role,
        };

        try {
            await axios.post(URLS.register, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + user.token,
                }
            });
            console.log('Registration successful');
            alert('Registration successful')
            navigate(-1)
        } catch (error) {
            if (error.response.data.error === 11000) {
                alert('Employee ID already exists');
            }
            console.error(error);
        }
    };

    return (
        <div style={styles.container}>
            <Sidebar/>
            <div style={styles.content}>
                <div style={styles.titleContainer}>
                    <h1 style={styles.title}>Employee Dashboard</h1>
                </div>
                <div style={styles.formContainer}>
                    <Form onSubmit={handleSubmit} value={name} onChange={(e) => setName(e.target.value)}
                          value1={age.toString()} onChange1={(e) => setAge(e.target.value)} value3={enrolledDate}
                          onChange3={(e) => setEnrolledDate(e.target.value)} value4={contactNo}
                          onChange4={(e) => setContactNo(e.target.value)} value5={address}
                          onChange5={(e) => setAddress(e.target.value)} value6={qualification}
                          onChange6={(e) => setQualification(e.target.value)} value7={employeeId}
                          onChange7={(e) => setEmployeeId(e.target.value)} value8={password}
                          onChange8={(e) => setPassword(e.target.value)} value9={role}
                          onChange9={(e) => setRole(e.target.value)} value10={gender}
                          onChange10={(e) => setGender(e.target.value)} employee={(employee !== undefined)}/>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        minHeight: '100vh',
    },
    content: {
        flex: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#03001F',
    },
    titleContainer: {
        width: '90%',
        marginBottom: '3rem',
        alignSelf: 'center',
    },
    title: {
        color: '#fff',
        fontSize: '3rem',
    },
    formContainer: {
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
    }
}