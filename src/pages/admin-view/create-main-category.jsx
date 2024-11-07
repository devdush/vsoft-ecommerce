import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
const CreateMainCategory = () => {
  const initialValues = { title: "" };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required!"),
  });

  return (
    <Box
      sx={{
        padding: "10px",
        margin: "20px",
        background: "#e2e2e2b7",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "black",
            textAlign: "center",
            fontFamily: "Poppins, sans-serif", // Change to any font family you want
            fontWeight: "600",
          }}
        >
          Main Category Details
        </Typography>
      </Box>
      <hr></hr>
      <Box>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            alert(values.title);
            setSubmitting(true);
            try {
            } catch (error) {}
          }}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            isValid,
            handleBlur,
            handleChange,
            resetForm,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  width: "100%",
                  flexDirection: "column",
                  padding: "15px 0 15px 0",
                }}
              >
                <TextField
                  margin="normal"
                  sx={{ width: "60%" }}
                  name="title"
                  label="Main Category Title"
                  type="text"
                  id="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  error={!!touched.title && !!errors.title}
                  helperText={touched.title && errors.title}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    alignSelf: "center",
                    mt: 2,
                    backgroundColor: "#2596be",
                    width: "10px",
                  }}
                >
                  Save
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default CreateMainCategory;
