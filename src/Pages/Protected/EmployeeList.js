import React from "react";
import Sidebar from "../../Layouts/Sidebar/Sidebar";
import Table from "../../Components/EmployeeList/Table";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {URLS} from "../../Config/urls";
import {AppContext} from "../../Context/AppContext";

export const EmployeeList = () => {

    const navigate = useNavigate();

    const [employees, setEmployees] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState("");
    const {user} = React.useContext(AppContext);

    React.useEffect(() => {

        async function getData() {
            const response = await axios(URLS.getUsers, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + user.token,
                }
            })

            console.log(response.data)
            setEmployees(response.data);
        }

        getData();

    }, [user.token]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleDelete = (index) => {
        // if (index === user.employeeId) return alert("You cannot delete yourself");
        if (!window.confirm("Are you sure you want to delete this employee?")) return;

        axios.delete(URLS.deleteUser + index, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user.token,
            }
        }).then((response) => {
            console.log(response);
            setEmployees(employees.filter((employee) => employee.id !== index));
        }).catch((error) => {
            console.log(error);
            alert("Error while deleting employee")
        });
    };

    const handleEdit = (employee) => {
        navigate('/employee-edit', {
            state: {employee: employee}
        })
    };

    function downloadReport() {
        axios(URLS.getReport, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user.token,
            },
            responseType: 'blob'
        }).then((res) => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'Employee Report.pdf');
            document.body.appendChild(link);
            link.click();
        }).catch((err) => {
            console.log(err);
            alert("Error while downloading report")
        });
    }

    return (
        <div style={styles.container}>
            <Sidebar/>
            <div style={styles.content}>
                <div style={styles.titleContainer}>
                    <h1 style={styles.title}>Employee Dashboard</h1>
                </div>
                <div style={styles.searchBarContainer}>
                    <button onClick={downloadReport} style={styles.btn}>Download report</button>
                    <Link to={'/employee-leave'} style={styles.btn}>View leave applications</Link>
                    <input
                        type="text"
                        placeholder="Search by name"
                        style={styles.search}
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
                <div style={styles.listContainer}>
                    {(employees !== []) && <Table employees={employees}
                                                  searchTerm={searchTerm}
                                                  handleEdit={handleEdit}
                                                  handleDelete={handleDelete}/>
                    }
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
    },
    searchBarContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        marginBottom: '2rem',
        alignSelf: 'center',
        justifyContent: 'end',
    },
    search: {
        width: '40%',
        borderRadius: '1.5rem',
        fontSize: '1.5rem',
        padding: '0.5rem 2rem',
    },
    listContainer: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'center',
    },
    btn: {
        textDecoration: 'none',
        backgroundColor: '#4D5384',
        padding: '1rem 2rem',
        color: '#fff',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginRight: '2rem',
        borderRadius: '1rem',
    }


}