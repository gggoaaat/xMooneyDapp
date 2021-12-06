import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletBridge from '../walletBridge';
import Button from '@mui/material/Button';
import { style } from "@mui/system";


export default function VoterInit() {

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
        padding: "0rem 0rem 0rem 1rem"        
    }

    function onChangeSlider(props) {
        var val = $(this).val();
        $(this).siblings('.testInput').val(val);
    }

    function Question (props)
    {
        const thisQuestion = 'Should xMooney join forces with former Safemoon CTO Thomas "Papa" Smith?';
        return thisQuestion;
    }

    return (
        <>
            <walletBridge1.ShowWalletConnect isConnected={currentUseState.isConnected} />
            <div id="userWalletAddress" style={dappBody}>
                <p >
                    Wallet address: <strong>{currentUseState.xmPower.connectedWalletAddress}</strong>
                    <br />
                    xm Power : <strong>{currentUseState.xmPower.theBalance}</strong>
                </p>
            </div>
            <div style={dappBody}>
                <h2><Question></Question></h2>
                <h2>Duties</h2>
                <ul>
                    <li>Brand Ambassador</li>                    
                    <li>Strategic Advisor</li>
                    <li>Non Development Capacity</li>
                </ul>
            </div>

            <div>
                {currentUseState.isConnected &&
                    <div style={SliderStyle}>
                        <Button variant="outlined" size="Large" onClick={() => walletBridge1.signMessage({
                            message: JSON.stringify({
                                vote: "Yes",
                                amount: currentUseState.xmPower.theBalance
                            })
                        })}>Yes</Button></div>}
                {currentUseState.isConnected &&
                    <div style={SliderStyle}>
                        <Button variant="outlined" size="Large" onClick={() => walletBridge1.signMessage({
                            message: JSON.stringify({
                                vote: "No",
                                amount: currentUseState.xmPower.theBalance
                            })
                        })}>No</Button></div>}
                {currentUseState.isConnected &&
                    <div style={SliderStyle}>
                        <Button variant="outlined" size="Large" onClick={() => walletBridge1.signMessage({
                            message: JSON.stringify({
                                vote: "Present",
                                amount: currentUseState.xmPower.theBalance
                            })
                        })}>Present not Voting</Button></div>}
            </div>          
            {currentUseState.isConnected &&
            <div>
             <p>You may only vote once. You will be prompted to verify by your wallet provider.</p>
            </div> }
        </>
    )
}