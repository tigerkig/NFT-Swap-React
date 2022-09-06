import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import Select from "react-select";
import NotificationAlert from "react-notification-alert";
import { Audio } from  'react-loader-spinner'
import { connect } from "react-redux";
import { FcCopyright } from "react-icons/fc";
import { BsBoxArrowUpRight } from "react-icons/bs";
import {CopyToClipboard} from 'react-copy-to-clipboard';

import "./app.css";

const Portfolio = (props) => {
     //loading
     const [loading, setLoading] = useState(false);

     return (
          <>
               {loading && <Audio type="Puff" color="#00BFFF" height={100} width={'100%'} wrapperClass="loadingDiv"/>}

               <div className="content">
                    <Row className='claim-card'>
                         <Col md="12">
                              <Card className="nerve-card">
                                   <CardHeader>
                                        <Row>
                                             <Col sm="12">
                                                  <h3 className="gradient-color-3">Tokens</h3>
                                             </Col>
                                        </Row>
                                   </CardHeader>
                                   <CardBody>
                                        <Row>
                                             <Col sm="6">
                                                  <Link to='#' className='big-font-size'>
                                                       NRV 
                                                       <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/nerve.ab09a2eb.svg'/>
                                                  </Link>
                                                  <div className='white-color'>
                                                       0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096
                                                       <CopyToClipboard text='0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096'>
                                                            <Link to='#' id='copy-1'><FcCopyright className='big-font-size' /></Link>
                                                       </CopyToClipboard>
                                                       <UncontrolledTooltip
                                                            delay={0}
                                                            target='copy-1'
                                                            placement="top">
                                                            Copy
                                                       </UncontrolledTooltip>
                                                  </div>
                                                  <p><span className='description'>NRV is the base token behind nerve.fi</span></p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <Link to='#' id='tooltip_1000'>
                                                       <img className="w-5 h-5 inline mr-2 icon-img" src='https://nerve.fi/static/media/metamask.88dfbaa3.svg'/>
                                                  </Link>
                                                  <UncontrolledTooltip
                                                       delay={0}
                                                       target='tooltip_1000'
                                                       placement="top">
                                                       Add to Wallet
                                                  </UncontrolledTooltip>

                                                  <br/>

                                                  <Link to='#' id='tooltip_1001'>
                                                       <BsBoxArrowUpRight className='open-doc white-color' />
                                                  </Link>
                                                  <UncontrolledTooltip
                                                       delay={0}
                                                       target='tooltip_1001'
                                                       placement="bottom">
                                                       Open NRV Docs
                                                  </UncontrolledTooltip>
                                             </Col>
                                        </Row>
                                        <hr/>

                                        <Row>
                                             <Col sm="6">
                                                  <Link to='#' className='big-font-size'>
                                                       xNRV 
                                                       <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/nerve.ab09a2eb.svg'/>
                                                  </Link>
                                                  <div className='white-color'>
                                                       0x15B9462d4Eb94222a7506Bc7A25FB27a2359291e
                                                       <CopyToClipboard text='0x15B9462d4Eb94222a7506Bc7A25FB27a2359291e'>
                                                            <Link to='#' id='copy-2'><FcCopyright className='big-font-size' /></Link>
                                                       </CopyToClipboard>
                                                       <UncontrolledTooltip
                                                            delay={0}
                                                            target='copy-2'
                                                            placement="top">
                                                            Copy
                                                       </UncontrolledTooltip>
                                                  </div>
                                                  <p> <span className='description'>xNRV is the token that is used to stake NRV</span></p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <Link to='#' id='tooltip_1000'>
                                                       <img className="w-5 h-5 inline mr-2 icon-img" src='https://nerve.fi/static/media/metamask.88dfbaa3.svg'/>
                                                  </Link>
                                                  <UncontrolledTooltip
                                                       delay={0}
                                                       target='tooltip_1000'
                                                       placement="top">
                                                       Add to Wallet
                                                  </UncontrolledTooltip>

                                                  <br/>

                                                  <Link to='#' id='tooltip_1001'>
                                                       <BsBoxArrowUpRight className='open-doc white-color' />
                                                  </Link>
                                                  <UncontrolledTooltip
                                                       delay={0}
                                                       target='tooltip_1001'
                                                       placement="bottom">
                                                       Open NRV Docs
                                                  </UncontrolledTooltip>
                                             </Col>
                                        </Row>
                                        <hr/>

                                        <Row>
                                             <Col sm="6">
                                                  <Link to='#' className='big-font-size'>
                                                       Cake-LP V2 
                                                       <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/pancake.285bc1bc.svg'/>
                                                  </Link>
                                                  <div className='white-color'>
                                                       0x401479091d0f7b8ae437ee8b054575cd33ea72bd
                                                       <CopyToClipboard text='0x401479091d0f7b8ae437ee8b054575cd33ea72bd'>
                                                            <Link to='#' id='copy-3'><FcCopyright className='big-font-size' /></Link>
                                                       </CopyToClipboard>
                                                       <UncontrolledTooltip
                                                            delay={0}
                                                            target='copy-3'
                                                            placement="top">
                                                            Copy
                                                       </UncontrolledTooltip>
                                                  </div>
                                                  <p><span className='description'>The V2 Upgraded Cake NRV/BUSD Liquidity pool token</span></p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <Link to='#' id='tooltip_1000'>
                                                       <img className="w-5 h-5 inline mr-2 icon-img" src='https://nerve.fi/static/media/metamask.88dfbaa3.svg'/>
                                                  </Link>
                                                  <UncontrolledTooltip
                                                       delay={0}
                                                       target='tooltip_1000'
                                                       placement="top">
                                                       Add to Wallet
                                                  </UncontrolledTooltip>

                                                  <br/>

                                                  <Link to='#' id='tooltip_1001'>
                                                       <BsBoxArrowUpRight className='open-doc white-color' />
                                                  </Link>
                                                  <UncontrolledTooltip
                                                       delay={0}
                                                       target='tooltip_1001'
                                                       placement="bottom">
                                                       Open NRV Docs
                                                  </UncontrolledTooltip>
                                             </Col>
                                        </Row>
                                        <hr/>

                                        <Row>
                                             <Col sm="6">
                                                  <Link to='#' className='big-font-size'>
                                                       3NRV-LP 
                                                       <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/nerve.ab09a2eb.svg'/>
                                                  </Link>
                                                  <div className='white-color'>
                                                       0xf2511b5e4fb0e5e2d123004b672ba14850478c14
                                                       <CopyToClipboard text='0xf2511b5e4fb0e5e2d123004b672ba14850478c14'>
                                                            <Link to='#' id='copy-4'><FcCopyright className='big-font-size' /></Link>
                                                       </CopyToClipboard>
                                                       <UncontrolledTooltip
                                                            delay={0}
                                                            target='copy-4'
                                                            placement="top">
                                                            Copy
                                                       </UncontrolledTooltip>
                                                  </div>
                                                  <p><span className='description'>Nerve's 3Pool stableswap LP token</span></p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <Link to='#' id='tooltip_1000'>
                                                       <img className="w-5 h-5 inline mr-2 icon-img" src='https://nerve.fi/static/media/metamask.88dfbaa3.svg'/>
                                                  </Link>
                                                  <UncontrolledTooltip
                                                       delay={0}
                                                       target='tooltip_1000'
                                                       placement="top">
                                                       Add to Wallet
                                                  </UncontrolledTooltip>

                                                  <br/>

                                                  <Link to='#' id='tooltip_1001'>
                                                       <BsBoxArrowUpRight className='open-doc white-color' />
                                                  </Link>
                                                  <UncontrolledTooltip
                                                       delay={0}
                                                       target='tooltip_1001'
                                                       placement="bottom">
                                                       Open NRV Docs
                                                  </UncontrolledTooltip>
                                             </Col>
                                        </Row>
                                        <hr/>

                                        <Row>
                                             <Col sm="6">
                                                  <Link to='#' className='big-font-size'>
                                                       nrvTBC
                                                       <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/nerve.ab09a2eb.svg'/>
                                                  </Link>
                                                  <div className='white-color'>
                                                       0xD1D5Af92C606C6F2eC59D453f57A6FCc188D7dB5
                                                       <CopyToClipboard text='0xD1D5Af92C606C6F2eC59D453f57A6FCc188D7dB5'>
                                                            <Link to='#' id='copy-5'><FcCopyright className='big-font-size' /></Link>
                                                       </CopyToClipboard>
                                                       <UncontrolledTooltip
                                                            delay={0}
                                                            target='copy-5'
                                                            placement="top">
                                                            Copy
                                                       </UncontrolledTooltip>
                                                  </div>
                                                  <p><span className='description'>Nerve's BTCB/anyBTC LP token</span></p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <Link to='#' id='tooltip_1000'>
                                                       <img className="w-5 h-5 inline mr-2 icon-img" src='https://nerve.fi/static/media/metamask.88dfbaa3.svg'/>
                                                  </Link>
                                                  <UncontrolledTooltip
                                                       delay={0}
                                                       target='tooltip_1000'
                                                       placement="top">
                                                       Add to Wallet
                                                  </UncontrolledTooltip>
                                             </Col>
                                        </Row>
                                        <hr/>

                                        <Row>
                                             <Col sm="6">
                                                  <Link to='#' className='big-font-size'>
                                                       nrvETH
                                                       <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/nerve.ab09a2eb.svg'/>
                                                  </Link>
                                                  <div className='white-color'>
                                                       0x0d283BF16A9bdE49cfC48d8dc050AF28b71bdD90
                                                       <CopyToClipboard text='0x0d283BF16A9bdE49cfC48d8dc050AF28b71bdD90'>
                                                            <Link to='#' id='copy-6'><FcCopyright className='big-font-size' /></Link>
                                                       </CopyToClipboard>
                                                       <UncontrolledTooltip
                                                            delay={0}
                                                            target='copy-6'
                                                            placement="top">
                                                            Copy
                                                       </UncontrolledTooltip>
                                                  </div>
                                                  <p><span className='description'>Nerve's ETH/anyETH LP token</span></p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <Link to='#' id='tooltip_1000'>
                                                       <img className="w-5 h-5 inline mr-2 icon-img" src='https://nerve.fi/static/media/metamask.88dfbaa3.svg'/>
                                                  </Link>
                                                  <UncontrolledTooltip
                                                       delay={0}
                                                       target='tooltip_1000'
                                                       placement="top">
                                                       Add to Wallet
                                                  </UncontrolledTooltip>
                                             </Col>
                                        </Row>
                                        <hr/>

                                   </CardBody>
                              </Card>
                         </Col>
                    </Row>    

                    <Row className='claim-card'>
                         <Col md="12">
                              <Card className="nerve-card">
                                   <CardHeader>
                                        <Row>
                                             <Col sm="12">
                                                  <h3 className="gradient-color-3">BTC Tokens</h3>
                                             </Col>
                                        </Row>
                                   </CardHeader>
                                   <CardBody>

                                        <Row>
                                             <Col sm="6">
                                                  <Link to='#' className='big-font-size'>
                                                       anyBTC
                                                       <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/anybtc.b81d670a.svg'/>
                                                  </Link>
                                                  <div className='white-color'>
                                                       0x54261774905f3e6e9718f2abb10ed6555cae308a
                                                       <CopyToClipboard text='0x54261774905f3e6e9718f2abb10ed6555cae308a'>
                                                            <Link to='#' id='copy-7'><FcCopyright className='big-font-size' /></Link>
                                                       </CopyToClipboard>
                                                       <UncontrolledTooltip
                                                            delay={0}
                                                            target='copy-7'
                                                            placement="top">
                                                            Copy
                                                       </UncontrolledTooltip>
                                                  </div>
                                                  <p><span className='description'>Anyswap's anyBTC token</span></p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <Link to='#' id='tooltip_1000'>
                                                       <img className="w-5 h-5 inline mr-2 icon-img" src='https://nerve.fi/static/media/metamask.88dfbaa3.svg'/>
                                                  </Link>
                                                  <UncontrolledTooltip
                                                       delay={0}
                                                       target='tooltip_1000'
                                                       placement="top">
                                                       Add to Wallet
                                                  </UncontrolledTooltip>
                                             </Col>
                                        </Row>
                                        <hr/>

                                        <Row>
                                             <Col sm="6">
                                                  <Link to='#' className='big-font-size'>
                                                       BTCB
                                                       <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/btcbep.b1a0507c.svg'/>
                                                  </Link>
                                                  <div className='white-color'>
                                                       0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c
                                                       <CopyToClipboard text='0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c'>
                                                            <Link to='#' id='copy-8'><FcCopyright className='big-font-size' /></Link>
                                                       </CopyToClipboard>
                                                       <UncontrolledTooltip
                                                            delay={0}
                                                            target='copy-8'
                                                            placement="top">
                                                            Copy
                                                       </UncontrolledTooltip>
                                                  </div>
                                                  <p><span className='description'>Binance's BTCB is a BEP-20 token that is fully backed by Bitcoin (BTC)</span></p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <Link to='#' id='tooltip_1000'>
                                                       <img className="w-5 h-5 inline mr-2 icon-img" src='https://nerve.fi/static/media/metamask.88dfbaa3.svg'/>
                                                  </Link>
                                                  <UncontrolledTooltip
                                                       delay={0}
                                                       target='tooltip_1000'
                                                       placement="top">
                                                       Add to Wallet
                                                  </UncontrolledTooltip>
                                             </Col>
                                        </Row>
                                        <hr/>

                                   </CardBody>
                              </Card>
                         </Col>
                    </Row>    

                    <Row className='claim-card'>
                         <Col md="12">
                              <Card className="nerve-card">
                                   <CardHeader>
                                        <Row>
                                             <Col sm="12">
                                                  <h3 className="gradient-color-3">ETH Tokens</h3>
                                             </Col>
                                        </Row>
                                   </CardHeader>
                                   <CardBody>

                                        <Row>
                                             <Col sm="6">
                                                  <Link to='#' className='big-font-size'>
                                                       anyETH
                                                       <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/eth.9270fc02.svg'/>
                                                  </Link>
                                                  <div className='white-color'>
                                                       0x6f817a0ce8f7640add3bc0c1c2298635043c2423
                                                       <CopyToClipboard text='0x6f817a0ce8f7640add3bc0c1c2298635043c2423'>
                                                            <Link to='#' id='copy-7'><FcCopyright className='big-font-size' /></Link>
                                                       </CopyToClipboard>
                                                       <UncontrolledTooltip
                                                            delay={0}
                                                            target='copy-7'
                                                            placement="top">
                                                            Copy
                                                       </UncontrolledTooltip>
                                                  </div>
                                                  <p><span className='description'>Anyswap's anyETH token</span></p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <Link to='#' id='tooltip_1000'>
                                                       <img className="w-5 h-5 inline mr-2 icon-img" src='https://nerve.fi/static/media/metamask.88dfbaa3.svg'/>
                                                  </Link>
                                                  <UncontrolledTooltip
                                                       delay={0}
                                                       target='tooltip_1000'
                                                       placement="top">
                                                       Add to Wallet
                                                  </UncontrolledTooltip>
                                             </Col>
                                        </Row>
                                        <hr/>

                                        <Row>
                                             <Col sm="6">
                                                  <Link to='#' className='big-font-size'>
                                                       ETH
                                                       <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/ethbep.d9ff545a.svg'/>
                                                  </Link>
                                                  <div className='white-color'>
                                                       0x2170ed0880ac9a755fd29b2688956bd959f933f8
                                                       <CopyToClipboard text='0x2170ed0880ac9a755fd29b2688956bd959f933f8'>
                                                            <Link to='#' id='copy-8'><FcCopyright className='big-font-size' /></Link>
                                                       </CopyToClipboard>
                                                       <UncontrolledTooltip
                                                            delay={0}
                                                            target='copy-8'
                                                            placement="top">
                                                            Copy
                                                       </UncontrolledTooltip>
                                                  </div>
                                                  <p><span className='description'>Binance's ETH is a BEP-20 token that is fully backed by Ethereum (ETH)</span></p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <Link to='#' id='tooltip_1000'>
                                                       <img className="w-5 h-5 inline mr-2 icon-img" src='https://nerve.fi/static/media/metamask.88dfbaa3.svg'/>
                                                  </Link>
                                                  <UncontrolledTooltip
                                                       delay={0}
                                                       target='tooltip_1000'
                                                       placement="top">
                                                       Add to Wallet
                                                  </UncontrolledTooltip>
                                             </Col>
                                        </Row>
                                        <hr/>

                                   </CardBody>
                              </Card>
                         </Col>
                    </Row> 

                    <Row className='claim-card'>
                         <Col md="12">
                              <Card className="nerve-card">
                                   <CardHeader>
                                        <Row>
                                             <Col sm="12">
                                                  <h3 className="gradient-color-3">USD Stablecoins</h3>
                                             </Col>
                                        </Row>
                                   </CardHeader>
                                   <CardBody>

                                        <Row>
                                             <Col sm="6">
                                                  <Link to='#' className='big-font-size'>
                                                       BUSD
                                                       <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/busd.488237bc.svg'/>
                                                  </Link>
                                                  <div className='white-color'>
                                                       0xe9e7cea3dedca5984780bafc599bd69add087d56
                                                       <CopyToClipboard text='0xe9e7cea3dedca5984780bafc599bd69add087d56'>
                                                            <Link to='#' id='copy-7'><FcCopyright className='big-font-size' /></Link>
                                                       </CopyToClipboard>
                                                       <UncontrolledTooltip
                                                            delay={0}
                                                            target='copy-7'
                                                            placement="top">
                                                            Copy
                                                       </UncontrolledTooltip>
                                                  </div>
                                                  <p><span className='description'>BUSD is a stablecoin that is pegged to the US dollar and backed/issued by Binance</span></p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <Link to='#' id='tooltip_1000'>
                                                       <img className="w-5 h-5 inline mr-2 icon-img" src='https://nerve.fi/static/media/metamask.88dfbaa3.svg'/>
                                                  </Link>
                                                  <UncontrolledTooltip
                                                       delay={0}
                                                       target='tooltip_1000'
                                                       placement="top">
                                                       Add to Wallet
                                                  </UncontrolledTooltip>
                                             </Col>
                                        </Row>
                                        <hr/>

                                        <Row>
                                             <Col sm="6">
                                                  <Link to='#' className='big-font-size'>
                                                       USDC
                                                       <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/usdc.f08e02b1.svg'/>
                                                  </Link>
                                                  <div className='white-color'>
                                                       0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d
                                                       <CopyToClipboard text='0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'>
                                                            <Link to='#' id='copy-8'><FcCopyright className='big-font-size' /></Link>
                                                       </CopyToClipboard>
                                                       <UncontrolledTooltip
                                                            delay={0}
                                                            target='copy-8'
                                                            placement="top">
                                                            Copy
                                                       </UncontrolledTooltip>
                                                  </div>
                                                  <p><span className='description'>USD Coin (known by its ticker USDC) is a stablecoin that is pegged to the U.S. dollar on a 1:1 basis. Every unit of this cryptocurrency in circulation is backed up by $1 that is held in reserve</span></p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <Link to='#' id='tooltip_1000'>
                                                       <img className="w-5 h-5 inline mr-2 icon-img" src='https://nerve.fi/static/media/metamask.88dfbaa3.svg'/>
                                                  </Link>
                                                  <UncontrolledTooltip
                                                       delay={0}
                                                       target='tooltip_1000'
                                                       placement="top">
                                                       Add to Wallet
                                                  </UncontrolledTooltip>
                                             </Col>
                                        </Row>
                                        <hr/>

                                        <Row>
                                             <Col sm="6">
                                                  <Link to='#' className='big-font-size'>
                                                       USDT
                                                       <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/usdt.6dc09781.svg'/>
                                                  </Link>
                                                  <div className='white-color'>
                                                       0x55d398326f99059ff775485246999027b3197955
                                                       <CopyToClipboard text='0x55d398326f99059ff775485246999027b3197955'>
                                                            <Link to='#' id='copy-7'><FcCopyright className='big-font-size' /></Link>
                                                       </CopyToClipboard>
                                                       <UncontrolledTooltip
                                                            delay={0}
                                                            target='copy-7'
                                                            placement="top">
                                                            Copy
                                                       </UncontrolledTooltip>
                                                  </div>
                                                  <p><span className='description'>USDT mirrors the price of the U.S. dollar, issued by a Hong Kong-based company Tether. The token’s peg to the USD is achieved via maintaining a sum of dollars in reserves equal to the number of USDT in circulation.</span></p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <Link to='#' id='tooltip_1000'>
                                                       <img className="w-5 h-5 inline mr-2 icon-img" src='https://nerve.fi/static/media/metamask.88dfbaa3.svg'/>
                                                  </Link>
                                                  <UncontrolledTooltip
                                                       delay={0}
                                                       target='tooltip_1000'
                                                       placement="top">
                                                       Add to Wallet
                                                  </UncontrolledTooltip>
                                             </Col>
                                        </Row>
                                        <hr/>

                                        <Row>
                                             <Col sm="6">
                                                  <Link to='#' className='big-font-size'>
                                                       rUSD
                                                       <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFf0lEQVR4Xu2a/2vVZRTHLe6+78qNgoKK7BtOy1qlIX2xspCIshl9mUPkWtoXUbIWCZa4GBhRcQshIooFBUIQ0Q+ZmrYyK8siv9zNbW5ubmmZ1f6E03O2e+ez9z3n83mez+a6u7sveP/yPO9znvOcnT33MjZtWpEiRYr8T8RSn90ZS32ewvUpQez1T8kW7hcssVc/oSChv2Aoad5KPsL4SUvJpo9pLMJ8k4emlkTJSx/SuGhDSxLT5zWl6z+gsyE8J+8obXyPXBU1DmPzgtJn3yFXYawNesOE8RNO2Zot5KryNVuaMF4DY8OE8RNC2dNvkasw1hXME6SSValajD8rlK18k1yFsTbxmgayhfs2mDdIGDtulCdfI1dhrA1e3LUJeEaYMD4y5cs2k6sw1gYva19YW5fAM8OE8d5U1DdTmDDGxlyoxeWC6NF8WbAGTRjnTcUjTRSgQfTb4IUSNfUz0INgTGgjcmsaJfR7U7FkI0lCnw1eIOwSEhgflgPrc6nTicoHNhAKPVmw4LCiXcB8Rkn0MFhjWK3OVN73IqHQIxSZ4xkrYfmxRq1WbyoXNRIKPUGFqXxxkEbkSHxmw6B2Ftao1epN1cJ1hEKPVJDGOebCmtCrIZ2HNWq1elO1YC2h0CMVhCR2plsTO9IUpnO3hTdCOg9r1Gr1purW1YRCj1SQzYyvj5Cvgn41pPOwRq1Wb6rnP0Uo9EgFMffs66HaPV2RpTVBOg9r1Gr1pnruSkKhRyqIWfxzL93+Qzdd820nLfyxx1lhD6R0Htao1epN9Q0rCIUeqSDm0V+P06J9x+im77roCjPW5+9M00O/9KkadXHfBgh1SrV6E5+znFA5HqEgJvlbPz24/8wUXLy7nSq3H6b7zWSsOjgwIt7PubhnA7BGrVZv4rOXESrHIxTEPHPod6rPTMFcMwVXtg5PQWzboaHLrW8/SVeZtQu/aqMq05icy/s0QKhTqtWb7GG2NA+uP58+SSsO9NPizBRcy1Owq33ksneYtRtNY65u7aCLdrVR3KwPfR+I0gChTvREAhNKSbX1l4/8QautKZi3d/QU8CN5l3n0eDpmftMx9CsyfceZCZn0DdjcdYpeaBueAn4LFmSm4JLdw1Ow3LwRS/b30d2mCTfvPUqzzd6lZu8806DSLzNNEJDOwxolTyQwoZRUW091n6aNmSl4zJoC/r3nKVh7+ATxQ8mfAPydYb5pAj+Wl2U+MYaaICCdhzVKnkhgQimptv5u799kT0FdZgrmZKaAm7MufYIePzBAD5sm3PvTMbrl+6N03Z5Outw04QLzOGJORjoPa5Q8kcCEUlJtnclOgf2JMM/8pHkK3uj+izZ1/EnPmSY8YZrA3xu4CbeZJl1vmoC5skjnYY2SJxKYUEqqrds0mingnzS/Bfz68xS83/cPcYNeMU3g/SfNdwJuEsYi0nlYo+SJBCaUkmrrEnxB/inzFGwdGKSW4//S2z2nqbnzlFM8I52HNUqeSGBCKWnQnga/BdwA1kf9g3W4r6GdhTVKnkhgQikp7kuesYL5+a9DgfvjVQcmlJLifpDXF8yn5URPkNcLTCglxXX0J2qTCdvvAuaQzrVBr0uME5hQShq2ru1LYExYHHpR6PcGE0pJtXUGYzUf4+pj0KsJ47zBhFJSbd0Gc9h+XI/XLG21Y21yvcHC+MgEJdXWJbBAFPqzxGctrUNvkDB+XNCSa+tBYMHTaxqa0GODfk1RHtwxozVAW7fBC+A+gn5LveidMLTisUjczxJ3/B+CLDwtrt4JQSsELyV5bNAb5s8rpH9+wMu4Xgy9Yf68BS8hCWNsfLx5CV4gSBhbMOBFA2U+6zG+YMi5bIAwtqDAy6LQX7BM2YvbTOnLFylSJC/4D7SkEyM13abkAAAAAElFTkSuQmCC'/>
                                                  </Link>
                                                  <div className='white-color'>
                                                       0x07663837218a003e66310a01596af4bf4e44623d
                                                       <CopyToClipboard text='0x07663837218a003e66310a01596af4bf4e44623d'>
                                                            <Link to='#' id='copy-7'><FcCopyright className='big-font-size' /></Link>
                                                       </CopyToClipboard>
                                                       <UncontrolledTooltip
                                                            delay={0}
                                                            target='copy-7'
                                                            placement="top">
                                                            Copy
                                                       </UncontrolledTooltip>
                                                  </div>
                                                  <p><span className='description'>Ramps's rUSD is a BEP-20 stablecoin that can be borrowed</span></p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <Link to='#' id='tooltip_1000'>
                                                       <img className="w-5 h-5 inline mr-2 icon-img" src='https://nerve.fi/static/media/metamask.88dfbaa3.svg'/>
                                                  </Link>
                                                  <UncontrolledTooltip
                                                       delay={0}
                                                       target='tooltip_1000'
                                                       placement="top">
                                                       Add to Wallet
                                                  </UncontrolledTooltip>
                                             </Col>
                                        </Row>
                                        <hr/>

                                        <Row>
                                             <Col sm="6">
                                                  <Link to='#' className='big-font-size'>
                                                       fUSDT
                                                       <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/usdt.6dc09781.svg'/>
                                                  </Link>
                                                  <div className='white-color'>
                                                       0x049d68029688eabf473097a2fc38ef61633a3c7a
                                                       <CopyToClipboard text='0x049d68029688eabf473097a2fc38ef61633a3c7a'>
                                                            <Link to='#' id='copy-7'><FcCopyright className='big-font-size' /></Link>
                                                       </CopyToClipboard>
                                                       <UncontrolledTooltip
                                                            delay={0}
                                                            target='copy-7'
                                                            placement="top">
                                                            Copy
                                                       </UncontrolledTooltip>
                                                  </div>
                                                  <p><span className='description'>Frapped USDT an wrapper for USDT tokens aiding in multichain compatability</span></p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <Link to='#' id='tooltip_1000'>
                                                       <img className="w-5 h-5 inline mr-2 icon-img" src='https://nerve.fi/static/media/metamask.88dfbaa3.svg'/>
                                                  </Link>
                                                  <UncontrolledTooltip
                                                       delay={0}
                                                       target='tooltip_1000'
                                                       placement="top">
                                                       Add to Wallet
                                                  </UncontrolledTooltip>
                                             </Col>
                                        </Row>
                                        <hr/>

                                   </CardBody>
                              </Card>
                         </Col>
                    </Row> 
               </div>
          </>
     );
};
export default Portfolio;
