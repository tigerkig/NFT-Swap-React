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
const Gifted = (props) => {
  //*** common component */
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
  //------------filter and sort item card end
  //gift part
  const [widgetModalStatus, setWidgetModalStatus] = useState(false);
  const [selectedNFT,setSelectedNFT] = useState({tokenId:'',name:'',image:''});
  const showWidgetModal = (data) => {
    const tmp = JSON.parse(JSON.stringify(data));
    setSelectedNFT(tmp);  
    setWidgetModalStatus(true);
  };
  const closeWidgetModal = () => {
    setWidgetModalStatus(false);
  }
  // connet with contract
  useEffect(() => {
    const init = async ()=>{
      setLoading(true);
      await getGifted();
      setLoading(false);
    };
    init();
  }, []);
  // get nfts
  const [nfts,setNFTs] = useState([]);
  const getGifted = async ()=> {
    try {
      const response = await ApiCall(
        apiConfig.get_gift.url,
        apiConfig.get_gift.method,
        props.credential.loginToken,
        {}
      ); 
      return setNFTs(response.data.data);
    } catch (error) {
      if (error.response) showNotify(error.response.data.message,'','danger')
      else if (error.request)  showNotify("Request failed",'','danger')
      else showNotify("Something went wrong",'','danger')
    }
  }
  const del = async ()=> {
    try {
      const response = await ApiCall(
        apiConfig.del_gift.url,
        apiConfig.del_gift.method,
        props.credential.loginToken,
        selectedNFT
      ); 
      closeWidgetModal();
      return setNFTs(response.data.data);
    } catch (error) {
      if (error.response) showNotify(error.response.data.message,'','danger')
      else if (error.request)  showNotify("Request failed",'','danger')
      else showNotify("Something went wrong",'','danger')
    }
  }
  return (
    <>
      {loading && <Audio type="Puff" color="#00BFFF" height={100} width={'100%'} wrapperClass="loadingDiv"/>}
      <div className="rna-container">
        <NotificationAlert ref={notificationAlertRef} />
      </div>
      <div className="content">
            <Row>
                <Col xs="12">
                    <Card>
                        <CardHeader>
                        <Row>
                            <Col className="text-center" sm="12">
                            <h1
                                className="gradient-color-3"
                                style={{ "fontFamily": "Russo One" }}
                            >
                                Manage gifted nfts
                            </h1>
                            </Col>
                        </Row>
                        </CardHeader>
                        <CardBody>
                            <Row className="m-0"> 
                                {
                                    nfts.map((ele,index)=>{
                                        return(
                                            <div className="item-card" key={index}>
                                                <div className="item-card-main-content">
                                                    <img src={ele.image} alt="images"></img>
                                                    <div className="item-card-info"> 
                                                        <p className="itemName">{typeof(ele.name)=='string'?ele.name:''}{ele.nft_type?`(${ele.nft_type})`:''}</p>
                                                    </div>
                                                </div>
                                                <div className="item-card-button-content">
                                                <div className="item-card-button-content-btnDiv">
                                                    <Button color="general" className="btn-icon btn-right btn-itemCard" onClick={()=>showWidgetModal(ele)}>Delete</Button>
                                                </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                        </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>        
       </div>
       {/* delete modal */}
       <Modal modalClassName="modal-black widgetModal" isOpen={widgetModalStatus}>
            <div className="modal-header">
            <div className="modal-header-text-content">
                <div className="modal-header-text1 gradient-color-3">Are you sure?</div>
            </div>
            <Button color="general btn-icon close-btn p-0" onClick={()=>closeWidgetModal()}> 
                <span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.288 0.516113L8.92345 6.87911L2.56045 0.516113L0.439453 2.63711L6.80245 9.00011L0.439453 15.3631L2.56045 17.4841L8.92345 11.1211L15.288 17.4841L17.409 15.3631L11.046 9.00011L17.409 2.63711L15.288 0.516113Z" fill="white"/>
                </svg>
                </span>
            </Button>
            </div>
            <div className="modal-body">
                Will you delete this nft?
            </div>
            <div className="modal-footer">
                <Button color="general" onClick={()=>closeWidgetModal()}><span>CANCEL</span></Button>
                <Button color="general" onClick={()=>del()}><span>Delete</span></Button>
            </div>
       </Modal>
    </>
  );
};
const mapStateToProps = (state) => {
  const { LoginReducer } = state;
  return { credential: LoginReducer };
};
export default connect(mapStateToProps)(Gifted);
