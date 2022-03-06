import React, { Component } from "react";
import { connect } from "react-redux";
import {  } from "../../actions/action";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  sendDataToAction = () => {
    this.props.sendProp(this.state.username);
  };

  render() {
    console.log(this.props);
    console.log(this.state.username);

    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="card">
              <div className="card-header bg-dark text-white">
                <h2>Add Amount to your Account</h2>
              </div>

              <div className="card-body">
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="form-control"
                  onChange={(e) => {
                    this.setState({
                      username: e.target.value,
                    });
                  }}
                />
                <button
                  className="btn btn-secodary mt-8"
                  onClick={this.sendDataToAction}
                >
                  Deposit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  const sendProp = (someDynamicAmount) => {
    dispatch(showName(someDynamicAmount));
  };

  return {
    sendProp,
  };
};

export default connect(null, mapDispatchToProps)(Home);
