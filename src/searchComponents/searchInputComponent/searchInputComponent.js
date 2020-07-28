import React from "react";
import "./searchInputComponent.css";

class SearchInputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: false,
      name: false,
      gender: false,
      address: false,
      searchStr: ""
    };
  }

  handleChange(e) {
    // console.log(e);
    const { name, checked } = e.target;
    if (name === "id") {
      this.setState({ id: checked, name: false, gender: false });
    }
    if (name === "name") {
      this.setState({ id: false, name: checked, gender: false });
    }
    if (name === "gender") {
      this.setState({ id: false, name: false, gender: checked });
    }
    if (name === "address") {
      this.setState({ id: false, name: false, address: checked });
    }
  }

  render() {
    return (
      <div className="noSideMargin20">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="search"
              className="form-control"
              name="searchStr"
              value={this.state.searchStr}
              placeholder="search...."
              onChange={e => this.setState({ searchStr: e.target.value })}
            />
            <div className="input-group-append">
              <span
                className="input-group-text"
                onClick={() => this.props.searchList(this.state)}
              >
                Search
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <input
            type="checkbox"
            checked={this.state.id}
            name="id"
            onChange={e => this.handleChange(e)}
          />{" "}
          By Id
          <input
            type="checkbox"
            checked={this.state.name}
            name="name"
            onChange={e => this.handleChange(e)}
          />{" "}
          By Name
          <input
            type="checkbox"
            checked={this.state.gender}
            name="gender"
            onChange={e => this.handleChange(e)}
          />
          By Gender
          <input
            type="checkbox"
            checked={this.state.address}
            name="address"
            onChange={e => this.handleChange(e)}
          />{" "}
          By address
        </div>
      </div>
    );
  }
}
export default SearchInputComponent;
