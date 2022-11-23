import { useState } from "react";
import Head from "next/head";
import { useWallet } from "@cosmos-kit/react";
import { StdFee } from "@cosmjs/amino";
import { SigningStargateClient } from "@cosmjs/stargate";
import BigNumber from "bignumber.js";
import { Card, CardFooter, CardHeader } from '@chakra-ui/card'
import {
  Box,
  Divider,
  Grid,
  Heading,
  Text,
  Stack,
  Container,
  Link,
  Button,
  useColorMode,
  Center,
  Image,
  SimpleGrid,
  VisuallyHidden
} from "@chakra-ui/react";
import { BsTwitter } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import {
  chainassets,
  chainName,
  coin,
//  dependencies,
  products,
  delegateChains
} from "../config";

//import { WalletStatus } from "@cosmos-kit/core";
import {
  Product,
//  Dependency,
//  WalletSection,
  Delegate,
  handleChangeColorModeValue,
} from "../components";
//import { SendTokensCard } from "../components/react/send-tokens-card";

import { cosmos } from 'osmojs';

const sendTokens = (
  getSigningStargateClient: () => Promise<SigningStargateClient>,
  setResp: (resp: string) => any,
  address: string
) => {
  return async () => {
    const stargateClient = await getSigningStargateClient();
    if (!stargateClient || !address) {
      console.error("stargateClient undefined or address undefined.");
      return;
    }

    const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

    const msg = send({
      amount: [
        {
          denom: coin.base,
          amount: "1000",
        },
      ],
      toAddress: address,
      fromAddress: address,
    });

    const fee: StdFee = {
      amount: [
        {
          denom: coin.base,
          amount: "2000",
        },
      ],
      gas: "86364",
    };
    const response = await stargateClient.signAndBroadcast(address, [msg], fee);
    setResp(JSON.stringify(response, null, 2));
  };
};

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  const { getSigningStargateClient, address, walletStatus, getRpcEndpoint } =
    useWallet();

  const [balance, setBalance] = useState(new BigNumber(0));
  const [isFetchingBalance, setFetchingBalance] = useState(false);
  const [resp, setResp] = useState("");
  const getBalance = async () => {
    if (!address) {
      setBalance(new BigNumber(0));
      setFetchingBalance(false);
      return;
    }

    let rpcEndpoint = await getRpcEndpoint();

    if (!rpcEndpoint) {
      console.log("no rpc endpoint — using a fallback");
      rpcEndpoint = `https://rpc.cosmos.directory/${chainName}`;
    }

    // get RPC client
    const client = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint,
    });

    // fetch balance
    //const balance = await client.cosmos.bank.v1beta1.balance({
    //  address,
    //  denom: chainassets?.assets[0].base as string,
    //});

    // Get the display exponent
    // we can get the exponent from chain registry asset denom_units
    const exp = coin.denom_units.find((unit) => unit.denom === coin.display)
      ?.exponent as number;

    // show balance in display values by exponentiating it
    //const a = new BigNumber(balance.balance.amount);
    //const amount = a.multipliedBy(10 ** -exp);
    //setBalance(amount);
    setFetchingBalance(false);
  };

  return (
    <Container maxW={'6xl'}>
      <Head>
        <title>Zenith Station</title>
        <meta name="description" content="Homepage of Zenith Station, a validator on Osmosis, Evmos, and BitSong." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SimpleGrid justifyContent="center" row={2} spacing={0}>
        <Image src='./ZenithMos.png' alt='Zenith Logo' w={600}></Image>
      <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="extrabold"
          textAlign={"center"}
          mb={3}
        ><VisuallyHidden>Zenith</VisuallyHidden>
          Station
        </Heading></SimpleGrid>
<Stack direction='row-reverse' spacing={2} padding={2}>
  <Link href='https://twitter.com/Zenith_Station' target="_blank" _hover={{ textDecoration: 'none' }}><Button leftIcon={<BsTwitter />} colorScheme='twitter' variant='ghost'>
    Twitter
  </Button></Link>
  <Link href='https://discord.com/invite/6w5sCEm9kn' target="_blank" _hover={{ textDecoration: 'none' }}><Button leftIcon={<SiDiscord />} colorScheme='purple' variant='solid'>
    Join our Discord!
  </Button></Link>
</Stack>
      <Box mb={3}>
        <Divider />
      </Box>

        <Grid
        templateColumns={{
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={8}
        mb={14}
      >
        {delegateChains.map((delegate) => (
          <Delegate key={delegate.chain} {...delegate} />
        ))}
      </Grid>

      <Box mb={3}>
        <Divider />
      </Box>
      <Heading fontFamily={'Work Sans'} mb={4}>Special Thanks to:</Heading>
      <Grid
        templateColumns={{
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={2}
        mb={5}
      >
        {products.map((product) => (
          <Product key={product.title} {...product} />
        ))}
      </Grid>

      <Box mb={3}>
        <Divider />
      </Box>
      <Stack
        isInline={true}
        spacing={1}
        justifyContent="center"
        opacity={0.5}
        fontSize="sm"
      >
        <Text>2022 © Zenith Station | </Text>
        <Text>Built with</Text>
        <Link
          href="https://cosmology.tech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cosmology.
        </Link>
      </Stack>
    </Container>
  );
}
