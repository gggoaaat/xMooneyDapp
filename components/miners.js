import React, { useReducer, useState, useEffect } from 'react';
import styles from '../styles/Miners.module.css'
import WalletBridge from '../components/walletBridge';
import ApiData from '../components/apiData';
import Web3 from "web3";


export default function Miners(e) {
    
    const cors = require("cors")
    var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
    function doCORSRequest(url) {
        return 'http://localhost.com:8080/' + url
    }

    function sendMinerPayout(props) {   
        console.log(props)
        console.log(e.abi())
        console.log(e.web3())
        e.transfer(props.WalletAddress, props["Mooney Earned w Reflections"])
        //e.transfer()
    }

    function getMinerPayout(props) {
        
        const [payoutData, setPayoutData] = useState({ rows: [] });
        const [loaded, setLoaded] = useState(false);
        
        useEffect(async () => {
            if(true)
            {
            const url = doCORSRequest('https://us-east4-just-shape-317505.cloudfunctions.net/function-getPayOuts?RunIt=1&Query=miner%20payouts&PayOutID=534');
            const options = {
                method: 'GET',
                //mode: 'no-cors',
                headers: {
                    'Access-Control-Allow-Origin': 'https://localhost:3000',
                    'Access-Control-Allow-Credentials': 'true',
                    'x-requested-with': window.location.host
                }
            };
            try {
                await fetch(url, options).then(response => response.json()).then(setPayoutData)
                setLoaded(true)
            } catch (error) {
                console.log(error.message)
            }
        }
            //setPayoutData(ApiData());
        }, [])

        const resultData = payoutData.rows.map(element => {
            return (
                <tr className={styles.minerpayout} key={element.Martian}>
                    <td>{element.WalletAddress}</td>
                    <td>{element["Mooney Earned w Reflections"]}</td> 
                    <td> <button onClick={() => sendMinerPayout(element)}>Send</button></td>
                </tr>
            )
        });

        return (
            <>  <form>
                <input key="WalletAddySingle"></input>
                <input key="Amount"></input>
                <button onClick={() => sendMinerPayout({})}>Send</button>
                </form>
                <table><thead><tr><th>Wallet</th><th>Payout</th><th></th></tr></thead><tbody>{loaded ? resultData : <tr><td colSpan="3">Loading</td></tr>}</tbody></table>
            </>)
    }

    return {
        getMinerPayout: function (props) {
            return getMinerPayout(props);
        }
    }
}