import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";
import loaderImage from "./loading.gif";
import { login } from "./Config/FirebaseMethod";

export default function Login() {
  let [alert, setAlert] = useState(null);
  const [loader, setLoader] = useState(false);

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
  let navigate = useNavigate();
  let params = useParams();
  const logIn = () => {
    setLoader(true);
    login(email, password)
      .then((succes) => {
        setLoader(false);

        navigate(`/home/${succes.id}`);
      })
      .catch((error) => {
        setLoader(false);
        console.log(error);
      });
  };
  // const logIn = () => {
  //   navigate("/home");
  // };

  return (
    <div>
      {alert && (
        <div className={`alert alert-${alert.type}`} role="alert">
          <strong>{alert.type}</strong>: {alert.message}
        </div>
      )}
      <Box>
        <Typography variant="h3" m={5}>
          Login here
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
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                logIn();
              }
            }}
            style={{ width: "500px", fontSize: "30px" }}
          />
        </Box>
        <Box>
          {loader ? (
            <img src={loaderImage} alt="" />
          ) : (
            <Button
              variant="filled"
              onClick={logIn}
              style={{ width: "500px", fontSize: "23px" }}
            >
              LogIn
            </Button>
          )}
        </Box>
      </Box>
    </div>
  );
}
