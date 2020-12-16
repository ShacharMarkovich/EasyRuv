import React, { useState } from 'react'
import { useParams } from "react-router-dom"
import { align_center_style } from './App';
import staticImg from './images/static.jpeg'
import hispinNoStat from './images/hispinNoStat.jpeg'
import hispinGood from './images/hispinGood.jpeg'
import hispinBad from './images/hispinBad.jpeg'
import hispinErr from './images/hispinErr.jpeg'

function City() {
    let { cityName } = useParams();
    // options: noStat, good, bad, good2, err
    const [currStat, setCurrStat] = useState("noStat")
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }


    async function UpdateStatLabel() { //must be async func
        var statLabel = document.getElementById("statLabel");
        statLabel.value = "Send request to controller..."
        statLabel.style.color = "red"
        await sleep(1500) //wait 5 seconds
        statLabel.value = "Parse respone from controller..."
        await sleep(1500) //wait 5 seconds
        statLabel.value = "Done."
        statLabel.style.color = "green"
        await sleep(1500) //wait 5 seconds
        statLabel.value = ""
        statLabel.style.color = "green"
    }

    const getStatusHandlerClick = () => {
        UpdateStatLabel()
        var hispinImg = document.getElementById("hispinImg");
        if (currStat === "noStat"){
            hispinImg.src = hispinGood
            setCurrStat("good")
            
        }
        else if(currStat === "good"){
            hispinImg.src = hispinBad
            setCurrStat("bad")
        }
        else if(currStat === "bad"){
            hispinImg.src = hispinGood
            setCurrStat("good2")
        }else if(currStat === "good2"){
            hispinImg.src = hispinBad
            setCurrStat("bad")
        }

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
                    <td><img id="hispinImg" src={hispinNoStat} /></td>
                    <td style={{ "vertical-align": "top" }}>
                        &emsp;&emsp;
                    <button class="btn btn-secondary" onClick={getStatusHandlerClick}>Get Status!</button>
                        <br></br><br></br>&emsp;&emsp;<input id="statLabel" style={{ "color": "red", "border": "0" }} type="text" value="" size="40" disabled />
                    </td>
                </tr>
            </table>
        )
    }
}

export default City;