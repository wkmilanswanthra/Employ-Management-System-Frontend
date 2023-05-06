import React from "react";
import * as PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function Profile(props) {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Employee Profile</h1>
            <div style={styles.inputContainer}>
                <label htmlFor="name" style={styles.label}>
                    Name
                </label>
                <p>:</p>
                <input
                    id="name"
                    type="text"
                    value={props.value}
                    onChange={props.onChange}
                    style={styles.input}
                />
            </div>
            <div style={styles.inputContainer}>
                <label htmlFor="age" style={styles.label}>
                    Age
                </label>
                <p>:</p>
                <input
                    id="age"
                    type="text"
                    value={props.value1}
                    onChange={props.onChange1}
                    style={styles.input}
                />
            </div>
            <div style={styles.inputContainer}>
                <label htmlFor="contactNo" style={styles.label}>
                    Contact No
                </label>
                <p>:</p>
                <input
                    id="contactNo"
                    type="text"
                    value={props.value2}
                    onChange={props.onChange2}
                    style={styles.input}
                />
            </div>
            <div style={styles.inputContainer}>
                <label htmlFor="address" style={styles.label}>
                    Address
                </label>
                <p>:</p>
                <input
                    id="address"
                    type="text"
                    value={props.value3}
                    onChange={props.onChange3}
                    style={styles.input}
                />
            </div>
            <button onClick={props.onClick} style={styles.button}>
                Save
            </button>
            <div style={styles.buttonRow}>
                <button onClick={props.onClick1} style={styles.button}>
                    Mark Attendance
                </button>
                <Link to={'/employee-leave'} style={styles.button}>
                    Apply for Leave
                </Link>
            </div>
        </div>
    )
}

Profile.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    value1: PropTypes.string,
    onChange1: PropTypes.func,
    value2: PropTypes.string,
    onChange2: PropTypes.func,
    value3: PropTypes.string,
    onChange3: PropTypes.func,
    onClick: PropTypes.func,
    onClick1: PropTypes.func,
};

const styles = {
    container: {
        display: "flex",
        backgroundColor: "#D9D9D9",
        flexDirection: "column",
        alignItems: "start",
        minWidth: "700px",
        padding: '40px 200px 80px ',
        borderRadius: "10px",
        marginTop: '100px'
    },
    title: {
        margin: '30px auto',
        backgroundColor: "#0C4D0E   ",
        padding: "10px 20px",
        borderRadius: "20px",
        color: "#fff",
    },
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
    },
    input: {
        flex: 4,
        padding: "10px",
        margin: "10px",
        border: "none",
        borderBottom: "2px solid #ccc",
        width: "100%",
        maxWidth: "600px",
        fontSize: "16px",
        backgroundColor: "#B6DB9F",
        borderRadius: "10px",
    },
    label: {
        flex: 1,
        fontWeight: "bold",
        fontSize: "18px",
        color: "#1C8C21",
    },
    button: {
        textDecoration: "none",
        padding: "10px 20px",
        backgroundColor: "#1C8C21",
        color: "#fff",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        fontSize: "20px",
        marginTop: "20px",
        alignSelf: "center",
        fontWeight: "bold",
    },
    buttonRow: {
        display: "flex",
        justifyContent: "space-around",
        alignSelf: "center",
        width: "100%",
    },
};