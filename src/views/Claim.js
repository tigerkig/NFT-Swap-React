import React, { useState, useEffect } from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
} from "reactstrap";
import Select from "react-select";
import NotificationAlert from "react-notification-alert";
import { Audio } from  'react-loader-spinner'
import { connect } from "react-redux";
import "./app.css";

const Claim = (props) => {
  //loading
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <Audio type="Puff" color="#00BFFF" height={100} width={'100%'} wrapperClass="loadingDiv"/>}

      <div className="content justidymc">
        <Row className='claim-card'>
            <Col md="6">
              <Card className="mint-card">
                <CardHeader>
                  <Row>
                    <Col className="text-center" sm="12">
                      <h3 className="gradient-color-3" >
                        Claim Tokens (Mar 10 to May 1)
                      </h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                    <Row>
                         <Col sm="12 mb-3" className="text-center">
                              <h4>0.0</h4>
                         </Col>
                         <Col sm="12 mb-3" className="text-center">
                              <h4 className='NRV-color'>NRV</h4>
                         </Col>
                         <Col sm="12 mb-3">
                         <Button color="general" style={{width:"100%"}}>Claim</Button>
                         </Col>
                    </Row>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card className="mint-card">
                <CardHeader>
                  <Row>
                    <Col className="text-center" sm="12">
                      <h3 className="gradient-color-3">
                      Claim Tokens (May 1 to July 5)
                      </h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                    <Row>
                         <Col sm="12 mb-3" className="text-center">
                              <h4>0.0</h4>
                         </Col>
                         <Col sm="12 mb-3" className="text-center">
                              <h4 className='NRV-color'>NRV</h4>
                         </Col>
                         <Col sm="12 mb-3">
                         <Button color="general" style={{width:"100%"}}>Claim</Button>
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
export default connect(mapStateToProps)(Claim);
