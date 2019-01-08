import React, { Component } from "react";
import BookmarkForm from "./../forms/BookmarkForm";

class BookmarksPage extends Component {
  state = { bookmarks: [] };

  onBookmarkFormSubmit = bookmarks => {
    this.setState({ bookmarks });
    console.log(bookmarks);
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
                <a href={bookmark.url}>{bookmark.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BookmarksPage;
