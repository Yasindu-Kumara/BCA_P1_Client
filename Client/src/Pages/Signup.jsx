import Mail from "@mui/icons-material/Mail";
import {
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const history = useNavigate();

  const [Fullname, setFullname] = useState("");
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  };

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("https://bca-p1.onrender.com/", {
          Fullname,
          Username,
          Email,
          Password,
        })
        .then((res) => {
          if (res.data == "exist") {
            alert("User is already exists");
          } else if (res.data == "notexist") {
            history("/Dashboard", { state: { id: Email } });
          }
        })
        .catch((e) => {
          alert("Wrong Details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <form>
        <Grid>
          <Paper
            elevation={10}
            style={{
              padding: 0,
              height: "70vh",
              width: 800,
              margin: "100px auto",
              borderRadius: "20px",
            }}
          >
            <Grid container>
              <Grid item xs={6} p={0}>
                <img
                  src="Images/img34.jpg"
                  alt="flower"
                  style={{
                    width: 400,
                    height: 495,
                    borderStartStartRadius: "16px",
                    borderEndStartRadius: "16px",
                  }}
                />
              </Grid>
              <Grid item xs={6} p={5}>
                <Stack direction="column" spacing={2}>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Create Account
                  </Typography>
                  <TextField
                    id="outlined-helperText"
                    label="Fullname"
                    size="small"
                    onChange={(e) => {
                      setFullname(e.target.value);
                    }}
                  />
                  <TextField
                    id="outlined-helperText"
                    label="Username"
                    size="small"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                  <TextField
                    id="outlined-helperText"
                    label="E-mail"
                    size="small"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      validateEmail(e.target.value);
                    }}
                    error={emailError !== ""}
                    helperText={emailError}
                  />
                  <TextField
                    id="outlined-helperText"
                    label="Password"
                    type="password"
                    size="small"
                    onChange={(e) => {
                      setPassword(e.target.value);
                      validatePassword(e.target.value);
                    }}
                    error={passwordError !== ""}
                    helperText={passwordError}
                  />

                  <Button variant="contained" type="submit" onClick={submit}>
                    Create Account
                  </Button>

                  <Button variant="contained">Continue With Google</Button>
                  <Typography variant="boady2">
                    Already Have An Account? <Link to="/Signin">Signin</Link>
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </form>
    </div>
  );
}
