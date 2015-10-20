var React = require('react');

var PostContent = React.createClass({
    computeTime: function(time) {
        var currentTime = new Date();
        var postTime = new Date(time);
        
        var diff = currentTime - postTime;
        //Format this as desired.
        if (diff > 86400e3){
            return  Math.floor(diff / 86400e3) + ' days ago';
        } else if (diff > 3600e3) {
            return Math.floor(diff / 3600e3) + ' hours ago';
        } else if (diff > 60e3) {
            return Math.floor(diff / 60e3) + ' minutes ago';
        } else {
            return Math.floor(diff / 1e3) + ' seconds ago';
        };

    },
    render: function() {
        var time = this.computeTime(this.props.time);
        return (
            <div className='post-and-note'>
                <div className='created-at'>
                    {time}
                </div>
                <img className='pump-img' src={this.props.image} />
                <div className='note'>
                    {this.props.note}
                </div>
            </div>
        )
    }
});

module.exports = PostContent;
