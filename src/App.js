import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider, connectorsForWallets, wallet } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import Sidebar from './Components/sidebar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { ToastContainer } from 'react-toastify';

const telosTest = {
  id: 41,
  name: 'Telos EVM Testnet',
  network: 'telostestnet',
  iconUrl: 'https://icons.llamao.fi/icons/chains/rsz_telos.jpg',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'Telos',
    symbol: 'TLOS',
  },
  rpcUrls: {
    public: { http: ['https://testnet.telos.net/evm'] },
    default: { http: ['https://testnet.telos.net/evm'] },
  },
  blockExplorers: {
    etherscan: { name: 'Teloscan', url: 'https://explorer-test.telos.net/' },
    default: { name: 'Teloscan', url: 'https://explorer-test.telos.net/' },
  },
  testnet: true
}

const { chains, provider } = configureChains(
  [chain.polygonMumbai, telosTest, chain.mainnet, chain.polygon],
  [  publicProvider(), alchemyProvider({ alchemyId: "IItFVmzc5gWClV0ba3hDDdqtppKw-9OP" })]
); 

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      wallet.metaMask({ chains }),
      wallet.rainbow({ chains }),
      wallet.argent({ chains }),
      wallet.ledger({ chains })
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

function App() {
  return (
    <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains}>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Sidebar page={"home"}/>} />
      <Route exact path="/token" element={<Sidebar page={"token"}/>} />
      <Route exact path="/contact" element={<Sidebar page={"contact"}/>} />
      <Route exact path="/pricing" element={<Sidebar page={"pricing"}/>} />
      <Route exact path="/wallet" element={<Sidebar page={"wallet"}/>} />
      <Route exact path="/contract" element={<Sidebar page={"contract"}/>} />
      <Route exact path="/search" element={<Sidebar page={"search"}/>} />
      <Route exact path="/sale" element={<Sidebar page={"sale"}/>} />
      <Route exact path="/lock" element={<Sidebar page={"lock"}/>} />
      <Route exact path="/add-liquidity" element={<Sidebar page={"add-liquidity"}/>} />
      <Route exact path="/manage" element={<Sidebar page={"manage"}/>} />
      <Route exact path="/managetoken/:TOKEN" element={<Sidebar page={"managetoken"}/>} />
      <Route exact path="/locktoken/:TOKEN" element={<Sidebar page={"locktoken"}/>} />
      <Route exact path="/managelock/:LOCK" element={<Sidebar page={"managelock"}/>} />
      <Route exact path="/saletoken/:TOKEN" element={<Sidebar page={"saletoken"}/>} />
      <Route exact path="/editsale/:SALE" element={<Sidebar page={"editsale"}/>} />
      <Route exact path="/managesale/:SALE" element={<Sidebar page={"managesale"}/>} />
      <Route exact path="/buysale/:SALE" element={<Sidebar page={"buysale"}/>} />
      <Route exact path="/distributetoken" element={<Sidebar page={"distributetoken"}/>} />
      <Route path="*" element={<Sidebar page={"error"}/>} />
    </Routes>
    </BrowserRouter>
    </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;