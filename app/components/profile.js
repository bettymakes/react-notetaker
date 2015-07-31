var React         = require('react');
var Router        = require('react-router');
var Repos         = require('./github/repos');
var UserProfile  = require('./github/userProfile');
var Notes         = require('./notes/notes');

var Profile = React.createClass({
  mixins: [Router.State],
  getInitialState: function(){
    return {
      notes: ['noteUno', 'noteDos'],
      bio: {
        name: "piKAchu"
      },
      repos: ['someRepo', 'otherRepo', "repo3"]
    }
  },
  render: function() {
    var username = this.getParams().username;
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={username} bio={this.state.bio}/>
        </div>
        <div className="col-md-4">
          <Repos username={username} repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes username={username} notes={this.state.notes}/>
        </div>
      </div>
    )
  }
});

module.exports = Profile;