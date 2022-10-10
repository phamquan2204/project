import React, { useState, useEffect } from 'react'

import '../Assets/Styles/Login.css';

function Login() {
    return (
        <div className="login d-flex justify-content-center">
            <form action="" className="w-50 text-light">
                <div className="form-group d-flex flex-column align-items-center ">
                    <p className="login-with text-capitalize">Login with</p>
                    <div className="social h3 d-flex flex-row justify-content-center">
                        <i className="fa-brands fa-google mr-2"></i>
                        <i className="fa-brands fa-facebook"></i>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="userName" className="d-flex flex-row">
                        <i className="fa-solid fa-user m-1 p-2 bg-dark rounded rounded-circle"></i>
                        <p className="m-0 p-2">Username</p>
                    </label>
                    <input type="text" name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="d-flex flex-row">
                        <i className="fa-solid fa-lock m-1 p-2 bg-dark rounded rounded-circle"></i>
                        <p className="m-0 p-2">Password</p>
                    </label>
                    <input type="password" name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <button className="login-btn btn btn-group btn-dark">Login</button>
                </div>
                <div className="form-group d-flex justify-content-between">
                    <small>You don't have account</small>
                    <small>Fogot your password</small>
                </div>
            </form>
        </div>
    )
}

export default Login