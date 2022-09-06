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
} from "reactstrap";
import Select from "react-select";
import NotificationAlert from "react-notification-alert";
import { Audio } from  'react-loader-spinner'
import { connect } from "react-redux";

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
                                                  <h3 className="gradient-color-3" >NRV Balances</h3>
                                             </Col>
                                        </Row>
                                   </CardHeader>
                                   <CardBody>
                                        <Row>
                                             <Col sm="6">
                                                  <Link to='/xNRV' className='big-font-size'>
                                                       NRV 
                                                       <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/nerve.ab09a2eb.svg'/>
                                                  </Link>
                                                  <p>Nerve</p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <Link to=''>Total Balance</Link>
                                                  <span>&nbsp;&nbsp;&nbsp;</span>
                                                  <span>0.00</span>
                                             </Col>
                                        </Row>
                                        <hr/>

                                        <Row>
                                             <Col sm="6">
                                                  <Link to='/xNRV' className='big-font-size'>
                                                       xNRV 
                                                       <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/nerve.ab09a2eb.svg'/>
                                                  </Link>
                                                  <p>xNerve</p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <Link to=''>Total Balance</Link>
                                                  <span>&nbsp;&nbsp;&nbsp;</span>
                                                  <span>0.00</span>
                                                  <br/>
                                                  <Link to=''>Staked Balance</Link>
                                                  <span>&nbsp;&nbsp;&nbsp;</span>
                                                  <span>0.00</span>
                                             </Col>
                                        </Row>
                                        <hr/>

                                        <Row>
                                             <Col sm="6">
                                                  <Link to='//pancakeswap.finance/swap#/add/0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56' target='_blank' className='big-font-size'>
                                                       Cake-LP V2 
                                                       <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/pancake.285bc1bc.svg'/>
                                                  </Link>
                                                  <p>NRV/BUSD Cake-LP V2</p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <Link to=''>Total Balance</Link>
                                                  <span>&nbsp;&nbsp;&nbsp;</span>
                                                  <span>0.00</span>
                                                  <br/>
                                                  <Link to=''>Staked Balance</Link>
                                                  <span>&nbsp;&nbsp;&nbsp;</span>
                                                  <span>0.00</span>
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
                                                  <h3 className="gradient-color-3" >Swap Pool Balances</h3>
                                             </Col>
                                        </Row>
                                   </CardHeader>
                                   <CardBody>
                                        <Row>
                                             <Col sm="6">
                                                  <Link to='/3pool' className='big-font-size'>
                                                       3NRV-LP 
                                                       <span className="icon-group">
                                                            <img className="w-5 h-5 inline -mt-1 icon-pair-img" src='https://nerve.fi/static/media/busd.488237bc.svg'/>
                                                            <img className="w-5 h-5 inline -mt-1 icon-pair-img" src='https://nerve.fi/static/media/usdt.6dc09781.svg'/>
                                                            <img className="w-5 h-5 inline -mt-1 icon-pair-img" src='https://nerve.fi/static/media/usdc.f08e02b1.svg'/>
                                                       </span>
                                                  </Link>
                                                  <p>Nerve 3Pool LP Token</p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <Link to=''>Total Balance</Link>
                                                  <span>&nbsp;&nbsp;&nbsp;</span>
                                                  <span>0.00</span>
                                                  <br/>
                                                  <Link to=''>Staked Balance</Link>
                                                  <span>&nbsp;&nbsp;&nbsp;</span>
                                                  <span>0.00</span>
                                             </Col>
                                        </Row>

                                        <hr/>
                                        <Row>
                                             <Col sm="6">
                                                  <Link to='/anyBTC' className='big-font-size'>
                                                       nrvBTC 
                                                       <span className="icon-group">
                                                            <img className="w-5 h-5 inline -mt-1 icon-pair-img" src='https://nerve.fi/static/media/btcbep.b1a0507c.svg'/>
                                                            <img className="w-5 h-5 inline -mt-1 icon-pair-img" src='https://nerve.fi/static/media/anybtc.b81d670a.svg'/>
                                                       </span>
                                                  </Link>
                                                  <p>Nerve anyBTC/BTCB LP</p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <Link to=''>Total Balance</Link>
                                                  <span>&nbsp;&nbsp;&nbsp;</span>
                                                  <span>0.00</span>
                                                  <br/>
                                                  <Link to=''>Staked Balance</Link>
                                                  <span>&nbsp;&nbsp;&nbsp;</span>
                                                  <span>0.00</span>
                                             </Col>
                                        </Row>
                                        <hr/>

                                        <Row>
                                             <Col sm="6">
                                                  <Link to='/anyETH' className='big-font-size'>
                                                       nrvETH 
                                                       <span className="icon-group">
                                                            <img className="w-5 h-5 inline -mt-1 icon-pair-img" src='https://nerve.fi/static/media/ethbep.d9ff545a.svg'/>
                                                            <img className="w-5 h-5 inline -mt-1 icon-pair-img" src='https://nerve.fi/static/media/eth.9270fc02.svg'/>
                                                       </span>
                                                  </Link>
                                                  <p>Nerve anyETH/ETH LP</p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <Link to=''>Total Balance</Link>
                                                  <span>&nbsp;&nbsp;&nbsp;</span>
                                                  <span>0.00</span>
                                                  <br/>
                                                  <Link to=''>Staked Balance</Link>
                                                  <span>&nbsp;&nbsp;&nbsp;</span>
                                                  <span>0.00</span>
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
                                                  <h3 className="gradient-color-3" >anyToken Balances</h3>
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
                                                  <p>Anyswap BTC</p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <Link to=''>Total Balance</Link>
                                                  <span>&nbsp;&nbsp;&nbsp;</span>
                                                  <span>0.00</span>
                                             </Col>
                                        </Row>
                                        <hr/>

                                        <Row>
                                             <Col sm="6">
                                                  <Link to='#' className='big-font-size'>
                                                       anyETH
                                                       <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/eth.9270fc02.svg'/>

                                                  </Link>
                                                  <p>Anyswap Ethereum</p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <Link to=''>Total Balance</Link>
                                                  <span>&nbsp;&nbsp;&nbsp;</span>
                                                  <span>0.00</span>
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
