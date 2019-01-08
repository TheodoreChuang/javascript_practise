import React, { Component } from "react";
import LocalApi from "./../../apis/local";
import BookmarkForm from "./../forms/BookmarkForm";
import BookmarkUpdateForm from "../forms/BookmarkUpdateForm";

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
                  <button>Open</button>
                </a>

                <BookmarkUpdateForm
                  onBookmarkFormSubmit={this.onBookmarkFormSubmit}
                  bookmark={bookmark}
                />

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
