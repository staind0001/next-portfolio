import NextLink from 'next/link'
import {Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Link,
    Button,
    List,
    ListItem,
    Icon
} from '@chakra-ui/react'
import {
    IoLogoLinkedin,
    IoLogoInstagram,
    IoLogoYoutube,
    IoLogoGithub,
    IoLogoFacebook
  } from 'react-icons/io5'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { BioSection,BioYear } from '../components/bio'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { toast } from 'react-toastify'
import { useEffect } from 'react'


const Page = () => {


  useEffect(() => {

    toast.info('✌Hi,Hello Welcome to my website I hope you like it and if I can help you with something or would like to do some collaboration you can send me a message in the contact section and I will be happy to get in touch with you!', {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
   
  }, [])


    return(
    <Layout>
        <Container>
            <Box 
                borderRadius='lg' 
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
                p={3} mb={6} 
                align="center"
            >
                Hello, I'm a developer based in Geneva
            </Box>
            
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as='h2' variant='page-title'>
                        Enrique Soto
                    </Heading>

                <p> STDev (Developer / Gamer Developer)</p>
                </Box>
                <Box 
                   flexShrink={0}
                   mt={{ base: 6, md: 0 }}
                   ml={{ md: 6 }}
                   textAlign="center"
                >
                  <Image
                    borderColor="whiteAlpha.800"
                    borderWidth={2}
                    borderStyle="solid"
                    maxWidth="150px"
                    display="inline-block"
                    borderRadius="full"
                    src="/images/enriquePhoto.jpg"
                    alt="Profile image"
                />  
                </Box>
            </Box>

            <Section delay={0.5}>
                <Heading as='h3' variant='section-title'>
                    Work
                </Heading>
                <Paragraph>
                Currently I really enjoy creating websites more focused on e-commerce to offer future entrepreneurs tools to promote their products on the internet, I also really enjoy programming games with Unreal Engine, when I'm not online, I like to play music 
                {/* <NextLink href='/works/inkdrop'><Link>Inkdrop</Link></NextLink> */}
                </Paragraph>
            <Box align='center' my={4}>
            <NextLink href='/works'>
                <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'> My Portfolio </Button>
            </NextLink>
            </Box>
            </Section>

            <Section delay={0.7}>
                <Heading as='h3' variant='section-title'>Bio</Heading>
                <BioSection>
                    <BioYear>1984</BioYear>
                    Born in Mexico City
                </BioSection>
                <BioSection>
                    <BioYear>2015</BioYear>
                    Master - HEM conservatoire supérieur de Genève   
                </BioSection>
                <BioSection>
                    <BioYear>2021 to present</BioYear>
                        Works as freelance
                </BioSection>
            </Section>

            <Section delay={0.9}>
                <Heading as='h3' variant='section-title'> I ❤ </Heading>
                <Paragraph>
                    Music,Drawing,Films,Games
                </Paragraph> 
            </Section>

            <Section delay={1.2}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>

        <List>
          <ListItem>
            <Link href="https://github.com/staind0001" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @enriquestoDEV
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/enriquesotodev/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @enriquesoto
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.youtube.com/channel/UCztF_HudN9hgYv6EfuVlEeQ/featured" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoYoutube} />}
              >
                @enriquesotoDEV
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/enriquesotodev/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @enriquesoto
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.facebook.com/enriquesotoDEV/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoFacebook} />}
              >
                @enriquesotoDEV
              </Button>
            </Link>
          </ListItem>
        </List>
       
       
       
        </Section>

        </Container>
    </Layout>
    )

}


export default Page
