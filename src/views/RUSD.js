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
  FormGroup,
  Input,
} from "reactstrap";
import Select from "react-select";
import NotificationAlert from "react-notification-alert";
import { Audio } from  'react-loader-spinner'
import { connect } from "react-redux";
import Slider from "nouislider";
import { BsPlusSquareDotted, BsDashSquareDotted, BsBoxArrowUpRight } from "react-icons/bs";

import "./app.css";

const RUSD = (props) => {
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
                                             <Col sm="8">
                                                  <h3 className="gradient-color-3" >Visit Ramp to stake nrvRUSD</h3>
                                             </Col>
                                             <Col sm='4' className="text-end">
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
                                                  <Col sm='6 mb-3'>
                                                       <FormGroup check className="form-check-radio">
                                                            <Label check>
                                                                 <Input
                                                                      defaultChecked
                                                                      defaultValue="Ramp"
                                                                      name="selectTokenType"
                                                                      type="radio"/>
                                                                 <span className="form-check-sign" />
                                                                 Ramp USD
                                                            </Label>
                                                       </FormGroup>
                                                       <FormGroup check className="form-check-radio">
                                                            <Label check>
                                                                 <Input
                                                                      defaultChecked
                                                                      defaultValue="Tether"
                                                                      name="selectTokenType"
                                                                      type="radio"/>
                                                                 <span className="form-check-sign" />
                                                                 USD Tether
                                                            </Label>
                                                       </FormGroup>
                                                  </Col>
                                             </Row>
                                        }

                                        <Row>
                                             <Col sm="12 mb-3">
                                                  <div className="between">
                                                       <Label className="label-font-size">
                                                            <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFf0lEQVR4Xu2a/2vVZRTHLe6+78qNgoKK7BtOy1qlIX2xspCIshl9mUPkWtoXUbIWCZa4GBhRcQshIooFBUIQ0Q+ZmrYyK8siv9zNbW5ubmmZ1f6E03O2e+ez9z3n83mez+a6u7sveP/yPO9znvOcnT33MjZtWpEiRYr8T8RSn90ZS32ewvUpQez1T8kW7hcssVc/oSChv2Aoad5KPsL4SUvJpo9pLMJ8k4emlkTJSx/SuGhDSxLT5zWl6z+gsyE8J+8obXyPXBU1DmPzgtJn3yFXYawNesOE8RNO2Zot5KryNVuaMF4DY8OE8RNC2dNvkasw1hXME6SSValajD8rlK18k1yFsTbxmgayhfs2mDdIGDtulCdfI1dhrA1e3LUJeEaYMD4y5cs2k6sw1gYva19YW5fAM8OE8d5U1DdTmDDGxlyoxeWC6NF8WbAGTRjnTcUjTRSgQfTb4IUSNfUz0INgTGgjcmsaJfR7U7FkI0lCnw1eIOwSEhgflgPrc6nTicoHNhAKPVmw4LCiXcB8Rkn0MFhjWK3OVN73IqHQIxSZ4xkrYfmxRq1WbyoXNRIKPUGFqXxxkEbkSHxmw6B2Ftao1epN1cJ1hEKPVJDGOebCmtCrIZ2HNWq1elO1YC2h0CMVhCR2plsTO9IUpnO3hTdCOg9r1Gr1purW1YRCj1SQzYyvj5Cvgn41pPOwRq1Wb6rnP0Uo9EgFMffs66HaPV2RpTVBOg9r1Gr1pnruSkKhRyqIWfxzL93+Qzdd820nLfyxx1lhD6R0Htao1epN9Q0rCIUeqSDm0V+P06J9x+im77roCjPW5+9M00O/9KkadXHfBgh1SrV6E5+znFA5HqEgJvlbPz24/8wUXLy7nSq3H6b7zWSsOjgwIt7PubhnA7BGrVZv4rOXESrHIxTEPHPod6rPTMFcMwVXtg5PQWzboaHLrW8/SVeZtQu/aqMq05icy/s0QKhTqtWb7GG2NA+uP58+SSsO9NPizBRcy1Owq33ksneYtRtNY65u7aCLdrVR3KwPfR+I0gChTvREAhNKSbX1l4/8QautKZi3d/QU8CN5l3n0eDpmftMx9CsyfceZCZn0DdjcdYpeaBueAn4LFmSm4JLdw1Ow3LwRS/b30d2mCTfvPUqzzd6lZu8806DSLzNNEJDOwxolTyQwoZRUW091n6aNmSl4zJoC/r3nKVh7+ATxQ8mfAPydYb5pAj+Wl2U+MYaaICCdhzVKnkhgQimptv5u799kT0FdZgrmZKaAm7MufYIePzBAD5sm3PvTMbrl+6N03Z5Outw04QLzOGJORjoPa5Q8kcCEUlJtnclOgf2JMM/8pHkK3uj+izZ1/EnPmSY8YZrA3xu4CbeZJl1vmoC5skjnYY2SJxKYUEqqrds0mingnzS/Bfz68xS83/cPcYNeMU3g/SfNdwJuEsYi0nlYo+SJBCaUkmrrEnxB/inzFGwdGKSW4//S2z2nqbnzlFM8I52HNUqeSGBCKWnQnga/BdwA1kf9g3W4r6GdhTVKnkhgQikp7kuesYL5+a9DgfvjVQcmlJLifpDXF8yn5URPkNcLTCglxXX0J2qTCdvvAuaQzrVBr0uME5hQShq2ru1LYExYHHpR6PcGE0pJtXUGYzUf4+pj0KsJ47zBhFJSbd0Gc9h+XI/XLG21Y21yvcHC+MgEJdXWJbBAFPqzxGctrUNvkDB+XNCSa+tBYMHTaxqa0GODfk1RHtwxozVAW7fBC+A+gn5LveidMLTisUjczxJ3/B+CLDwtrt4JQSsELyV5bNAb5s8rpH9+wMu4Xgy9Yf68BS8hCWNsfLx5CV4gSBhbMOBFA2U+6zG+YMi5bIAwtqDAy6LQX7BM2YvbTOnLFylSJC/4D7SkEyM13abkAAAAAElFTkSuQmCC'/>
                                                            rUSD
                                                       </Label>
                                                       <Label className="label-font-size">Max:  <strong>0.0</strong></Label>
                                                  </div>
                                                  <Input type="text"></Input>
                                             </Col>

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
                                                  <Button color="general" className="fullWidth">Withdraw</Button>
                                             </Col>
                                             <Col sm='12'>
                                                  <Button className="fullWidth">Visit Ramp to stake nrvRUSD &nbsp; <BsBoxArrowUpRight className='open-doc white-color with-button-icon' /></Button>
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
                                                            <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFf0lEQVR4Xu2a/2vVZRTHLe6+78qNgoKK7BtOy1qlIX2xspCIshl9mUPkWtoXUbIWCZa4GBhRcQshIooFBUIQ0Q+ZmrYyK8siv9zNbW5ubmmZ1f6E03O2e+ez9z3n83mez+a6u7sveP/yPO9znvOcnT33MjZtWpEiRYr8T8RSn90ZS32ewvUpQez1T8kW7hcssVc/oSChv2Aoad5KPsL4SUvJpo9pLMJ8k4emlkTJSx/SuGhDSxLT5zWl6z+gsyE8J+8obXyPXBU1DmPzgtJn3yFXYawNesOE8RNO2Zot5KryNVuaMF4DY8OE8RNC2dNvkasw1hXME6SSValajD8rlK18k1yFsTbxmgayhfs2mDdIGDtulCdfI1dhrA1e3LUJeEaYMD4y5cs2k6sw1gYva19YW5fAM8OE8d5U1DdTmDDGxlyoxeWC6NF8WbAGTRjnTcUjTRSgQfTb4IUSNfUz0INgTGgjcmsaJfR7U7FkI0lCnw1eIOwSEhgflgPrc6nTicoHNhAKPVmw4LCiXcB8Rkn0MFhjWK3OVN73IqHQIxSZ4xkrYfmxRq1WbyoXNRIKPUGFqXxxkEbkSHxmw6B2Ftao1epN1cJ1hEKPVJDGOebCmtCrIZ2HNWq1elO1YC2h0CMVhCR2plsTO9IUpnO3hTdCOg9r1Gr1purW1YRCj1SQzYyvj5Cvgn41pPOwRq1Wb6rnP0Uo9EgFMffs66HaPV2RpTVBOg9r1Gr1pnruSkKhRyqIWfxzL93+Qzdd820nLfyxx1lhD6R0Htao1epN9Q0rCIUeqSDm0V+P06J9x+im77roCjPW5+9M00O/9KkadXHfBgh1SrV6E5+znFA5HqEgJvlbPz24/8wUXLy7nSq3H6b7zWSsOjgwIt7PubhnA7BGrVZv4rOXESrHIxTEPHPod6rPTMFcMwVXtg5PQWzboaHLrW8/SVeZtQu/aqMq05icy/s0QKhTqtWb7GG2NA+uP58+SSsO9NPizBRcy1Owq33ksneYtRtNY65u7aCLdrVR3KwPfR+I0gChTvREAhNKSbX1l4/8QautKZi3d/QU8CN5l3n0eDpmftMx9CsyfceZCZn0DdjcdYpeaBueAn4LFmSm4JLdw1Ow3LwRS/b30d2mCTfvPUqzzd6lZu8806DSLzNNEJDOwxolTyQwoZRUW091n6aNmSl4zJoC/r3nKVh7+ATxQ8mfAPydYb5pAj+Wl2U+MYaaICCdhzVKnkhgQimptv5u799kT0FdZgrmZKaAm7MufYIePzBAD5sm3PvTMbrl+6N03Z5Outw04QLzOGJORjoPa5Q8kcCEUlJtnclOgf2JMM/8pHkK3uj+izZ1/EnPmSY8YZrA3xu4CbeZJl1vmoC5skjnYY2SJxKYUEqqrds0mingnzS/Bfz68xS83/cPcYNeMU3g/SfNdwJuEsYi0nlYo+SJBCaUkmrrEnxB/inzFGwdGKSW4//S2z2nqbnzlFM8I52HNUqeSGBCKWnQnga/BdwA1kf9g3W4r6GdhTVKnkhgQikp7kuesYL5+a9DgfvjVQcmlJLifpDXF8yn5URPkNcLTCglxXX0J2qTCdvvAuaQzrVBr0uME5hQShq2ru1LYExYHHpR6PcGE0pJtXUGYzUf4+pj0KsJ47zBhFJSbd0Gc9h+XI/XLG21Y21yvcHC+MgEJdXWJbBAFPqzxGctrUNvkDB+XNCSa+tBYMHTaxqa0GODfk1RHtwxozVAW7fBC+A+gn5LveidMLTisUjczxJ3/B+CLDwtrt4JQSsELyV5bNAb5s8rpH9+wMu4Xgy9Yf68BS8hCWNsfLx5CV4gSBhbMOBFA2U+6zG+YMi5bIAwtqDAy6LQX7BM2YvbTOnLFylSJC/4D7SkEyM13abkAAAAAElFTkSuQmCC'/>
                                                       </div>
                                                       <div>
                                                            <p className="zero-margin">Ramp USD</p>
                                                            <p><strong>23.08%</strong></p>
                                                       </div>
                                                  </div>
                                                  
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <p className='NRV-color'><strong>77 </strong>rUSD</p>
                                             </Col>
                                        </Row>
                                        <hr/>

                                        <Row>
                                             <Col sm="6">
                                                  <div className='flex'>
                                                       <div className="item-center">
                                                            <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/nerve.ab09a2eb.svg'/>
                                                       </div>
                                                       <div>
                                                            <p className="zero-margin">Nerve 3Pool LP Token</p>
                                                            <p><strong>56.26%</strong></p>
                                                       </div>
                                                  </div>
                                                  
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <p className='NRV-color'><strong>108 </strong>3NRV-LP</p>
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
                                                  <p className='NRV-color'><strong>2 </strong>USD</p>
                                             </Col>
                                        </Row>
                                        <hr/>

                                        <Row>
                                             <Col sm="6">
                                                  <p>Total Liquidity</p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <p className='NRV-color'><strong>4 </strong>USD</p>
                                             </Col>
                                        </Row>
                                        <hr/>

                                        <Row>
                                             <Col sm="6">
                                                  <p>Total Liquidity USD</p>
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <p className='NRV-color'>$<strong> 150</strong></p>
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
export default RUSD;
