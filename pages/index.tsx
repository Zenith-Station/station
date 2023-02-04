import { useState } from 'react';
import Head from 'next/head';
import { useChain } from '@cosmos-kit/react';
import { StdFee } from '@cosmjs/amino';
import { SigningStargateClient } from '@cosmjs/stargate';
import BigNumber from 'bignumber.js';

import {
  Tabs, TabList, TabPanels, Tab, TabPanel,
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
  Image,
  SimpleGrid,
  VisuallyHidden
} from "@chakra-ui/react";
import {
  chainassets,
  chainName,
  coin,
//  dependencies,
  products,
  delegateChains,
  delegateDisabledChains,
  owners
} from "../config";

//import { WalletStatus } from "@cosmos-kit/core";
import {
  Product,
//  Dependency,
//  WalletSection,
  Delegate,
  DelegateDisabled,
  Owner,
  handleChangeColorModeValue,
} from "../components";
//import { SendTokensCard } from "../components/react/send-tokens-card";

import { cosmos } from 'osmojs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SiTwitter, SiDiscord } from 'react-icons/si';

const sendTokens = (
  getSigningStargateClient: () => Promise<SigningStargateClient>,
  setResp: (resp: string) => any,
  address: string
) => {
  return async () => {
    const stargateClient = await getSigningStargateClient();
    if (!stargateClient || !address) {
      console.error('stargateClient undefined or address undefined.');
      return;
    }

    const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

    const msg = send({
      amount: [
        {
          denom: coin.base,
          amount: '1000',
        },
      ],
      toAddress: address,
      fromAddress: address,
    });

    const fee: StdFee = {
      amount: [
        {
          denom: coin.base,
          amount: '2000',
        },
      ],
      gas: '86364',
    };
    const response = await stargateClient.signAndBroadcast(address, [msg], fee);
    setResp(JSON.stringify(response, null, 2));
  };
};

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  const { getSigningStargateClient, address, status, getRpcEndpoint } =
    useChain(chainName);

  const [balance, setBalance] = useState(new BigNumber(0));
  const [isFetchingBalance, setFetchingBalance] = useState(false);
  const [resp, setResp] = useState('');
  const getBalance = async () => {
    if (!address) {
      setBalance(new BigNumber(0));
      setFetchingBalance(false);
      return;
    }

    let rpcEndpoint = await getRpcEndpoint();

    if (!rpcEndpoint) {
      console.log('no rpc endpoint — using a fallback');
      rpcEndpoint = `https://rpc.cosmos.directory/${chainName}`;
    }

    // get RPC client
    const client = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint,
    });

    /// fetch balance
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
        <Image src='./images/ZenithMos.png' alt='Zenith Logo' w={600}></Image>
      <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "5xl" }}
          textAlign={"center"}
          mb={3}
        ><VisuallyHidden>Zenith</VisuallyHidden>
          Station
        </Heading></SimpleGrid>
<Stack direction='row-reverse' spacing={2} padding={2}>
  <Link href='https://twitter.com/Zenith_Station' target="_blank" _hover={{ textDecoration: 'none' }}><Button leftIcon={<SiTwitter />} colorScheme='twitter' variant='ghost'>
    Twitter
  </Button></Link>
  <Link href='https://discord.com/invite/6w5sCEm9kn' target="_blank" _hover={{ textDecoration: 'none' }}><Button leftIcon={<SiDiscord />} colorScheme='purple' variant='solid'>
    Join our Discord!
  </Button></Link>
</Stack>
<Tabs isFitted variant='enclosed'>
        <TabList fontFamily={"Sono"} mb='0.5rem'>
    <Tab>Delegate</Tab>
    <Tab>About Us</Tab>
    <Tab isDisabled>Services</Tab>
  </TabList>
  <TabPanels>
          <TabPanel>
            <Heading as="h2" mb={2}>
              Chains We Validate
            </Heading>
              <Grid
        templateColumns={{
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={5}
        mb={5}
      >
        {delegateChains.map((delegate) => (
          <Delegate key={delegate.chain} {...delegate} />
        ))}
        {delegateDisabledChains.map((delegate) => (
          <DelegateDisabled key={delegate.chain} {...delegate} />
        ))}
      </Grid>
    </TabPanel>
          <TabPanel>
            <Heading as="h1" mb={2}>
              About Zenith
            </Heading>
            <Text mb={5} fontSize={"lg"}>Zenith Station started small, with a mission to build diverse relationships within the Cosmos Ecosystem. As a result, we haven&#39;t always been influential, and we&#39;d like to take you back to the beginning. Enter: Bitsong - our first foray into validation. This chain gave us a realistic place to gauge interest and learn our skills comfortably while operating inside a production environment.</Text>
              <Text mb={5} fontSize={"lg"}>Over time, we formed strategic partnerships and quickly expanded our services to include Evmos. With the acquisition of bare metal hardware and additional economic security, Zenith Station was able to enter the Osmosis active set while also adding Stride to our portfolio. At this moment, we decided to change our name - from OzMage Validation to Zenith Station - reflecting our desire to align with the space-themed passion of the Cosmos Ecosystem. </Text>
              <Text mb={5} fontSize={"lg"}>Today, Zenith Station prides itself on being a top-performing bare metal validator, boasting averages of over 99% uptime. In addition to our reliable services, we are committed to playing an active role in governance to drive sustainable growth to the chains we validate.</Text>
            <Heading as="h2" mb={2}>
              Owner/Operators
            </Heading>
            <Grid
        templateColumns={{
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={8}
        mb={5}
      >
        {owners.map((delegate) => (
          <Owner key={delegate.name} {...delegate} />
        ))}
            </Grid>
            </TabPanel>
              <TabPanel>
      Coming Soon TM
    </TabPanel>
  </TabPanels>
      </Tabs>
            <Box mb={3}>
        <Divider />
      </Box>
            <Heading as={"h2"} mb={4}>Special Thanks to:</Heading>
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
        <Text>2023 © Zenith Station | </Text>
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
