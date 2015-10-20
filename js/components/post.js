var React = require('react');

var UserInfo    = require('./user-info');
var PostContent = require('./post-content');
var PostStats   = require('./post-stats');


var IGPost = React.createClass({
    render: function() {
        return (
            <div className='pump-post'>
                <UserInfo 
                    pic={this.props.postObj.user.profileThumbnail.url} 
                    name={this.props.postObj.user.name} 
                />
                <PostContent 
                    time={this.props.postObj.createdAt} 
                    image={this.props.postObj.photo.url} 
                    note={this.props.postObj.note} 
                />
                <PostStats 
                    likes={this.props.postObj.likeCount} 
                    comments={this.props.postObj.commentCount} 
                />
            </div>
        );
    }
});

module.exports = IGPost;