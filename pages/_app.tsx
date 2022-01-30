import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { themes } from "styles/theme";
import { GlobalStyle } from "styles/GlobalStyle";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "store";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ReduxProvider store={store}>
			<ThemeProvider theme={themes.light}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</ReduxProvider>
	);
}
export default MyApp;
