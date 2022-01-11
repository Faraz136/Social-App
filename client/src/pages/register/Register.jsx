import { Button, Input } from '@mui/material';
import './register.css';

function Register() {
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
              placeholder="UserName"
              type="text"
              className="loginInput"
            ></Input>
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
            <Input
              placeholder="Confirm Password"
              type="password"
              className="loginInput"
            ></Input>

            <Button className="loginButton" variant="contained" fullWidth>
              {' '}
              Sign Up
            </Button>

            <Button
              className="registerButton"
              variant="contained"
              fullWidth
              color="secondary"
            >
              {' '}
              Log in to Your Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
