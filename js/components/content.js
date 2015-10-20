var React = require('react');

var Grid = require('./grid');
var Title  = require('./title');

var Content = React.createClass({
    render: function() {
        return (
            <div>
                <Title />
                <Grid />
                - Avie Seegobin -
            </div>
        );
    }
});

module.exports = Content;