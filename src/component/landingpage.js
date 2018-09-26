import React, { Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import mepic from './mepic.jpg';

class Landing extends Component {
  render(){
    return(
      <div style = {{width: '100%', margin: 'auto'}}>
        <Grid className = "landing-grid">
          <Cell col={12}>
            <img
              src = {mepic}
              alt = "Picture of me!"
              id="profile-pictures"
            />
            <div className = "banner-text">
              <h1> Oliver Bøgild Pedersen</h1>

              <hr/>

              <p> Student Software engineer from Aalborg University </p>

              <div className = "social-links">

              {/* LinkedIn */}
                <a href = "https://www.linkedin.com/in/oliver-pedersen-467b0915b/" target = "_blank" rel = "noopener noreferrer">
                  <i className = "fa fa-linkedin-square" aria-hidden = "true"/>
                </a>

              {/* Github */}
                <a href = "https://github.com/Oliv1532" target = "_blank" rel = "noopener noreferrer">
                  <i className = "fa fa-github-square" aria-hidden = "true"/>
                </a>

              {/* FreeCodeCamp */}
                <a href = "https://www.freecodecamp.org/oliv1532" target = "_blank" rel = "noopener noreferrer">
                  <i className = "fa fa-free-code-camp" aria-hidden = "true"/>
                </a>
              </div>

            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
