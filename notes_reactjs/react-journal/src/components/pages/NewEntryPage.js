import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import EntryForm from "./../forms/EntryForm";

class NewEntryPage extends Component {
  state = { category: null, errorMessage: "" };

  componentDidMount() {
    // console.log(this.props);
    const category = this.props.categories[this.props.match.params.index];
    if (!category) {
      return this.setState({ errorMessage: "Invalid Category!" });
    }
    return this.setState({ category });
  }

  render() {
    const { category, errorMessage } = this.state;
    const { onEntryFormSubmit } = this.props;

    if (errorMessage) {
      return <Redirect to="/category/" />;
    }

    return (
      <div>
        {/* {errorMessage} */}
        {category && (
          <div>
            <Link to="/category/">
              <button>Back to categories</button>
            </Link>
            <h1>New {category} Entry</h1>
            <EntryForm
              onEntryFormSubmit={onEntryFormSubmit}
              category={category}
            />
          </div>
        )}
      </div>
    );
  }
}

export default NewEntryPage;

// Consider passing all categories here or validate on router and pass one
