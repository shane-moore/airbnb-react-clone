import React, { Component } from "react";
import Flat from "./flat";
import GoogleMapReact from "google-map-react";
import Marker from "./marker";
// import logo from './logo.svg';
import "./App.css";

const flat = {
  name: "gorgeous spot in River North",
  img:
    "https://stayinglevel.com/chicago-river-north/wp-content/uploads/sites/8/2016/07/LEVEL_Hudson_Cable3730LoRes-900x600.jpg",
  price: "$250"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      allFlats: [],
      selectedFlat: null,
      search: ""
    };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          flats: data,
          allFlats: data
        });
      });
  }

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: flat
    })
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
      flats: this.state.allFlats.filter(flat => new RegExp(event.target.value, "i").exec(flat.name))
    });
    console.log(event.target.value)
  }
  // what to do when an image is selected
  // highlight corresponding marker by changing background color

  render() {
    let center = {
      lat: 48.8566,
      lng: 2.3522
    };

    if (this.state.selectedFlat) {
      center = {
        lat: this.state.selectedFlat.lat,
        lng: this.state.selectedFlat.lng
      }
    }

    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              value={this.state.search}
              onChange={this.handleSearch}></input>
          </div>
          <div className="flats">
            {this.state.flats.map(flat => {
              return <Flat
                key={flat.name}
                flat={flat}
                selectFlat={this.selectFlat} />;
            })}
          </div>
        </div>
        <div className="map">
          <GoogleMapReact center={center} defaultZoom={11}>
            {this.state.flats.map(flat => {
              return <Marker
                key={flat.name}
                lat={flat.lat}
                lng={flat.lng}
                text={flat.price}
                selected={flat === this.state.selectedFlat} />;
            })}
          </GoogleMapReact>

        </div>
      </div>
    );
  }
}

export default App;
