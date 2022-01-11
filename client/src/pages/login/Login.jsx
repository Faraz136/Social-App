import { Button, Input } from '@mui/material';
import './login.css';

function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Socail</h3>
          <span className="loginDisc">
            Connect with friends and people around the world
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <Input
              placeholder="Email"
              type="email"
              className="loginInput"
            ></Input>

            <Input
              placeholder="Password"
              type="password"
              className="loginInput"
            ></Input>

            <Button className="loginButton" variant="contained" fullWidth>
              {' '}
              Log In
            </Button>
            <span className="loginForgot">Forgot Password?</span>
            <Button
              className="registerButton"
              variant="contained"
              fullWidth
              color="secondary"
            >
              {' '}
              Creat A New Account{' '}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
