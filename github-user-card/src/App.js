import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';
class App extends React.Component {

  state = {
    users: [],
    followers: []
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/cholman')
      .then(res => {
        this.setState({
          users: res.data
        });
        console.log(res, "response");
      })
      .catch(err => console.log(err));

      axios
      .get(`https://api.github.com/users/cholman/followers`)
      .then(res => {
        this.setState({
          followers: res.data
        });
        console.log(res.data, "follower response");
      })
      .catch(err => console.log(err));
  }

  handleChanges = e => {
    this.setState({
      userText: e.target.value
    });
  }
  fetchUsers = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.userText}`)
      .then(res => {
        this.setState({
          users: res.data,
          userText: ''
        });
        console.log(res, "response");
      })
      .catch(err => console.log(err));

      axios
      .get(`https://api.github.com/users/${this.state.userText}/followers`)
      .then(res => {
        this.setState({
          followers: res.data
        });
        console.log(res.data, "follower response");
      })
      .catch(err => console.log(err));
  }
  render() {
    return ( 
      <div className="App">
        <h1>Github UserCards</h1>
        <input
          type="text"
          value={this.state.userText}
          onChange={this.handleChanges}
        />
        <button onClick={this.fetchUsers}>Fetch User</button>
        <div className="users">
         {console.log(this.state.users, "this.users")}
          <UserCard name={this.state.users.name} 
                username={this.state.users.login}
                bio={this.state.users.bio}
                location={this.state.users.location}
                avatar_url={this.state.users.avatar_url} />
        </div>
        <h3>Followers</h3>
        <div className="follower-container">
            {this.state.followers.map(follower => {
              return (
              <FollowerCard login={follower.login} avatar_url={follower.avatar_url} />
              
              )
                  
            }
           
            )}
        </div>
      </div>
    )
  }
};


export default App;
