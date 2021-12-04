import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbnail_massageneve from '../public/images/thumbnail_massageneve.png'
import thumbnail_ecommerce from '../public/images/thumbnail_ecommerce.png'
import thumbnailAskMe from '../public/images/thumbnailAskMe.png'
import thubnailJournalApp from '../public/images/thubnailJournalApp.png'
import thumbnailCalendarApp from '../public/images/thumbnailCalendarApp.png'
import thumbnailRNCalculator from '../public/images/thumbnailRNCalculator.png'
import thumbnailFilmefy from '../public/images/thumbnailFilmefy.png'
import thumbnailMetahumanDemo from '../public/images/thumbnailMetahumanDemo.jpg'
import thumbnailGames from '../public/images/thumbnailGames.jpg'
import thumbnailVRDemo from '../public/images/thumbnailVRDemo.jpg'
import thumbnailVRShooterProject from '../public/images/thumbnailVRShooterProject.jpg'



const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem 
            id="massageneve" 
            title="massageneve.ch" 
            thumbnail={thumbnail_massageneve} 
            url='https://massageneve.ch/'
          >
          project carried out for a massage business, created with NEXT JS, authentication with firebase, reservation system, online shop connected to shopify, contact form, Redux, ChakraUI, tailwind
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="e-commerce-demo"
            title="e-commerce-demo"
            thumbnail={thumbnail_ecommerce}
            url='https://demo-std-e-commerce.netlify.app/'
          >
            e-commerce project made with React  
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem
            id="AskMe"
            title="AskMe"
            thumbnail={thumbnailAskMe}
            url='https://asking.netlify.app/'
          >
            Just simple project made with VUE JS
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem 
            id="filmefy" 
            thumbnail={thumbnailFilmefy} 
            title="filmefy"
            url='https://play.google.com/store/apps/details?id=com.filmefy'  
          >
           App made  React Native  and deployed in Play Store
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="RNCalculator"
            thumbnail={thumbnailRNCalculator}
            title="RNCalculator"
            url='https://play.google.com/store/apps/details?id=com.enriquesoto.rncalculator'
          >
            Simple Calculator made with React Native and deployed in Play Store
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem
            id="CalendarApp"
            thumbnail={thumbnailCalendarApp}
            title="CalendarApp"
            url='https://mern-calendar-stdev.herokuapp.com'
          >
            App made with React state management Redux
          </WorkGridItem>
        </Section>

        <Section delay={0.6}>
          <WorkGridItem
            id="JournalApp"
            thumbnail={thubnailJournalApp}
            title="JournalApp"
            url='https://journal-app-stdev.netlify.app'
          >
            App made with React 
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Unreal Engine
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>

      <Section delay={0.7}>
          <WorkGridItem
            id="Emotions"
            thumbnail={thumbnailMetahumanDemo}
            title="Emotions"
            url='https://youtu.be/2YQcy8rOBU8'
          >
           Short film made Unreal Engine 
          </WorkGridItem>
        </Section>

        <Section delay={0.8}>
          <WorkGridItem
            id="games"
            thumbnail={thumbnailGames}
            title="Showcase of some Games"
            url='https://youtu.be/1zVRQph5bfg'
          >
           Showcase of some games i was made with Unreal Engine 
          </WorkGridItem>
        </Section>

        <Section delay={0.9}>
          <WorkGridItem
            id="interactions"
            thumbnail={thumbnailVRDemo}
            title="Interactions"
            url='https://youtu.be/1zVRQph5bfg'
          >
           VR interactive project made with Unreal Engine 
          </WorkGridItem>
        </Section>

        <Section delay={1}>
          <WorkGridItem
            id="VRShoter"
            thumbnail={thumbnailVRShooterProject}
            title="VR Shoter Project"
            url='https://youtu.be/6giD5og4PxE'
          >
           VR Shoter made with Unreal Engine  
          </WorkGridItem>
        </Section>

        </SimpleGrid>

    </Container>
  </Layout>
)

export default Works

