import { FeatureProps, DelegateProps, DelegateDisableProps, OwnerProps } from '../components';

export const products: FeatureProps[] = [
  {
    title: 'Yieldmos (Beta)',
    text: 'Boost yields by auto compounding your staking and LP rewards with validators of your choice.',
    href: 'https://www.yieldmos.com/v/zenith-station',
    src: './images/yieldmos.svg'
  },
  {
    title: 'Create Cosmos App',
    text: 'One command, modern Cosmos app ⚛️ by Cosmology Tech.',
    href: 'https://github.com/cosmology-tech/create-cosmos-app',
    src: './images/astronaut.svg'
  },
  {
    title: 'Interbloc',
    text: 'Professional and reliable infrastructure as a service for the Cosmos Ecosystem.',
    href: 'https://www.interbloc.org/',
    src: './images/interbloc.png'
  }
];

export const owners: OwnerProps[] = [
  {
    name: "Luisqa",
    position: "CFO, Head of Governance Affairs",
    twitter: "https://twitter.com/luisqagt",
    discord: "luisqa#0001",
    img: "./images/luisqa.jpg",
    color: "rgba(0,0,0,0.5)"
  },
  {
    name: "Boobcactus",
    position: "CTO, Node Operations Manager",
    twitter: "https://twitter.com/boobcactus",
    discord: "boobcactus#0359",
    img: "./images/boobcactus.jpg",
    color: "rgba(0,89,125,0.25)"
  },
  {
    name: "Togg",
    position: "CMO, Support Relations Expert",
    twitter: "https://twitter.com/ToggLeTek",
    discord: "ToggLeTek#2254",
    img: "./images/togg.jpg",
    color: "rgba(76, 228, 228, 0.25)"
  }
];

export const delegateChains: DelegateProps[] = [
  {
    chain: 'Osmosis',
    yieldmos: 'https://www.yieldmos.com/v/zenith-station/osmo-staking-rewards',
    keplr: 'https://wallet.keplr.app/chains/osmosis?modal=validator&chain=osmosis-1&validator_address=osmovaloper13rfuft69m3swst4ay7rugdy6pqg2un3tm0tn4g',
    img: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
    color: 'rgba(126,1,223,0.05)'
  },
  {
    chain: 'Evmos',
    yieldmos: 'https://www.yieldmos.com/v/zenith-station/evmos-staking-rewards',
    keplr: 'https://wallet.keplr.app/chains/evmos?modal=validator&chain=evmos_9001-2&validator_address=evmosvaloper1g376mzt2kcszpf7y3ee7r8jpseq2zv9hshf5g3',
    img: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg',
    color: 'rgba(237, 78, 51,0.05)'
  },
  {
    chain: 'Stride',
    yieldmos: 'https://www.yieldmos.com/v/zenith-station/evmos-staking-rewards',
    keplr: 'https://wallet.keplr.app/chains/stride?modal=validator&chain=stride-1&validator_address=stridevaloper13rfuft69m3swst4ay7rugdy6pqg2un3tfa5qv5',
    img: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg',
    color: 'rgba(229, 5, 113,0.05)'
  },
  {
    chain: 'BitSong',
    yieldmos: 'https://www.yieldmos.com/v/zenith-station/btsg-staking-rewards',
    keplr: 'https://wallet.bitsong.io/#/validators/bitsongvaloper13rfuft69m3swst4ay7rugdy6pqg2un3tyw7px0',
    img: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg',
    color: 'rgba(238, 14, 102,0.05)'
  },
  {
    chain: 'Mars',
    yieldmos: '',
    keplr: 'https://wallet.keplr.app/chains/mars-hub?modal=validator&chain=mars-1&validator_address=marsvaloper13rfuft69m3swst4ay7rugdy6pqg2un3tqj4v9r',
    img: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg',
    color: 'rgba(215, 65, 44,0.05)'
  },
];

export const delegateDisabledChains: DelegateDisableProps[] = [{
    chain: 'Coming Soon',
    img: ''
  },
];
