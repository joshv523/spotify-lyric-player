import React from "react"
import { Container } from "react-bootstrap"
import './Login.css'

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=b77dd309e4a049ad872782a8cb6182b1&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ flexDirection: "column", minHeight: "100vh", minWidth: "100vw", backgroundColor: "black"}}
    >
      <div className="loginMessage">
        <h1>
          Welcome to the Spotify Lyric Player!
        </h1>
        <p>
          Login with your Spotify account below and enjoy your favorite songs from Spotify with lyrics displayed!
        </p>
      </div>
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login With Spotify
      </a>
    </Container>
  )
}
