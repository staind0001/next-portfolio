import Head from 'next/head'
import dynamic from 'next/dynamic'
import {Box,Container} from '@chakra-ui/react'
import NavBar from '../navbar.js'
//import STDev from '../stdev.js'
import Loader from '../std-loader'
import Footer from '../footer.js'

const LazySTDev = dynamic(() => import('../stdev'), {
    ssr: false,
    loading: () => <Loader />
  })


const Main = ({children,router}) => {
    return(
        <Box>
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta name="description" content="Enrique Soto homepage" />
        <meta name="author" content="Enrique Soto" />
        <meta name="author" content="Enrique Soto" />
        <link rel="apple-touch-icon" href="/apple-icon-180x180.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@enriquesoto" />
        <meta name="twitter:creator" content="@enriquesoto" />
        <meta name="twitter:image" content="/linkedin_profile_image.png" />
        <meta property="og:site_name" content="Enrique Soto Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/linkedin_profile_image.png" />
                <title>Enrique Soto - Homepage</title>
            </Head>
            <NavBar path={router.asPath}/>
            <Container maxW='container.md' pt={250}>
                <LazySTDev />
                {children}
            <Footer />
            </Container>
        </Box>
    )
}

export default Main


