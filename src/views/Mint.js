import React, { useState, useEffect } from "react";
// reactstrap components
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
  //*** common component */
  const [account, setAccount] = useState(); // state variable to set account.
  const {apiConfig, ApiCall} = global;
  //loading
  const [loading, setLoading] = useState(false);
  //show notify
  const notificationAlertRef = React.useRef(null);
  const showNotify = async (title, text, type = "success", place = 'tr', autoDismiss = 5) => {
    const options = {
      place: place,
      message: (
        <div><div>{title}</div><div>{text}</div></div>
      ),
      type: type,
      icon: "tim-icons icon-bell-55",
      autoDismiss: autoDismiss,
    };
    notificationAlertRef.current.notificationAlert(options);
  }
  // connet with contract
  useEffect(() => {
    const init = async ()=>{
      const web3 = new Web3(Web3.givenProvider);
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);
      await loadWeb3();
      await loadBlockchainData();
    };
    init();
  }, [account]);


  // mint functions
  const [data,setData] = useState({
    totalSupply:0,
  });
  const [mintData,setMintData] = useState({
    name:'',file:'',detail:'',nft_type:'Common'
  });
  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };
  const loadBlockchainData = async () => {
    const web3 = window.web3;
    if(account) {
      setLoading(true);
      const nftcontract = web3.eth.Contract(NFT_ABI,NFT_ADDR);
      const nftCount = await nftcontract.methods.totalSupply().call();
      if(nftCount){
        setData({ ...data, totalSupply:nftCount.toNumber() });//set total supply
      }
    }  
    setLoading(false);
  };
  const mintNFT = async () => {
    const web3 = window.web3;
    const {name, file, detail,nft_type} = mintData;
    if(!name){
      showNotify('Please input NFT name.','','danger');
      return;
    }
    if(!file){
      showNotify('Please select File','','danger');
      return;
    }
    setLoading(true); 
    let cid;
    let tokenObject;
    try{
      cid = await ipfs.add(file);
      tokenObject = {
        name: name,
        detail:detail,
        nft_type:nft_type,
        image: cid.path
      };
      cid = await ipfs.add(JSON.stringify(tokenObject));
    }catch(error){
      showNotify('Failed upload image to ipfs');
      setLoading(false);
      return;
    }
    try{
      const nftcontract = web3.eth.Contract(NFT_ABI,NFT_ADDR,);
      await confirmMint(nftcontract,account,cid.path,account);
    }catch(error){
      showNotify(error);
      setLoading(false);
      return;
    }
    showNotify('Success to mint');
    setLoading(false);
  };
  const confirmMint = (contract,account,path,from) =>
    new Promise((resolve, reject) =>
    {
      try{
        contract.methods.mintToken(account, path).send({from:from})
        .once('transactionHash', function(hash){ 
          // console.log('hash')
          // console.log(hash)
        })
        .once('receipt', function(receipt){ 
          // console.log('hash')
          // console.log(receipt)
        })
        .on('confirmation', function(confNumber, receipt){ 
          resolve(true);
        })
        .on('error', function(error){ 
          // console.log('error')
          reject(error.message)
        })
        .then(function(receipt){
          // console.log('receipt')
          // console.log(receipt)
        });
      }catch(error){
        reject('Failed')
      }
    }
  );
  const onFileChange = event => {
    //Update the state
    setMintData({...mintData, file: event.target.files[0] });
  };
  useEffect(() => {
    if(window.ethereum) {
      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      })
      window.ethereum.on('accountsChanged', () => {
        window.location.reload();
      })
  }},[]);
  return (
    <>
      {loading && <Audio type="Puff" color="#00BFFF" height={100} width={'100%'} wrapperClass="loadingDiv"/>}
      <div className="rna-container">
        <NotificationAlert ref={notificationAlertRef} />
      </div>
      <div className="content justidymc">
        <Row>
            <Col xs="12">
              <Card className="mint-card">
                <CardHeader>
                  <Row>
                    <Col className="text-center" sm="12">
                      <h1
                        className="gradient-color-3"
                        style={{ "fontFamily": "Russo One" }}
                      >
                        Create your mint
                      </h1>
                    </Col>
                    <Col className="text-center" sm="12">
                      <h4 className="gradient-color-3" style={{ "fontFamily": "Russo One" }}>Total mint:{data.totalSupply}</h4>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                    <Row>
                      <Col sm="12 mb-3">
                        <Input type="file" onChange={onFileChange}></Input>
                      </Col>
                      <Col sm="12 mb-3">
                        <FormGroup>
                          <Label>
                            NFT Name
                          </Label>
                          <Input type="text" onChange={(e) =>setMintData({...mintData, name: e.target.value })}></Input>
                        </FormGroup>
                      </Col>
                      <Col sm="12 mb-3">
                        <FormGroup>
                          <Label>
                            Detail
                          </Label>
                          <Input type="text" onChange={(e) =>setMintData({...mintData, detail: e.target.value })}></Input>
                        </FormGroup>
                      </Col>
                      <Col sm="12 mb-3">
                        <FormGroup>
                          <Label>
                            NFT Type
                          </Label>
                          <Select
                            options={[
                              { value: 'Common', label: 'Common' },
                              { value: 'Uncommon', label: 'Uncommon' },
                              { value: 'Rare', label: 'Rare' },
                              { value: 'Epic', label: 'Epic' },
                              { value: 'Legendary', label: 'Legendary' },
                            ]}
                            className="react-select info"
                            classNamePrefix="react-select"
                            value={{value:mintData.nft_type,label:mintData.nft_type}}
                            onChange={(e) => {
                              setMintData({ ...mintData, nft_type: e.value })
                            }}
                          >
                          </Select>
                      </FormGroup>
                      </Col>
                      <Col sm="12 mb-3">
                        <Button color="general" onClick={()=>mintNFT()} style={{width:"100%"}}>Mint</Button>
                      </Col>
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
