import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./Pages/Login";
import {Dashboard} from "./Pages/Protected/Dashboard";
import {EmployeeProfile} from "./Pages/Protected/EmployeeProfile";
import {EmployeeManagement} from "./Pages/Protected/EmployeeManagement";
import {EmployeeData} from "./Pages/Protected/EmployeeData";
import {EmployeeList} from "./Pages/Protected/EmployeeList";
import {EmployeeLeave} from "./Pages/Protected/EmployeeLeave";
import {ViewLeave} from "./Pages/Protected/ViewLeave";
import {AppContext} from "./Context/AppContext";

function App() {

    const {user} = React.useContext(AppContext);

    return (
        <div className="App" style={{minHeight: '100vh'}}>
            {user ?
                ((user.role === 'admin') ?
                    <Routes>
                        <Route path={'/'} element={<Dashboard/>}/>
                        <Route path={'/employee-management'} element={<EmployeeManagement/>}/>
                        <Route path={'/employee-list'} element={<EmployeeList/>}/>
                        <Route path={'/employee-edit'} element={<EmployeeData/>}/>
                        <Route path={'/employee-registration'} element={<EmployeeData/>}/>
                        <Route path={'/employee-leave'} element={<ViewLeave/>}/>
                    </Routes>
                    :
                    <Routes>
                        <Route path={'/employee-leave'} element={<EmployeeLeave/>}/>
                        <Route path={'/'} element={<EmployeeProfile/>}/>
                        <Route path={'*'} element={<EmployeeProfile/>}/>
                    </Routes>
                )
                :
                <Routes>
                    <Route path={'*'} element={<Login/>}/>
                </Routes>
            }
        </div>
    );
}


export default App;
