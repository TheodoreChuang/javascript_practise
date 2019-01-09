import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewEntryPage from "./pages/NewEntryPage";
import CategorySelectionPage from "./pages/CategorySelectionPage";

class App extends Component {
  state = {
    categories: ["food", "thoughts", "romance"],
    entries: []
  };

  onEntryFormSubmit = entry => {
    this.setState(state => {
      return { entries: [...state.entries, entry] };
    });
  };

  componentDidUpdate() {
    console.log(this.state.entries);
  }

  render() {
    const { categories } = this.state;

    return (
      <div>
        <BrowserRouter>
          <div>
            {/* <Link to="/">Home</Link>
            <Link to="/category">Category</Link>
            <Link to="/entry">Entry</Link> */}
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/category"
              render={props => {
                return (
                  <CategorySelectionPage {...props} categories={categories} />
                );
              }}
            />
            <Route
              exact
              path="/entry/new/:index"
              render={props => {
                return (
                  <NewEntryPage
                    {...props}
                    categories={categories}
                    onEntryFormSubmit={this.onEntryFormSubmit}
                  />
                );
              }}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

// State-Based SPA
// class App extends Component {
//   state = { location: "home" };

//   getPage() {
//     const { location } = this.state;

//     switch (location) {
//       case "home":
//         return <HomePage />;
//       case "entry":
//         return <NewEntryPage />;
//       case "category":
//         return <CategorySelectionPage />;
//       default:
//         return null;
//     }
//   }

//   onChangeLocation = location => {
//     this.setState({ location });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={() => this.onChangeLocation("home")}>Home</button>
//         <button onClick={() => this.onChangeLocation("entry")}>
//           New entry
//         </button>
//         <button onClick={() => this.onChangeLocation("category")}>
//           Category
//         </button>
//         {this.getPage()}
//       </div>
//     );
//   }
// }
