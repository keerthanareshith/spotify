import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
const Container = styled.div`
    margin: 0;
    border: 0;
    height: 800px;
    display: flex;
    background: orange;
.div1{
    margin-left:300px;
    background-color:orange;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 100px;
    
}

.reg {
    margin-top: 20px;
    margin-left: 150px;
    font-weight: bold;
    font-size: 30px;
}
.login {
    text-align: left;
    border-top-left-radius: 10% 50%;
    border-bottom-left-radius: 10% 50%;
    background-color: whitesmoke;
    width: 500px;
    height: 400px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-left: 100px;
}
input {
    margin-left: 50px;
    margin-right: 20px;
}

.btn2 {
    margin-top: 20px;
    height: 50px;
    width: 120px;
    position: relative;
    left: 350px;
    border-radius: 100px 100px 100px 100px;
    background-color: orange;
    text-align: center;
    font-family: Arial;
    color: white;
    font-weight: bolder;
    font-size: medium;
    border: orange;

}

.id {
    margin-top: 20px;
}


`;
const Signup = () => {
    return (

        <Container>
            <div class="div1">
                <form action="">
                    <div class="login">
                        <label for="" class="reg">Register Here</label>
                        <input type="text" class="id" placeholder="Name" />
                        <input type="text" class="id" placeholder="Username" />
                        <input type="email" class="id" placeholder="Email" />
                        <input type="tel" class="id" placeholder="phone" pattern="[0-9]{1,2}-[0-9]{10}" />
                        <input type="password" class="id" placeholder="Password" />
                        <button class="btn2">Register</button>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default Signup