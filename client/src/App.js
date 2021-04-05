import React, { useState , useEffect} from 'react';
import './App.css';
import Axios from 'axios';

const App = () => {

    return(
        <div className="App">
            <h1>CRUD APP</h1>

            <labe>Name:</labe>
            <input type="text" />
            <labe>Age:</labe>
            <input type="number" />
        </div>
    );
}

export default App;