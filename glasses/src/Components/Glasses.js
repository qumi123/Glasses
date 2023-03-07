import React, { Component } from "react";
import "./Glasses.css";
import glasses from './glasses.json'

class Glasses extends Component {
  listGlasses = glasses;
  state = {
    isTry: false,
    tryOnGlass: {}
  };
  renderGlasses = () => {
    let lstGlassUIs = this.listGlasses.map((glass, index) => {
      return (
        <div key={glass.id} className="col-2">
          <button onClick={() => this.changeGlass(glass)}>
            <img src={glass.url} className="img-btn-glass" alt="..." />
          </button>
        </div>
      );
    });
    return lstGlassUIs;
  };

  putOnGlass = () => {
    if (this.state.isTry) {
      const { url, price, name, desc } = this.state.tryOnGlass
      return (
        <div className="card">
          <img src={url} alt="" className="card-img"></img>
          <div className="card-body">
            <h1>{name}</h1>
            <p>{price}$</p>
            <p>{desc}</p>
          </div>
        </div>
      );
    }
  };

  changeGlass = (glass) => {
    this.setState({
      isTry: true,
      tryOnGlass: glass
    })
  }


  render() {
    return (
      <div className="glasss">
        {this.putOnGlass()}
        <div className="listGlasses row">{this.renderGlasses()}</div>
      </div>
    );
  }
}

export default Glasses;
