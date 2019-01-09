import React, { Component } from "react";
// import LocalApi from "./../../apis/local"; // import axios from "axios";
import { connect } from "react-redux";
import { createBookmark } from "./../../actions";
import { reduxForm, Field } from "redux-form";

// custom component for reduxForm - used to show validation form errors
const Input = ({ input, meta, type }) => {
  return (
    <span>
      <input {...input} type={type} autoComplete="off" />
      <span>{meta.touched && meta.error}</span>
    </span>
  );
};

class BookmarkForm extends Component {
  // state = { title: "", url: "" };

  onFormSubmit = async formValues => {
    // event.preventDefault();
    const { title, url } = formValues;
    const { createBookmark, reset } = this.props;
    createBookmark({ title, url });
    reset(); // clears form, from redux-form

    // const { title, url } = this.state;
    // try {
    //   const response = await LocalApi.post("/bookmarks", { title, url });
    //   this.props.onBookmarkFormSubmit(response.data);
    //   this.setState({ title: "", url: "" });
    // } catch (error) {
    //   console.warn(error);
    // }
  };

  // onInputChange = (name, event) => {
  //   this.setState({ [name]: event.target.value });
  // };

  render() {
    // const { title, url } = this.state;
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onFormSubmit)}>
        <p>
          <label htmlFor="title">Title</label>
          {/* <input
            type="text"
            value={title}
            onChange={event => this.onInputChange("title", event)}
          /> */}
          <Field type="text" name="title" component={Input} />
        </p>
        <p>
          <label htmlFor="url">Url</label>
          {/* <input
            type="text"
            value={url}
            onChange={event => this.onInputChange("url", event)}
          /> */}
          <Field type="text" name="url" component={Input} />
        </p>
        <p>
          <input type="submit" value="New Bookmark" />
        </p>
      </form>
    );
  }
}

const WrappedBookmarkForm = reduxForm({
  form: "bookmarkCreate",
  // valid if returns empty object, called onChange
  validate: formValues => {
    const errors = {};

    if (!formValues.title) {
      errors.title = "Title is required!";
    }

    if (!formValues.url) {
      errors.url = "URL is required!";
    }

    return errors;
  }
})(BookmarkForm);

export default connect(
  null,
  { createBookmark }
)(WrappedBookmarkForm);
