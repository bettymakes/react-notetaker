var React = require('react');

var Repos = React.createClass({
  render: function(){
    return (
      <div>
        REPOS!! <br/>
        UN: {this.props.username} <br/>
        repos: {this.props.repos}
      </div>
    )
  }
});

module.exports = Repos;