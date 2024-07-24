import { Box, VStack } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { Input,Button,Flex,Text } from "@chakra-ui/react"
import { useState } from "react"

const AuthForm = () => {
    const [isLogged, setIsLogged] = useState(true)
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleAuth = () => {
        console.log("inputs", inputs);
    }


    return (
    <>
        <Box border={"1px solid gray"} borderRadius={4} padding={5}>
            <VStack>
                <Image src="/logo.png" h={24} cursor={"pointer"} alt="logo de insta"/>
                <Input placeholder="Teléfono, usuario o correo electrónico" fontSize={14} type="email"
                 value={inputs.email} onChange={(e) => setInputs({
                    ...inputs, email:e.target.value})}/>
                <Input placeholder="Contraseña" fontSize={14} type="password"
                value={inputs.password}
                onChange={(e) => setInputs({...inputs, password:e.target.value})}/>

                {!isLogged ?
                    <Input placeholder="Confirmar contraseña" value={inputs.confirmPassword} 
                    fontSize={14} type="password" onChange={(e) => setInputs({...inputs, confirmPassword:e.target.value})}
                    /> : null}
                <Button width={"full"} colorScheme="blue" size={"sm"} fontSize={14} onClick={handleAuth}>
                    {isLogged? "Login" : "Sign up"}
                </Button>
                <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                    <Box flex={2} h={"1px"} bg={"gray.400"} />
                    <Text mx={1} color={"white"}> OR</Text>
                    <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
                </Flex>
                <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
                    <Image src="/google.png" w={5} alt="google logo"/>
                    <Text mx={2} color={"blue.500"} >Log in with google</Text>
                </Flex>
            </VStack>
        </Box>
        <Box border={"1px solid gray"} borderRadius={4} padding={5}>
            <Flex alignItems={"center"} alignContent={"center"}>
                <Box mx={2} fontSize={14}>
                    {isLogged ? "No tienes una  cuenta" : "ya tienes una cuenta"}
                </Box>
                <Box onClick={() => setIsLogged(!isLogged)} color={"blue.500"} cursor={"pointer"}>
                    {isLogged ? "Sign up" : "Log in"}
                </Box>
            </Flex>

        </Box>
    </>
    )
}
export default AuthForm