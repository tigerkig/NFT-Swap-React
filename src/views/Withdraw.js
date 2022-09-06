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
import Select from 'react-select';
import NotificationAlert from "react-notification-alert";
import { Audio } from  'react-loader-spinner'
import { connect } from "react-redux";
import "./app.css";
//web3
import Web3 from "web3";
import {NFT_ABI,NFT_ADDR} from "../config/index";
import axios from 'axios';
import io from "socket.io-client";
const Gift = (props) => {
  //*** common component */
  const {apiConfig, ApiCall} = global;
  const [socket, setSocket] = useState("");
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
  //------------filter and sort item card end
  //nft to withdraw
  const [nfts,setNFTs] = useState([]);
  const getWithdraw = async ()=> {
    try {
      const response = await ApiCall(
        apiConfig.get_w.url,
        apiConfig.get_w.method,
        props.credential.loginToken,
        {}
      );
      if(response.data) setNFTs(response.data.data);
    } catch (error) {
      if (error.response) showNotify(error.response.data.message,'','danger')
      else if (error.request)  showNotify("Request failed",'','danger')
      else showNotify("Something went wrong",'','danger')
      return [];
    }
  }
  const confirmWithdraw = async (data)=> {
    try {
      let account;
      const web3 = new Web3(Web3.givenProvider);
      try{
        const accounts = await web3.eth.requestAccounts();
        account = accounts[0];
      }catch(e){
        showNotify('Please connect your wallet.','','danger');
        return;
      }

      const nftcontract = web3.eth.Contract(NFT_ABI,NFT_ADDR);
      const owner = await nftcontract.methods.ownerOf(data.tokenId).call();
      if(!account) {
        showNotify('Please connect your wallet.','','danger');
        return;
      }
      if(String(data.account).toLowerCase() === owner.toLowerCase()){
        showNotify('Cannot transfter between same owners.');
        return;
      }
      if(account.toLowerCase()!==owner.toLowerCase()) {
        showNotify('Current wallet is not NFT owner','','danger');
        return;
      }
      await sendNFT(nftcontract,owner,data.account,data.tokenId);
      const response = await ApiCall(
        apiConfig.confirm_w.url,
        apiConfig.confirm_w.method,
        props.credential.loginToken,
        data
      );
      showNotify(response.data.message);
      if(response.data) setNFTs(response.data.data);
    } catch (error) {
      if (error.response) showNotify(error.response.data.message,'','danger')
      else if (error.request)  showNotify("Request failed",'','danger')
      else showNotify("Something went wrong",'','danger')
    }
  }
  const sendNFT = (contract,from,to,tokenId) =>
    new Promise((resolve, reject) =>
    {
      try{
        contract.methods.transferFrom(from,to,tokenId).send({from:from})
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
          console.log(error)
          reject(error.message)
        })
        .then(function(receipt){
          // console.log('receipt')
          // console.log(receipt)
        });
      }catch(error){
        console.log(error)
        reject('Failed')
      }
    }
  );
  const rejectWithdraw = async (data)=> {
    try {
      const response = await ApiCall(
        apiConfig.reject_w.url,
        apiConfig.reject_w.method,
        props.credential.loginToken,
        data
      );
      showNotify(response.data.message);
      if(response.data) setNFTs(response.data.data);
    } catch (error) {
      if (error.response) showNotify(error.response.data.message,'','danger')
      else if (error.request)  showNotify("Request failed",'','danger')
      else showNotify("Something went wrong",'','danger')
      return [];
    }
  }
  //socket
  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
        // when connection started
        console.log("connect");
        socket.on("withdraw:new", (data) => {
          if(data){
            setNFTs(data);
          }
        });
      });
    }
    return () => {
      if (socket) socket.disconnect();
    };
  }, [socket]);
  // init
  useEffect(() => {
    const init = async ()=>{
      //set socket
      if (props.credential.loginToken) {
        setSocket(
          io(apiConfig.endPoint, {
            auth: {
              token: props.credential.loginToken,
            },
          })
        );
      } else {
        setSocket(io(apiConfig.endPoint));
      }
      await getWithdraw();
    };
    init();
  }, [props.credential.loginToken]);
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
      <div className="content">
        <Card>
            <CardHeader>
            <Row>
                <Col className="text-center" sm="12">
                <h1
                    className="gradient-color-3"
                    style={{ "fontFamily": "Russo One" }}
                >
                    Withdraw
                </h1>
                </Col>
            </Row>
            </CardHeader>
            <CardBody>
            <Table responsive>
              <thead className="text-primary">
                <tr>
                  <th className="text-center">No</th>
                  <th className="text-center">Image</th>
                  <th className="text-center">NFT Title</th>
                  <th className="text-center">UserId</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  nfts.map((item,key)=>{
                    return(
                      <tr key={key}>
                        <td className="text-center">{key+1}</td>
                        <td key={1} className="text-center imagetd">
                            <img
                              alt="..."
                              src={item.image}
                            />
                        </td>
                        <td className="text-center">{item.name}</td>
                        <td className="text-center">{item.userId}</td>
                        <td className="text-center">
                        <Button color="success" onClick={() => confirmWithdraw(item)}>
                          Confirm
                        </Button>
                        <Button color="danger" onClick={() => rejectWithdraw(item)} title="Delete">
                          Reject
                        </Button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
            </CardBody>
        </Card>     
       </div>
    </>
  );
};
const mapStateToProps = (state) => {
  const { LoginReducer } = state;
  return { credential: LoginReducer };
};
export default connect(mapStateToProps)(Gift);
