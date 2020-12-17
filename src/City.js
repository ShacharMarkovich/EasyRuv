import React, { useState } from 'react'
import { useParams } from "react-router-dom"
import staticImg from './images/static.jpeg'
import hispinGood from './images/hispinGood.jpeg'
import hispinBad from './images/hispinBad.jpeg'
import axios from 'axios'

function City() {
    let { cityName } = useParams();

    const getStatusHandlerClick = () => {
        var hispinImg = document.getElementById("hispinImg");
        
        // send request to backEnd - asking for data in spesific city
        axios.get(`/my-cities/${cityName}/status`).then(res => {
            const pillers = res.data[`${cityName}`]
            // for each piller in respone, check if it has a problem or not and showing pit map
            for (const pillerID in pillers)
                if (pillers[pillerID] === true) // there is a problem
                    hispinImg.src = hispinBad
                else
                    hispinImg.src = hispinGood
        })
    }

    if (cityName !== "Hispin")
        return (<div>
            <h4>{cityName} EasyRuv Map</h4>
            <img src={staticImg} />
        </div>)
    else {
        return (
            <table>
                <tr>
                    <th><h4>Hispin EasyRuv Map</h4></th>
                    <th><h4>Option</h4></th>
                </tr>
                <tr>
                    <td><img id="hispinImg" src={hispinGood} /></td>
                    <td style={{ "vertical-align": "top" }}>
                        &emsp;&emsp;
                    <button id="getStatus" class="btn btn-secondary" onClick={getStatusHandlerClick}>Get Status!</button>
                    </td>
                </tr>
            </table>
        )
    }
}

export default City;