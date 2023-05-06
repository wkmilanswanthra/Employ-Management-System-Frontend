import React from "react";
import * as PropTypes from "prop-types";

export default function LeaveForm(props) {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}> Employee Leave </h2>
            <form style={styles.form} onSubmit={props.onSubmit}>
                <div style={styles.formGroup}>
                    <label htmlFor="leave-type" style={styles.label}>Leave Type</label>
                    <p>:</p>
                    <input
                        id="leave-type"
                        type="text"
                        value={props.value1}
                        onChange={props.onChange1}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>

                    <label htmlFor="leave-date" style={styles.label}>Start of Leave</label>
                    <p>:</p>
                    <input
                        id="leave-date"
                        type="date"
                        value={props.value2}
                        onChange={props.onChange2}
                        style={styles.input}
                        required

                    />
                </div>
                <div style={styles.formGroup}>

                    <label htmlFor="leave-date" style={styles.label}>End of Leave</label>
                    <p>:</p>
                    <input
                        id="leave-date"
                        type="date"
                        value={props.value4}
                        onChange={props.onChange4}
                        style={styles.input}
                        required

                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="leave-reason" style={styles.label}>Leave Reason</label>
                    <p>:</p>
                    <input
                        id="leave-reason"
                        type="text"
                        value={props.value3}
                        onChange={props.onChange3}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>


                    <button type="submit" style={styles.button}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

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
    form:{
        width: "100%",
    },
    title: {
        margin: '30px auto',
        backgroundColor: "#0C4D0E   ",
        padding: "10px 20px",
        borderRadius: "20px",
        color: "#fff",
    },
    formGroup: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        margin: 10,
    },
    label: {
        flex: 1,
        fontWeight: "bold",
        fontSize: "18px",
        color: "#1C8C21",
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
    }
}

LeaveForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    onChange1: PropTypes.func.isRequired,
    value2: PropTypes.string.isRequired,
    onChange2: PropTypes.func.isRequired,
    value4: PropTypes.string.isRequired,
    onChange4: PropTypes.func.isRequired,
    value3: PropTypes.string.isRequired,
    onChange3: PropTypes.func.isRequired,
}