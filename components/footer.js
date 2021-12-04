import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" mt={50}>
      &copy; {new Date().getFullYear()} Enrique Soto.
    </Box>
  )
}

export default Footer

