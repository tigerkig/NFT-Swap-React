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

const UST = (props) => {
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
                                                  <h3 className="gradient-color-3" >UST Metapool</h3>
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
                                                                      defaultValue="Frapped"
                                                                      name="selectTokenType"
                                                                      type="radio"/>
                                                                 <span className="form-check-sign" />
                                                                 TerraUSD
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
                                                            <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURUxpccJQUMAXFw47pEiL9AsAAAwEDaTJ9TIPI1OS9kiG6gcDFnwBAWCY9SYBAVST99UeHqYICFWW+nuo8jsCAnMAAJIDA1WV+VST99aBgVSU+FOR9FST+Oju72EAAGkDA1ABAfz//wYopcAEBFWV+VOS91ST91ST91OT9w46qMYtLZ8BAcfY2FGR9VSU+FSV+Qo3pA48qFOU+QAAALUUGIkICN5KSmOb9uR0dLiIiLZeXsI5OwMipFSR9Q08qA47pX4GBrsZGaQLC3ECAmsBARE4pfn19cnHxxdIsww6pQ07pg08ppIDA3IDA0aA6cMbG9m1tsajo+ulpcCvr6svLxEupi9kyw49qY4FBXECAvTq6vLT0/LIyDZx4cYbG1ST9////1OS9g07pVeX+w89p9sYGFmZ/Qo3oP3//1uf/1WV+Vib/90mJtscHAgrs9cVFd4sLAkqrBQzrN4hId83OFqe/xEytskMDPjV1MwkJM8NDSRCuvzx8VWS9v339/KqqRFArA9AsuMvL/n//+l/f0dhxFNpxAAgrwIgpP79+0yZ/+7+/kaC6+hsbORcXPfLy+VlZbYYGPL//8QJCRw7t0uI7vLv7vO7u+NTU++fn+yIiPvp6fnj41xyyMsZGTJLsgcop4MBAdY7PFeY/u2Xl9kqKup1dd4yMihDsOqQkOf7+9tycgAYqS5LvWR4yeNNTeBJSuA/P+YcFPfd3fGyst+urrQEBeC7u2t/0URdvnaI0vXDw9UfH9ogIOCkpdZJSfP39mwAAKOv3DxWwVGV/DxVtu7DxOgnH9EsLOvS0uXKy9MUFDdRvEJ85Kiz3pOg1Zun0dzV1jJl1F6J5KgUFORFQ9uNjR9RuTZu1txhYYyY0lGP8wAQoShVxpkODpBjm+F9fYZ3uPDl5dnq6tZWVp6q2+fb2ypgx4COzpOu6gAHm38ta4GU2D103+upqd2ZmRtJycUrLB06sXOExK1Ud8BGWs+WlshsbNPV6cyNj9G4uLvA4olPiXMbXlV52RJCvAsVbM4AAADVdFJOUwAD/vsDHQcCAvwLEf4jRYFk+/wWUP7+3bz97FV2/vo1QGMb/vREstSUkRP7+6lpx0JgODAf/GL6Y/v8/PRauXl6N5bP5+Vj/fzMLHDfor7l9/1j+/v2fNrFuGRjY4J1/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////sJN/H8AAAhbSURBVFjDxVdpVFNnGr6FSLihDBUqIMK0dQfrOlrrUndr972zzwkxIYQEEhIgEkMACQkwskpA2XcBWWTfZCsIAkpRREAQXOqCBdeZ0bbTmTPvd+9NSFiUf/MczgFO7vN87/t8z/feLxg2A2g0w/9o2NxBpx5fvG79xzt3frx+3UcMQmSubOIXY53jh8aBRwgEcvbv2PnRHCXgGcaGRYsc9wcC76AxiYOcwCOcHetN5iBBwxgWNmyBQDDoCrxJGBuDxh/W016iQKdjy2x8shQ4bokH6sgcDuegKwA6+nAdRqO/gI9hFllZOM5kMvlxHC0bkQMH7g12h4eHdw/+nnhsNj5ttRsT0ZksQa8rUkBszkBv9zCby2UjcAXLGbMp0DGGrRtBZ7K44RT94MBgHJ/L5rMo4LjbWquZFeh0mq2Pjh9I1M65183nIjJzErjPWgadPqP/q8n1WXzuA44rB37uxXHZTAM2qbCcTpuJb4/4CpzJHb7niqofiUOLM6cDd7OYvps0bAPbEraP76MYDETLBz6YhY4UBMumKdBpK9g4U+Bjt/oDWJ7jOjDMnY0OAmybqTagBrJ8LNeuscIcjxhzXEf4/FnphA1TmqBjVjY2y+3NiXO744jrAHj3Aj5TYbnU3HAv6QwrQhHllOb4wfAL1ydKWDmDj1TK6dhnVB5eUALfzjBO5nTdGaGbmi/lK14iACWsMShh+aQpNGyR4GUFoJ20xWimplo+w25yZ2nYmpd1oFAocMVSK70Cllla2plTCjTsvdkrUCAwz/4dIFjktHGjCSVgIcAFKxhkwumYueVsVAVBPXu55ub1f/5r2+cx8z/fjb1CWCDAcR9b6ojQMVuDEohjzNSnZgadKysTHY6tWnX4NVJgRRYOR4TaWprphiym9vzDbEJjhMukqLnngOvl7l1y9Ub/s2dbFr5DCtihfcN93kMKyFl7N0sgIfBZceHdD3of/+rtSVJzS6ITA6KS/ZXKY6d+ePvo+2QaiIpxKp+LAZ/FAau3d+TxY7lGo5G2/ne8LCe3JDI44Uy5vzOBsFtdlc+2dL1FCmj3di3Y4Lh9+/b0b8ViSZpYfKFGKkxpkQprJq4HtJf7kVTnpKiK/IgTmTKjqlWyd8kWdPGyxxbn9aRfa2sRF6q+F4aoJjTyolZVnTTkvjPP2Znn53s8++SJUs8GF5HofKpRzPxDlIm49pBZmpt92yZJk6TlqSWS2iFhYQrIpEzIi4Z8K7JPRpZ6erm4uHh5lkaezH9YXf3L15Xv6plIBtRs+49pF6GGHmigWNMql6smpCF198fPNQDVw730xMnsCl9ohkeaSHmAtpFq4m/7i9ND08bEhbV3xIUpLcIQdY1cJX88fq70RER+QFRSGOmDX3l748LnWxv/TAqs1iYHZ4fn/SM9NK9Y8jSvVq7WSNU9wpAasPGmr5bqn3wmITi6JLf+0JKqVYeoHNhrBVj8uFCihdrvwcYeobA1pUgtl9ZMgIk8/+SogMSI097uHtBMQ07Htm3fyCgTN/CZOgFJniTtaa3kaVGdJETdIiwsviOVqlQ3A4KjKap77unoxITjnXfvXjrQ+RXZAsOGMoHFDk+7GPpj20VxYduYRFNUC0YKi1uEwvEykcjFK/eKLks85VGHSwe0JmIrtS81fhw4AC7ALhSqoQ11j1TTqlJdHr8SHZxw3FeXJd+K/ILb274p+CslsExgICCW5KmfXtDIWyFCxZCEmroxfyVlP5Ulj/PIxFjKA3itkD1oW2hJv6ZqEYeoxjRFRUVkEpVATQiOvEJlybvp9vOtW5soAd0YY/HDIYdtkry8FIm4todKYp185DrEMBdRPTyJLEUlxzc7/PC2w1+oFugMGzauv41tQ5DEFHmtXK4ekgrr7v+nTOTh7n06IlGbJZ4y/u6Brx20JsIgJEpgkUFKG5KEqlAK7whDWlOEUvnIryiGyf66LAUkRjc9ielr+opsASkQcwwEJCmh1yTq0FDJBbFUU9SqLq678++fHMJ45BRI0mZJdFjfRHQ/MV9qiUMLw7Vt6pTi4rGhHuD95NBMBZiIIUwBb08yS1ciCxb2/7yl4B2tAPk+UTBZmx3i45v9w8KAyOMplcrm+PL2imwIPxFDXZb8DEcaqWDhhitYmy8hdHVVV1c29t8ouFqSmdPgIYIYNqApkK3LkjK+s/rLLZ1v6b0hadhKN/zs5SdPnshkstTU1MMEzp+vz/E+TcQwiaeXpcjMDr2RplPwOXu5asmS2NhDqamyjsym21dv5D887pvsr6WWn6GyNGWkTXYh2Pxz/6NHjZXV7V13b8U3gwlKHiAsCcUQpgBxHiFLEYkJldW/fNloUAHh5OZTp04dBRxDaI6/5YssjCAGKbJflyXDkaanYP5FZWVlY+OjR8jB202ZOfUiBESFN8qZySy1N/Y/31r5/tRbK83JKBYsIEB4CBaWwAyu0MWQyBIaaamxkyNNDxuNjIxSZeBgZtPVAmRhZ7If2EBSYQqgGHp5uXt65shSY+anvjZFAK5rX1RXd3V1goPxx44pSYSB+5BgiCFQg4KCcnNksAOrrK2tq2YQcKBcbAYHyzvbH0IKwUL3Bi8vito3ap3xKkJGhvXobtOpAk4LAQUFhIGZHfX19SKPBnfPoFzPDllM3+imVxd8992CBQsQ2dr6kz0bp1+6nZYQJkICRfUN7jk5OR1QLsVEXLRwRsamT/64Z9duJ/IyYIBXsD1GMeBjTExMX9/o6KYMIP6WwL59+/bu3funTz/dtev1N9+YZ2ZiampiYmI6wxeHNxDeBPwG4XUK6O/fAebpYGaGROb6ZRZWA8I8A7oZqmAGBdNpMPzQRA9TPp07ZpH//+F/1TH4z3QpI9MAAAAASUVORK5CYII='/>
                                                            UST
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
                                                  <Button className="fullWidth">Stake UST Metapool &nbsp; <BsBoxArrowUpRight className='open-doc white-color with-button-icon' /></Button>
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
                                                            <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURUxpccJQUMAXFw47pEiL9AsAAAwEDaTJ9TIPI1OS9kiG6gcDFnwBAWCY9SYBAVST99UeHqYICFWW+nuo8jsCAnMAAJIDA1WV+VST99aBgVSU+FOR9FST+Oju72EAAGkDA1ABAfz//wYopcAEBFWV+VOS91ST91ST91OT9w46qMYtLZ8BAcfY2FGR9VSU+FSV+Qo3pA48qFOU+QAAALUUGIkICN5KSmOb9uR0dLiIiLZeXsI5OwMipFSR9Q08qA47pX4GBrsZGaQLC3ECAmsBARE4pfn19cnHxxdIsww6pQ07pg08ppIDA3IDA0aA6cMbG9m1tsajo+ulpcCvr6svLxEupi9kyw49qY4FBXECAvTq6vLT0/LIyDZx4cYbG1ST9////1OS9g07pVeX+w89p9sYGFmZ/Qo3oP3//1uf/1WV+Vib/90mJtscHAgrs9cVFd4sLAkqrBQzrN4hId83OFqe/xEytskMDPjV1MwkJM8NDSRCuvzx8VWS9v339/KqqRFArA9AsuMvL/n//+l/f0dhxFNpxAAgrwIgpP79+0yZ/+7+/kaC6+hsbORcXPfLy+VlZbYYGPL//8QJCRw7t0uI7vLv7vO7u+NTU++fn+yIiPvp6fnj41xyyMsZGTJLsgcop4MBAdY7PFeY/u2Xl9kqKup1dd4yMihDsOqQkOf7+9tycgAYqS5LvWR4yeNNTeBJSuA/P+YcFPfd3fGyst+urrQEBeC7u2t/0URdvnaI0vXDw9UfH9ogIOCkpdZJSfP39mwAAKOv3DxWwVGV/DxVtu7DxOgnH9EsLOvS0uXKy9MUFDdRvEJ85Kiz3pOg1Zun0dzV1jJl1F6J5KgUFORFQ9uNjR9RuTZu1txhYYyY0lGP8wAQoShVxpkODpBjm+F9fYZ3uPDl5dnq6tZWVp6q2+fb2ypgx4COzpOu6gAHm38ta4GU2D103+upqd2ZmRtJycUrLB06sXOExK1Ud8BGWs+WlshsbNPV6cyNj9G4uLvA4olPiXMbXlV52RJCvAsVbM4AAADVdFJOUwAD/vsDHQcCAvwLEf4jRYFk+/wWUP7+3bz97FV2/vo1QGMb/vREstSUkRP7+6lpx0JgODAf/GL6Y/v8/PRauXl6N5bP5+Vj/fzMLHDfor7l9/1j+/v2fNrFuGRjY4J1/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////sJN/H8AAAhbSURBVFjDxVdpVFNnGr6FSLihDBUqIMK0dQfrOlrrUndr972zzwkxIYQEEhIgEkMACQkwskpA2XcBWWTfZCsIAkpRREAQXOqCBdeZ0bbTmTPvd+9NSFiUf/MczgFO7vN87/t8z/feLxg2A2g0w/9o2NxBpx5fvG79xzt3frx+3UcMQmSubOIXY53jh8aBRwgEcvbv2PnRHCXgGcaGRYsc9wcC76AxiYOcwCOcHetN5iBBwxgWNmyBQDDoCrxJGBuDxh/W016iQKdjy2x8shQ4bokH6sgcDuegKwA6+nAdRqO/gI9hFllZOM5kMvlxHC0bkQMH7g12h4eHdw/+nnhsNj5ttRsT0ZksQa8rUkBszkBv9zCby2UjcAXLGbMp0DGGrRtBZ7K44RT94MBgHJ/L5rMo4LjbWquZFeh0mq2Pjh9I1M65183nIjJzErjPWgadPqP/q8n1WXzuA44rB37uxXHZTAM2qbCcTpuJb4/4CpzJHb7niqofiUOLM6cDd7OYvps0bAPbEraP76MYDETLBz6YhY4UBMumKdBpK9g4U+Bjt/oDWJ7jOjDMnY0OAmybqTagBrJ8LNeuscIcjxhzXEf4/FnphA1TmqBjVjY2y+3NiXO744jrAHj3Aj5TYbnU3HAv6QwrQhHllOb4wfAL1ydKWDmDj1TK6dhnVB5eUALfzjBO5nTdGaGbmi/lK14iACWsMShh+aQpNGyR4GUFoJ20xWimplo+w25yZ2nYmpd1oFAocMVSK70Cllla2plTCjTsvdkrUCAwz/4dIFjktHGjCSVgIcAFKxhkwumYueVsVAVBPXu55ub1f/5r2+cx8z/fjb1CWCDAcR9b6ojQMVuDEohjzNSnZgadKysTHY6tWnX4NVJgRRYOR4TaWprphiym9vzDbEJjhMukqLnngOvl7l1y9Ub/s2dbFr5DCtihfcN93kMKyFl7N0sgIfBZceHdD3of/+rtSVJzS6ITA6KS/ZXKY6d+ePvo+2QaiIpxKp+LAZ/FAau3d+TxY7lGo5G2/ne8LCe3JDI44Uy5vzOBsFtdlc+2dL1FCmj3di3Y4Lh9+/b0b8ViSZpYfKFGKkxpkQprJq4HtJf7kVTnpKiK/IgTmTKjqlWyd8kWdPGyxxbn9aRfa2sRF6q+F4aoJjTyolZVnTTkvjPP2Znn53s8++SJUs8GF5HofKpRzPxDlIm49pBZmpt92yZJk6TlqSWS2iFhYQrIpEzIi4Z8K7JPRpZ6erm4uHh5lkaezH9YXf3L15Xv6plIBtRs+49pF6GGHmigWNMql6smpCF198fPNQDVw730xMnsCl9ohkeaSHmAtpFq4m/7i9ND08bEhbV3xIUpLcIQdY1cJX88fq70RER+QFRSGOmDX3l748LnWxv/TAqs1iYHZ4fn/SM9NK9Y8jSvVq7WSNU9wpAasPGmr5bqn3wmITi6JLf+0JKqVYeoHNhrBVj8uFCihdrvwcYeobA1pUgtl9ZMgIk8/+SogMSI097uHtBMQ07Htm3fyCgTN/CZOgFJniTtaa3kaVGdJETdIiwsviOVqlQ3A4KjKap77unoxITjnXfvXjrQ+RXZAsOGMoHFDk+7GPpj20VxYduYRFNUC0YKi1uEwvEykcjFK/eKLks85VGHSwe0JmIrtS81fhw4AC7ALhSqoQ11j1TTqlJdHr8SHZxw3FeXJd+K/ILb274p+CslsExgICCW5KmfXtDIWyFCxZCEmroxfyVlP5Ulj/PIxFjKA3itkD1oW2hJv6ZqEYeoxjRFRUVkEpVATQiOvEJlybvp9vOtW5soAd0YY/HDIYdtkry8FIm4todKYp185DrEMBdRPTyJLEUlxzc7/PC2w1+oFugMGzauv41tQ5DEFHmtXK4ekgrr7v+nTOTh7n06IlGbJZ4y/u6Brx20JsIgJEpgkUFKG5KEqlAK7whDWlOEUvnIryiGyf66LAUkRjc9ielr+opsASkQcwwEJCmh1yTq0FDJBbFUU9SqLq678++fHMJ45BRI0mZJdFjfRHQ/MV9qiUMLw7Vt6pTi4rGhHuD95NBMBZiIIUwBb08yS1ciCxb2/7yl4B2tAPk+UTBZmx3i45v9w8KAyOMplcrm+PL2imwIPxFDXZb8DEcaqWDhhitYmy8hdHVVV1c29t8ouFqSmdPgIYIYNqApkK3LkjK+s/rLLZ1v6b0hadhKN/zs5SdPnshkstTU1MMEzp+vz/E+TcQwiaeXpcjMDr2RplPwOXu5asmS2NhDqamyjsym21dv5D887pvsr6WWn6GyNGWkTXYh2Pxz/6NHjZXV7V13b8U3gwlKHiAsCcUQpgBxHiFLEYkJldW/fNloUAHh5OZTp04dBRxDaI6/5YssjCAGKbJflyXDkaanYP5FZWVlY+OjR8jB202ZOfUiBESFN8qZySy1N/Y/31r5/tRbK83JKBYsIEB4CBaWwAyu0MWQyBIaaamxkyNNDxuNjIxSZeBgZtPVAmRhZ7If2EBSYQqgGHp5uXt65shSY+anvjZFAK5rX1RXd3V1goPxx44pSYSB+5BgiCFQg4KCcnNksAOrrK2tq2YQcKBcbAYHyzvbH0IKwUL3Bi8vito3ap3xKkJGhvXobtOpAk4LAQUFhIGZHfX19SKPBnfPoFzPDllM3+imVxd8992CBQsQ2dr6kz0bp1+6nZYQJkICRfUN7jk5OR1QLsVEXLRwRsamT/64Z9duJ/IyYIBXsD1GMeBjTExMX9/o6KYMIP6WwL59+/bu3funTz/dtev1N9+YZ2ZiampiYmI6wxeHNxDeBPwG4XUK6O/fAebpYGaGROb6ZRZWA8I8A7oZqmAGBdNpMPzQRA9TPp07ZpH//+F/1TH4z3QpI9MAAAAASUVORK5CYII='/>
                                                       </div>
                                                       <div>
                                                            <p className="zero-margin">TerraUSD</p>
                                                            <p><strong>23.08%</strong></p>
                                                       </div>
                                                  </div>
                                                  
                                             </Col>
                                             <Col sm="6" className='text-end'>
                                                  <p className='NRV-color'><strong>77 </strong>UST</p>
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
export default UST;
