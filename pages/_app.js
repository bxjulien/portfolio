import LocaleContextProvider from 'contexts/LocaleContext'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <LocaleContextProvider>
      <Component {...pageProps} />
    </LocaleContextProvider>
  )
}

export default MyApp
