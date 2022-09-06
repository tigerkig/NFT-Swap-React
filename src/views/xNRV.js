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
import { BsInfoCircle } from "react-icons/bs";

import "./app.css";

const XNRV = (props) => {
     //loading
     const [loading, setLoading] = useState(false);

     return (
          <>
               {loading && <Audio type="Puff" color="#00BFFF" height={100} width={'100%'} wrapperClass="loadingDiv"/>}

               <div className="content">
                    <Row className='claim-card'>
                         <Col md="12">
                              <Card className="nerve-medinum-card">
                                   <CardHeader>
                                        <Row>
                                             <Col sm="12">
                                                  <h3 className="gradient-color-3" >xNRV Mint</h3>
                                             </Col>
                                        </Row>
                                   </CardHeader>
                                   <CardBody>
                                        <Row>
                                             <Col sm="8 mb-3">
                                                  <div className="between">
                                                       <Label className="label-font-size">Mint</Label>
                                                       <Label className="label-font-size">Max:  <strong>0.0</strong></Label>
                                                  </div>
                                                  <Input type="text"></Input>
                                             </Col>
                                             <Col sm="4 mb-3">
                                                  <Button color="general" className="NRV-button">Mint xNRV</Button>
                                             </Col>
                                        </Row>

                                        <Row>
                                             <Col sm="8 mb-3">
                                                  <div className="between">
                                                       <Label className="label-font-size">Redeem</Label>
                                                       <Label className="label-font-size">Max:  <strong>0.0</strong></Label>
                                                  </div>
                                                  <Input type="text"></Input>
                                             </Col>
                                             <Col sm="4 mb-3">
                                                  <Button color="general" className="NRV-button">Redeem NRV</Button>
                                             </Col>
                                        </Row>

                                   </CardBody>
                              </Card>
                         </Col>
                    </Row>      

                    <Row className='claim-card'>
                         <Col md="12">
                              <Card className="nerve-medinum-card">
                                   <CardHeader>
                                        <Row>
                                             <Col sm="6">
                                                  <h3 className="gradient-color-3" >xNRV Staking</h3>
                                             </Col>
                                             <Col sm='6' className="text-end">
                                                  <h4 className="gradient-color-3" >Earning 8.78% APR <BsInfoCircle className="mouse-pointer NRV-color" id="info" /></h4>
                                                  <UncontrolledTooltip
                                                       delay={0}
                                                       target='info'
                                                       placement="top">
                                                       Daily APR&nbsp;&nbsp;    0.02% <br/>
                                                       Weekly APR&nbsp;&nbsp;   5.67% <br/>
                                                       Yearly APR&nbsp;&nbsp;   2.59% <br/>
                                                       Yearly APY&nbsp;&nbsp;   1.45%
                                                  </UncontrolledTooltip>
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
               </div>
          </>
     );
};
export default XNRV;
