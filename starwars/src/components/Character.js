import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 0 auto;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    margin-bottom: 30px;
    margin-right: 30px;
    width: 40%;
`

const Color = styled.span`
    color: ${props => props.colorStyle};
    background: #ddd;
    display: inline-block;
    line-height: 1.8;
    padding: 0 20px;
    border-radius: 9999px;
`

function Character (props) {
    let character = props.characterData;

    return (
        <Container>
            <h2>{ character.name }</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Gender:</td>
                        <td>{ character.gender }</td>
                    </tr>
                    <tr>
                        <td>Height:</td>
                        <td>{ character.height }</td>
                    </tr>
                    <tr>
                        <td>Mass:</td>
                        <td>{ character.mass } lbs</td>
                    </tr>
                    <tr>
                        <td>Hair color:</td>
                        <td>{ character.hair_color }</td>
                    </tr>
                    <tr>
                        <td>Eye color:</td>
                        <td><Color colorStyle={ character.eye_color }>{ character.eye_color }</Color></td>
                    </tr>
                    <tr>
                        <td>Year of birth:</td>
                        <td>{ character.birth_year }</td>
                    </tr>
                    <tr>
                        <td>Films:</td>
                        <td>{ character.films.length }</td>
                    </tr>
                    <tr>
                        <td>Vehicles:</td>
                        <td>{ character.vehicles.length }</td>
                    </tr>
                    
                </tbody>
            </table>
        </Container>
    );
}

export default Character;