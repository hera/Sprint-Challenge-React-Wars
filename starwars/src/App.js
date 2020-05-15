import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';

const App = () => {
    let [warsData, setWarsData] = useState([]);

    useEffect(() => {
        axios.get(`https://swapi.py4e.com/api/people/`)
            .then((response) => {
                setWarsData(response.data.results);
            })
            .catch((error) => console.log(error));
    }, []);

    if (warsData) {
        return (
            <>
            <h1>Star Wars Characters</h1>
            <div className="App">
                {
                    warsData.map((character, key) => (
                        <Character characterData={character} key={key} />
                    ))
                }
            </div>
            </>
        );
    } else {
        return (
            <div>Loading...</div>
        );
    }
    
}

export default App;
