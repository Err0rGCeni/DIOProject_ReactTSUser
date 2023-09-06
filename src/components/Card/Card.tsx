import { Box } from "@chakra-ui/react";


const Card = ({ children }: any) => {
  return (
    <Box backgroundColor={"#FFFFFF"} borderRadius={"25px"} padding={"15px"}>
      {
        children
      }
    </Box>
  )
}

export default Card
