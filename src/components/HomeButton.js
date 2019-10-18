import React, { Component } from 'react';
import home from '../images/home.png';

class HomeButton extends Component {
  goToPreviousPage = () => {
    this.props.props.history.goBack();
  };

  render() {
    return (
      <div className="home-button" onClick={this.goToPreviousPage}>
        <img src={home} alt="" />
      </div>
    );
  }
}

export default HomeButton;
