import Head from 'next/head'
import GlobalStyles from '../src/styles/GlobalStyles'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <GlobalStyles/>
            <Component {...pageProps} />
        </>  
    )
  }