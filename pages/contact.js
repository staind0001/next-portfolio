
import { Container,
Heading, 
FormControl,
FormLabel,
Input,
Button,
Textarea
} from '@chakra-ui/react'
import emailjs from "emailjs-com";
import Layout from '../components/layouts/article'
import { toast } from 'react-toastify';





const Contact = () => {

    const emailServive = process.env.NEXT_PUBLIC_EMAILJS_SERVICEID

    const emailTemplate= process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID

    const emailUser = process.env.NEXT_PUBLIC_EMAILJS_USERID

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm(emailServive,emailTemplate, e.target,emailUser)
        .then((result) => {
        
            toast.success('🚀 Your message has been sent successfully !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                
                });
        }, (error) => {
         
            toast.error('😱 something has gone wrong please try again !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
               
                });
        });
        e.target.reset()
    }



    return(
    
    <Layout title="Contact">
        <Container>
          <Heading as="h3" fontSize={20} mb={4}>
            Contact
          </Heading>
          </Container>

          <Container>
          <form onSubmit={sendEmail}>
          <FormControl id='name' isRequired>
            <FormLabel>name</FormLabel>
            <Input placeholder='name' name="name" />
        </FormControl>

        <FormControl id='email' isRequired>
            <FormLabel>email</FormLabel>
            <Input type='email' placeholder='email' name="email" />
        </FormControl>

        <FormControl id='subject' isRequired>
            <FormLabel>Subjet</FormLabel>
            <Input placeholder='subject' name="subject" />
        </FormControl>

        <FormControl id='message' isRequired>
            <FormLabel>message</FormLabel>
            <Textarea placeholder='message' name="message" />
        </FormControl>

            <Button variant="outline" colorScheme='teal' width="full" mt={4} type="submit">
              Send
            </Button>
         </form>
            
        </Container>
    
      
    </Layout>
      
    )
}
  

  
  export default Contact