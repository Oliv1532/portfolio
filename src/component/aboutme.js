import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class About extends Component {
  render(){
    return(
      <div className = "aboutme-body">
        <Grid>
          <Cell col = {6}>
            <h2> About me</h2>
            <hr style = {{borderTop: '3px dotted black'}}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur est neque, sagittis at lectus in, efficitur venenatis nisi. Vivamus in diam id ligula convallis ornare vel quis ex. Quisque euismod ac ipsum quis commodo. Mauris dignissim ornare quam ac dignissim. Duis finibus vel ante at elementum. Aenean et tincidunt massa, vitae egestas velit. Vivamus non tincidunt felis. Duis tortor risus, iaculis et justo laoreet, lacinia elementum tellus. Ut non diam vulputate, scelerisque tortor eget, tincidunt massa.<br/><br/>

            Vivamus lacinia leo id libero mollis, vitae cursus nisl consequat. In sit amet diam in massa consequat lobortis vitae at quam. Proin et laoreet metus. Morbi elementum dignissim tortor ut condimentum. Nulla a leo sed tortor molestie tristique in ut arcu. Proin vitae libero a nisl pellentesque imperdiet. Vivamus auctor est sit amet elit rhoncus scelerisque. Pellentesque porttitor massa sed nisl posuere, in gravida mauris convallis. Etiam nec augue sem. Donec volutpat ac ante eu rutrum. Aenean faucibus, enim sit amet imperdiet dignissim, purus nunc euismod lacus, id vulputate velit mauris ac massa. Pellentesque eget tortor velit. Proin vestibulum nulla est, in mollis dui lobortis ut.
            </p>
          </Cell>
          <Cell col = {6} style = {{padding: '20px'}} className = "aboutme-right-column">
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
