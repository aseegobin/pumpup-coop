var React = require('react');

var PostStats = React.createClass({
    render: function() {
        return (
            <div className='stats'>
                <div className='like-count'>
                    Likes: {this.props.likes}
                </div>
                <div className='comment-count'>
                    Comments: {this.props.comments}
                </div>
            </div>
        )
    }
});

module.exports = PostStats;
