import React from 'react';
import { connect } from 'react-redux'
import { set_data } from '../../store/action'
import './style.css';


class Home extends React.Component {
    render() {
        let users = {name: "Muhammad Usama", email: "usama@gmail.com"}
        console.log("Props ==>", this.props.users)
        return (
            <div>
                <h1>
                    Home
                 </h1>

                <button onClick={() => this.props.set_data(users)} >Set Data</button>
                {/* <button onClick={()=> this.props.Facebook_login() }>Facebook_login</button> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users
})

const mapDispatchToProp = (dispatch) => ({
    set_data: (data) => dispatch(set_data(data)),
    // Facebook_login: (data) => dispatch(Facebook_login(data))
})

export default connect(mapStateToProps, mapDispatchToProp)(Home);