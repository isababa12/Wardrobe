import React from "react";

class HatsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style_name: "",
      fabric: "",
      color: "",
      picture_url: "",
      location: "",
      locations: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const url = "http://localhost:8100/api/locations/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      this.setState({ locations: data.locations });
    }
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    console.log(data);
    delete data.locations;
    const hatsUrl = "http://localhost:8090/api/hats/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(hatsUrl, fetchConfig);
    if (response.ok) {
      const newHat = await response.json();
      console.log(newHat);
    }

    const cleared = {
      style_name: "",
      fabric: "",
      color: "",
      picture_url: "",
      location: "",
    };
    this.setState(cleared);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Create a new conference</h1>
              <form onSubmit={this.handleSubmit} id="create-hats-form">
                <div className="form-floating mb-3">
                  <input
                    onChange={this.handleInputChange}
                    value={this.state.style_name}
                    placeholder="Style name"
                    required
                    type="text"
                    name="style_name"
                    id="style_name"
                    className="form-control"
                  />
                  <label htmlFor="style_name">Style name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onChange={this.handleInputChange}
                    value={this.state.fabric}
                    placeholder="fabric"
                    required
                    type="text"
                    name="fabric"
                    id="fabric"
                    className="form-control"
                  />
                  <label htmlFor="fabric">Fabric</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onChange={this.handleInputChange}
                    value={this.state.color}
                    placeholder="Color"
                    required
                    type="text"
                    name="color"
                    id="color"
                    className="form-control"
                  />
                  <label htmlFor="color">Color</label>
                </div>
                <div className="mb-3">
                  <label htmlFor="picture_url">Picture url</label>
                  <textarea
                    onChange={this.handleInputChange}
                    value={this.state.picture_url}
                    required
                    rows="3"
                    type="text"
                    name="picture_url"
                    id="picture_url"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <select
                    onChange={this.handleInputChange}
                    required
                    name="location"
                    id="location"
                    className="form-select"
                  >
                    <option value="">Choose a location</option>
                    {this.state.locations.map((location) => {
                      return (
                        <option key={location.id} value={location.href}>
                          {location.closet_name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <button id="submit" className="btn btn-primary">
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HatsForm;
