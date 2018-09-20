import React, { Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
  render(){
    return(
      <div style = {{width: '100%', margin: 'auto'}}>
        <Grid className = "landing-grid">
          <Cell col={12}>
            <img
              src = "https://image.flaticon.com/icons/svg/1/1247.svg"
              alt = "avatar"
              className="avatar-image"
            />
            <div className = "banner-text">
              <h1> Full Stack Web Developer</h1>

              <hr/>

              <p> C# | React | Software engineer | C | Java </p>

              <div className = "social-links">

              {/* LinkedIn */}
                <a href = "https://github.com/Oliv1532" target = "_blank" rel = "noopener noreferrer">
                  <i className = "fa fa-linkedin-square" aria-hidden = "true"/>
                </a>

              {/* Github */}
                <a href = "https://github.com/Oliv1532" target = "_blank" rel = "noopener noreferrer">
                  <i className = "fa fa-github-square" aria-hidden = "true"/>
                </a>

              {/* FreeCodeCamp */}
                <a href = "https://github.com/Oliv1532" target = "_blank" rel = "noopener noreferrer">
                  <i className = "fa fa-linkedin-square" aria-hidden = "true"/>
                </a>

              {/* Something */}
                <a href = "https://github.com/Oliv1532" target = "_blank" rel = "noopener noreferrer">
                  <i className = "fa fa-linkedin-square" aria-hidden = "true"/>
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
