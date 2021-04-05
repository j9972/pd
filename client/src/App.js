import React, { useState , useEffect} from 'react';
import './App.css';
import Axios from 'axios';

const App = () => {

    return(
        <div className="App">
            <div className="information">
                <h1>CRUD APP</h1>

                <labe>Name:</labe>
                <input type="text" />
                <labe>Age:</labe>
                <input type="number" />
                <labe>Position:</labe>
                <input type="text" />
                <labe>Country:</labe>
                <input type="text" />
                <labe>Wage (year):</labe>
                <input type="number" />
            </div>
        </div>
    );
}

export default App;