import React, {useEffect} from "react"
import Sidebar from "../../Layouts/Sidebar/Sidebar";
import axios from "axios";
import {URLS} from "../../Config/urls";
import {AppContext} from "../../Context/AppContext";


export const ViewLeave = () => {

    const {user} = React.useContext(AppContext);

    const [data, setData] = React.useState([])

    useEffect(() => {
        axios.get(URLS.getLeave).then((res) => {
            console.log(res);
            setData(res.data);
        }, (err) => {
            console.log(err);
        });
    }, []);

    const handleStatus = (employee, status) => {
        axios(URLS.updateLeaveStatus + employee._id, {
            data: {status: status},
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user.token,
            }
        }).then((res) => {
            console.log(res);
            setData(data.map((field) => {
                if (field._id === employee._id) {
                    field.status = status;
                }
                return field;
            }));
        }, (err) => {
            console.log(err);
        })
    }

    return (
        <div style={styles.container}>
            <Sidebar/>
            <div style={styles.content}>
                <div style={styles.titleContainer}>
                    <h1 style={styles.title}>Employee Dashboard</h1>
                </div>
                <div style={styles.list}>
                    <table style={styles.table}>
                        <tr style={styles.tableRow}>
                            <th style={styles.tableHeading}>Employee Name</th>
                            <th style={styles.tableHeading}>Leave Type</th>
                            <th style={styles.tableHeading}>Start of Leave</th>
                            <th style={styles.tableHeading}>End of Leave</th>
                            <th style={styles.tableHeading}>Leave Reason</th>
                            <th style={styles.tableHeading}>Leave Status</th>
                        </tr>
                        {data.map((field, index) => {
                            return (
                                <tr>
                                    <td style={styles.tableData}>{field.name}</td>
                                    <td style={styles.tableData}>{field.leaveType}</td>
                                    <td style={styles.tableData}>{field.fromDate.split("T")[0]}</td>
                                    <td style={styles.tableData}>{field.toDate.split("T")[0]}</td>
                                    <td style={styles.tableData}>{field.leaveReason}</td>
                                    <td style={styles.tableDataBtns}>
                                        {(field.status === 'Pending') ?
                                            <>
                                                <button style={styles.approveBtn}
                                                        onClick={() => handleStatus(field, "Approved")}>
                                                    Approve
                                                </button>
                                                <button style={styles.rejectBtn}
                                                        onClick={() => handleStatus(field, "Rejected")}>
                                                    Reject
                                                </button>
                                            </>
                                            :
                                            <p style={{margin: '0', padding: '0.5rem'}}>{field.status}</p>
                                        }
                                    </td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        minHeight: '100vh',
        height: '100vh',
    },
    content: {
        flex: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        backgroundColor: '#03001F',
        overflowY: "scroll",
        overflowX: "hidden",
        scrollbarWidth: "none",
        msOverflowStyle: "none",

    },
    titleContainer: {
        width: '90%',
        marginBottom: '5rem',
        alignSelf: 'center',
    },
    title: {
        color: '#fff',
        fontSize: '3rem',
    }, list: {
        width: '90%',
        alignSelf: 'center',
    },
    table: {
        borderCollapse: "collapse", marginBottom: "1rem", width: "100%",
    }, tableHeading: {
        backgroundColor: "#4D5384", padding: "0.5rem", textAlign: "left", maxWidth: "10rem", border: "1px solid #777",
    }, tableData: {
        border: "1px solid #777",
        padding: "0.5rem",
        textAlign: "left",
        backgroundColor: "#B1C2FD",
        maxWidth: "10rem",
    },
    tableDataBtns: {
        border: "1px solid #777",
        padding: "0.5rem",
        textAlign: "left",
        backgroundColor: "#B1C2FD",
        maxWidth: "10rem",
    }
    , approveBtn: {
        backgroundColor: "#b6db9f",
        color: "#fff",
        border: "none",
        padding: "0.5rem 1rem",
        width: '50%',
    },
    rejectBtn: {
        backgroundColor: "#f1948a",
        color: "#fff",
        border: "none",
        padding: "0.5rem 1rem",
        width: '50%',
    }

}

