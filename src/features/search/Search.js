import React from "react";
import { Layout, Input, Row, Col } from "antd";
import { connect } from "react-redux";
import Photo from "./Photo";
import { searchType, search } from "./redux";
import "./Search.css";

const { Search } = Input;
const { Header, Sider, Content, Footer } = Layout;

const enhance = connect(
  state => ({
    text: state.text,
    results: state.results,
    loading: state.loading
  }),
  { searchType, search }
);

export const SearchPage = props => (
  <Layout>
    <Header>Image Search</Header>
    <Layout>
      <Sider>Sidebar</Sider>
      <Content>
        <Row>
          <Col span={12} offset={6} className="search-col">
            <Search
              disabled={props.loading}
              value={props.text}
              onChange={e => props.searchType(e.target.value)}
              placeholder="input search text"
              enterButton={props.loading ? "Loading..." : "Search"}
              size="large"
              onSearch={props.search}
            />
          </Col>
        </Row>
        <Row>
          {props.results.map(result => (
            <Col key={result.id} span={8}>
              <Photo photo={result} />
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
);

export default enhance(SearchPage);
