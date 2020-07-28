import React from "react";
import SearchInputComponent from "./searchInputComponent/searchInputComponent";
import ListComponent from "./listComponent/listComponent";
import listData from "../listData";
class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: listData,
      loder: false
    };
    this.searchList = this.searchList.bind(this);
  }

  searchList(data) {
    console.log(data);
    this.setState({
      loder: true
    });
    if (data.searchStr === "") {
      console.log("empt");
      this.setState({ dataList: listData, loder: false });
    }
    if (!data.id && !data.name && !data.gender && data.searchStr !== "") {
      const filterList = listData.filter(element => {
        return (
          element._id.includes(data.searchStr) ||
          element.name.toLowerCase().includes(data.searchStr.toLowerCase()) ||
          element.gender.toLowerCase().includes(data.searchStr.toLowerCase())
        );
      });
      this.setState({
        dataList: filterList,
        loder: false
      });
    }
    if (data.name && data.searchStr !== "") {
      const filterList = listData.filter(element => {
        return element.name
          .toLowerCase()
          .includes(data.searchStr.toLowerCase());
      });
      console.log(filterList);
      this.setState({
        dataList: filterList,
        loder: false
      });
    }
    if (data.id && data.searchStr !== "") {
      const filterList = listData.filter(element => {
        return element._id.toLowerCase().includes(data.searchStr.toLowerCase());
      });
      console.log(filterList);
      this.setState({
        dataList: filterList,
        loder: false
      });
    }
    if (data.gender && data.searchStr !== "") {
      const filterList = listData.filter(element => {
        return element.gender
          .toLowerCase()
          .includes(data.searchStr.toLowerCase());
      });
      console.log(filterList);
      this.setState({
        dataList: filterList,
        loder: false
      });
    }
  }

  render() {
    return (
      <div className="container">
        <SearchInputComponent searchList={this.searchList} />
        <ListComponent list={this.state.dataList} loder={this.state.loder} />
      </div>
    );
  }
}
export default SearchComponent;
