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
            <h4 style = {{color: 'grey'}}>Softtware Engineer </h4>
            <hr style = {{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>
              Just Graduated from Aalborg University in 2018 with a Bachelor in Software Engineering. I am looking for a job please hire me, i know java, C#, SQL, bit of C, bit of HTML/CSS, still learning react. So i am the perfect candidate
            </p>
            <hr style = {{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5> Adress </h5>
            <p> Harald Damtoftsvej 3 </p>
            <h5>Phone</h5>
            <p> (+45)24815533</p>
            <h5>Email </h5>
            <p> Oliver@Trendsofliving.dk </p>
            <h5>Web</h5>
            <p>bpbytes.com</p>
           </Cell>


          <Cell col = {8} className = "resume-right-col">
            <h2> Education </h2>
            <Education
              startYear = {2012}
              endYear = {2018}
              schoolName = "Aalborg Universitet as Bachelor in Software Engineering"
              SchoolDescription = "All degree programmes and research activities at Aalborg University are problem and project-based and have an interdisciplinary focus. Through strong interplay between staff and students and intense collaboration with public and private sectors, we offer degree programmes with a real-world approach and provide world-class research. This results in new insights, new solutions to societal challenges and knowledge that changes the world."
            />

            <Education
              startYear = {2012}
              endYear = {2018}
              schoolName = "Højere Teknisk Gymnasium Holstebro"
              SchoolDescription = "Teknologi og Design Linje"
            />


            <hr style = {{borderTop: '3px solid #e22947'}}/>
            <h2>Experience</h2>
            <Experience
              startYear = "Still waiting"
              endYear = ""
              jobName = "Unemployed"
              jobDescription = "Looking for a job"
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

            <Skills
              skill = "Java"
              progress = "65"
            />

          </Cell>
        </Grid>

      </div>
    )
  }
}
export default Resume;
