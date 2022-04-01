import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletBridge from '../walletBridge'
import giveaways from "./giveaways";

export default function Index() {
    
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
                    infuraId: process.env.infuraID, // required
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

    let dappParams = { bridgeParams : bridgeParams}
    let walletBridge1 = WalletBridge(dappParams);

    let currentUseState = walletBridge1.getUseStates();
    let GetMiners = giveaways(walletBridge1);
    let displayData = true ? GetMiners.GetMinerPayout() : "Loading!" //(<ul>{resultData}</ul>)

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