import React, { useState , useEffect} from 'react';
import './App.css';
import Axios from 'axios';

const App = () => {

    const [name, setName] = useState('');

    return(
        <div className="App">
            <div className="information">
                <h1>CRUD APP</h1>

                <labe>Name:</labe>
                <input type="text" />
                <labe>Age:</labe>
                <input type="number" />
                <labe>Country:</labe>
                <input type="text" />
                <labe>Position:</labe>
                <input type="text" />
                <labe>Wage (year):</labe>
                <input type="number" />
                <button>Add Employee</button>
            </div>
        </div>
    );
}

export default App;