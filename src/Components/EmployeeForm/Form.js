import React from "react";
import * as PropTypes from "prop-types";


export default function Form(props) {
    return (
        <div style={styles.container}>
            <h2> Employee {(props.employee)? "Update":"Registration"} </h2>
            <form style={styles.form} onSubmit={props.onSubmit}>
                <div style={styles.formGroup}>
                    <label htmlFor="name" style={styles.label}>Employee ID</label>
                    <p>:</p>
                    <input
                        id="empId"
                        type="text"
                        value={props.value7}
                        onChange={props.onChange7}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="name" style={styles.label}>Password</label>
                    <p>:</p>
                    {props.employee?
                        <input
                        id="password"
                        type="password"
                        value={props.value8}
                        onChange={props.onChange8}
                        style={styles.input}

                    />
                    :
                    <input
                        id="password"
                        type="password"
                        value={props.value8}
                        onChange={props.onChange8}
                        style={styles.input}
                        required/>
                    }
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="role" style={styles.label}>Role</label>
                    <p>:</p>
                    <select
                        id="role"
                        value={props.value9}
                        onChange={props.onChange9}
                        style={styles.input}
                        required
                    >
                        <option value="">Select a role</option>
                        <option value="admin">Admin</option>
                        <option value="employee">Employee</option>
                    </select>
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="name" style={styles.label}>Name</label>
                    <p>:</p>
                    <input
                        id="name"
                        type="text"
                        value={props.value}
                        onChange={props.onChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="age" style={styles.label}>Age</label>
                    <p>:</p>
                    <input
                        id="age"
                        type="text"
                        value={props.value1}
                        onChange={props.onChange1}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="role" style={styles.label}>Gender</label>
                    <p>:</p>
                    <select
                        id="gender"
                        value={props.value10}
                        onChange={props.onChange10}
                        style={styles.input}
                        required
                    >
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="enrolled-date" style={styles.label}>Enrolled Date</label>
                    <p>:</p>
                    <input
                        id="enrolled-date"
                        type="date"
                        value={props.value3}
                        onChange={props.onChange3}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="contact-no" style={styles.label}>Contact No</label>
                    <p>:</p>
                    <input
                        id="contact-no"
                        type="text"
                        value={props.value4}
                        onChange={props.onChange4}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="address" style={styles.label}>Address</label>
                    <p>:</p>
                    <input
                        id="address"
                        type="text"
                        value={props.value5}
                        onChange={props.onChange5}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="qualification" style={styles.label}>Qualification</label>
                    <p>:</p>
                    <input
                        id="qualification"
                        type="text"
                        value={props.value6}
                        onChange={props.onChange6}
                        style={styles.input}
                        required
                    />
                </div>
                <button type="submit" style={styles.btnAdd}>
                    Submit
                </button>
            </form>
        </div>
    )
}

const styles = {
    container: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        color: '#fff',
        minWidth: "700px",
        padding: '40px 100px 50px ',
        borderRadius: "10px",

    },
    form: {
        width: '100%',
    },
    formGroup: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        marginBottom: '0.2rem',
    },
    btnAdd: {
        padding: "10px 20px",
        backgroundColor: "#4D5384",
        color: "#fff",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        fontSize: "20px",
        marginTop: "20px",
        fontWeight: "bold",
    },
    label: {
        fontWeight: "bold",
        fontSize: "18px",
        width: "20%",
    },
    input: {
        padding: "10px",
        margin: "10px",
        border: "none",
        borderBottom: "2px solid #ccc",
        width: "100%",
        maxWidth: "700px",
        fontSize: "16px",
        backgroundColor: "#B1C2FD",
        borderRadius: "10px",
    },
}

Form.propTypes = {
    onSubmit: PropTypes.func,
    value: PropTypes.string,
    onChange: PropTypes.func,
    value1: PropTypes.string,
    onChange1: PropTypes.func,
    value3: PropTypes.string,
    onChange3: PropTypes.func,
    value4: PropTypes.string,
    onChange4: PropTypes.func,
    value5: PropTypes.string,
    onChange5: PropTypes.func,
    value6: PropTypes.string,
    onChange6: PropTypes.func,
    value7: PropTypes.string,
    onChange7: PropTypes.func,
    value8: PropTypes.string,
    onChange8: PropTypes.func,
    value9: PropTypes.string,
    onChange9: PropTypes.func,
    value10: PropTypes.string,
    onChange10: PropTypes.func,
    employee: PropTypes.bool
};