import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';

const App = () => {
    let [warsData, setWarsData] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8080/data.json')
            .then((response) => {
                setWarsData(response.data);
            })
            .catch((error) => console.log(error));
        setWarsData()
    }, [])

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
