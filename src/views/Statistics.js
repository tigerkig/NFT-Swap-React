import React from "react";
import classNames from "classnames";
import { BsInfoCircle, BsBoxArrowUpRight } from "react-icons/bs";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Button,
} from "reactstrap";

import ReactTable from "components/ReactTable/ReactTable.js";
import { Link } from "react-router-dom";
import Slider from "nouislider";


const dataTable = [
  ["Airi Satou", "Accountant", "Tokyo", "33"],
  ["Angelica Ramos", "Chief Executive Officer (CEO)", "London", "47"],
];

const ReactTables = () => {
  const [data, setData] = React.useState(
    dataTable.map((prop, key) => {
      return {
        id: key,
        time: prop[0],
        transactionHash: prop[1],
        swapPair: prop[2],
      };
    })
  );

  return (
    <>
      <div className="content">
        <Row className="mt-5">
          <Col xs={12} md={12}>
            <Card className="full-card">
              <CardHeader className="statistic_header">
                <h3>Recent Stablecoin 3Pool Swaps</h3>
                <Link to=''>
                   <BsBoxArrowUpRight className='open-doc white-color' />
                 </Link>
              </CardHeader>
              <CardBody className="statistic_body">
                <ReactTable
                  data={data}
                  filterable
                  resizable={false}
                  columns={[
                    {
                      Header: "TIME",
                      accessor: "time",
                    },
                    {
                      Header: "TRANSACTION HASH",
                      accessor: "transactionHash",
                    },
                    {
                      Header: "SWAP PAIR",
                      accessor: "swapPair",
                    },
                 
                  ]}
                  defaultPageSize={10}
                  showPaginationTop
                  showPaginationBottom={false}
                  className="-striped -highlight"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} md={12}>
            <Card className="full-card">
              <CardHeader className="statistic_header">
                <h3>Recent ETH/anyETH Pool Swaps</h3>
                <Link to=''>
                   <BsBoxArrowUpRight className='open-doc white-color' />
                 </Link>
              </CardHeader>
              <CardBody className="statistic_body">
                <ReactTable
                  data={data}
                  filterable
                  resizable={false}
                  columns={[
                    {
                      Header: "TIME",
                      accessor: "time",
                    },
                    {
                      Header: "TRANSACTION HASH",
                      accessor: "transactionHash",
                    },
                    {
                      Header: "SWAP PAIR",
                      accessor: "swapPair",
                    },
                 
                  ]}
                  defaultPageSize={10}
                  showPaginationTop
                  showPaginationBottom={false}
                  className="-striped -highlight"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} md={12}>
            <Card className="full-card">
              <CardHeader className="statistic_header">
                <CardTitle tag="h4"><h3>Recent ETH/anyETH Pool Swaps</h3></CardTitle>
                <Link to=''>
                   <BsBoxArrowUpRight className='open-doc white-color' />
                 </Link>
              </CardHeader>
              <CardBody className="statistic_body">
                <ReactTable
                  data={data}
                  filterable
                  resizable={false}
                  columns={[
                    {
                      Header: "TIME",
                      accessor: "time",
                    },
                    {
                      Header: "TRANSACTION HASH",
                      accessor: "transactionHash",
                    },
                    {
                      Header: "SWAP PAIR",
                      accessor: "swapPair",
                    },
                 
                  ]}
                  defaultPageSize={10}
                  showPaginationTop
                  showPaginationBottom={false}
                  className="-striped -highlight"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
     
      </div>
    </>
  );
};

export default ReactTables;


