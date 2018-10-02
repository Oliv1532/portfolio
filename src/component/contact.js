import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contacts extends Component {
  render(){
    return(
      <div className = "contact-body aboutme-body">
        <Grid className = "contact-grid">
          <Cell col = {6}>
            <h2>Oliver Pedersen</h2>
            <img
              src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-512.png"
              alt="avatar"
              style={{height: '250px'}}
            />
            <p style ={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
              On this page is all my contact information. If you have any questions please refer to my email as the first step, i will contact you as soon as possible! Have a nice day!<br/><br/> Oliver

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
                    (+45)24815533
                  </ListItemContent>
                </ListItem>


                <ListItem>
                  <ListItemContent style = {{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-facebook-official " aria-hidden = "true"/>
                    m.me/oliv1532
                  </ListItemContent>
                </ListItem>


                <ListItem>
                  <ListItemContent style = {{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden = "true"/>
                    Oliver@Trendsofliving.dk
                  </ListItemContent>
                </ListItem>


                <ListItem>
                  <ListItemContent style = {{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden = "true"/>
                    Oliv1532
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
