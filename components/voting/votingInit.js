import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletBridge from '../walletBridge';
import Button from '@mui/material/Button';
import { style } from "@mui/system";
import React, { useReducer, useState, useEffect } from 'react';
import Image from 'next/image'


export default function VoterInit() {

    let lastUp;

    const bridgeParams = {
        tokenAddress: process.env.contractAddress,
        providerOptions: {
            metamask: {
                id: 'injected',
                name: 'MetaMask',
                type: 'injected',
                check: 'isMetaMask'
            },
            walletconnect: {
                package: WalletConnectProvider, // required
                options: {
                    rpc: {
                        56: 'https://bsc-dataseed.binance.org/'
                    },
                    network: 'binance',
                    chainId: 56,
                    infuraId: "b830c8484bf841d795848610ff791d5b", // required
                    address: process.env.contractAddress,
                    qrcodeModalOptions: {
                        mobileLinks: [
                            'rainbow',
                            'metamask',
                            'argent',
                            'trust',
                            'imtoken',
                            'pillar'
                        ]
                    }
                }
            }
        }
    };

    let dappParams = { bridgeParams: bridgeParams }
    let walletBridge1 = WalletBridge(dappParams);

    let currentUseState = walletBridge1.getUseStates();

    walletBridge1.get

    const SliderStyle = {
        //width: "100%",
        float: "left",
        padding: "1px",
        //padding: "0rem 2rem 0rem 0rem"    
    }

    const walletStyle = {
        width: "100%",
        float: "left",
        //padding: "0rem 2rem 0rem 2rem"    
    }

    const dappBody = {
        padding: "0rem 1rem 0rem 1rem"
    }

    function onChangeSlider(props) {
        var val = $(this).val();
        $(this).siblings('.testInput').val(val);
    }

    function Question(props) {
        const thisQuestion = 'Should xMooney join forces with former Safemoon CTO Thomas "Papa" Smith?';
        return thisQuestion;
    }

    function doCORSRequest(url) {
        if (process.env.debug == true) {
            return 'http://localhost.com:8080/' + url
        }

        return url;
    }

    function loadup(returnedhash) {

        lastUp.evmHash = returnedhash;
        if (returnedhash) {
            fetch(doCORSRequest('https://us-east1-just-shape-317505.cloudfunctions.net/postcontent'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(lastUp)
            })
        }
    }

    async function SendVote(props) {

        lastUp = ({
            vote: props.vote,
            amount: currentUseState.xmPower.theBalance,
            trueAmount: currentUseState.xmPower.trueBalance,
            address: currentUseState.xmPower.connectedWalletAddress,
            timestamp: +new Date()
        });

        const returnedhash = await walletBridge1.signMessage({
            message: JSON.stringify(lastUp)
        }, loadup)

        //let retu = await loadup(returnedhash)
        if (process.env.debug) {
            console.log(returnedhash)
        }
    }

    return (
        <>
            <walletBridge1.ShowWalletConnect isConnected={currentUseState.isConnected} />
            {(currentUseState.isConnected && currentUseState.isWaiting == true) &&
                <div>
                    <Image src="https://static.wixstatic.com/media/0d6414_a2b5156ac336444e8dc78d9efb799904~mv2.gif" width="200px" height="200px" />
                </div>
            }
            <div id="userWalletAddress" style={dappBody}>
                <p>
                    Wallet address: <strong>{currentUseState.xmPower.filteredAddress}</strong>
                    <br />
                    xm Power : <strong>{currentUseState.xmPower.theBalance}</strong>
                </p>
            </div>

            {(currentUseState.isConnected && currentUseState.isWaiting == false) &&
                <div style={dappBody}>
                    <h2><Question></Question></h2>
                    <h2>Duties</h2>
                    <ul>
                        <li>Brand Ambassador</li>
                        <li>Strategic Advisor</li>
                        <li>Non Development Capacity</li>
                    </ul>
                </div>
            }
            {(currentUseState.isConnected && currentUseState.isWaiting == true) &&
                <div style={dappBody}></div>
            }

            <div>
                {(currentUseState.isConnected && currentUseState.isWaiting == false) &&
                    <div style={SliderStyle}>
                        <Button variant="outlined" size="Large" onClick={() => SendVote({ vote: "Yes" })}>Yes</Button>
                    </div>}
                {(currentUseState.isConnected && currentUseState.isWaiting == false) &&
                    <div style={SliderStyle}>
                        <Button variant="outlined" size="Large" onClick={() => SendVote({ vote: "No" })}>No</Button>
                    </div>}
                {(currentUseState.isConnected && currentUseState.isWaiting == false) &&
                    <div style={SliderStyle}>
                        <Button variant="outlined" size="Large" onClick={() => SendVote({ vote: "Present" })}>Present not Voting</Button>
                    </div>}
            </div>
            {currentUseState.isConnected &&
                <div style={dappBody}>
                    <p>You may only vote once. You will be prompted to verify by your wallet provider.</p>
                </div>}
        </>
    )
}