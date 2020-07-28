import React from "react";

class ListComponent extends React.Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Gender</th>
              <th>address</th>
            </tr>
          </thead>
          <tbody>
            {this.props.list.length === 0 && !this.props.loder && (
              <tr>
                <td />
                <td>Sorry No Matches found</td>
              </tr>
            )}
            {this.props.loder && (
              <div class="spinner-border text-dark" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            )}
            {this.props.list.map((user, i) => (
              <tr key={`${user.name}${i}`}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.gender}</td>
                <td>{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ListComponent;
