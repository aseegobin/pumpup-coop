var React = require('react');

var UserInfo = React.createClass({
    render: function() {
        return (
            <div className='user-info'>
                <img className='user-pic' src={this.props.pic} />
                <div className='user-name'> 
                    {this.props.name} 
                </div>
            </div>
        )
    }
});

module.exports = UserInfo;
