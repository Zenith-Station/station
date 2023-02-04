import {
  Box,
  Heading,
  HStack,
  Avatar,
  Link,
  Icon,
  Card, CardHeader, CardBody, CardFooter,
  Divider,
  Stack,
  Text,
  ButtonGroup,
  Button,
  Tag,
  TagLabel,
  TagLeftIcon,
  useColorModeValue
} from '@chakra-ui/react';
import { YieldmosIcon, KeplrIcon } from './icons';
import { SiTwitter, SiDiscord } from 'react-icons/si';

import { FeatureProps, DelegateProps, DelegateDisableProps, OwnerProps } from './types';

export const Product = ({ title, text, href, src }: FeatureProps) => {
  return (
    <Link href={href} target="_blank" _hover={{ textDecoration: 'none' }}>
      <Stack
        isInline={false}
        key={title}
        h="full"
        p={2}
      justifyContent="center"> 
        <Card
          minH={36}
        textAlign={'center'}
        size={'sm'}
        borderRadius={'1rem'}
        boxShadow={useColorModeValue("0 1px 3px #5b5565, 0 2px 12px -2px #5b5565","0 1px 3px #2d2a31, 0 2px 12px -2px #000")}
        _hover={{
          boxShadow: useColorModeValue(
            '0 2px 5px #ccc',
            '0 1px 3px #727272, 0 2px 12px -2px #2f2f2f'
          )
        }}>
          <CardHeader>
            <Avatar name={title} src={src} size="md"/>
        <Heading fontFamily={'Sono'} fontSize="lg">
          {title}
            </Heading>
            <Divider mt={5} />
          </CardHeader>
          <CardBody>
            <Text>{text}</Text>
          </CardBody>
        </Card>
      </Stack>
    </Link>
  );
};

export const Dependency = ({ title, text, href }: FeatureProps) => {
  return (
    <Link href={href} target="_blank" _hover={{ textDecoration: 'none' }}>
      <Stack
        isInline={true}
        key={title}
        spacing={3}
        h="full"
        p={4}
        justifyContent="center"
        borderRadius="md"
        border="1px solid"
        borderColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.100')}
        _hover={{
          boxShadow: useColorModeValue(
            '0 2px 5px #ccc',
            '0 1px 3px #727272, 0 2px 12px -2px #2f2f2f'
          )
        }}
      >
        <Box color={useColorModeValue('primary.500', 'primary.200')}>
        </Box>
        <Stack spacing={1}>
          <Text fontSize="lg">
            {title}
          </Text>
          <Text
            lineHeight="short"
            color={useColorModeValue('blackAlpha.700', 'whiteAlpha.700')}
          >
            {text}
          </Text>
        </Stack>
      </Stack>
    </Link>
  );
};

export const Delegate = ({ chain, yieldmos, keplr, img, color }: DelegateProps) => {
  return (
      <Stack
        isInline={false}
        key={chain}
        spacing={1}
        h="full"
      p={1}
      justifyContent="center"> 
      <Card
        textAlign={'center'}
        size={'sm'}
        borderRadius={'1rem'}
        backgroundColor={color}
        boxShadow={useColorModeValue("0 1px 3px #5b5565, 0 2px 12px -2px #5b5565","0 1px 3px #2d2a31, 0 2px 12px -2px #000")}
        _hover={{
          boxShadow: useColorModeValue(
            '0 2px 5px #ccc',
            '0 1px 3px #727272, 0 2px 12px -2px #2f2f2f'
          )
        }}>
        <CardHeader>
          <Avatar src={img} />
          <Text fontSize="lg" fontFamily={"Sono"}>
            {chain}
          </Text>
          <Divider/>
        </CardHeader>
        <CardFooter justifyContent={'center'}>
          <ButtonGroup gap='1'>
            <Link href={yieldmos} target="_blank" _hover={{ textDecoration: 'none' }}>
              <Button variant={'yieldmos'} leftIcon={<YieldmosIcon/>}>Use Yieldmos
              </Button></Link>
            <Link href={keplr} target="_blank" _hover={{ textDecoration: 'none' }}>
              <Button variant={'keplr'} leftIcon={<KeplrIcon/>}>
        Delegate w/ Keplr 
            </Button></Link>
        </ButtonGroup>
        </CardFooter>
      </Card>
      </Stack>
    
  );
};

export const DelegateDisabled = ({ chain, img }: DelegateDisableProps) => {
  return (
      <Stack
        isInline={false}
        key={chain}
        spacing={1}
        h="full"
      p={1}
      justifyContent="center"> 
      <Card
        textAlign={'center'}
        size={'sm'}
        borderRadius={'1rem'}
        backgroundColor={'gray.900'}
        _hover={{
          boxShadow: useColorModeValue(
            '0 2px 5px #ccc',
            '0 1px 3px #727272, 0 2px 12px -2px #2f2f2f'
          )
        }}>
        <CardHeader>
          <Avatar src={img} opacity={'50%'} />
          <Text
            fontSize="lg"
            fontFamily={"Sono"}
            textColor={'gray'}>
            {chain}
          </Text>
          <Divider/>
        </CardHeader>
        <CardFooter justifyContent={'center'}>
          <ButtonGroup gap='1'>
            <Button disabled variant={'yieldmos'} leftIcon={<YieldmosIcon/>}>Use Yieldmos
              </Button>
              <Button disabled variant={'keplr'} leftIcon={<KeplrIcon/>}>
        Delegate w/ Keplr 
            </Button>
        </ButtonGroup>
        </CardFooter>
      </Card>
      </Stack>
    
  );
};

export const Owner = ({ name, position, twitter, discord, img, color }: OwnerProps) => {
  return (
      <Stack
        isInline={false}
        key={name}
        spacing={3}
        h="full"
        p={1}
      justifyContent="center"
    > <Card
        textAlign={'center'}
        size={'sm'}
        borderRadius={'1rem'}
        backgroundColor={color}
        _hover={{
          boxShadow: useColorModeValue(
            '0 2px 5px #ccc',
            '0 1px 3px #727272, 0 2px 12px -2px #2f2f2f'
          )
        }}>
      <CardHeader pb={-1}>
          <Avatar src={img} />
        </CardHeader>
        <CardBody>
          <Text
            fontSize="lg"
            fontFamily={"Sono"}>
            {name}
          </Text>
        <Text fontSize="md">
            {position}
          </Text>
          <Divider />
        </CardBody>
        <CardFooter justifyContent={"center"} pt={-1}>
          <HStack spacing={3} >
            <Tag p={2} colorScheme={'gray'}>
          <TagLeftIcon as={SiDiscord} />
          <TagLabel>{discord}</TagLabel></Tag>
        <Link href={twitter} target="_blank" _hover={{ textDecoration: 'none' }}>
          <Tag p={2} colorScheme={"twitter"}>
          <TagLeftIcon as={SiTwitter} />
          <TagLabel>Twitter</TagLabel></Tag></Link></HStack>
        </CardFooter>
          </Card>
      </Stack>
    
  );
};
