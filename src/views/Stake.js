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
  Label,
  UncontrolledTooltip,
  Input,
} from "reactstrap";
import Select from "react-select";
import NotificationAlert from "react-notification-alert";
import { Audio } from  'react-loader-spinner'
import { connect } from "react-redux";
import { BsInfoCircle, BsBoxArrowUpRight } from "react-icons/bs";

import "./app.css";

const Stake = (props) => {
     //loading
     const [loading, setLoading] = useState(false);

     return (
          <>
               {loading && <Audio type="Puff" color="#00BFFF" height={100} width={'100%'} wrapperClass="loadingDiv"/>}

               <div className="content">   
                    <Row className='claim-card'>
                         <Col md="6">
                              <Card className="nerve-medinum-card">
                                   <CardHeader>
                                        <Row>
                                             <Col sm="7">
                                                  <h3 className="gradient-color-3 flex big-font-size" ><Link to='/3pool' className="-height">Stablecoin 3Pool &nbsp;</Link> Staking</h3>
                                             </Col>
                                             <Col sm='5' className="text-end">
                                                  <h4 className="gradient-color-3" >Earning 4.98% APR <BsInfoCircle className="mouse-pointer NRV-color" id="info-1" /></h4>
                                                  <UncontrolledTooltip
                                                       delay={0}
                                                       target='info-1'
                                                       placement="top">
                                                       Daily APR&nbsp;&nbsp;    0.02% <br/>
                                                       Weekly APR&nbsp;&nbsp;   5.67% <br/>
                                                       Yearly APR&nbsp;&nbsp;   2.59% <br/>
                                                       Yearly APY&nbsp;&nbsp;   1.45%
                                                  </UncontrolledTooltip>
                                                  <Link to='' className="abusolute-open">
                                                       <BsBoxArrowUpRight className='open-doc white-color' />
                                                  </Link>
                                             </Col>
                                        </Row>
                                   </CardHeader>
                                   <CardBody>
                                        <Row>
                                             <Col sm="8 mb-3">
                                                  <div className="between">
                                                       <Label className="label-font-size">Stake</Label>
                                                       <Label className="label-font-size">Max:  <strong>0.0</strong></Label>
                                                  </div>
                                                  <Input type="text"></Input>
                                             </Col>
                                             <Col sm="4 mb-3">
                                                  <Button color="general" className="NRV-button">Stake</Button>
                                             </Col>
                                        </Row>

                                        <Row>
                                             <Col sm="8 mb-3">
                                                  <div className="between">
                                                       <Label className="label-font-size">Unstake</Label>
                                                       <Label className="label-font-size">Max:  <strong>0.0</strong></Label>
                                                  </div>
                                                  <Input type="text"></Input>
                                             </Col>
                                             <Col sm="4 mb-3">
                                                  <Button color="general" className="NRV-button">Unstake</Button>
                                             </Col>
                                        </Row>

                                        <Row>
                                             <Col sm='12'>
                                                  <Button color="general" className="NRV-button">Claim 0.0 NRV</Button>
                                             </Col>
                                        </Row>

                                   </CardBody>
                              </Card>
                         </Col>

                         <Col md="6">
                              <Card className="nerve-medinum-card">
                                   <CardHeader>
                                        <Row>
                                             <Col sm="7">
                                                  <h3 className="gradient-color-3 flex big-font-size" ><Link to='//pancakeswap.finance/swap#/add/0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56' className="-height">NRV/BUSD Cake-LP Pool &nbsp;</Link> Staking</h3>
                                                  
                                             </Col>
                                             <Col sm='5' className="text-end">
                                                  <h4 className="gradient-color-3" >Earning 71.86% APR <BsInfoCircle className="mouse-pointer NRV-color" id="info-2" /></h4>
                                                  <UncontrolledTooltip
                                                       delay={0}
                                                       target='info-2'
                                                       placement="top">
                                                       Daily APR&nbsp;&nbsp;    0.02% <br/>
                                                       Weekly APR&nbsp;&nbsp;   5.67% <br/>
                                                       Yearly APR&nbsp;&nbsp;   2.59% <br/>
                                                       Yearly APY&nbsp;&nbsp;   1.45%
                                                  </UncontrolledTooltip>
                                                  <Link to='' className="abusolute-open">
                                                       <BsBoxArrowUpRight className='open-doc white-color' />
                                                  </Link>
                                             </Col>
                                        </Row>
                                   </CardHeader>
                                   <CardBody>
                                        <Row>
                                             <Col sm="8 mb-3">
                                                  <div className="between">
                                                       <Label className="label-font-size">Stake</Label>
                                                       <Label className="label-font-size">Max:  <strong>0.0</strong></Label>
                                                  </div>
                                                  <Input type="text"></Input>
                                             </Col>
                                             <Col sm="4 mb-3">
                                                  <Button color="general" className="NRV-button">Stake</Button>
                                             </Col>
                                        </Row>

                                        <Row>
                                             <Col sm="8 mb-3">
                                                  <div className="between">
                                                       <Label className="label-font-size">Unstake</Label>
                                                       <Label className="label-font-size">Max:  <strong>0.0</strong></Label>
                                                  </div>
                                                  <Input type="text"></Input>
                                             </Col>
                                             <Col sm="4 mb-3">
                                                  <Button color="general" className="NRV-button">Unstake</Button>
                                             </Col>
                                        </Row>

                                        <Row>
                                             <Col sm='12'>
                                                  <Button color="general" className="NRV-button">Claim 0.0 NRV</Button>
                                             </Col>
                                        </Row>

                                   </CardBody>
                              </Card>
                         </Col>
                    </Row>  

                    <Row className='claim-card'>
                         <Col md="6">
                              <Card className="nerve-medinum-card">
                                   <CardHeader>
                                        <Row>
                                             <Col sm="7">
                                                  <h3 className="gradient-color-3 flex big-font-size" ><Link to='/ust' className="-height">UST Metapool &nbsp;</Link> Staking</h3>
                                             </Col>
                                             <Col sm='5' className="text-end">
                                                  <h4 className="gradient-color-3" >Earning 1.01% APR <BsInfoCircle className="mouse-pointer NRV-color" id="info-3" /></h4>
                                                  <UncontrolledTooltip
                                                       delay={0}
                                                       target='info-3'
                                                       placement="top">
                                                       Daily APR&nbsp;&nbsp;    0.02% <br/>
                                                       Weekly APR&nbsp;&nbsp;   5.67% <br/>
                                                       Yearly APR&nbsp;&nbsp;   2.59% <br/>
                                                       Yearly APY&nbsp;&nbsp;   1.45%
                                                  </UncontrolledTooltip>
                                                  <Link to='' className="abusolute-open">
                                                       <BsBoxArrowUpRight className='open-doc white-color' />
                                                  </Link>
                                             </Col>
                                        </Row>
                                   </CardHeader>
                                   <CardBody>
                                        <Row>
                                             <Col sm="8 mb-3">
                                                  <div className="between">
                                                       <Label className="label-font-size">Stake</Label>
                                                       <Label className="label-font-size">Max:  <strong>0.0</strong></Label>
                                                  </div>
                                                  <Input type="text"></Input>
                                             </Col>
                                             <Col sm="4 mb-3">
                                                  <Button color="general" className="NRV-button">Stake</Button>
                                             </Col>
                                        </Row>

                                        <Row>
                                             <Col sm="8 mb-3">
                                                  <div className="between">
                                                       <Label className="label-font-size">Unstake</Label>
                                                       <Label className="label-font-size">Max:  <strong>0.0</strong></Label>
                                                  </div>
                                                  <Input type="text"></Input>
                                             </Col>
                                             <Col sm="4 mb-3">
                                                  <Button color="general" className="NRV-button">Unstake</Button>
                                             </Col>
                                        </Row>

                                        <Row>
                                             <Col sm='12'>
                                                  <Button color="general" className="NRV-button">Claim 0.0 NRV</Button>
                                             </Col>
                                        </Row>

                                   </CardBody>
                              </Card>
                         </Col>

                         <Col md="6">
                              <Card className="nerve-medinum-card">
                                   <CardHeader>
                                        <Row>
                                             <Col sm="7">
                                                  <h3 className="gradient-color-3 flex big-font-size" ><Link to='/fusdt' className="-height">fUSDT Metapool &nbsp;</Link> Staking</h3>
                                                  
                                             </Col>
                                             <Col sm='5' className="text-end">
                                                  <h4 className="gradient-color-3" >Earning 0.65% APR <BsInfoCircle className="mouse-pointer NRV-color" id="info-4" /></h4>
                                                  <UncontrolledTooltip
                                                       delay={0}
                                                       target='info-4'
                                                       placement="top">
                                                       Daily APR&nbsp;&nbsp;    0.02% <br/>
                                                       Weekly APR&nbsp;&nbsp;   5.67% <br/>
                                                       Yearly APR&nbsp;&nbsp;   2.59% <br/>
                                                       Yearly APY&nbsp;&nbsp;   1.45%
                                                  </UncontrolledTooltip>
                                                  <Link to='' className="abusolute-open">
                                                       <BsBoxArrowUpRight className='open-doc white-color' />
                                                  </Link>
                                             </Col>
                                        </Row>
                                   </CardHeader>
                                   <CardBody>
                                        <Row>
                                             <Col sm="8 mb-3">
                                                  <div className="between">
                                                       <Label className="label-font-size">Stake</Label>
                                                       <Label className="label-font-size">Max:  <strong>0.0</strong></Label>
                                                  </div>
                                                  <Input type="text"></Input>
                                             </Col>
                                             <Col sm="4 mb-3">
                                                  <Button color="general" className="NRV-button">Stake</Button>
                                             </Col>
                                        </Row>

                                        <Row>
                                             <Col sm="8 mb-3">
                                                  <div className="between">
                                                       <Label className="label-font-size">Unstake</Label>
                                                       <Label className="label-font-size">Max:  <strong>0.0</strong></Label>
                                                  </div>
                                                  <Input type="text"></Input>
                                             </Col>
                                             <Col sm="4 mb-3">
                                                  <Button color="general" className="NRV-button">Unstake</Button>
                                             </Col>
                                        </Row>

                                        <Row>
                                             <Col sm='12'>
                                                  <Button color="general" className="NRV-button">Claim 0.0 NRV</Button>
                                             </Col>
                                        </Row>

                                   </CardBody>
                              </Card>
                         </Col>
                    </Row> 

                    <Row className='claim-card'>
                         <Col md="6">
                              <Card className="nerve-medinum-card">
                                   <CardHeader>
                                        <Row>
                                             <Col sm="7">
                                                  <h3 className="gradient-color-3 flex big-font-size" ><Link to='/anyBTC' className="-height">BTCB/anyBTC Pool &nbsp;</Link> Staking</h3>
                                             </Col>
                                             <Col sm='5' className="text-end">
                                                  <h4 className="gradient-color-3" >Earning 3.61% APR <BsInfoCircle className="mouse-pointer NRV-color" id="info-5" /></h4>
                                                  <UncontrolledTooltip
                                                       delay={0}
                                                       target='info-5'
                                                       placement="top">
                                                       Daily APR&nbsp;&nbsp;    0.02% <br/>
                                                       Weekly APR&nbsp;&nbsp;   5.67% <br/>
                                                       Yearly APR&nbsp;&nbsp;   2.59% <br/>
                                                       Yearly APY&nbsp;&nbsp;   1.45%
                                                  </UncontrolledTooltip>
                                                  <Link to='' className="abusolute-open">
                                                       <BsBoxArrowUpRight className='open-doc white-color' />
                                                  </Link>
                                             </Col>
                                        </Row>
                                   </CardHeader>
                                   <CardBody>
                                        <Row>
                                             <Col sm="8 mb-3">
                                                  <div className="between">
                                                       <Label className="label-font-size">Stake</Label>
                                                       <Label className="label-font-size">Max:  <strong>0.0</strong></Label>
                                                  </div>
                                                  <Input type="text"></Input>
                                             </Col>
                                             <Col sm="4 mb-3">
                                                  <Button color="general" className="NRV-button">Stake</Button>
                                             </Col>
                                        </Row>

                                        <Row>
                                             <Col sm="8 mb-3">
                                                  <div className="between">
                                                       <Label className="label-font-size">Unstake</Label>
                                                       <Label className="label-font-size">Max:  <strong>0.0</strong></Label>
                                                  </div>
                                                  <Input type="text"></Input>
                                             </Col>
                                             <Col sm="4 mb-3">
                                                  <Button color="general" className="NRV-button">Unstake</Button>
                                             </Col>
                                        </Row>

                                        <Row>
                                             <Col sm='12'>
                                                  <Button color="general" className="NRV-button">Claim 0.0 NRV</Button>
                                             </Col>
                                        </Row>

                                   </CardBody>
                              </Card>
                         </Col>

                         <Col md="6">
                              <Card className="nerve-medinum-card">
                                   <CardHeader>
                                        <Row>
                                             <Col sm="7">
                                                  <h3 className="gradient-color-3 flex big-font-size" ><Link to='/anyETH' className="-height">ETH/anyETH Pool &nbsp;</Link> Staking</h3>
                                                  
                                             </Col>
                                             <Col sm='5' className="text-end">
                                                  <h4 className="gradient-color-3" >Earning 9.56% APR <BsInfoCircle className="mouse-pointer NRV-color" id="info-6" /></h4>
                                                  <UncontrolledTooltip
                                                       delay={0}
                                                       target='info-6'
                                                       placement="top">
                                                       Daily APR&nbsp;&nbsp;    0.02% <br/>
                                                       Weekly APR&nbsp;&nbsp;   5.67% <br/>
                                                       Yearly APR&nbsp;&nbsp;   2.59% <br/>
                                                       Yearly APY&nbsp;&nbsp;   1.45%
                                                  </UncontrolledTooltip>
                                                  <Link to='' className="abusolute-open">
                                                       <BsBoxArrowUpRight className='open-doc white-color' />
                                                  </Link>
                                             </Col>
                                        </Row>
                                   </CardHeader>
                                   <CardBody>
                                        <Row>
                                             <Col sm="8 mb-3">
                                                  <div className="between">
                                                       <Label className="label-font-size">Stake</Label>
                                                       <Label className="label-font-size">Max:  <strong>0.0</strong></Label>
                                                  </div>
                                                  <Input type="text"></Input>
                                             </Col>
                                             <Col sm="4 mb-3">
                                                  <Button color="general" className="NRV-button">Stake</Button>
                                             </Col>
                                        </Row>

                                        <Row>
                                             <Col sm="8 mb-3">
                                                  <div className="between">
                                                       <Label className="label-font-size">Unstake</Label>
                                                       <Label className="label-font-size">Max:  <strong>0.0</strong></Label>
                                                  </div>
                                                  <Input type="text"></Input>
                                             </Col>
                                             <Col sm="4 mb-3">
                                                  <Button color="general" className="NRV-button">Unstake</Button>
                                             </Col>
                                        </Row>

                                        <Row>
                                             <Col sm='12'>
                                                  <Button color="general" className="NRV-button">Claim 0.0 NRV</Button>
                                             </Col>
                                        </Row>

                                   </CardBody>
                              </Card>
                         </Col>
                    </Row> 

                    <Row className='claim-card'>
                         <Col md="6">
                              <Card className="nerve-medinum-card">
                                   <CardHeader>
                                        <Row>
                                             <Col sm="12">
                                                  <h3 className="gradient-color-3 flex big-font-size" >Other Staking</h3>
                                             </Col>
                                        </Row>
                                   </CardHeader>
                                   <CardBody>
                                        <Row>
                                             <Col sm='12'>
                                                  <Button color="general" style={{width: '100%'}}>Visit Ramp to stake nrvRUSD &nbsp; <BsBoxArrowUpRight className='open-doc white-color with-button-icon' /></Button>
                                             </Col>
                                             <Col sm='12'>
                                                  <Button color="general" style={{width: '100%'}}>Stake NRV/xNRV &nbsp; <BsBoxArrowUpRight className='open-doc white-color with-button-icon' /></Button>
                                             </Col>
                                        </Row>

                                   </CardBody>
                              </Card>
                         </Col>
                    </Row> 
               </div>
          </>
     );
};
export default Stake;
