import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class About extends Component {
  render(){
    return(
      <div className = "aboutme-body">
        <Grid>
          <Cell col = {3}>
            <h2> About me</h2>
            <hr style = {{borderTop: '3px dotted black'}}/>
            <p style = {{fontSize: "20px", fontFamily: "Monstserrat"}}>
              My name is Oliver Bøgild Pedersen. I finished my Bachelor in Software engineering in 2018
              so i am currently looking for a job and mastering aspects within the field.
              In my spare time i enjoy music, traveling, socialising and cooking. <br/><br/>

              This website is meant as a way of improving my front-end skills while creating a online portfolio for myself!
              If you find anything interesting and would like me to answer, please dont hesitate to send me a email!

              Have a nice day!<br/><br/>
              Oliver
            </p>
          </Cell>
          <Cell col = {8} style = {{padding: '20px'}} className = "aboutme-right-column">
            <figure>
              <img
              src="https://lh3.googleusercontent.com/7R94akZjlnyuxwtluZAWLdluAWq7vXRzmpnws3OzgqTcQaj2F9068-1PdkV0tledfb3q7MhscHCiKOgm3TN3KxU11eqwSNhRrJbY_YyeI7XEMiodZGws7mg06tSW-ka2Zfri-S5gtR8DksxknGDtDteTMH5Z54jl1LWS1zzyBA2TKCiHmQOHxKFyZuBZz_s0RYckVih2oQlBSLapRXgwr17T_JcCT5qZ_-gbuCnGQK3EIpTsWtzKIAV0OB29tOqqFyos-GEZ0gOOe9Nd0o3iLfylzU7N9TahFaKmLP39weJYWJ_hzv_INWGiNZQGIoByL29fpb3JLXwEu0YQLR-1DmmYOWCVergonjAV240Pk8BcQY0ZtMic5DWHkz12flI1jM2F-KG5EYgu7pLYVFzoFtizeWp_GAPcyBJZgmVddIk7jt5C97rFO8Ps7v2ZxVRwOMExN7BRG5rx20ha6fHId7j_oUVXgz3G_GC8FB3O5JYHLAVanX1JJctVhZON3AObQDkXn54O__kSS8x4bGqurVlfOSuHHhv1b7gqI9Mx6dYME8RBGJH7xf5ulkhCzpfhit2IrBJJB4mDxepy9-Z-LxOwRU6GzbPAHiqBHcVehovF6QrNUxOPI1MnTW9wzVKSil9vD5pr0bK_XgHRomNyLUt2ppqaJ2XrC9DbNSOTGExaAJ_slJ0tRlxk=w625-h833-no"
              alt="Me"
              style = {{height: '250px'}}
              />
              <figcaption>Picture of me in Australia!</figcaption>

              <h3> Leave a comment </h3>
            </figure>

          </Cell>
        </Grid>
      </div>
    )
  }
}
export default About;
