import React from 'react';
import Navbar from './components/navbar';

export default function App() {

class App extends React.Component {
  state = {
    fullName: "Martins Orubu",
    bio: "Drone pilot and fullstack developer.",
    imgSrc: "",
    profession: "Safety officer.",
    show: true,
    time: 0,
  };


toggleShow = () => {
  this.setState((prevProfile) => ({ show: !prevProfile.show }));
  this.state.show
    ? this.componentDidMount()
    : this.setState({ time: 0 }) && this.componentWillUnmount();
};

componentDidMount() {
  this.myInterval = setInterval(() => {
    this.setState((prevState) => ({ time: prevState.time + 1 }));
  }, 1000);
}
componentWillUnmount() {
  clearInterval(this.myInterval);
}

render() {
  <div className="screen">
      <Navbar />
      {this.state.show == true && (
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={require("./components/photo_2022-05-18_12-34-48.jpg")}
                className="img-fluid rounded-start"
                alt="Me"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{this.state.fullName}</h5>
                <h6 className="card-title">{this.state.profession}</h6>
                <p className="card-text">{this.state.bio}</p>
                  <small className="text-muted">Last mounted: {this.state.time} seconds ago</small>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="btn-div">
        <button type="button" class="btn btn-dark" onClick={this.toggleShow}>
          {this.state.show == true ? "Hide" : "Show"}
        </button>
      </div>
      </div>
      } 
    } }
