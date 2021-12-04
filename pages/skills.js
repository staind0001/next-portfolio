import { Container, Heading, SimpleGrid, Divider,Box ,Image} from '@chakra-ui/react'
//import Image from 'next/image'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { skillsData } from '../lib/skillsData'








const Skills = () => {
    return(
    
    <Layout title="Works">
        <Container>
          <Heading as="h3" fontSize={20} mb={4}>
            Skills
          </Heading>
  
          <SimpleGrid columns={[3, 3, 4]} gap={3}>
            
          {
              skillsData.map((s,index )=>(
                  <Skill key={index} alt={s.alt} src={s.src} delay={1}/>
              ))
          }

   
          </SimpleGrid>
    
        </Container>
      </Layout>
      
    )
}
  

  
  export default Skills



  export const SkillsGridItem = ({ alt, src }) => (
    <Box w="60%" textAlign="center">
     
          <Image
            src={src}
            alt={alt}
            className=".grid-item-thumbnail-skill"
           
          />
    </Box>
  )


  export const SkillGridItemStyle = () => (
    <Global
      styles={`
        .grid-item-thumbnail-skill {
          border-radius: 12px;
        }
      `}
    />
  )


  function Skill({src,alt,delay}){
      return(    
     
        <Section delay={delay}>
          <SkillsGridItem  alt={alt} src={src}>
          
          </SkillsGridItem>
        </Section>
      )
  }