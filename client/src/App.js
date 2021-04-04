import React, { useState , useEffect} from 'react';
import './App.css';
import Axios from 'axios';

const App = () => {

    const [movieName, setMovieName] = useState("");
    const [review, setReview] = useState("");

    const submitReview = () => {

    };

    return(
        <div className="App">
            <h1>CRUD APP</h1>

            <div className="form">  
                <label>Movie Name:</label>
                <input type="text" name="movieName" onChange={(e) => {
                    setMovieName(e.target.value);
                }}/>
                <label>Review:</label>
                <input type="text" name="review" onChange={(e) => {
                    setReview(e.target.value);
                }}/>

                <button onClick={submitReview}>Submit</button>
            </div>
        </div>
    );
}

export default App;