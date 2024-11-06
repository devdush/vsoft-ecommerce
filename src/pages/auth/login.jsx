import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { TextField, Button, Typography, Box } from "@mui/material";
import { loginUser } from "../../services/auth/login";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../store/action/auth";

const AuthLogin = () => {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        placeItems: "center",
        p: 5,
      }}
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values, { setSubmitting }) => {
          const obj = {
            email: values.email,
            password: values.password,
          };
          dispatch(LoginUser(obj));

          setSubmitting(false);
        }}
      >
        {({ isSubmitting, handleChange, handleBlur, values }) => (
          <Box sx={{ width: "100%", maxWidth: 400 }}>
            <Typography
              variant="h4"
              sx={{ color: "#f0f0f0", mb: 2, textAlign: "center" }}
            >
              Login
            </Typography>
            <Form>
              <TextField
                label="Email"
                name="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                fullWidth
                sx={{
                  mb: 3,
                  border: "1px solid white",
                  "& .MuiInputBase-input::placeholder": {
                    color: "white",
                    opacity: 1, // Ensures the color is not faded
                  },
                  "& .MuiInputLabel-root": {
                    color: "white", // To set the label color
                  },
                }}
                variant="outlined"
              />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red" }}
              />

              <TextField
                label="Password"
                name="password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                fullWidth
                sx={{
                  mb: 3,
                  border: "1px solid white",
                  "& .MuiInputBase-input::placeholder": {
                    color: "white",
                    opacity: 1, // Ensures the color is not faded
                  },
                  "& .MuiInputLabel-root": {
                    color: "white", // To set the label color
                  },
                }}
                variant="outlined"
              />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "red" }}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2, py: 1.5 }}
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </Form>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default AuthLogin;
