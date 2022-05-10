import {useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import superNovaNFT from './SuperNovaNFT.json';

const superNovaNFTAddress = "0xfF1fa750e94B1bf4117a41773561b8bCfC7B7136";

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                superNovaNFTAddress,
                superNovaNFT.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
                });
                console.log('response: ', response);
            } catch (err) {
                console.log("error ", err)
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    };

    return (
        <Flex justify="center" align="center" height="100vh" paddingBottom="150px"> 
            <Box width="520px">
                <div>
                <Text fontSize="48px" textShadow="0 5px #000000">SuperNova NFTs</Text>
                <Text>NFTs that are out of this world! </Text>
                </div>

            {isConnected? (
                <div>
                    <Flex align="center" justify="center">
                    <Button
                    backgroundColor="#9d7dff" 
                    borderRadius="10px"
                    fontFamily="inherit"
                    color="white"
                    padding="15px"
                    margin="0 15px"
                    cursor="pointer"
                    onClick={handleDecrement}>
                        -
                    </Button>
                    <Input
                    readOnly
                    fontFamily="inherit"
                    width="100px"
                    height="40px"
                    type="number" 
                    textAlign="center"
                    value={mintAmount}
                    />
                    <Button
                    backgroundColor="#9d7dff" 
                    borderRadius="10px"
                    fontFamily="inherit"
                    color="white"
                    padding="15px"
                    margin="0 15px"
                    cursor="pointer"
                    onClick={handleIncrement}>
                        +
                    </Button>

                    </Flex>
                    <Button 
                    backgroundColor="#9d7dff" 
                    borderRadius="10px"
                    fontFamily="inherit"
                    color="white"
                    padding="15px"
                    margin="0 15px"
                    cursor="pointer"
                    onClick={handleMint}>
                        Mint Now
                    </Button>
                </div>
            ) : (
                <Text>You must be connected to Mint.</Text>
            )}
            </Box>
        </Flex>
    );
};
export default MainMint;