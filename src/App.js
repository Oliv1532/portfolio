import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './component/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header style = {{background: 'black', fontFamily: 'Roboto Mono'}} title={<a href = "/" rel = "noopener noreferrer">
            <i className = "fa fa-home home-button" aria-hidden = "true"/>
          </a>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/project">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
