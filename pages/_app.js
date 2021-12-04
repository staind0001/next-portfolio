import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "../components/fonts";
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Website = ({Component,pageProps,router}) => {
    return(
        <ChakraProvider theme={theme}>
            <Fonts/>
            <Layout router={router}>
            <AnimatePresence exitBeforeEnter initial={true}>
                <Component {...pageProps} key={router.route}/>
                <ToastContainer
                position="top-right"
                autoClose={8000}
                hideProgressBar={false}
                newestOnTop={false}
                draggable={false}
                pauseOnVisibilityChange
                closeOnClick
                pauseOnHover
                />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website