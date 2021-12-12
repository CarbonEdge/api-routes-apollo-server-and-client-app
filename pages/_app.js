import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo/client'
import Navbar from '../components/ui/Navbar/Navbar'
import './styles.css'

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
