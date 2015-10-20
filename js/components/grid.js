var React = require('react');

var PumpPost = require('./post');

var PostData = require('../../dummy-feed.json');

var Grid = React.createClass({
    handleMedia: function() {
        var images = PostData.result.posts.map(function(imageObj) {
            return (
                <PumpPost postObj={imageObj} />
            );
        })
        return images;
    },

    render: function() {
        var feed = this.handleMedia();

        return (
            <div>
                <div className='pump-grid'>
                    {feed}
                </div>
            </div>
        );
    }
});

module.exports = Grid;