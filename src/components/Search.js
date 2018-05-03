import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  render() {
    // props として受け取る
    const { buttonText } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.title} onChange={this.handleChange} />
          {/* button の値に使用する */}
          <input type="submit" value={buttonText} />
        </form>
      </div>
    );
  }

  handleChange = event => {
    const title = event.target.value;
    this.setState({ title: title });
  };

  handleSubmit = event => {
    // connect で与えられたメソッドを受け取る
    const { getUrls } = this.props;
    event.preventDefault();
    // 使用する
    getUrls(this.state.title);
    this.setState({ title: "" });
  };
}

export default Search;
