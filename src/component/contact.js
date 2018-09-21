import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contacts extends Component {
  render(){
    return(
      <div className = "contact-body">
        <Grid className = "contact-grid">
          <Cell col = {6}>
            <h2>Oliver Pedersen</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{height: '250px'}}
            />
            <p style ={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet facilisis magna etiam. At risus viverra adipiscing at in tellus. Vel orci porta non pulvinar neque laoreet suspendisse. Mi bibendum neque egestas congue quisque. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Pulvinar elementum integer enim neque volutpat. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Accumsan in nisl nisi scelerisque eu ultrices. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Amet facilisis magna etiam tempor orci eu.
            </p>
          </Cell>

          <Cell col = {6}>
            <h2> Contact Me</h2>
            <hr/>
            <div className = "contact-list">
              <List>


                <ListItem>
                  <ListItemContent style = {{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden = "true"/>
                    (+45) 24815533
                  </ListItemContent>
                </ListItem>


                <ListItem>
                  <ListItemContent style = {{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden = "true"/>
                    (+45) 24815533
                  </ListItemContent>
                </ListItem>


                <ListItem>
                  <ListItemContent style = {{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden = "true"/>
                    hello
                  </ListItemContent>
                </ListItem>


                <ListItem>
                  <ListItemContent style = {{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden = "true"/>
                    skypeID
                  </ListItemContent>
                </ListItem>
              </List>
            </div>


           </Cell>

        </Grid>

      </div>
    )
  }
}
export default Contacts;
