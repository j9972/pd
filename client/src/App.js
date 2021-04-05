import React, { useState , useEffect} from 'react';
import './App.css';
import Axios from 'axios';

const App = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState("");
    const [position, setPosition] = useState("");
    const [wage, setWage] = useState(0);

    const addEmployee = () => {
        Axios.post('http://localhost:3003/create', {
            name: name, 
            age: age, 
            country: country, 
            position: position, 
            wage: wage,
        }).then(() => {
            console.log('success');
        });
    }

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
        </div>
    );
}

export default App;