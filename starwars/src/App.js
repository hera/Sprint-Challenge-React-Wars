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
            <div className="App">
                <h1 className="Header">Characters</h1>
                {
                    warsData.map((character, key) => (
                        <Character characterData={character} key={key} />
                    ))
                }
            </div>
        );
    } else {
        return (
            <div>Loading...</div>
        );
    }
    
}

export default App;
