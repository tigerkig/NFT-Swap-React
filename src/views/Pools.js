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
  Spinner 
} from "reactstrap";
import Select from "react-select";
import NotificationAlert from "react-notification-alert";
import { Audio } from  'react-loader-spinner'
import { connect } from "react-redux";
import { BsInfoCircle, BsBoxArrowUpRight } from "react-icons/bs";

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
                                                  <h3 className="gradient-color-3" ><Link to='/3pool'>Stablecoin 3Pool</Link></h3>
                                             </Col>
                                        </Row>
                                   </CardHeader>
                                   <CardBody>
                                        <Row>
                                             <Col sm="6">
                                                  <p>Assets</p>
                                                  <Row>
                                                        <Col sm='4'>
                                                            <Button color="general" style={{width: '100%'}}>
                                                                 <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/busd.488237bc.svg'/>
                                                                 BUSD
                                                            </Button>
                                                        </Col>
                                                        <Col sm='4'>
                                                            <Button color="general" style={{width: '100%'}}>
                                                                 <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/usdt.6dc09781.svg'/>
                                                                 USDT
                                                            </Button>
                                                        </Col>
                                                        <Col sm='4'>
                                                            <Button color="general" style={{width: '100%'}}>
                                                                 <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/usdc.f08e02b1.svg'/>
                                                                 USDC
                                                            </Button>
                                                        </Col>
                                                  </Row>
                                             </Col>
                                             <Col sm="6" className="border-left">
                                                  <Row>
                                                       <Col sm='6'>
                                                            <p>Total Liquidity</p>
                                                            <h3 className="pool-h3">$1,547,203</h3>
                                                            {/* <Spinner animation="border" className="NRV-color" /> */}
                                                       </Col>
                                                       <Col sm='6'>
                                                            <p>APR &nbsp;<BsInfoCircle className="mouse-pointer NRV-color" id="info-10" /></p>
                                                            <h3 className="pool-h3"><Spinner animation="border" className="NRV-color" />%</h3>
                                                            
                                                            <UncontrolledTooltip
                                                                 delay={0}
                                                                 target='info-10'
                                                                 placement="top">
                                                                 Daily APR&nbsp;&nbsp;    0.02% <br/>
                                                                 Weekly APR&nbsp;&nbsp;   5.67% <br/>
                                                                 Yearly APR&nbsp;&nbsp;   2.59% <br/>
                                                                 Yearly APY&nbsp;&nbsp;   1.45%
                                                            </UncontrolledTooltip>
                                                       </Col>
                                                  </Row>
                                             </Col>
                                        </Row>
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
                                                  <h3 className="gradient-color-3" ><Link to='/anyBTC'>BTCB/anyBTC Pool</Link></h3>
                                             </Col>
                                        </Row>
                                   </CardHeader>
                                   <CardBody>
                                        <Row>
                                             <Col sm="6">
                                                  <p>Assets</p>
                                                  <Row>
                                                        <Col sm='6'>
                                                            <Button color="general" style={{width: '100%'}}>
                                                                 <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/btcbep.b1a0507c.svg'/>
                                                                 BTCB
                                                            </Button>
                                                        </Col>
                                                        <Col sm='6'>
                                                            <Button color="general" style={{width: '100%'}}>
                                                                 <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/anybtc.b81d670a.svg'/>
                                                                 anyBTC    
                                                            </Button>
                                                        </Col>
                                                  </Row>
                                             </Col>
                                             <Col sm="6" className="border-left">
                                                  <Row>
                                                       <Col sm='6'>
                                                            <p>Total Liquidity</p>
                                                            <h3 className="pool-h3">$1,547,203</h3>
                                                            {/* <Spinner animation="border" className="NRV-color" /> */}
                                                       </Col>
                                                       <Col sm='6'>
                                                            <p>APR &nbsp;<BsInfoCircle className="mouse-pointer NRV-color" id="info-10" /></p>
                                                            <h3 className="pool-h3"><Spinner animation="border" className="NRV-color" />%</h3>
                                                            
                                                            <UncontrolledTooltip
                                                                 delay={0}
                                                                 target='info-10'
                                                                 placement="top">
                                                                 Daily APR&nbsp;&nbsp;    0.02% <br/>
                                                                 Weekly APR&nbsp;&nbsp;   5.67% <br/>
                                                                 Yearly APR&nbsp;&nbsp;   2.59% <br/>
                                                                 Yearly APY&nbsp;&nbsp;   1.45%
                                                            </UncontrolledTooltip>
                                                       </Col>
                                                  </Row>
                                             </Col>
                                        </Row>
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
                                                  <h3 className="gradient-color-3" ><Link to='/anyETH'>ETH/anyETH Pool</Link></h3>
                                             </Col>
                                        </Row>
                                   </CardHeader>
                                   <CardBody>
                                        <Row>
                                             <Col sm="6">
                                                  <p>Assets</p>
                                                  <Row>
                                                        <Col sm='6'>
                                                            <Button color="general" style={{width: '100%'}}>
                                                                 <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/ethbep.d9ff545a.svg'/>
                                                                 ETH
                                                            </Button>
                                                        </Col>
                                                        <Col sm='6'>
                                                            <Button color="general" style={{width: '100%'}}>
                                                                 <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/ethbep.d9ff545a.svg'/>
                                                                 anyETH    
                                                            </Button>
                                                        </Col>
                                                  </Row>
                                             </Col>
                                             <Col sm="6" className="border-left">
                                                  <Row>
                                                       <Col sm='6'>
                                                            <p>Total Liquidity</p>
                                                            <h3 className="pool-h3">$1,547,203</h3>
                                                            {/* <Spinner animation="border" className="NRV-color" /> */}
                                                       </Col>
                                                       <Col sm='6'>
                                                            <p>APR &nbsp;<BsInfoCircle className="mouse-pointer NRV-color" id="info-10" /></p>
                                                            <h3 className="pool-h3"><Spinner animation="border" className="NRV-color" />%</h3>
                                                            
                                                            <UncontrolledTooltip
                                                                 delay={0}
                                                                 target='info-10'
                                                                 placement="top">
                                                                 Daily APR&nbsp;&nbsp;    0.02% <br/>
                                                                 Weekly APR&nbsp;&nbsp;   5.67% <br/>
                                                                 Yearly APR&nbsp;&nbsp;   2.59% <br/>
                                                                 Yearly APY&nbsp;&nbsp;   1.45%
                                                            </UncontrolledTooltip>
                                                       </Col>
                                                  </Row>
                                             </Col>
                                        </Row>
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
                                                  <h3 className="gradient-color-3" ><Link to='/fusdt'>fUSDT Metapool</Link></h3>
                                             </Col>
                                        </Row>
                                   </CardHeader>
                                   <CardBody>
                                        <Row>
                                             <Col sm="6">
                                                  <p>Assets</p>
                                                  <Row>
                                                        <Col sm='3'>
                                                            <Button color="general" className="group-4-button" style={{width: '100%'}}>
                                                                 <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/usdt.6dc09781.svg'/>
                                                                 fUSDT
                                                            </Button>
                                                        </Col>
                                                        <Col sm='3'>
                                                            <Button color="general" className="group-4-button" style={{width: '100%'}}>
                                                                 <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/busd.488237bc.svg'/>
                                                                 BUSD    
                                                            </Button>
                                                        </Col>
                                                        <Col sm='3'>
                                                            <Button color="general" className="group-4-button" style={{width: '100%'}}>
                                                                 <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/usdt.6dc09781.svg'/>
                                                                 USDT
                                                            </Button>
                                                        </Col>
                                                        <Col sm='3'>
                                                            <Button color="general" className="group-4-button" style={{width: '100%'}}>
                                                                 <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/usdc.f08e02b1.svg'/>
                                                                 USDC    
                                                            </Button>
                                                        </Col>
                                                  </Row>
                                             </Col>
                                             <Col sm="6" className="border-left">
                                                  <Row>
                                                       <Col sm='6'>
                                                            <p>Total Liquidity</p>
                                                            <h3 className="pool-h3">$1,547,203</h3>
                                                            {/* <Spinner animation="border" className="NRV-color" /> */}
                                                       </Col>
                                                       <Col sm='6'>
                                                            <p>APR &nbsp;<BsInfoCircle className="mouse-pointer NRV-color" id="info-10" /></p>
                                                            <h3 className="pool-h3"><Spinner animation="border" className="NRV-color" />%</h3>
                                                            
                                                            <UncontrolledTooltip
                                                                 delay={0}
                                                                 target='info-10'
                                                                 placement="top">
                                                                 Daily APR&nbsp;&nbsp;    0.02% <br/>
                                                                 Weekly APR&nbsp;&nbsp;   5.67% <br/>
                                                                 Yearly APR&nbsp;&nbsp;   2.59% <br/>
                                                                 Yearly APY&nbsp;&nbsp;   1.45%
                                                            </UncontrolledTooltip>
                                                       </Col>
                                                  </Row>
                                             </Col>
                                        </Row>
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
                                                  <h3 className="gradient-color-3" ><Link to='/ust'>UST Metapool</Link></h3>
                                             </Col>
                                        </Row>
                                   </CardHeader>
                                   <CardBody>
                                        <Row>
                                             <Col sm="6">
                                                  <p>Assets</p>
                                                  <Row>
                                                        <Col sm='3'>
                                                            <Button color="general" className="group-4-button" style={{width: '100%'}}>
                                                                 <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURUxpccJQUMAXFw47pEiL9AsAAAwEDaTJ9TIPI1OS9kiG6gcDFnwBAWCY9SYBAVST99UeHqYICFWW+nuo8jsCAnMAAJIDA1WV+VST99aBgVSU+FOR9FST+Oju72EAAGkDA1ABAfz//wYopcAEBFWV+VOS91ST91ST91OT9w46qMYtLZ8BAcfY2FGR9VSU+FSV+Qo3pA48qFOU+QAAALUUGIkICN5KSmOb9uR0dLiIiLZeXsI5OwMipFSR9Q08qA47pX4GBrsZGaQLC3ECAmsBARE4pfn19cnHxxdIsww6pQ07pg08ppIDA3IDA0aA6cMbG9m1tsajo+ulpcCvr6svLxEupi9kyw49qY4FBXECAvTq6vLT0/LIyDZx4cYbG1ST9////1OS9g07pVeX+w89p9sYGFmZ/Qo3oP3//1uf/1WV+Vib/90mJtscHAgrs9cVFd4sLAkqrBQzrN4hId83OFqe/xEytskMDPjV1MwkJM8NDSRCuvzx8VWS9v339/KqqRFArA9AsuMvL/n//+l/f0dhxFNpxAAgrwIgpP79+0yZ/+7+/kaC6+hsbORcXPfLy+VlZbYYGPL//8QJCRw7t0uI7vLv7vO7u+NTU++fn+yIiPvp6fnj41xyyMsZGTJLsgcop4MBAdY7PFeY/u2Xl9kqKup1dd4yMihDsOqQkOf7+9tycgAYqS5LvWR4yeNNTeBJSuA/P+YcFPfd3fGyst+urrQEBeC7u2t/0URdvnaI0vXDw9UfH9ogIOCkpdZJSfP39mwAAKOv3DxWwVGV/DxVtu7DxOgnH9EsLOvS0uXKy9MUFDdRvEJ85Kiz3pOg1Zun0dzV1jJl1F6J5KgUFORFQ9uNjR9RuTZu1txhYYyY0lGP8wAQoShVxpkODpBjm+F9fYZ3uPDl5dnq6tZWVp6q2+fb2ypgx4COzpOu6gAHm38ta4GU2D103+upqd2ZmRtJycUrLB06sXOExK1Ud8BGWs+WlshsbNPV6cyNj9G4uLvA4olPiXMbXlV52RJCvAsVbM4AAADVdFJOUwAD/vsDHQcCAvwLEf4jRYFk+/wWUP7+3bz97FV2/vo1QGMb/vREstSUkRP7+6lpx0JgODAf/GL6Y/v8/PRauXl6N5bP5+Vj/fzMLHDfor7l9/1j+/v2fNrFuGRjY4J1/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////sJN/H8AAAhbSURBVFjDxVdpVFNnGr6FSLihDBUqIMK0dQfrOlrrUndr972zzwkxIYQEEhIgEkMACQkwskpA2XcBWWTfZCsIAkpRREAQXOqCBdeZ0bbTmTPvd+9NSFiUf/MczgFO7vN87/t8z/feLxg2A2g0w/9o2NxBpx5fvG79xzt3frx+3UcMQmSubOIXY53jh8aBRwgEcvbv2PnRHCXgGcaGRYsc9wcC76AxiYOcwCOcHetN5iBBwxgWNmyBQDDoCrxJGBuDxh/W016iQKdjy2x8shQ4bokH6sgcDuegKwA6+nAdRqO/gI9hFllZOM5kMvlxHC0bkQMH7g12h4eHdw/+nnhsNj5ttRsT0ZksQa8rUkBszkBv9zCby2UjcAXLGbMp0DGGrRtBZ7K44RT94MBgHJ/L5rMo4LjbWquZFeh0mq2Pjh9I1M65183nIjJzErjPWgadPqP/q8n1WXzuA44rB37uxXHZTAM2qbCcTpuJb4/4CpzJHb7niqofiUOLM6cDd7OYvps0bAPbEraP76MYDETLBz6YhY4UBMumKdBpK9g4U+Bjt/oDWJ7jOjDMnY0OAmybqTagBrJ8LNeuscIcjxhzXEf4/FnphA1TmqBjVjY2y+3NiXO744jrAHj3Aj5TYbnU3HAv6QwrQhHllOb4wfAL1ydKWDmDj1TK6dhnVB5eUALfzjBO5nTdGaGbmi/lK14iACWsMShh+aQpNGyR4GUFoJ20xWimplo+w25yZ2nYmpd1oFAocMVSK70Cllla2plTCjTsvdkrUCAwz/4dIFjktHGjCSVgIcAFKxhkwumYueVsVAVBPXu55ub1f/5r2+cx8z/fjb1CWCDAcR9b6ojQMVuDEohjzNSnZgadKysTHY6tWnX4NVJgRRYOR4TaWprphiym9vzDbEJjhMukqLnngOvl7l1y9Ub/s2dbFr5DCtihfcN93kMKyFl7N0sgIfBZceHdD3of/+rtSVJzS6ITA6KS/ZXKY6d+ePvo+2QaiIpxKp+LAZ/FAau3d+TxY7lGo5G2/ne8LCe3JDI44Uy5vzOBsFtdlc+2dL1FCmj3di3Y4Lh9+/b0b8ViSZpYfKFGKkxpkQprJq4HtJf7kVTnpKiK/IgTmTKjqlWyd8kWdPGyxxbn9aRfa2sRF6q+F4aoJjTyolZVnTTkvjPP2Znn53s8++SJUs8GF5HofKpRzPxDlIm49pBZmpt92yZJk6TlqSWS2iFhYQrIpEzIi4Z8K7JPRpZ6erm4uHh5lkaezH9YXf3L15Xv6plIBtRs+49pF6GGHmigWNMql6smpCF198fPNQDVw730xMnsCl9ohkeaSHmAtpFq4m/7i9ND08bEhbV3xIUpLcIQdY1cJX88fq70RER+QFRSGOmDX3l748LnWxv/TAqs1iYHZ4fn/SM9NK9Y8jSvVq7WSNU9wpAasPGmr5bqn3wmITi6JLf+0JKqVYeoHNhrBVj8uFCihdrvwcYeobA1pUgtl9ZMgIk8/+SogMSI097uHtBMQ07Htm3fyCgTN/CZOgFJniTtaa3kaVGdJETdIiwsviOVqlQ3A4KjKap77unoxITjnXfvXjrQ+RXZAsOGMoHFDk+7GPpj20VxYduYRFNUC0YKi1uEwvEykcjFK/eKLks85VGHSwe0JmIrtS81fhw4AC7ALhSqoQ11j1TTqlJdHr8SHZxw3FeXJd+K/ILb274p+CslsExgICCW5KmfXtDIWyFCxZCEmroxfyVlP5Ulj/PIxFjKA3itkD1oW2hJv6ZqEYeoxjRFRUVkEpVATQiOvEJlybvp9vOtW5soAd0YY/HDIYdtkry8FIm4todKYp185DrEMBdRPTyJLEUlxzc7/PC2w1+oFugMGzauv41tQ5DEFHmtXK4ekgrr7v+nTOTh7n06IlGbJZ4y/u6Brx20JsIgJEpgkUFKG5KEqlAK7whDWlOEUvnIryiGyf66LAUkRjc9ielr+opsASkQcwwEJCmh1yTq0FDJBbFUU9SqLq678++fHMJ45BRI0mZJdFjfRHQ/MV9qiUMLw7Vt6pTi4rGhHuD95NBMBZiIIUwBb08yS1ciCxb2/7yl4B2tAPk+UTBZmx3i45v9w8KAyOMplcrm+PL2imwIPxFDXZb8DEcaqWDhhitYmy8hdHVVV1c29t8ouFqSmdPgIYIYNqApkK3LkjK+s/rLLZ1v6b0hadhKN/zs5SdPnshkstTU1MMEzp+vz/E+TcQwiaeXpcjMDr2RplPwOXu5asmS2NhDqamyjsym21dv5D887pvsr6WWn6GyNGWkTXYh2Pxz/6NHjZXV7V13b8U3gwlKHiAsCcUQpgBxHiFLEYkJldW/fNloUAHh5OZTp04dBRxDaI6/5YssjCAGKbJflyXDkaanYP5FZWVlY+OjR8jB202ZOfUiBESFN8qZySy1N/Y/31r5/tRbK83JKBYsIEB4CBaWwAyu0MWQyBIaaamxkyNNDxuNjIxSZeBgZtPVAmRhZ7If2EBSYQqgGHp5uXt65shSY+anvjZFAK5rX1RXd3V1goPxx44pSYSB+5BgiCFQg4KCcnNksAOrrK2tq2YQcKBcbAYHyzvbH0IKwUL3Bi8vito3ap3xKkJGhvXobtOpAk4LAQUFhIGZHfX19SKPBnfPoFzPDllM3+imVxd8992CBQsQ2dr6kz0bp1+6nZYQJkICRfUN7jk5OR1QLsVEXLRwRsamT/64Z9duJ/IyYIBXsD1GMeBjTExMX9/o6KYMIP6WwL59+/bu3funTz/dtev1N9+YZ2ZiampiYmI6wxeHNxDeBPwG4XUK6O/fAebpYGaGROb6ZRZWA8I8A7oZqmAGBdNpMPzQRA9TPp07ZpH//+F/1TH4z3QpI9MAAAAASUVORK5CYII="/>
                                                                 USDT
                                                            </Button>
                                                        </Col>
                                                        <Col sm='3'>
                                                            <Button color="general" className="group-4-button" style={{width: '100%'}}>
                                                                 <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/busd.488237bc.svg'/>
                                                                 BUSD    
                                                            </Button>
                                                        </Col>
                                                        <Col sm='3'>
                                                            <Button color="general" className="group-4-button" style={{width: '100%'}}>
                                                                 <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/usdt.6dc09781.svg'/>
                                                                 USDT
                                                            </Button>
                                                        </Col>
                                                        <Col sm='3'>
                                                            <Button color="general" className="group-4-button" style={{width: '100%'}}>
                                                                 <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/usdc.f08e02b1.svg'/>
                                                                 USDC    
                                                            </Button>
                                                        </Col>
                                                  </Row>
                                             </Col>
                                             <Col sm="6" className="border-left">
                                                  <Row>
                                                       <Col sm='6'>
                                                            <p>Total Liquidity</p>
                                                            <h3 className="pool-h3">$1,547,203</h3>
                                                            {/* <Spinner animation="border" className="NRV-color" /> */}
                                                       </Col>
                                                       <Col sm='6'>
                                                            <p>APR &nbsp;<BsInfoCircle className="mouse-pointer NRV-color" id="info-10" /></p>
                                                            <h3 className="pool-h3"><Spinner animation="border" className="NRV-color" />%</h3>
                                                            
                                                            <UncontrolledTooltip
                                                                 delay={0}
                                                                 target='info-10'
                                                                 placement="top">
                                                                 Daily APR&nbsp;&nbsp;    0.02% <br/>
                                                                 Weekly APR&nbsp;&nbsp;   5.67% <br/>
                                                                 Yearly APR&nbsp;&nbsp;   2.59% <br/>
                                                                 Yearly APY&nbsp;&nbsp;   1.45%
                                                            </UncontrolledTooltip>
                                                       </Col>
                                                  </Row>
                                             </Col>
                                        </Row>
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
                                                  <h3 className="gradient-color-3" ><Link to='/rusd'>rUSD / 3pool - External Metapool</Link></h3>
                                             </Col>
                                        </Row>
                                   </CardHeader>
                                   <CardBody>
                                        <Row>
                                             <Col sm="6">
                                                  <p>Assets</p>
                                                  <Row>
                                                        <Col sm='3'>
                                                            <Button color="general" className="group-4-button" style={{width: '100%'}}>
                                                                 <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFf0lEQVR4Xu2a/2vVZRTHLe6+78qNgoKK7BtOy1qlIX2xspCIshl9mUPkWtoXUbIWCZa4GBhRcQshIooFBUIQ0Q+ZmrYyK8siv9zNbW5ubmmZ1f6E03O2e+ez9z3n83mez+a6u7sveP/yPO9znvOcnT33MjZtWpEiRYr8T8RSn90ZS32ewvUpQez1T8kW7hcssVc/oSChv2Aoad5KPsL4SUvJpo9pLMJ8k4emlkTJSx/SuGhDSxLT5zWl6z+gsyE8J+8obXyPXBU1DmPzgtJn3yFXYawNesOE8RNO2Zot5KryNVuaMF4DY8OE8RNC2dNvkasw1hXME6SSValajD8rlK18k1yFsTbxmgayhfs2mDdIGDtulCdfI1dhrA1e3LUJeEaYMD4y5cs2k6sw1gYva19YW5fAM8OE8d5U1DdTmDDGxlyoxeWC6NF8WbAGTRjnTcUjTRSgQfTb4IUSNfUz0INgTGgjcmsaJfR7U7FkI0lCnw1eIOwSEhgflgPrc6nTicoHNhAKPVmw4LCiXcB8Rkn0MFhjWK3OVN73IqHQIxSZ4xkrYfmxRq1WbyoXNRIKPUGFqXxxkEbkSHxmw6B2Ftao1epN1cJ1hEKPVJDGOebCmtCrIZ2HNWq1elO1YC2h0CMVhCR2plsTO9IUpnO3hTdCOg9r1Gr1purW1YRCj1SQzYyvj5Cvgn41pPOwRq1Wb6rnP0Uo9EgFMffs66HaPV2RpTVBOg9r1Gr1pnruSkKhRyqIWfxzL93+Qzdd820nLfyxx1lhD6R0Htao1epN9Q0rCIUeqSDm0V+P06J9x+im77roCjPW5+9M00O/9KkadXHfBgh1SrV6E5+znFA5HqEgJvlbPz24/8wUXLy7nSq3H6b7zWSsOjgwIt7PubhnA7BGrVZv4rOXESrHIxTEPHPod6rPTMFcMwVXtg5PQWzboaHLrW8/SVeZtQu/aqMq05icy/s0QKhTqtWb7GG2NA+uP58+SSsO9NPizBRcy1Owq33ksneYtRtNY65u7aCLdrVR3KwPfR+I0gChTvREAhNKSbX1l4/8QautKZi3d/QU8CN5l3n0eDpmftMx9CsyfceZCZn0DdjcdYpeaBueAn4LFmSm4JLdw1Ow3LwRS/b30d2mCTfvPUqzzd6lZu8806DSLzNNEJDOwxolTyQwoZRUW091n6aNmSl4zJoC/r3nKVh7+ATxQ8mfAPydYb5pAj+Wl2U+MYaaICCdhzVKnkhgQimptv5u799kT0FdZgrmZKaAm7MufYIePzBAD5sm3PvTMbrl+6N03Z5Outw04QLzOGJORjoPa5Q8kcCEUlJtnclOgf2JMM/8pHkK3uj+izZ1/EnPmSY8YZrA3xu4CbeZJl1vmoC5skjnYY2SJxKYUEqqrds0mingnzS/Bfz68xS83/cPcYNeMU3g/SfNdwJuEsYi0nlYo+SJBCaUkmrrEnxB/inzFGwdGKSW4//S2z2nqbnzlFM8I52HNUqeSGBCKWnQnga/BdwA1kf9g3W4r6GdhTVKnkhgQikp7kuesYL5+a9DgfvjVQcmlJLifpDXF8yn5URPkNcLTCglxXX0J2qTCdvvAuaQzrVBr0uME5hQShq2ru1LYExYHHpR6PcGE0pJtXUGYzUf4+pj0KsJ47zBhFJSbd0Gc9h+XI/XLG21Y21yvcHC+MgEJdXWJbBAFPqzxGctrUNvkDB+XNCSa+tBYMHTaxqa0GODfk1RHtwxozVAW7fBC+A+gn5LveidMLTisUjczxJ3/B+CLDwtrt4JQSsELyV5bNAb5s8rpH9+wMu4Xgy9Yf68BS8hCWNsfLx5CV4gSBhbMOBFA2U+6zG+YMi5bIAwtqDAy6LQX7BM2YvbTOnLFylSJC/4D7SkEyM13abkAAAAAElFTkSuQmCC'/>
                                                                 RUSD
                                                            </Button>
                                                        </Col>
                                                        <Col sm='3'>
                                                            <Button color="general" className="group-4-button" style={{width: '100%'}}>
                                                                 <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/busd.488237bc.svg'/>
                                                                 BUSD    
                                                            </Button>
                                                        </Col>
                                                        <Col sm='3'>
                                                            <Button color="general" className="group-4-button" style={{width: '100%'}}>
                                                                 <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/usdt.6dc09781.svg'/>
                                                                 USDT
                                                            </Button>
                                                        </Col>
                                                        <Col sm='3'>
                                                            <Button color="general" className="group-4-button" style={{width: '100%'}}>
                                                                 <img className="w-5 h-5 inline mr-2 -mt-1 icon-img" src='https://nerve.fi/static/media/usdc.f08e02b1.svg'/>
                                                                 USDC    
                                                            </Button>
                                                        </Col>
                                                  </Row>
                                             </Col>
                                             <Col sm="6" className="border-left">
                                                  <Row>
                                                       <Col sm='6'>
                                                            <p>Total Liquidity</p>
                                                            <h3 className="pool-h3">$1,547,203</h3>
                                                            {/* <Spinner animation="border" className="NRV-color" /> */}
                                                       </Col>
                                                       <Col sm='6'>
                                                            <p>APR &nbsp;<BsInfoCircle className="mouse-pointer NRV-color" id="info-10" /></p>
                                                            <h4 className="pool-h3">Visit Ramp to stake NRV</h4>
                                                            
                                                            <UncontrolledTooltip
                                                                 delay={0}
                                                                 target='info-10'
                                                                 placement="top">
                                                                 Daily APR&nbsp;&nbsp;    0.02% <br/>
                                                                 Weekly APR&nbsp;&nbsp;   5.67% <br/>
                                                                 Yearly APR&nbsp;&nbsp;   2.59% <br/>
                                                                 Yearly APY&nbsp;&nbsp;   1.45%
                                                            </UncontrolledTooltip>
                                                       </Col>
                                                  </Row>
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
export default Portfolio;
