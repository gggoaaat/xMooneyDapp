import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletBridge from '../walletBridge'
import Miners from "./miners";

export default function MinerPayout() {
    
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

    let dappParams = { bridgeParams : bridgeParams}
    let walletBridge1 = WalletBridge(dappParams);

    let currentUseState = walletBridge1.getUseStates();
    let getMiners = Miners(walletBridge1);
    let displayData = true ? getMiners.getMinerPayout() : "Loading!" //(<ul>{resultData}</ul>)

    return (
        <>
            <p>Get Your Balance</p>
            <walletBridge1.ShowWalletConnect isConnected={currentUseState.isConnected} />
            <walletBridge1.ShowSignature isConnected={currentUseState.isConnected} />

            <div id="userWalletAddress">
                <p>
                    Wallet address: {currentUseState.xmPower.connectedWalletAddress}
                    <br />
                    xm Power : {currentUseState.xmPower.theBalance}
                </p>
            </div>
            {displayData}
        </>
    )
}