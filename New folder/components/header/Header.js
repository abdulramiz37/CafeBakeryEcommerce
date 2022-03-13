import React, { Component } from 'react'
import { connect } from 'react-redux';

 class Header extends Component {
  render() {
    return (
      <>
        <nav className="bg-danger p-2">
              
              <h5 > BALANCE :{this.props.Amount}</h5>
        </nav>
      </>
    );
  }
}

const mapStateToProps = (reduxStore, props) => {
//   console.log(reduxStore.Amount);
  return {
    Amount: reduxStore.Amount,
  };
};

export default connect(mapStateToProps, null)(Header);
