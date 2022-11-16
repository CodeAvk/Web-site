import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/Home.module.css'
import {StateContext} from '../context/StateContext'
import {Toaster} from 'react-hot-toast'
function MyApp({ Component, pageProps }) {
  return (
   <StateContext>
  <Layout>
    <Toaster/>
    <Component {...pageProps} />
  </Layout>
   </StateContext>)

}

export default MyApp
