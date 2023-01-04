import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { signIn } from "./Config/FirebaseMethod";
export default function Sinup() {
  let [alert, setAlert] = useState(null);
  const [isLoading, setLoader] = useState(false);
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();
  let login = () => {
    navigate("/login");
  };
  const signup = () => {
    signIn({email:email, password:password,userName:"Sagar Abbasi",contact:"0312"})
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {alert && (
        <div className={`alert alert-${alert.type}`} role="alert">
          <strong>{alert.type}</strong>: {alert.message}
        </div>
      )}
      <Box>
        <Button
          onClick={login}
          variant="filled"
          style={{ width: "500px", fontSize: "23px" }}
          m={5}
        >
          Go To Login Page
        </Button>
      </Box>
      <Box>
        <Typography variant="h3" m={5}>
          SignUp here
        </Typography>
        <Box m={5}>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            variant="filled"
            label="Enter Your Email"
            type="Email"
            size="normal"
            style={{ width: "500px", fontSize: "30px" }}
          />
        </Box>
        <Box m={5}>
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            variant="filled"
            label="Enter Your Password"
            type="password"
            size="normal"
            style={{ width: "500px", fontSize: "30px" }}
          />
        </Box>
        <Box>
          <Button
            variant="filled"
            onClick={signup}
            style={{ width: "500px", fontSize: "23px" }}
          >
            {/* // {isLoading?<} */}
            SignUp
          </Button>
        </Box>
      </Box>
    </div>
  );
}
