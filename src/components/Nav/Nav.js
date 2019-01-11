import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import getUserDate from '../../ducks/reducer'


class Nav extends Component {



    
    render() {
       
      console.log(this.props)

            return (
                
            <div>
                <div>
                    Nav
                </div>
                <Link to="/dashboard">
                <button>Home</button>
                </Link>
                <Link to='/new'>
                <button>New Post</button>
                </Link>
                <Link to ='/'>
                <button>Logout</button>
                </Link>
                
            </div>  
            )
        
    }
}
function mapStateToProps (reduxState) {
    const { username, profilePic } = reduxState
    return {
        username
    }
};

export default connect( mapStateToProps )(Nav) 

profilePic: {}