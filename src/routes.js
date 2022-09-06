import Login from "views/pages/Login.js";
import User from "views/pages/User.js";
import Mint from "views/Mint";
import Gift from "views/Gift";
import Gifted from "views/Gifted";
import Withdraw from "views/Withdraw";

import Swap from "views/Swap";
import Bridge from "views/Bridge";
import Pools from "views/Pools";
import Pool3 from "views/3Pool";
import AnyBTC from "views/AnyBTC";
import AnyETH from "views/AnyETH";
import FUSDT from "views/FUSDT";
import UST from "views/UST";
import RUSD from "views/RUSD";

import Stake from "views/Stake";
import xNRV from "views/xNRV";
import ContactInfo from "views/ContactInfo";
import Portfolio from "views/Portfolio";
import Statistics from "views/Statistics";
import Claim from "views/Claim";

import { RiExchangeDollarLine } from "react-icons/ri";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";
import { AiOutlinePieChart } from "react-icons/ai";
import { FaBalanceScale ,FaBalanceScaleRight } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { TiContacts } from "react-icons/ti";
import { HiCollection, HiPresentationChartBar, HiLightningBolt } from "react-icons/hi";

const routes = [
  // {
  //   path: "/mint",
  //   name: "Create your mint",
  //   icon: <MdOutlineSwapHorizontalCircle className='nav-icon' />,
  //   component: Mint,
  //   layout: "/admin"
  // },
  // {
  //   path: "/gift",
  //   name: "Gift to users",
  //   rtlName: "لوحة القيادة",
  //   icon: "tim-icons icon-spaceship",
  //   component: Gift,
  //   layout: "/admin"
  // },
  // {
  //   path: "/gifted",
  //   name: "Gifted NFTs",
  //   rtlName: "لوحة القيادة",
  //   icon: "tim-icons icon-spaceship",
  //   component: Gifted,
  //   layout: "/admin"
  // },
  // {
  //   path: "/withdraw",
  //   name: "Withdraw",
  //   rtlName: "لوحة القيادة",
  //   icon: "tim-icons icon-spaceship",
  //   component: Withdraw,
  //   layout: "/admin"
  // },
  // {
  //   path: "/settings",
  //   name: "Settings",
  //   // rtlName: "لوحة القيادة",
  //   // icon: "tim-icons icon-key-25",
  //   component: User,
  //   layout: "/admin"
  // },
  // {
  //   path: "/login",
  //   name: "Login",
  //   rtlName: "هعذاتسجيل الدخول",
  //   mini: "L",
  //   rtlMini: "هعذا",
  //   component: Login,
  //   layout: "/auth",
  // },
  {
    path: "/swap",
    name: "Swap",
    icon: <MdOutlineSwapHorizontalCircle className='nav-icon' />,
    type: 'nav',
    component: Swap,
  },
  {
    path: "/bridge",
    name: "Bridge",
    icon: <FaBalanceScaleRight className='nav-icon' />,
    type: 'nav',
    component: Bridge,
  },
  {
    path: "/pools",
    name: "Pools",
    icon: <HiCollection className='nav-icon' />,
    type: 'nav',
    component: Pools,
  },
  {
    path: "/3pool",
    name: "Stablecoin 3Pool",
    component: Pool3,
  },
  {
    path: "/anyBTC",
    name: "BTCB/anyBTC Pool",
    component: AnyBTC,
  },
  {
    path: "/anyETH",
    name: "ETH/anyETH Pool",
    component: AnyETH,
  },
  {
    path: "/fusdt",
    name: "fUSDT Metapool",
    component: FUSDT,
  },
  {
    path: "/ust",
    name: "UST Metapool",
    component: UST,
  },
  {
    path: "/rusd",
    name: "rUSD / 3pool - External Metapool",
    component: RUSD,
  },
  {
    path: "/stake",
    name: "Stake",
    icon: <HiLightningBolt className='nav-icon' />,
    type: 'nav',
    component: Stake,
  },
  {
    path: "/xNRV",
    name: "xNRV",
    icon: <RiExchangeDollarLine className='nav-icon' />,
    type: 'nav',
    component: xNRV,
  },
  {
    path: "/contact",
    name: "Contact",
    icon: <TiContacts className='nav-icon' />,
    type: 'nav',
    component: ContactInfo,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    icon: <AiOutlinePieChart className='nav-icon' />,
    type: 'nav',
    component: Portfolio,
  },
  {
    path: "/statistics",
    name: "Statistics",
    icon: <HiPresentationChartBar className='nav-icon' />,
    type: 'nav',
    component: Statistics,
  },
  {
    path: "/claim",
    name: "Claim",
    icon: <RiExchangeDollarLine className='nav-icon' />,
    type: 'nav',
    component: Claim,
  },
];

export default routes;
