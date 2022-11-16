import React from 'react';
import content from '../mock/Mockfile';
import Dropdown from './Dropdowncountries';

class Region extends React.Component {
  render() {
    return (
      <div>
         <h1> Redux Countries App </h1>
         <h2>Dropdown List of Countries :</h2>
         
        <Dropdown  Content = {this.props.Content}/>
      </div>
    )
  }
}
Region.defaultProps ={
  Content: content
}
export default Region;