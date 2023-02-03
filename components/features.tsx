import { LinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Tag,
  TagLeftIcon,
  TagLabel,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
  Avatar,
  Button,
  ButtonGroup,
  HStack,
  useColorModeValue
} from '@chakra-ui/react';
import { SiDiscord } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { FeatureProps, DelegateProps, DelegateDisableProps, OwnerProps } from './types';

export const Product = ({ title, text, href, src }: FeatureProps) => {
  return (
    <Link href={href} target="_blank" _hover={{ textDecoration: 'none' }}>
      <Stack
        h="full"
        minH={36}
        p={5}
        spacing={2.5}
        justifyContent="center"
        borderRadius={5}
        boxShadow={useColorModeValue(
          '0 2px 5px #ccc',
          '0 1px 3px #727272, 0 2px 12px -2px #2f2f2f'
        )}
        _hover={{
          color: useColorModeValue('blue.600', 'blue.300'),
          boxShadow: useColorModeValue(
            '0 2px 5px #3054bb',
            '0 0 3px rgba(48, 84, 187, 0.8), 0 3px 8px -2px rgba(48, 84, 187, 0.9)'
          )
        }}
      >
        <HStack><Avatar name={title} src={src} size="sm"/>
        <Heading fontFamily={'Work Sans'} fontSize="lg">
          {title}
          </Heading>
          </HStack>
        <Text>{text}</Text>
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
          <Icon as={LinkIcon} />
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

export const Delegate = ({ chain, yieldmos, keplr, img }: DelegateProps) => {
  return (
      <Stack
        isInline={false}
        key={chain}
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
        <Box textAlign={'center'}>
        <Avatar src={img}/>
        <Text fontSize="lg">
            {chain}
          </Text>
        </Box>

          <ButtonGroup gap='1' alignSelf={"center"}>
          <Link href={yieldmos} target="_blank" _hover={{ textDecoration: 'none' }}><Button colorScheme='green'>Use Yieldmos</Button></Link>
          <Link href={keplr} target="_blank" _hover={{ textDecoration: 'none' }}><Button variant='outline' colorScheme='blue'>
        Delegate w/ Keplr 
            </Button></Link>
        </ButtonGroup>
      </Stack>
    
  );
};

export const DelegateDisabled = ({ chain, img }: DelegateDisableProps) => {
  return (
      <Stack
        isInline={false}
        key={chain}
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
        <Box textAlign={'center'}>
        <Avatar src={img}/>
        <Text fontSize="lg">
            {chain}
          </Text>
        </Box>

          <ButtonGroup isDisabled gap='1' alignSelf={"center"}>
          <Button colorScheme='green'>Use Yieldmos</Button>
          <Button variant='outline' colorScheme='blue'>
        Delegate w/ Keplr 
            </Button>
        </ButtonGroup>
      </Stack>
    
  );
};

export const Owner = ({ name, position, twitter, discord, img }: OwnerProps) => {
  return (
      <Stack
        isInline={false}
        key={name}
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
        <Box textAlign={'center'}>
        <Avatar src={img} mb={2} />
        <Text fontSize="lg">
          {name} 
        </Text>
        
        <Text fontSize="md">
            {position}
          </Text>
      </Box>
      <HStack spacing={4} justify={"center"}>
        <Tag>
          <TagLeftIcon boxSize='15px' as={SiDiscord} />
          <TagLabel>{discord}</TagLabel></Tag>
        <Link href={twitter} target="_blank" _hover={{ textDecoration: 'none' }}>
          <Tag colorScheme={"twitter"}>
          <TagLeftIcon boxSize='15px' as={BsTwitter} />
          <TagLabel>Twitter</TagLabel></Tag></Link></HStack>
      </Stack>
    
  );
};
