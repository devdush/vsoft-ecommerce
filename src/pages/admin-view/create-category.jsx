import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  main_Category: Yup.string().required("Main Category is required"),
  category_Title: Yup.string().required("Category Title is required"),
  short_description: Yup.string().required("Short description is required"),
});

const CreateCategory = () => {
  const [preview, setPreview] = useState(null);
  const [imageError, setImageError] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        if (img.width === 570 && img.height === 320) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreview(reader.result);
            setImageError(""); // Clear any previous errors
          };
          reader.readAsDataURL(file);
        } else {
          setImageError("Image size must be exactly 570px by 320px.");
          setPreview(null); // Clear preview if the image is invalid
        }
      };
    } else {
      setPreview(null);
      setImageError("");
    }
  };

  return (
    <div
      className="createCategory_form"
      style={{
        display: "grid",
        padding: "20px",
        borderRadius: "8px",
        width: "100%",
        maxWidth: "1000px",
        margin: "0 auto",
        backgroundColor: "#e2e2e2b7",
        marginTop: "20px",
      }}
    >
      <h2> Create Category </h2>
      <Formik
        initialValues={{
          main_Category: "",
          category_Title: "",
          short_description: "",
          image: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, handleChange, handleBlur, values }) => (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr", // Adjust the column ratio here
              gap: "20px",
            }}
          >
            {/* Left Column - Form Section */}
            <Form>
              <div style={{ marginBottom: "20px", textAlign: "left" }}>
                <label htmlFor="main_Category" style={{ fontSize: "16px" }}>
                  Main Category <span>*</span>
                </label>
                <Field
                  as="select"
                  name="main_Category"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                >
                  <option value="">Select Main Category</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </Field>
                <ErrorMessage
                  name="main_Category"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>

              <div style={{ marginBottom: "20px", textAlign: "left" }}>
                <label htmlFor="category_Title">
                  Category Title <span>*</span>
                </label>
                <Field
                  type="text"
                  name="category_Title"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
                <ErrorMessage
                  name="category_Title"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>

              <div style={{ marginBottom: "20px", textAlign: "left" }}>
                <label htmlFor="short_description">
                  Short Description <span>*</span>
                </label>
                <Field
                  as="textarea"
                  name="short_description"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
                <ErrorMessage
                  name="short_description"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>
              <div style={{ marginBottom: "20px", textAlign: "left" }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: "#20C4C4",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Save
                </button>
              </div>
            </Form>

            {/* Right Column - Image Upload Section */}
            <div>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Default Image (570px X 320px)
              </label>
              <input
                type="file"
                accept="image/*"
                id="upload"
                name="image"
                onBlur={handleBlur}
                onChange={(e) => {
                  handleImageChange(e);
                  handleChange(e);
                }}
                style={{ display: "none" }}
              />
              <label
                htmlFor="upload"
                style={{
                  display: "inline-block",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  padding: "10px 20px",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                Upload
              </label>

              {imageError && (
                <div style={{ color: "red", marginTop: "10px" }}>
                  {imageError}
                </div>
              )}

              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  style={{
                    display: "block",
                    marginTop: "20px",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              )}
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default CreateCategory;
