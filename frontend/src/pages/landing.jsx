import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
export default function LandingPage() {


    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>Shikhar's Video Call</h2>
                </div>
                <div className='navlist'>
                    <p onClick={() => {
                        router("/aljk23")
                    }}style={{ color: "#D97500" }}>Join as Guest</p>
                    <p onClick={() => {
                        router("/auth")

                    }}style={{ color: "#D97500" }}>Register</p>
                    <div onClick={() => {
                        router("/auth")
                        

                    }} role='button' style={{ color: "#D97500" }}>
                        <p>Login</p>
                    </div>
                </div>
            </nav>


            <div className="landingMainContainer">
                <div>
                    <h1><span style={{ color: "white" }}>Connect</span> with your loved Ones</h1>

                    <p>Cover a distance by Shikhar's Video Call App</p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>

                    <img src="/mobile.png" alt="" />

                </div>
            </div>



        </div>
    )
}