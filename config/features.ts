import { FeatureProps, DelegateProps, DelegateDisableProps, OwnerProps } from '../components';

export const products: FeatureProps[] = [
  {
    title: 'Yieldmos (Beta)',
    text: 'Boost yields by auto compounding your staking and LP rewards with validators of your choice.',
    href: 'https://www.yieldmos.com/v/zenith-station',
    src: './yieldmoslogo.png'
  },
  {
    title: 'Create Cosmos App',
    text: 'One command, modern Cosmos app ⚛️ by Cosmology Tech.',
    href: 'https://github.com/cosmology-tech/create-cosmos-app',
    src: './astronaut.svg'
  }
];

export const dependencies: FeatureProps[] = [
  {
    title: 'Chakra UI',
    text: 'A simple, modular and accessible React Component Library.',
    href: 'https://chakra-ui.com/docs/components/'
  },
  {
    title: 'Next.js',
    text: 'A React Framework supports hybrid static & server rendering.',
    href: 'https://nextjs.org/'
  }
];

export const owners: OwnerProps[] = [
  {
    name: "Luisqa",
    position: "CFO, Head of Governance Affairs",
    twitter: "https://twitter.com/luisqagt",
    discord: "luisqa#0001",
    img: "./luisqa.jpg",
  },
  {
    name: "Boobcactus",
    position: "CTO, Node Operations Manager",
    twitter: "https://twitter.com/boobcactus",
    discord: "boobcactus#0359",
    img: "./boobcactus.jpg",
  },
  {
    name: "Togg",
    position: "CMO, Support Relations Expert",
    twitter: "https://twitter.com/ToggLeTek",
    discord: "ToggLeTek#2254",
    img: "./togg.jpg",
  }
];

export const delegateChains: DelegateProps[] = [
  {
    chain: 'Osmosis',
    yieldmos: 'https://www.yieldmos.com/v/zenith-station/osmo-staking-rewards',
    keplr: 'https://wallet.keplr.app/chains/osmosis?modal=validator&chain=osmosis-1&validator_address=osmovaloper13rfuft69m3swst4ay7rugdy6pqg2un3tm0tn4g',
    img: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
  },
  {
    chain: 'Evmos',
    yieldmos: 'https://www.yieldmos.com/v/zenith-station/evmos-staking-rewards',
    keplr: 'https://wallet.keplr.app/chains/evmos?modal=validator&chain=evmos_9001-2&validator_address=evmosvaloper1g376mzt2kcszpf7y3ee7r8jpseq2zv9hshf5g3',
    img: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
  },
  {
    chain: 'Stride',
    yieldmos: 'https://www.yieldmos.com/v/zenith-station/evmos-staking-rewards',
    keplr: 'https://wallet.keplr.app/chains/stride?modal=validator&chain=stride-1&validator_address=stridevaloper13rfuft69m3swst4ay7rugdy6pqg2un3tfa5qv5',
    img: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
  },
  {
    chain: 'BitSong',
    yieldmos: 'https://www.yieldmos.com/v/zenith-station/btsg-staking-rewards',
    keplr: 'https://wallet.bitsong.io/#/validators/bitsongvaloper13rfuft69m3swst4ay7rugdy6pqg2un3tyw7px0',
    img: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
  },
];

export const delegateDisabledChains: DelegateDisableProps[] = [{
    chain: 'Coming Soon',
    yieldmos: '/',
    keplr: '/',
    img: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
  },
];
