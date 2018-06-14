import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import landing from './components/landingpage';
import TablePage from './components/table';
import { Link } from 'react-router-dom';


class App extends Component {

  render() {
    return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="FORMULA 1" scroll>
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/champions">Champions</Link>
            {/* <Link to="/table">Table</Link> */}
          </Navigation>
        </Header>
        <Drawer title="Menu">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/champions">Champions</Link>
            {/* <Link to="/table">Table</Link> */}
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  )}

    }

export default App;
