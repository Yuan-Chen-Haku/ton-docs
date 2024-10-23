/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarConfig}
 */
module.exports = [
  'v3/guidelines/overview',
  'develop/get-started-with-ton',
  {
    type: 'category',
    label: 'TON Hello World series',
    items: [
      {
        type: 'link',
        label: 'Working with your wallet',
        href: 'https://ton-community.github.io/tutorials/01-wallet',
      },
      {
        type: 'link',
        label: 'Writing first smart contract',
        href: 'https://ton-community.github.io/tutorials/02-contract',
      },
      {
        type: 'link',
        label: 'Building first web client',
        href: 'https://ton-community.github.io/tutorials/03-client',
      },
      {
        type: 'link',
        label: 'Testing your smart contract',
        href: 'https://ton-community.github.io/tutorials/04-testing',
      },
    ],
  },
  {
    'type': 'html',
    'value': '<hr/>',
  },
  {
    'type': 'html',
    'value': '<span class=\'menu__link\'><b><small> Smart Contracts Guidelines </small></b></span>',
  },
  'develop/smart-contracts/guidelines',
  'v3/guidelines/smart-contracts/get-methods',
  {
    type: 'doc',
    label: 'Transaction fees calculation',
    id: 'develop/smart-contracts/fee-calculation',
  },
  {
    type: 'category',
    label: 'Security Measures',
    items: [
      'develop/smart-contracts/security/README',
      'v3/guidelines/smart-contracts/security/secure-programming',
      'v3/guidelines/smart-contracts/security/things-to-focus',
      'v3/guidelines/smart-contracts/security/ton-hack-challenge-1',
      'v3/guidelines/smart-contracts/security/random-number-generation',
      'v3/guidelines/smart-contracts/security/random',
    ],
  },
  {
    type: 'category',
    label: 'How to',
    items: [
      {
        type: 'category',
        label: 'Compile from Sources',
        items: [
          {
            type: 'doc',
            label: 'Compilation Instructions',
            id: 'v3/guidelines/smart-contracts/howto/compile/compilation-instructions',
          },
          {
            type: 'doc',
            label: 'Instructions for low-memory machines',
            id: 'v3/guidelines/smart-contracts/howto/compile/instructions-low-memory',
          },
        ],
      },
      'v3/guidelines/smart-contracts/howto/multisig',
      'v3/guidelines/smart-contracts/howto/multisig-js',
      'v3/guidelines/smart-contracts/howto/airdrop-claim-best-practice',
      'v3/guidelines/smart-contracts/howto/shard-optimization',
      'v3/guidelines/smart-contracts/howto/wallet',
      {
        type: 'link',
        label: 'How to shard your TON smart contract and why',
        href: 'https://blog.ton.org/how-to-shard-your-ton-smart-contract-and-why-studying-the-anatomy-of-tons-jettons',
      },
    ],
  },
  {
    'type': 'html',
    'value': '<hr/>',
  },
  {
    'type': 'html',
    'value': '<span class=\'menu__link\'><b><small> DApps Guidelines </small></b></span>',
  },
  'develop/dapps/README',
  'develop/dapps/cookbook',
  {
    type: 'category',
    label: 'APIs and SDKs',
    items: [
      'develop/dapps/apis/sdk',
      'v3/guidelines/dapps/apis-sdks/api-types',
      'v3/guidelines/dapps/apis-sdks/ton-http-apis',
      'v3/guidelines/dapps/apis-sdks/ton-adnl-apis',
      'v3/guidelines/dapps/apis-sdks/api-keys',
      'v3/guidelines/dapps/apis-sdks/getblock-ton-api'
    ],
  },
  {
    type: 'category',
    label: 'Tutorials & Examples',
    items: [
      {
        type: 'doc',
        id: 'v3/guidelines/dapps/tutorials/nft-minting-guide',
        label: 'NFT Minting Guide',
      },
      {
        type: 'doc',
        id: 'v3/guidelines/dapps/tutorials/mint-your-first-token',
        label: 'Mint Your First Token',
      },
      {
        type: 'doc',
        id: 'v3/guidelines/dapps/tutorials/zero-knowledge-proofs',
        label: 'Zero-Knowledge Proofs',
      },
      {
        type: 'doc',
        id: 'v3/guidelines/dapps/tutorials/web3-game-example',
        label: 'Web3 Game Example',
      },
      {
        type: 'category',
        label: 'Telegram Bot Examples',
        items: [
          'v3/guidelines/dapps/tutorials/telegram-bot-examples/accept-payments-in-a-telegram-bot',
          'v3/guidelines/dapps/tutorials/telegram-bot-examples/accept-payments-in-a-telegram-bot-2',
          'v3/guidelines/dapps/tutorials/telegram-bot-examples/accept-payments-in-a-telegram-bot-js',
        ],
      },
    ],
  },
  {
    type: 'category',
    label: 'Telegram Mini Apps',
    items: [
      'develop/dapps/telegram-apps/README',
      {
        type: 'category',
        label: 'Guidelines',
        items: [
          'v3/guidelines/dapps/tma/guidelines/testing-apps',
          'v3/guidelines/dapps/tma/guidelines/publishing',
          'v3/guidelines/dapps/tma/guidelines/monetization',
          'v3/guidelines/dapps/tma/guidelines/tips-and-tricks',
        ],
      },
      {
        type: 'category',
        label: 'Tutorials & Examples',
        items: [
          'develop/dapps/telegram-apps/step-by-step-guide',
          'v3/guidelines/dapps/tma/tutorials/app-examples',
          'v3/guidelines/dapps/tma/tutorials/design-guidelines',
        ],
      },
      'v3/guidelines/dapps/tma/notcoin',
      'v3/guidelines/dapps/tma/grants',
    ],
  },
  {
    type: 'category',
    label: 'Advanced Asset Processing',
    items: [
      'v3/guidelines/dapps/asset-processing/payments-processing', // TODO: divide
      'develop/dapps/asset-processing/jettons', // TODO: divide
      'v3/guidelines/dapps/asset-processing/mintless-jettons', // TODO: divide
      'v3/guidelines/dapps/asset-processing/mass-mint-tools',
      {
        type: 'category',
        label: 'NFT Processing',
        items: [
          'v3/guidelines/dapps/asset-processing/nft-processing/nfts', // TODO: divide
          'v3/guidelines/dapps/asset-processing/nft-processing/metadata-parsing',
        ],
      },
    ],
  },
  {
    'type': 'html',
    'value': '<hr/>',
  },
  {
    'type': 'html',
    'value': '<span class=\'menu__link\'><b><small> MyTonCtrl & Blockchain Nodes Guidelines </small></b></span>',
  },
  'v3/guidelines/nodes/overview',
  {
    type: 'category',
    label: 'Running Nodes',
    items: [
      'v3/guidelines/nodes/running-nodes/archive-node',
      'participate/run-nodes/full-node',
      'v3/guidelines/nodes/running-nodes/liteserver-node',
      'v3/guidelines/nodes/running-nodes/validator-node',
      'v3/guidelines/nodes/running-nodes/staking-with-nominator-pools',
      'v3/guidelines/nodes/running-nodes/run-mytonctrl-docker',
      'v3/guidelines/nodes/running-nodes/running-a-local-ton',
      'v3/guidelines/nodes/running-nodes/secure-guidelines',
    ],
  },
  'v3/guidelines/nodes/custom-overlays',
  'v3/guidelines/nodes/nodes-troubleshooting',
  'v3/guidelines/nodes/node-maintenance-and-security',
  'v3/guidelines/nodes/persistent-states',
  'v3/guidelines/nodes/faq',
  {
    'type': 'html',
    'value': '<hr/>',
  },
  {
    'type': 'html',
    'value': '<span class=\'menu__link\'><b><small> Integrate with TON </small></b></span>',
  },
  'develop/dapps/ton-connect/overview',
  {
    type: 'doc',
    id: 'develop/dapps/ton-connect/wallet',
  },
  {
    type: 'category',
    label: 'Frameworks',
    items: [
      {
        type: 'doc',
        id: 'develop/dapps/ton-connect/react',
        label: 'React Apps',
      },
      {
        type: 'doc',
        id: 'v3/guidelines/ton-connect/frameworks/vue',
        label: 'Vue Apps',
      },
      {
        type: 'doc',
        id: 'develop/dapps/ton-connect/web',
        label: 'HTML/JS Apps',
      },
    ],
  },
  {
    type: 'category',
    label: 'Guidelines',
    items: [
      'v3/guidelines/ton-connect/guidelines/how-ton-connect-works',
      'develop/dapps/ton-connect/developers',
      'v3/guidelines/ton-connect/guidelines/creating-manifest',
      'v3/guidelines/ton-connect/guidelines/preparing-messages',
      'v3/guidelines/ton-connect/guidelines/sending-messages',
      'v3/guidelines/ton-connect/guidelines/verifying-signed-in-users',
      'v3/guidelines/ton-connect/guidelines/integration-with-javascript-sdk',
    ],
  },
  {
    type: 'category',
    label: 'Advanced',
    items: [
      {
        type: 'link',
        label: 'Protocol specification',
        href: 'https://github.com/ton-blockchain/ton-connect',
      },
      {
        type: 'link',
        label: 'Wallets List',
        href: 'https://github.com/ton-blockchain/wallets-list',
      },
    ],
  },
  {
    type: 'category',
    label: 'Business',
    items: [
      'v3/guidelines/ton-connect/business/ton-connect-for-business',
      'v3/guidelines/ton-connect/business/ton-connect-for-security',
      'v3/guidelines/ton-connect/business/ton-connect-comparison',
    ],
  },
  {
    'type': 'html',
    'value': '<hr/>',
  },
  {
    'type': 'html',
    'value': '<span class=\'menu__link\'><b><small> Web3 Guidelines </small></b></span>',
  },
  'v3/guidelines/web3/overview',
  {
    'type': 'category',
    'label': 'TON DNS',
    'items': [
      'v3/guidelines/web3/ton-dns/dns',
      'v3/guidelines/web3/ton-dns/subresolvers',
    ],
  },
  {
    'type': 'category',
    'label': 'TON Proxy & Sites',
    'items': [
      'develop/dapps/tutorials/how-to-run-ton-site',
      'v3/guidelines/web3/ton-proxy-sites/ton-sites-for-applications',
      'v3/guidelines/web3/ton-proxy-sites/connect-with-ton-proxy',
      'v3/guidelines/web3/ton-proxy-sites/how-to-open-any-ton-site',
      'v3/guidelines/web3/ton-proxy-sites/site-and-domain-management',
      'v3/guidelines/web3/ton-proxy-sites/running-your-own-ton-proxy',
    ],
  },
  {
    'type': 'category',
    'label': 'TON Storage',
    'items': [
      'v3/guidelines/web3/ton-storage/storage-daemon',
      'v3/guidelines/web3/ton-storage/storage-provider',
      'v3/guidelines/web3/ton-storage/storage-faq',
    ],
  },
];
