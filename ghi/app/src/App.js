import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import HatsList from "./HatsList";
import HatsForm from "./HatsForm";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hats: [],
    };
    this.fetchHats = this.fetchHats.bind(this);
  }

  async fetchHats() {
    const response = await fetch("http://localhost:8090/api/hats/");
    if (response.ok) {
      const data = await response.json();
      this.setState({ hats: data.hats });
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
      const data = await response.json();
      console.log(data);
      this.fetchHats();
    }
  }

  componentDidMount() {
    this.fetchHats();
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
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
