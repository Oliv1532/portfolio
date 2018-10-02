import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import paperback from './paperback.jpg';
import { List, ListItem, ListItemContent} from 'react-mdl';

class About extends Component {
  render(){
    return(
      <div className = "aboutme-body">
        <Grid>
          <Cell col = {12}>
          <div className = "box-text">
            <h2> About me</h2>
            <hr/>
            <p>
              My name is Oliver Bøgild Pedersen. I finished my Bachelor in Software engineering in 2018
              so i am currently looking for a job and mastering all different kind of aspects within the field.
              In my spare time i enjoy music, traveling, socialising and cooking. <br/><br/>

              This website is meant as a way of improving my front-end skills while creating a online portfolio for myself! Beyond that im also creating some applications for fun, which you can find in my projects tab on this site when they are done.
              If you find anything interesting and would like me to answer, please dont hesitate to send me a email!

              Have a nice day!<br/><br/><br/>

              Best regards <br/>
              Oliver
            </p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default About;
