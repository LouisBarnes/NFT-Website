import React from 'react';
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react';
import Facebook from "./assets/social-media-icons/fb-icon.png";
import Twitter from "./assets/social-media-icons/tw-icon.png";
import Linkedin from "./assets/social-media-icons/li-icon.png";

const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount(){
        if(window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return(
        <Flex justify="space-between" align="center" padding="30px">
            {/* Left Side - Social Media Icons */}
            <Flex justify="space-around" width="40%" padding="0 75px">
                <Link href="https://facebook.com/">
                    <Image src={Facebook} boxSize="42px" margin="0 15px"/>
                </Link> 
                <Link href="https://twitter.com/">
                    <Image src={Twitter} boxSize="42px" margin="0 15px"/>
                </Link> 
                <Link href="https://www.linkedin.com/in/louis-barnes/">
                    <Image src={Linkedin} boxSize="42px" margin="0 15px"/>
                </Link> 
            </Flex>


            <Flex justify="space-around" align="center" width="40%" padding="30px">
            <Box margin="0 15px">About</Box>
            <Spacer />
            <Box margin="0 15px">Mint</Box>
            <Spacer />
            <Box margin="0 15px">Team</Box>
            <Spacer />
            </Flex>
            {/* Connect */}
            {isConnected ?  (
                <Box margin="0 15px">Connected</Box>
            ) : (
                <Button
                backgroundColor="#9d7dff" 
                borderRadius="5px"
                fontFamily="inherit"
                color="white"
                padding="15px"
                margin="0 15px"
                cursor="pointer"
                onClick={connectAccount}>Connect</Button>
            )}

        </Flex>
    );
};
export default NavBar;