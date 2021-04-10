import React, { useState , useEffect} from 'react';
import './App.css';
import Axios from 'axios';

const App = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState("");
    const [position, setPosition] = useState("");
    const [wage, setWage] = useState(0);

    const [employeeList, setEmployeeList] = useState([]);

    const addEmployee = () => {
        Axios.post('http://localhost:3003/create', {
            name: name, 
            age: age, 
            country: country, 
            position: position, 
            wage: wage,
        }).then(() => {
            setEmployeeList([...employeeList, {
                name: name, 
                age: age, 
                country: country, 
                position: position, 
                wage: wage,
            }]);
        });
    };

    const getEmployee = () => {
        Axios.get('http://localhost:3003/employees').then((res) => {
            setEmployeeList(res.data); // screen에 데이터 보여주기
        });
    };

    return(
        <div className="App">
            <div className="information">
                <h1>CRUD APP</h1>

                <label>Name:</label>
                <input type="text" onChange={(event) => {
                    setName(event.target.value);
                }}/>
                <label>Age:</label>
                <input type="number" onChange={(event) => {
                    setAge(event.target.value);
                }}/>
                <label>Country:</label>
                <input type="text" onChange={(event) => {
                    setCountry(event.target.value);
                }}/>
                <label>Position:</label>
                <input type="text" onChange={(event) => {
                    setPosition(event.target.value);
                }}/>
                <label>Wage (year):</label>
                <input type="number" onChange={(event) => {
                    setWage(event.target.value);
                }}/>
                <button onClick={addEmployee}>Add Employee</button>
            </div>
            ----------------------------------------------------------------------------
            <div className="employees">
                <button onClick={getEmployee}>Show Employees</button>

                {employeeList.map((val,key) => {
                    return (
                        <div className="employee"> 
                            <h3>Name: {val.name}</h3> 
                            <h3>Age: {val.age}</h3> 
                            <h3>Country: {val.country}</h3> 
                            <h3>Position: {val.position}</h3> 
                            <h3>Wage: {val.wage}</h3> 

                            <buttoon>Delete</buttoon>
                            <input type="text" id="updateInput"/>
                            <buttoon>Update</buttoon>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;