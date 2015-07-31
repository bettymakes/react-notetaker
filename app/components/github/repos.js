var React = require('react');

var Repos = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },  
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