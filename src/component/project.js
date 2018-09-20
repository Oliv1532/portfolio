import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText, IconButton} from 'react-mdl';

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
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png) center / cover'}}>React Project 1</CardTitle>
          <CardText>
          Hello everyone my name is frank123!
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Codepen</Button>
            <Button colored>Demo</Button>
          </CardActions>
          <CardMenu style = {{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/*Project 2 */}
        <Card shadow={5} style = {{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png) center / cover'}}>React Project 2</CardTitle>
          <CardText>
          Hello everyone my name is frank123!
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Codepen</Button>
            <Button colored>Demo</Button>
          </CardActions>
          <CardMenu style = {{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/*Project 3 */}
        <Card shadow={5} style = {{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png) center / cover'}}>React Project 3</CardTitle>
          <CardText>
          Hello everyone my name is frank123!
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Codepen</Button>
            <Button colored>Demo</Button>
          </CardActions>
          <CardMenu style = {{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      )
    } else if (this.state.activeTab === 1){
        return (
          <div><h1> This is Angular</h1></div>
        )
    } else if (this.state.activeTab === 2){
        return(
          <div><h1> This is C#</h1></div>
        )
    } else if (this.state.activeTab === 3){
        return(
          <div><h1> This is Hej</h1></div>
        )
    }
  }

  render(){
    return(
      <div className ="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>React</Tab>
          <Tab>C#</Tab>
          <Tab>C</Tab>
          <Tab>HTML</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content"> {this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
export default Project;
