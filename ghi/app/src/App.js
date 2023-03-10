import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import HatsList from "./HatsList";
import HatsForm from "./HatsForm";
import React from "react";
import ShoesList from "./ShoesList";
import ShoesForm from "./ShoesForm";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hats: [],
      shoes: [],
    };
    this.fetchHats = this.fetchHats.bind(this);
    this.fetchShoes = this.fetchShoes.bind(this);
  }

  async fetchHats() {
    const response = await fetch("http://localhost:8090/api/hats/");
    if (response.ok) {
      const data = await response.json();
      this.setState({ hats: data.hats });
    }
  }

  async fetchShoes() {
    const response = await fetch("http://localhost:8080/api/shoes/");
    if (response.ok) {
      const data = await response.json();
      this.setState({ shoes: data.shoes });
    }
  }

  async deleteHat(id) {
    const hatsUrl = `http://localhost:8090/api/hats/${id}/`;
    const fetchConfig = {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(hatsUrl, fetchConfig);
    if (response.ok) {
      this.fetchHats();
    }
  }

  async deleteShoe(id) {
    const shoesUrl = `http://localhost:8080/api/shoes/${id}/`;
    const fetchConfig = {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const shoesResponse = await fetch(shoesUrl, fetchConfig);
    if (shoesResponse.ok) {
      const data = await shoesResponse.json();
      console.log(data);
      this.fetchShoes();
    }
  }

  componentDidMount() {
    this.fetchHats();
    this.fetchShoes();
  }

  render() {
    return (
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />

            <Route path="hats">
              <Route
                index
                element={
                  <HatsList
                    hats={this.state.hats}
                    fetchHats={this.fetchHats}
                    deleteHat={this.deleteHat}
                  />
                }
              />
              <Route
                path="new"
                element={<HatsForm fetchHats={this.fetchHats} />}
              />
            </Route>
            <Route path="shoes">
              <Route
                index
                element={
                  <ShoesList
                    shoes={this.state.shoes}
                    fetchShoes={this.fetchShoes}
                    deleteShoe={this.deleteShoe}
                  />
                }
              />
              <Route
                path="new"
                element={<ShoesForm fetchShoes={this.fetchShoes} />}
              />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
