import { DataContextProvider } from '@/components/datacontext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <DataContextProvider>
      <Component {...pageProps} />
    </DataContextProvider>)
}
