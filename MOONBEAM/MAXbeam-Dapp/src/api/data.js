import markdownFeatureSrc from '../assets/markdown-test-file';
import markdownMoonbeam from '../assets/markdownMoonbeam';
import markPolka from '../assets/markPolkadot';
import markdownPortis from '../assets/markPortis';


let data = [
  {
    id: '0',
    title: 'Full Feature Example',
    author: 'Adinda Ratnawati',
    excerpt: 'This is the full feature example. You can see all markdown feature supported and experience all features in Write Down with this example. Have fun!!',
    cover: {
      url: 'https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQxMzU5fQ',
      authorName: 'Adinda Ratnawati Ridwan',
      authorLink: 'https://unsplash.com/@jonathan_christian_photography'
    },
    tags: ['example', "code", 'markdown cheatset'],
    markdown: markdownFeatureSrc,
    htmlOutput: '',
    isPublished: true,
    postedAt: '2020-01-17T08:16:01.296Z',
    updatedAt: '2020-01-06T18:16:01.296Z',
  },
  {
    id: '1',
    title: 'Polkadot JS Exstension',
    author: 'Agin DropDisco',
    excerpt:'Browser extensions are very powerful tools. They can read any website you visit, read your cookies, read what you type, and basically do anything you would do on a website. Because of this, installing a browser extension should never be taken lightly. However, given certain precautions, extensions can also be very useful and can enhance your security. Polkadot-js extension focuses on one thing: managing your accounts. You can add, import, and export accounts, and sign transactions or extrinsics that you have initiated from websites you have authorized. Having your accounts stored in a browser extension allows you to bring your identity with you on any website you visit and have granted access to your account. The attack surface on a browser extension is very narrow compared to websites, making it a better place to store your accounts. Still, we recommend only storing private keys of accounts with a low amount of funds in the extension. The best practice remains to use an offline wallet to store the majority of your funds. The extension also supports linking externa Parity Signer accounts One of the biggest threats would be to install a malicious extension. It’s extremely important to make sure you install the official extension and not a clone that could appear on your browser’s store. Only follow links from the GitHub repository  or the official Polkadot-js website https://polkadot.js.org/extension/. Do not reach the store’s page from a search engine or any link that you would not trust. Also good to know, the Chrome extension cannot be found by searching the store. You will only be able to access it using a direct link.',
    cover:{
      url: 'https://miro.medium.com/max/700/1*FRi0y3OAN1iWY0SM3RRu-w.png',
      authorName: 'Agin DropDisco',
      authorLink: 'https://github.com/Agin-DropDisco'
    },
    tags: ['Blockchain', 'Dapp', "Polkadot"],
    markdown: markdownMoonbeam,
    htmlOutput: '',
    isPublished: true,
    postedAt: '2020-11-15T18:16:01.296Z',
    updatedAt: '2020-11-16T19:53:01.296Z',
  },
  {
    id: '2',
    title: 'This is Just Sample Draft',
    author: 'burgerking12',
    excerpt: 'The first Moonbeam TestNet, named Moonbase Alpha, aims to provide developers with a place to start experimenting and building on Moonbeam in a shared environment. Since Moonbeam will be deployed as a parachain on Kusama and Polkadot, we want our TestNet to reflect our production configuration. For this reason, we decided that it needed to be a parachain-based configuration rather than a Substrate standalone setup.',
    cover:{
      url: 'https://moonbeam.network/wp-content/uploads/2020/10/futuristic-urban-cityscape-moonbeam-2.png',
      authorName: 'burgerking12 AKA Agin DropDisco',
      authorLink: 'https://github.com/Agin-DropDisco'
    },
    tags: ['Blockchain', 'Dapp', "Moonbeam"],
    markdown: markPolka,
    isPublished: false,
    postedAt: '2020-12-16T18:16:01.296Z',
    updatedAt: '2020-12-17T18:16:01.296Z',
  },
  {
    id: '3',
    title: 'PORTIS || Methods & Event Handlers',
    author: 'Agin DropDisco',
    excerpt: 'Your Dapp (Decentralized Application) communicates with the Portis SDK using the standard web3.js methods, meaning it will work automatically with your existing code. Users won’t have to install anything in advance to use your DApp. With Portis, your DApp already comes bundled with a solution by offering them a simple in-browser email/password login method which feels familiar.',
    cover:{
      url: 'https://miro.medium.com/max/2000/1*kxTOXunkKXMSfrEgsuqasA.png',
      authorName: 'portis team',
      authorLink: 'https://github.com/Agin-DropDisco'
    },
    tags: ['Blockchain', 'Dapp', "Portis"],
    markdown: markdownPortis,
    htmlOutput: '',
    isPublished: true,
    postedAt: '2020-12-16T18:16:01.296Z',
    updatedAt: '2020-12-17T18:16:01.296Z',
  },
  {
    id: '4',
    title: 'Who is Building on Moonbeam',
    author: 'Burgerking12',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim nec dui. At tellus at urna condimentum mattis pellentesque. Volutpat est velit egestas dui id ornare arcu odio ut. Purus viverra accumsan in nisl nisi.',
    cover:{
      url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80',
      authorName: 'Rye Jessen',
      authorLink: 'https://github.com/Agin-DropDisco'
    },
    tags: ['story', 'daily', "sport", "movie"],
    markdown: '## Who is Building on Moonbeam',
    isPublished: true,
    postedAt: '2020-08-15T18:16:01.296Z',
    updatedAt: '2020-08-21T18:16:01.296Z',
  },
  {
    id: '5',
    title: 'Polkadot JS Exstension part 2',
    author: 'Agin DropDisco',
    excerpt:'Browser extensions are very powerful tools. They can read any website you visit, read your cookies, read what you type, and basically do anything you would do on a website. Because of this, installing a browser extension should never be taken lightly. However, given certain precautions, extensions can also be very useful and can enhance your security. Polkadot-js extension focuses on one thing: managing your accounts. You can add, import, and export accounts, and sign transactions or extrinsics that you have initiated from websites you have authorized. Having your accounts stored in a browser extension allows you to bring your identity with you on any website you visit and have granted access to your account. The attack surface on a browser extension is very narrow compared to websites, making it a better place to store your accounts. Still, we recommend only storing private keys of accounts with a low amount of funds in the extension. The best practice remains to use an offline wallet to store the majority of your funds. The extension also supports linking externa Parity Signer accounts One of the biggest threats would be to install a malicious extension. It’s extremely important to make sure you install the official extension and not a clone that could appear on your browser’s store. Only follow links from the GitHub repository  or the official Polkadot-js website https://polkadot.js.org/extension/. Do not reach the store’s page from a search engine or any link that you would not trust. Also good to know, the Chrome extension cannot be found by searching the store. You will only be able to access it using a direct link.',
    cover:{
      url: 'https://miro.medium.com/max/700/1*I7BJ0p8l_iFIVM_KrnP5Yw@2x.png',
      authorName: 'Agin DropDisco',
      authorLink: 'https://github.com/Agin-DropDisco'
    },
    tags: ['Blockchain', 'Dapp', "Polkadot"],
    markdown: markdownMoonbeam,
    htmlOutput: '',
    isPublished: true,
    postedAt: '2020-11-15T18:16:01.296Z',
    updatedAt: '2020-11-16T19:53:01.296Z',
  },
  {
    id: '6',
    title: 'Polkastarter Partners with Moonbeam for Cross-Chain Interoperability',
    author: 'Agin DropDisco',
    excerpt:'Polkastarter is thrilled to announce that we are partnering with Moonbeam, an Ethereum compatible parachain that allows for easy integration between the Ethereum and Polkadot ecosystems.',
    cover:{
      url: 'https://miro.medium.com/max/700/1*9YY6LRbKWX9mDXJcmEtM2A.png',
      authorName: 'Agin DropDisco',
      authorLink: 'https://github.com/Agin-DropDisco'
    },
    tags: ['Blockchain', 'Dapp', "Polkadot"],
    markdown: markdownMoonbeam,
    htmlOutput: '',
    isPublished: true,
    postedAt: '2020-11-15T18:16:01.296Z',
    updatedAt: '2020-11-16T19:53:01.296Z',
  },
];
export default data;

////////////////////////////////////////////////////////////
// FUTURE
////////////////////////////////////////////////////////////
// STORE THIS WITH FAKE API, JSON, json-server and low-db