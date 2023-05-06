import React from "react";
import Header from "../../Layouts/Header/Header";
import bg from "../../Assets/Images/bg.jpeg";
import LeaveForm from "../../Components/EmployeeLeave/LeaveForm";
import {AppContext} from "../../Context/AppContext";
import axios from "axios";
import {URLS} from "../../Config/urls";
import {useNavigate} from "react-router-dom";

export const EmployeeLeave = () => {

    const navigate = useNavigate();

    const {user} = React.useContext(AppContext);

    const [leaveType, setLeaveType] = React.useState('');
    const [fromDate, setFromDate] = React.useState('');
    const [toDate, setToDate] = React.useState('');
    const [leaveReason, setLeaveReason] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();
        axios.post(URLS.addLeave, {
            userId: user._id,
            name: user.name,
            leaveType: leaveType,
            fromDate: fromDate,
            toDate: toDate,
            leaveReason: leaveReason,
        }).then((res) => {
            console.log(res);
            alert("Leave applied successfully")
            navigate(-1);
        }).catch((err) => {
            alert("Error occurred")
            console.log(err);
        });
    }

    return (
        <div style={styles.container}>
            <Header/>
            <LeaveForm
                value1={leaveType}
                onChange1={(e) => setLeaveType(e.target.value)}
                value2={fromDate}
                onChange2={(e) => setFromDate(e.target.value)}
                value4={toDate}
                onChange4={(e) => setToDate(e.target.value)}
                value3={leaveReason}
                onChange3={(e) => setLeaveReason(e.target.value)}
                onSubmit={(e) => {
                    handleSubmit(e)
                }}
            />
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
    formContainer: {
        width: '90%',
        height: '100%',
    }
};