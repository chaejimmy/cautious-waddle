import { Box } from '@chakra-ui/layout';
import Link  from 'next/link'

const Footer = () => (
  <Box textAlign='center' p='5' color='gray.600' borderTop='1px' borderColor='gray.100'>
    © 2021 cheffy. Developed by Hammad - <Link href='https://hammad.pro' passHref>www.hammad.pro</Link>
  </Box>
);

export default Footer;