import React, { useState, useEffect } from "react";
import Slider from "nouislider";

// import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Label,
  FormGroup,
  Input,
} from "reactstrap";
import Select from "react-select";
import NotificationAlert from "react-notification-alert";
import { Audio } from  'react-loader-spinner'
import { connect } from "react-redux";

import { BsPlusSquareDotted, BsDashSquareDotted, BsBoxArrowUpRight } from "react-icons/bs";

import "./app.css";

const POOL3 = (props) => {
     //loading
     const [loading, setLoading] = useState(false);
     const [isShow, setIsShow] = useState(false);
     const [sliderValue, setSliderValue] = useState(false);

     const slider1Ref = React.useRef(null);

     React.useEffect(() => {
       var slider1 = slider1Ref.current;
       if (slider1 && slider1.className === "slider slider-primary mb-3") {
          Slider.create(slider1, {
               start: [40],
               connect: [true, false],
               step: 1,
               range: { min: 0, max: 100 }
          })
          slider1.noUiSlider.on('update', function (values, handle) {
               setSliderValue(Math.round(values[handle]))
          })
       }
     }, [])
     

     const isShowMoreInfo = (index) => {
          setIsShow(!isShow)          
     }

     const change = (event) => {}

     return (
          <>
               {loading && <Audio type="Puff" color="#00BFFF" height={100} width={'100%'} wrapperClass="loadingDiv"/>}

               <div className="content">
                    <Row className='claim-card'>
                         <Col md="12">
                              <Card className="nerve-medinum-card">
                                   <CardHeader>
                                        <Row>
                                             <Col sm="6">
                                                  <h3 className="gradient-color-3" >Stablecoin 3Pool</h3>
                                             </Col>
                                             <Col sm='6' className="text-end">
                                                  <h4 className="gradient-color-3" >APY: 5.13%</h4>
                                             </Col>
                                        </Row>
                                   </CardHeader>
                                   <CardBody>
                                        <Row>
                                             <Col sm="6 mb-3">
                                                  <Button color="general" className={isShow ? "fullWidth disabled-button" : "fullWidth" } onClick={() => isShowMoreInfo(false)}><BsPlusSquareDotted className='open-doc white-color'/>&nbsp; Add Liquidity</Button>
                                             </Col>
                                             <Col sm="6 mb-3">
                                                  <Button color="general" className={isShow ? "fullWidth" : "fullWidth disabled-button" } onClick={() => isShowMoreInfo(true)}><BsDashSquareDotted className='open-doc white-color'/>&nbsp; Remove Liquidity</Button>
                                             </Col>
                                        </Row>


                                        {isShow && 
                                             <Row>
                                                  <Col sm='6 mb-3' >
                                                       <h4>Withdraw Percentage(%)</h4>
                                                  </Col>
                                                  <Col sm='6 mb-3'>
                                                       <Input type='number' value={sliderValue} onChange={(event) => change(event)}/>
                                                  </Col>
                                             </Row>
                                        }
                                             <Row className={isShow ? "" : "hidden"}>
                                                  <Col sm='12 mb-3' >
                                                       <div className="slider slider-primary mb-3" ref={slider1Ref}/>
                                                  </Col>
                                             </Row>
                                        {isShow && 

                                             <Row>
                                                  <Col sm='6 mb-3'>
                                                       <FormGroup check className="form-check-radio">
                                                            <Label check>
                                                                 <Input
                                                                      defaultChecked
                                                                      defaultValue="Combo"
                                                                      name="selectTokenType"
                                                                      type="radio"/>
                                                                 <span className="form-check-sign" />
                                                                 Combo
                                                            </Label>
                                                       </FormGroup>
                                                       <FormGroup check className="form-check-radio">
                                                            <Label check>
                                                                 <Input
                                                                      defaultValue="Tether"
                                                                      name="selectTokenType"
                                                                      type="radio"/>
                                                                 <span className="form-check-sign" />
                                                                 USD Tether
                                                            </Label>
                                                       </FormGroup>
                                                  </Col>
                                                  <Col sm='6 mb-3'>
                                                       <FormGroup check className="form-check-radio">
                                                            <Label check>
                                                                 <Input
                                                                      defaultChecked
                                                                      defaultValue="Binance"
                                                                      name="selectTokenType"
                                                                      type="radio"/>
                                                                 <span className="form-check-sign" />
                                                                 Binance USD
                                                            </Label>
                                                       </FormGroup>
                                                       <FormGroup check className="form-check-radio">
                                                            <Label check>
                                                                 <Input
                                                                      defaultValue="Circle"
                                                                      name="selectTokenType"
                                                                      type="radio"/>
                                                                 <span className="form-check-sign" />
                                                                 USD Circle
                                                            </Label>
                                                       </FormGroup>
                                                  </Col>
                                             </Row>
                                         }
                                        

                                        <Row>
                                             <Col sm="12 mb-3">
                                                  <div className="between">
                                                       <Label className="label-font-size">
                                                            <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/busd.488237bc.svg'/>
                                                            BUSD
                                                       </Label>
                                                       <Label className="label-font-size">Max:  <strong>0.0</strong></Label>
                                                  </div>
                                                  <Input type="text"></Input>
                                             </Col>

                                             <Col sm="12 mb-3">
                                                  <div className="between">
                                                       <Label className="label-font-size">
                                                            <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/usdt.6dc09781.svg'/>
                                                            USDT
                                                       </Label>
                                                       <Label className="label-font-size">Max:  <strong>0.0</strong></Label>
                                                  </div>
                                                  <Input type="text"></Input>
                                             </Col>

                                             <Col sm="12 mb-3">
                                                  <div className="between">
                                                       <Label className="label-font-size">
                                                            <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/usdc.f08e02b1.svg'/>
                                                            USDC
                                                       </Label>
                                                       <Label className="label-font-size">Max:  <strong>0.0</strong></Label>
                                                  </div>
                                                  <Input type="text"></Input>
                                             </Col>
                                        </Row>

                                        <Row>
                                             <Col sm='12'>
                                                  <Button color="general" className="fullWidth">Claim 0.0 NRV</Button>
                                             </Col>
                                             <Col sm='12'>
                                                  <Button className="fullWidth">Stake Stablecoin 3Pool  <BsBoxArrowUpRight className='open-doc white-color with-button-icon' /></Button>
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
                                             <Col sm="12">
                                                  <h3 className="gradient-color-3" >Currency Reserves</h3>
                                             </Col>
                                        </Row>
                                   </CardHeader>
                                   <CardBody>
                                        <Row>
                                             <Col sm="6">
                                                  <div className='flex'>
                                                       <div className="item-center">
                                                            <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/busd.488237bc.svg'/>
                                                       </div>
                                                       <div>
                                                            <p className="zero-margin">Binance USD</p>
                                                            <p><strong>23.08%</strong></p>
                                                       </div>
                                                  </div>
                                                  
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <p className='NRV-color'><strong>357,073 </strong>BUSD</p>
                                             </Col>
                                        </Row>
                                        <hr/>

                                        <Row>
                                             <Col sm="6">
                                                  <div className='flex'>
                                                       <div className="item-center">
                                                            <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/usdt.6dc09781.svg'/>
                                                       </div>
                                                       <div>
                                                            <p className="zero-margin">USD Tether</p>
                                                            <p><strong>51.09%</strong></p>
                                                       </div>
                                                  </div>
                                                  
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <p className='NRV-color'><strong>790,415 </strong>USDT</p>
                                             </Col>
                                        </Row>
                                        <hr/>

                                        <Row>
                                             <Col sm="6">
                                                  <div className='flex'>
                                                       <div className="item-center">
                                                            <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/usdc.f08e02b1.svg'/>
                                                       </div>
                                                       <div>
                                                            <p className="zero-margin">USD Circle</p>
                                                            <p><strong>25.83%</strong></p>
                                                       </div>
                                                  </div>
                                                  
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <p className='NRV-color'><strong>399,699 </strong>USDC</p>
                                             </Col>
                                        </Row>
                                        <hr/>

                                   </CardBody>
                              </Card>
                         </Col>
                    </Row> 

                    <Row className='claim-card'>
                         <Col md="12">
                              <Card className="nerve-medinum-card">
                                   <CardHeader>
                                        <Row>
                                             <Col sm="12">
                                                  <h3 className="gradient-color-3" >Pool Info</h3>
                                             </Col>
                                        </Row>
                                   </CardHeader>
                                   <CardBody>
                                        <Row>
                                             <Col sm="6">
                                                  <p>Trading Fee</p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <p className='NRV-color'><strong>0.02 </strong>%</p>
                                             </Col>
                                        </Row>
                                        <hr/>

                                        <Row>
                                             <Col sm="6">
                                                  <p>Deposit Fee</p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <p className='NRV-color'><strong>0.0 </strong>%</p>
                                             </Col>
                                        </Row>
                                        <hr/>

                                        <Row>
                                             <Col sm="6">
                                                  <p>Virtual Price</p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <p className='NRV-color'><strong>1.00299 </strong>USD</p>
                                             </Col>
                                        </Row>
                                        <hr/>

                                        <Row>
                                             <Col sm="6">
                                                  <p>Total Liquidity</p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <p className='NRV-color'><strong>1,547,192 </strong>USD</p>
                                             </Col>
                                        </Row>
                                        <hr/>

                                        <Row>
                                             <Col sm="6">
                                                  <p>Total Liquidity USD</p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <p className='NRV-color'>$<strong> 1,547,192</strong></p>
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
export default POOL3;

