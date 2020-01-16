import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    person: [{}]
  };
  componentDidMount() {
    axios
      .get("https://api.github.com/users/YaniWessi/followers")
      .then(res => {
        this.setState({
          person: res.data
        });
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1> Git Users Card</h1>
        {this.state.person.map(person => (
          <div key={person.id}>
            <img src={person.avatar_url} alt={person.login} />
            <p>{person.login}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
