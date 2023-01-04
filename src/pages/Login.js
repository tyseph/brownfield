import React from "react";
import { login } from "../redux/index";
import  { connect } from 'react-redux'
import { logout } from "../redux/auth/authActions";

const object = {

  "username":"siddheshwable.ssw@gmail.com",

  "password":"siddhesh"

}

const onClickhandler = () => {
  login(object)
}

const onClickHandler2 = () => {
  logout()
}
const Login = (props) => {
  return (
    <>
    <h2>hello {props.user}</h2>
    <h1>WHAT's UP</h1>
      <div>Login</div>
      <button onClick={onClickhandler}>login</button>
      <button onClick={onClickHandler2}>logout</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user : state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (data) => dispatch(login(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);