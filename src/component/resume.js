import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render(){
    return(
      <div>
        <Grid>
          <Cell col = {4}>
            <div style = {{textAlign: 'center'}}>

              <img
              src = "https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt = "avatar"
              style = {{height: '200px'}}
              />

            </div>
            <h2 style = {{paddingTop: '2em'}}>Oliver Pedersen </h2>
            <h4 style = {{color: 'grey'}}>Programmer </h4>
            <hr style = {{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <hr style = {{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5> Adress </h5>
            <p> Harald Damtoftsvej 3 </p>
            <h5>Phone</h5>
            <p> 24815533</p>
            <h5>Email </h5>
            <p> hello@world </p>
            <h5>Web</h5>
            <p>bpbytes.com</p>
           </Cell>


          <Cell col = {8} className = "resume-right-col">
            <h2> Education </h2>
            <Education
              startYear = {2012}
              endYear = {2018}
              schoolName = "Aalborg Universitet"
              SchoolDescription = "Blablbalablalballbalbalblalbalbalbalblablalbal lablblabla llb alblal"
            />

            <h2> Education </h2>
            <Education
              startYear = {2012}
              endYear = {2018}
              schoolName = "Gymnasium"
              SchoolDescription = "Blablbalablalballbalbalblalbalbalbalblablalbal lablblabla llb alblal"
            />

            <h2> Education </h2>
            <Education
              startYear = {2012}
              endYear = {2018}
              schoolName = "Folkeren"
              SchoolDescription = "Blablbalablalballbalbalblalbalbalbalblablalbal lablblabla llb alblal"
            />

            <hr style = {{borderTop: '3px solid #e22947'}}/>
            <h2>Experience</h2>
            <Experience
              startYear = "Still waiting"
              endYear = "Never"
              jobName = "Unemployed"
              jobDescription = "Finding a job is hard"
            />

            <Experience
              startYear = "Still waiting"
              endYear = "Never"
              jobName = "Unemployed"
              jobDescription = "Finding a job is hard"
            />

            <Experience
              startYear = "Still waiting"
              endYear = "Never"
              jobName = "Unemployed"
              jobDescription = "Finding a job is hard"
            />

            <hr style = {{borderTop: '3px solid #e22947'}}/>
            <h2> Skills </h2>
            <Skills
              skill = "React"
              progress = "20"
            />

            <Skills
              skill = "HTML/CSS"
              progress = "35"
            />

            <Skills
              skill = "C#"
              progress = "70"
            />

            <Skills
              skill = "C"
              progress = "50"
            />

          </Cell>
        </Grid>

      </div>
    )
  }
}
export default Resume;
