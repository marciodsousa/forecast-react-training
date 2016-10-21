import React from "react";

export default class Header extends React.Component {
  handleSearch(info) {

    if (info.keyCode === 13) {
      const location = info.target.value;
      this.props.changeTitle(location);
    }
  }
    render() {
        return (
            <div style={{margin: '10px'}}>
                  <h1>What's the weather like in <input onKeyUp={this.handleSearch.bind(this)} class="location"/>?</h1>
            </div>
        );
    }
}