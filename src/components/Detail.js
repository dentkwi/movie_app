import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state == undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if(location.state){
    return <span id="title">{location.state.title}</span>;
    }
    else return 0;
  }
}

export default Detail;
