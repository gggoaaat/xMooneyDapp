import { MoralisProvider } from "react-moralis";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  // <MoralisProvider
  //   appId={process.env.NEXT_PUBLIC_APP_ID}
  //   serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
  // >
    return <Component {...pageProps} />
  // </MoralisProvider>
}

export default MyApp
