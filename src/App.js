import React from "react";
import TerminatorList from "./components/Terminator-List/Terminator-List";
import { models } from "./models";
import SearchBox from "./components/SearchBox/SearchBox";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      models: models,
      searchField: ''
    }
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const filteredModels = this.state.models.filter((model) => {
      return model.name.toLowerCase()
        .includes(
          this.state.searchField.toLowerCase()
        )
    })
    return (
      <div className="tc">
        <h1 className="tc">Terminator modellek</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <TerminatorList models={filteredModels} />
      </div>
    )
  }
}
export default App;