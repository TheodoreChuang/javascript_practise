import React, { Component } from "react";
import BookmarkForm from "./../forms/BookmarkForm";
import LocalApi from "./../../apis/local";

class BookmarksPage extends Component {
  state = { bookmarks: [] };

  componentDidMount() {
    this.getBookmarks();
  }

  getBookmarks = async () => {
    try {
      const response = await LocalApi.get("/bookmarks");
      this.setState({ bookmarks: response.data });
    } catch (error) {
      console.warn(error);
    }
  };

  onBookmarkFormSubmit = bookmarks => {
    this.setState({ bookmarks });
  };

  onDeleteButtonClick = async bookmarkId => {
    console.log(bookmarkId);
    try {
      const response = await LocalApi.delete(`/bookmarks/${bookmarkId}`);
      this.setState({ bookmarks: response.data });
    } catch (error) {
      console.warn(error);
    }
  };

  render() {
    const { bookmarks } = this.state;

    return (
      <div>
        <h2>New Bookmark</h2>
        <BookmarkForm onBookmarkFormSubmit={this.onBookmarkFormSubmit} />

        <h2>Bookmarks</h2>

        <ul>
          {bookmarks.map(bookmark => {
            return (
              <li key={bookmark._id}>
                <a
                  href={bookmark.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {bookmark.title}
                </a>
                <button onClick={() => this.onDeleteButtonClick(bookmark._id)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BookmarksPage;
