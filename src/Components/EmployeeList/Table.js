import React from "react";
import {Pencil, TrashBin} from "react-ionicons";
import {AppContext} from "../../Context/AppContext";

export default function Table({employees, searchTerm, handleEdit, handleDelete}) {

    const {user} = React.useContext(AppContext);

    const filteredEmployees = employees.filter((employee) => employee.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (<table style={styles.table}>
        <thead>
        <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Gender</th>
            <th style={styles.th}>Age</th>
            <th style={styles.th}>Position</th>
            <th style={styles.th}>Enrolled Date</th>
            <th style={styles.th}>Contact No</th>
            <th style={styles.th}>Address</th>
            <th style={styles.th}>Qualifications</th>
            <th style={styles.th}>Edit/Delete</th>
        </tr>
        </thead>
        <tbody>
        {filteredEmployees.map((employee, index) => {
            let date = new Date(employee.enrolledDate);
            return (
                <tr key={index}>
                    <td style={styles.td}>{employee.name}</td>
                    <td style={styles.td}>{employee.gender}</td>
                    <td style={styles.td}>{employee.age}</td>
                    <td style={styles.td}>{employee.role}</td>
                    <td style={styles.td}>{date.toISOString().split('T')[0]}</td>
                    <td style={styles.td}>{employee.contactNumber}</td>
                    <td style={styles.td}>{employee.address}</td>
                    <td style={styles.td}>{employee.qualifications}</td>
                    <td style={styles.td}>
                        <button style={styles.edit} onClick={()=>handleEdit(employee)}>
                            <Pencil
                                color={"#4D5384"}
                                height="20px"
                                width="20px"
                            />
                        </button>
                        {(user._id !== employee._id)&&<button style={styles.delete} onClick={() => handleDelete(employee._id)}>
                            <TrashBin
                                color={"#4D5384"}
                                height="20px"
                                width="20px"
                            />
                        </button>}
                    </td>
                </tr>)
        })}
        </tbody>
    </table>)
}

const styles = {
    table: {
        borderCollapse: "collapse", marginBottom: "1rem", width: "100%",
    }, th: {
        backgroundColor: "#4D5384", padding: "0.5rem", textAlign: "left", maxWidth: "10rem", border: "1px solid #777",
    }, td: {
        border: "1px solid #777",
        padding: "0.5rem",
        textAlign: "left",
        backgroundColor: "#B1C2FD",
        maxWidth: "10rem",
    }, editDelete: {
        display: "flex", justifyContent: "space-between", alignItems: "center",
    }, edit: {
        margin: "auto",
        backgroundColor: "#B6DB9F",
        border: "none",
        marginRight: "0.5rem",
        cursor: "pointer",
    }, delete: {
        cursor: "pointer",
        backgroundColor: "#F1948A",
        border: "none",
    }, report: {
        backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        padding: "0.5rem 1rem",
        textDecoration: "none",
        borderRadius: "4px",
    },

};