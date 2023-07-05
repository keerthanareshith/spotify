import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: steelblue;
    margin: 0;
    border: 0;
    height: 730px;
    display: flex;

.login-container {
    background-color: white;
    width: 500px;
    margin-left: 500px;
    margin-top: 100px;
    border-radius: 20px;
    height: 500px;
    display: flex;
    flex-direction: column;
}

.heading {
    text-align: center;
    font-size: 25px;
}

.loginform {
    flex-wrap: wrap;
    padding: 30px;
    margin-bottom: 10px;
    line-height: 40px;
    color: #253131;
}

.btn-sec {
    background-color: #355086;
    color: white;
    text-align: center;
    width: 100%;
    margin-top: 20px;
    border: none;
    justify-content: center;
    align-items: center;
    padding: 5px;
    display: flex;
}

input {
    width: 100%;
    display: inline-block;
    height: 30px;
}

input[type=checkbox] {
    float: left;
    margin: 5px;
    margin-top: 15px;
    width: 10px;
    height: 10px;
}

.footer h4 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
}

.footer a {
    color: rgb(93, 93, 248);
    text-decoration: none;
}

.hover h4 {
    margin-top: -10px;
    display: flex;
    justify-content: center;
    align-items: center;

}
a:hover {
    color: red;

}
.hover a {
    color: rgb(93, 93, 248);
    text-decoration: none;
}

@media (max-width: 768px) {

    /* Apply styles for screens with a maximum width of 768px */
    .login-container {
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
        margin-top: 50px;
    }

    .loginform {
        padding: 20px;
        line-height: 30px;
    }
}
`;
const Login = () => {
    return (
        <Container>
            <form action="" method="get">
                <div className="login-container">
                    <div className="heading">
                        <h2>Login</h2>
                    </div>
                    <div className="loginform">
                        <label for="email"><b>Email:</b></label>
                        <input type="email" name="" id="email" className="card-box" placeholder="Enter Email" required />
                        <label for="pswd"><b>Password:</b></label>
                        <input type="password" name="" id="pswd" placeholder="Enter Password" className="card-box" required />
                        <input type="checkbox" id="showPassword" className="clear" />
                        <label for="showPassword">Show password</label>
                        <input type="submit" value="SIGN IN" className="btn-sec" />
                        <div className="footer">
                            <h4>Forgot <a href="">Username</a>/<a>password</a>?</h4>
                        </div>
                        <div className="hover">
                            <h4>Don't have an account?<a href="">Sign up</a></h4>
                        </div>
                    </div>
                </div>
            </form>
        </Container>
    )
}

export default Login