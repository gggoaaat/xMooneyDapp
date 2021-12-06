import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletBridge from '../walletBridge';
import Button from '@mui/material/Button';


export default function VoterInit() {

    const bridgeParams = {
        tokenAddress: "0x98631c69602083d04f83934576a53e2a133d482f",
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
                    address: "0x98631c69602083d04f83934576a53e2a133d482f",
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
        //width: "70px",
        float: "left",
        padding: "1px"
    }

    function onChangeSlider(props) {
        var val = $(this).val();
        $(this).siblings('.testInput').val(val);
    }

    return (
        <>
            <walletBridge1.ShowWalletConnect isConnected={currentUseState.isConnected} />

            <div id="userWalletAddress">
                <p>
                    Wallet address: {currentUseState.xmPower.connectedWalletAddress}
                    <br />
                    xm Power : {currentUseState.xmPower.theBalance}
                </p>
            </div>
            <div>
                <h2>Should xMooney bring in former Safemoon CTO Thomas "Papa" Smith?</h2>
                <h2>Duties</h2>
                <ul>
                    <li>Brand Ambassador</li>
                    <li>Non Development Capacity</li>
                    <li>Strategic Advisor</li>
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
            {/* <walletBridge1.ShowSignature isConnected={currentUseState.isConnected} /> */}
        </>
    )
}