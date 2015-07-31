var React = require('react');

var Notes = React.createClass({
  render: function(){
    return (
      <div> 
        NOTES! <br/>
        name: {this.props.username} <br/>
        notes: {this.props.notes}
          
      </div>
    )
  }
});

module.exports = Notes;