import {
  Button,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Signin() {
  const history = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("https://bca-p1.onrender.com/Signin", {
          Email,
          Password,
        })
        .then((res) => {
          if (res.data == "exist") {
            history("/Dashboard", { state: { id: Email } });
          } else if (res.data == "notexist") {
            alert("Wrong Email or Password");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.error(e);
        });
    } catch (e) {
      alert("Something went wrong. Please try again later.");
      console.error(e);
    }
  }

  return (
    <div>
      <form>
        <Grid>
          <Paper
            elevation={10}
            style={{
              height: "70vh",
              width: 800,
              margin: "100px auto",
              borderRadius: "20px",
            }}
          >
            <Grid container>
              <Grid item xs={6} p={0}>
                <img
                  src="Images/Img35.jpg"
                  alt="flower"
                  style={{
                    width: 400,
                    height: 495,
                    borderStartStartRadius: "16px",
                    borderEndStartRadius: "16px",
                  }}
                />
              </Grid>

              <Grid item xs={6} p={5} mt={10}>
                <Stack direction="column" spacing={2}>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Welcome
                  </Typography>

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
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    size="small"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <Button variant="contained" type="submit" onClick={submit}>
                    Signin
                  </Button>
                  <Typography>
                    didn't have an Account? <Link to="/">signup</Link>
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
