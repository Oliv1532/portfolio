import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText, IconButton} from 'react-mdl';
import codepic from './codepic.jpg';

class Project extends Component {
  constructor(props){
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories(){
    if(this.state.activeTab === 0){
      return(
        <div className = "projects-grid">
          {/*Project 1 */}
          <Card shadow={5} style = {{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png) center / cover'}}>This Website!</CardTitle>
            <CardText>
              The code for this site
            </CardText>
            <CardActions border>
              <Button colored href = "https://github.com/Oliv1532/portfolio" target = "_blank">Github</Button>
              <Button colored href = "https://bpbytes.com/">Demo</Button>
            </CardActions>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 1){
        return (
          <div> </div>
        )
    } else if (this.state.activeTab === 2){
        return(
          <div> </div>
        )
    } else if (this.state.activeTab === 3){
        return(
          <div>
            {/*Project 1 */}
            <Card shadow={5} style = {{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: 'black', height: '176px', background: 'url(https://cdn2.iconfinder.com/data/icons/xomo-basics/128/document-03-512.png) right / cover', backgroundSize: "60%", backgroundRepeat: "no-repeat"}}>Suvey form</CardTitle>
              <CardText>
              A HTML/CSS site made for freecodecamp.org which introduces you to input fields.
              </CardText>
              <CardActions border>
                <Button colored href = "https://codepen.io/oliv1532/pen/BOJRNp?editors=1100" target = "_blank">CodePen</Button>
                <Button colored href = "https://codepen.io/oliv1532/full/BOJRNp" target = "_blank">Demo</Button>
              </CardActions>
              <CardMenu style = {{color: '#fff'}}></CardMenu>
            </Card>



          </div>
        )
    }
  }

  render(){
    return(
          <div className ="category-tabs" >
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
              <Tab style = {{color: "white"}}>React</Tab>
              <Tab style = {{color: "white"}}>C#</Tab>
              <Tab style = {{color: "white"}}>C</Tab>
              <Tab style = {{color: "white"}}>HTML/CSS</Tab>
              </Tabs>
              <div style = {{width: '100%', margin: 'auto'}}>
                <div className = "project-background">
            <Grid>
              <Cell col={12}>
                <div className="content"> {this.toggleCategories()}</div>
              </Cell>
            </Grid>
            </div>
        </div>
      </div>
    )
  }
}
export default Project;
