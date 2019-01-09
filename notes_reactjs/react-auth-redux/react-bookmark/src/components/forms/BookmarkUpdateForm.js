import React, { Component } from "react";
import LocalApi from "../../apis/local";

class BookmarkUpdateForm extends Component {
  state = { _id: "", title: "", url: "" };

  componentDidMount() {
    const { _id, title, url } = this.props.bookmark;
    this.setState({ _id, title, url });
  }

  onFormSubmit = async event => {
    event.preventDefault();
    const { _id, title, url } = this.state;

    try {
      // TODO move to Redux
      const response = await LocalApi.put(`/bookmarks/${_id}`, { title, url });
      // this.props.onBookmarkFormSubmit(response.data);
      const newUrl = this.props.bookmark.url;
      this.setState({ newUrl });
    } catch (error) {
      console.warn(error);
    }
  };

  onInputChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { title, url } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          value={title}
          onChange={event => this.onInputChange("title", event)}
        />
        <input
          type="text"
          value={url}
          onChange={event => this.onInputChange("url", event)}
        />
        <input type="submit" value="Update" />
      </form>
    );
  }
}

export default BookmarkUpdateForm;
