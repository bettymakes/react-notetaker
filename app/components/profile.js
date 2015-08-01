var React         = require('react');
var Router        = require('react-router');
var Repos         = require('./github/repos');
var UserProfile   = require('./github/userProfile');
var Notes         = require('./notes/notes');
var ReactFireMixin = require('reactfire');
var Firebase      = require('firebase');

var Profile = React.createClass({
  mixins: [Router.State, ReactFireMixin],
  getInitialState: function(){
    return {
      notes: ['noteUno', 'noteDos'],
      bio: {
        name: "piKAchu"
      },
      repos: ['someRepo', 'otherRepo', "repo3"]
    }
  },
  componentDidMount: function(){
    // this life cycle event (componentDidMount fn) gets called when component mounts the view
    this.ref = new Firebase('https://burning-torch-3051.firebaseio.com/');
    var childRef = this.ref.child(this.getParams().username);
    this.bindAsArray(childRef, 'notes');
  },
  componentWillUnmount: function() {
    // Removes the listener on notes when component has moved on
    this.unbind('notes');
  },
  handleAddNote: function(newNote){
    this.ref.child(this.getParams().username).set(this.state.notes.concat([newNote]));
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
          <Notes 
            username={username} 
            notes={this.state.notes}
            addNote={this.handleAddNote}/>
        </div>
      </div>
    )
  }
});

module.exports = Profile;