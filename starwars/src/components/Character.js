import React from 'react';

function Character (props) {
    let character = props.characterData;

    return (
        <div>{ character.name }</div>
    );
}

export default Character;