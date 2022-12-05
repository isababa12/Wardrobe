import React from "react";

class ShoesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            manufacturer: "",
            model_name: "",
            color: "",
            picture_url:"",
            bin: "",
            submitted: false,
            bins: [],
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }

    async componentDidMount() {
        const url = "http://localhost:8100/api/bins/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            this.setState({ bins: data.bins });
        }
    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.bins;
        delete data.submitted;
        console.log(data);
        const shoesUrl= "http://localhost:8080/api/shoes/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(shoesUrl, fetchConfig);
        console.log(response)
        if (response.ok) {
            const newShoes = await response.json();
            console.log(newShoes);
            this.props.fetchShoes();
            const cleared = {
              manufacturer: "",
              model_name: "",
              color: "",
              picture_url: "",
              bin: "",
              submitted: true,
          };
          this.setState(cleared);
        }
    }
    render() {
        let alertClasses = "alert alert-success w-50 mx-auto mt-3 d-none";
        if (this.state.submitted) {
            alertClasses = "alert alert-success w-50 mx-auto mt-3";
        }
        return(
            <div className="container">
            <div className="row">
              <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                  <h1>Create a Pair of Shoes</h1>
                  <form onSubmit={this.handleSubmit} id="create-shoes-form">
                    <div className="form-floating mb-3">
                      <input
                        onChange={this.handleInputChange}
                        value={this.state.manufacturer}
                        placeholder="Manufacturer"
                        required
                        type="text"
                        name="manufacturer"
                        id="manufacturer"
                        className="form-control"
                      />
                      <label htmlFor="manufacturer">Manufacturer</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        onChange={this.handleInputChange}
                        value={this.state.model_name}
                        placeholder="model_name"
                        required
                        type="text"
                        name="model_name"
                        id="model_name"
                        className="form-control"
                      />
                      <label htmlFor="model_name">Model Name</label>
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
                        name="bin"
                        id="bin"
                        className="form-select"
                      >
                        <option value="">Choose a Closet</option>
                        {this.state.bins.map((bin) => {
                          return (
                            <option key={bin.id} value={bin.id}>
                              {bin.closet_name}
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
            <div
              className={alertClasses}
              role="alert"
            >
              Shoes successfully created!
            </div>
          </div>
        );
    }
}


export default ShoesForm;
