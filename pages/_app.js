import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { AmazonProvider } from "../context/AmazonContext";
import { ModalProvider } from "react-simple-hook-modal";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<MoralisProvider
			serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER}
			appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
		>
			<AmazonProvider>
				<ModalProvider>
					<Head>
						<title>Damazon</title>
					</Head>
					<Component {...pageProps} />
				</ModalProvider>
			</AmazonProvider>
		</MoralisProvider>
	);
}

export default MyApp;
