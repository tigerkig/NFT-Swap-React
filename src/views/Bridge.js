import React, { useState, useEffect } from "react";
// reactstrap components
import { BsInfoCircle } from "react-icons/bs";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Progress,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
  Modal,
  Form,
} from "reactstrap";
import Select from "react-select";
import NotificationAlert from "react-notification-alert";
import { Audio } from  'react-loader-spinner'
import { connect } from "react-redux";
import "./app.css";
//web3
import Web3 from "web3";
import {NFT_ABI,NFT_ADDR} from "../config/index";
import ipfsClient from "ipfs-http-client";

const ipfs = ipfsClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});
const Mint = (props) => {
  const [loading, setLoading] = useState(false);
  const [mintData,setMintData] = useState({
    nft_type:'BTC', cryptoImg : "https://nerve.fi/static/media/btcbep.b1a0507c.svg"
  });
  const [reDeem, setReDeem] = useState({
    nft_type:'anyETH', cryptoImg : "https://nerve.fi/static/media/eth.9270fc02.svg"
  })

  const [isShow, setIsShow] = useState(false);

  const isShowMoreInfo = (index) => {
    setIsShow(!isShow)
  }

  return (
    <>
      {loading && <Audio type="Puff" color="#00BFFF" height={100} width={'100%'} wrapperClass="loadingDiv"/>}
      <div className="content justidymc">
        <Row>
            <Col xs="12">
              <Card className="mint-card">
                <CardHeader>
                  <Row>
                    <Col sm="12">
                      <h1 className="gradient-color-3" >
                        Nerve Bridge
                      </h1>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                    <Row>
                      <Col sm="mb-3" className="bridge_btn_group">
                        <Button className={isShow ? "fullWidth disabled-button" : "fullWidth" } onClick={() => isShowMoreInfo(false)}>+ Deposit</Button>
                        <Button className={isShow ? "fullWidth" : "fullWidth disabled-button" } onClick={() => isShowMoreInfo(true)}>- Redeem</Button>
                      </Col>
                      {isShow ?
                        <>
                        <div className="bridgeLabel">
                            <Label className="bridgeLabelTxt">Select an asset and native chain to bridge assets to</Label>
                          </div>
                          <Col sm="12 mb-3" className="bridge_col">
                            <FormGroup className="bridge_selectForm">
                              <Select
                                options={[
                                  { value: 'anyETH', label: 'anyETH' , image: 'https://nerve.fi/static/media/eth.9270fc02.svg'},
                                  { value: 'fUSDT', label: 'fUSDT', image: 'https://nerve.fi/static/media/usdt.6dc09781.svg' },
                                  { value: 'anyBTC', label: 'anyBTC', image: 'https://nerve.fi/static/media/anybtc.b81d670a.svg' },
                                ]}
                                formatOptionLabel={item => (
                                  <div className="cripto-option">
                                    <img src={item.image} alt="cripto-image" />
                                    <span>{item.label}</span>
                                  </div>
                                )}
                                className="cryptoSelect react-select info"
                                classNamePrefix="react-select"
                                value={{value:reDeem.nft_type,label:reDeem.nft_type, image : reDeem.cryptoImg}}
                                onChange={(e) => {
                                  setReDeem({ ...reDeem, nft_type: e.value, cryptoImg : e.image })
                                }}
                              >
                              </Select>
                          </FormGroup>
                          { reDeem.nft_type == 'anyETH' ? 
                            <>
                              <div className="bridgeitems">
                                <div className="bridgeitem">
                                  <div className="bridgesource">Source chain
                                    <BsInfoCircle className="bsinfocircleIcon"/>
                                  </div>
                                  <div className="bridgesource">BSC
                                    <img src="https://nerve.fi/static/media/binance.1228492c.svg"></img>
                                  </div>
                                </div>
                              </div>
                              <div className="bridgeitems">
                                <div className="bridgeitem">
                                  <div className="bridgesource">Destination Chain
                                    <BsInfoCircle className="bsinfocircleIcon"/>
                                  </div>
                                  <div className="bridgesource">ETH
                                    <img src="https://nerve.fi/static/media/eth.9270fc02.svg"></img>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="bridgeitems bridge_metaIconContainer" >
                                <div className="bridgeitem">
                                  <div className="bridgesource">Token
                                    <BsInfoCircle className="bsinfocircleIcon" />
                                  </div>
                                  <div className="bridgesource">ETH
                                    <img src="https://nerve.fi/static/media/eth.9270fc02.svg"></img>
                                  </div>

                                </div>
                              </div>
                            </> : ''
                          
                          }
                          { reDeem.nft_type == 'fUSDT' ? 
                            <>
                              <div className="bridgeitems">
                                <div className="bridgeitem">
                                  <div className="bridgesource">Source chain
                                    <BsInfoCircle className="bsinfocircleIcon"/>
                                  </div>
                                  <div className="bridgesource">BSC
                                    <img src="https://nerve.fi/static/media/binance.1228492c.svg"></img>
                                  </div>
                                </div>
                              </div>
                              <div className="bridgeitems">
                                <div className="bridgeitem">
                                  <div className="bridgesource">Destination Chain
                                    <BsInfoCircle className="bsinfocircleIcon"/>
                                  </div>
                                  <div className="bridgesource">ETH
                                    <img src="https://nerve.fi/static/media/eth.9270fc02.svg"></img>
                                  </div>
                                </div>
                              </div>
                              <div className="bridgeitems bridge_metaIconContainer" >
                                <div className="bridgeitem">
                                  <div className="bridgesource">Token
                                    <BsInfoCircle className="bsinfocircleIcon" />
                                  </div>
                                  <div className="bridgesource">USDT
                                    <img src="https://nerve.fi/static/media/usdt.6dc09781.svg"></img>
                                  </div>

                                </div>
                              </div>
                              <div className="bridge_metaIcon" id="bridge_metaconnectIcon"><img src="https://nerve.fi/static/media/metamask.88dfbaa3.svg" /></div>
                              <UncontrolledTooltip
                                color="black"
                                delay={0}
                                target={'bridge_metaconnectIcon'}
                                placement="bottom">
                                  Add to wallet
                              </UncontrolledTooltip>
                            </> : ''
                          }
                          { reDeem.nft_type == 'anyBTC' ? 
                            <>
                              <div className="bridgeitems">
                                <div className="bridgeitem">
                                  <div className="bridgesource">Destination Chain
                                    <BsInfoCircle className="bsinfocircleIcon"/>
                                  </div>
                                  <div className="bridgesource">BSC
                                    <img src="https://nerve.fi/static/media/binance.1228492c.svg"></img>
                                  </div>
                                </div>
                              </div>
                              <div className="bridgeitems">
                                <div className="bridgeitem">
                                  <div className="bridgesource">Source chain
                                    <BsInfoCircle className="bsinfocircleIcon"/>
                                  </div>
                                  <div className="bridgesource">BTC
                                    <img src="https://nerve.fi/static/media/btc.f323701d.svg"></img>
                                  </div>
                                </div>
                              </div>
                          
                              <div className="bridgeitems bridge_metaIconContainer" >
                                <div className="bridgeitem">
                                  <div className="bridgesource">Token
                                    <BsInfoCircle className="bsinfocircleIcon" />
                                  </div>
                                  <div className="bridgesource">BTC
                                    <img src="https://nerve.fi/static/media/btc.f323701d.svg"></img>
                                  </div>
                                </div>
                              </div>
                            </> : ''
                            
                          }
                          
                          </Col>
                          <Col sm="12 mb-3" className="bridge_viewEthBtn">
                            <Button color="general" style={{width:"100%"}}>View ETH bridge info</Button>
                          </Col>
                      </>
                        :
                        <>
                          <Col sm="12 mb-3" className="bridge_col">
                          <div className="bridgeLabel">
                            <Label className="bridgeLabelTxt">Select an asset and destination chain to bridge assets to</Label>
                          </div>
                          <FormGroup className="bridge_selectForm">
                            <Select
                              options={[
                                { value: 'BTC', label: 'BTC' , image: 'https://nerve.fi/static/media/btcbep.b1a0507c.svg'},
                                { value: 'ETH', label: 'ETH', image: 'https://nerve.fi/static/media/eth.9270fc02.svg' },
                                { value: 'USDT', label: 'USDT', image: 'https://nerve.fi/static/media/usdt.6dc09781.svg' },
                              ]}
                              formatOptionLabel={item => (
                                <div className="cripto-option">
                                  <img src={item.image} alt="cripto-image" />
                                  <span>{item.label}</span>
                                </div>
                              )}
                              className="cryptoSelect react-select info"
                              classNamePrefix="react-select"
                              value={{value:mintData.nft_type,label:mintData.nft_type, image : mintData.cryptoImg}}
                              onChange={(e) => {
                                setMintData({ ...mintData, nft_type: e.value, cryptoImg : e.image })
                              }}
                            >
                            </Select>
                          </FormGroup>
                          {
                            mintData.nft_type == 'ETH' ? 
                            <>
                              <div className="bridgeitems">
                                <div className="bridgeitem">
                                  <div className="bridgesource">Source chain
                                    <BsInfoCircle className="bsinfocircleIcon"/>
                                  </div>
                                  <div className="bridgesource">ETH
                                    <img src="https://nerve.fi/static/media/eth.9270fc02.svg"></img>
                                  </div>
                                </div>
                              </div>
                              <div className="bridgeitems">
                                <div className="bridgeitem">
                                  <div className="bridgesource">Destination Chain
                                    <BsInfoCircle className="bsinfocircleIcon"/>
                                  </div>
                                  <div className="bridgesource">BSC
                                    <img src="https://nerve.fi/static/media/binance.1228492c.svg"></img>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="bridgeitems bridge_metaIconContainer" >
                                <div className="bridgeitem">
                                  <div className="bridgesource">Resulting Token
                                    <BsInfoCircle className="bsinfocircleIcon" />
                                  </div>
                                  <div className="bridgesource">anyETH
                                    <img src="https://nerve.fi/static/media/eth.9270fc02.svg"></img>
                                  </div>
                                </div>
                              </div>
                            </> : ''
                          }
                          {
                            mintData.nft_type == 'BTC' ? 
                            <>
                                <div className="bridgeitems">
                                  <div className="bridgeitem">
                                    <div className="bridgesource">Source chain
                                      <BsInfoCircle className="bsinfocircleIcon"/>
                                    </div>
                                    <div className="bridgesource">BTC
                                      <img src="https://nerve.fi/static/media/btc.f323701d.svg"></img>
                                    </div>
                                  </div>
                                </div>
                                <div className="bridgeitems">
                                  <div className="bridgeitem">
                                    <div className="bridgesource">Destination Chain
                                      <BsInfoCircle className="bsinfocircleIcon"/>
                                    </div>
                                    <div className="bridgesource">BSC
                                      <img src="https://nerve.fi/static/media/binance.1228492c.svg"></img>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="bridgeitems bridge_metaIconContainer" >
                                  <div className="bridgeitem">
                                    <div className="bridgesource">Resulting Token
                                      <BsInfoCircle className="bsinfocircleIcon" />
                                    </div>
                                    <div className="bridgesource">anyBTC
                                      <img src="https://nerve.fi/static/media/anybtc.b81d670a.svg"></img>
                                    </div>
                                  </div>
                                </div>
                            </> : ''
                          }
                          {
                            mintData.nft_type == 'USDT' ? 
                            <>
                                <div className="bridgeitems">
                                  <div className="bridgeitem">
                                    <div className="bridgesource">Source chain
                                      <BsInfoCircle className="bsinfocircleIcon"/>
                                    </div>
                                    <div className="bridgesource">ETH
                                      <img src="https://nerve.fi/static/media/eth.9270fc02.svg"></img>
                                    </div>
                                  </div>
                                </div>
                                <div className="bridgeitems">
                                  <div className="bridgeitem">
                                    <div className="bridgesource">Destination Chain
                                      <BsInfoCircle className="bsinfocircleIcon"/>
                                    </div>
                                    <div className="bridgesource">BSC
                                      <img src="https://nerve.fi/static/media/binance.1228492c.svg"></img>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="bridgeitems bridge_metaIconContainer" >
                                  <div className="bridgeitem">
                                    <div className="bridgesource">Resulting Token
                                      <BsInfoCircle className="bsinfocircleIcon" />
                                    </div>
                                    <div className="bridgesource">fUSDT
                                      <img src="https://nerve.fi/static/media/usdt.6dc09781.svg"></img>
                                    </div>
                                  </div>
                                </div>
                            </> : ''
                          }

                          
                          <div className="bridge_metaIcon" id = "bridge_metaconnectIcon"><img src="https://nerve.fi/static/media/metamask.88dfbaa3.svg" /></div>
                          <UncontrolledTooltip
                            color="black"
                            delay={0}
                            target={'bridge_metaconnectIcon'}
                            placement="bottom">
                              Add to wallet
                          </UncontrolledTooltip>
                        </Col>
                        <Col sm="12 mb-3" className="bridge_viewEthBtn">
                          <Button color="general" style={{width:"100%"}}>View ETH bridge info</Button>
                        </Col>
                        </>
                        
                      }
                    </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
      
          <div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  const { LoginReducer } = state;
  return { credential: LoginReducer };
};
export default connect(mapStateToProps)(Mint);
