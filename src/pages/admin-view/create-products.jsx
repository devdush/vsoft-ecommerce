import React, { useState } from "react";
import { Formik, useFormik, Form, Field } from "formik";
import * as Yup from "yup";

const initialValues = {
  productTitle: "",
  category: "",
  brand: "",
  colors: "",
  shortDescription: "",
  price: "",
  oldPrice: "",
  sku: "",
  stock: "",
//   description: "",
  specification: "",
  image: "",
};

export const productValidation = Yup.object({
  productTitle: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  brand: Yup.string().required("Required"),
  price: Yup.number().required("Required").positive("Must be positive"),
  oldPrice: Yup.number().required("Required").positive("Must be positive"),
  sku: Yup.string().required("Required"),
  stock: Yup.number().required("Required").positive("Must be positive"),
//   description: Yup.string().required("Required"),
  shortDescription: Yup.string().required("Required"),
  colors: Yup.string().required("Required"),
  specification: Yup.string().required("Required"),
});
export default function () {
  const [preview, setPreview] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  return (
    <div
      style={{
        //   display:'flex',
        textAlign: "justify",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          columnGap: "5px",
          margin: "20px auto",
          maxWidth: "1000px",
          padding: "20px",
          backgroundColor: "#e2e2e2b7",
          borderRadius: "8px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={productValidation}
          onSubmit={(values, { setSubmitting }) => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }}
        >
          {({ errors, values }) => (
            <Form>
              <h3>Product Details</h3>
              <label htmlFor="name">Product Title</label>
              <br />
              <Field
                type="text"
                name="productTitle"
                style={{
                  width: "90%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  fontSize: "15px",
                }}
                value={values.productTitle}
              ></Field>
              <br />
              {errors.productTitle && <small>{errors.productTitle}</small>}
              <br />
              <br />

              <label htmlFor="category">Product Category</label>
              <br />
              <select
                id="selectBox"
                style={{
                  width: "90%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  marginBottom: "20px",
                  fontSize: "15px",
                }}
              >
                <option>Select Category1</option>
                <option>Select Category2</option>
                <option>Select Category3</option>
              </select>
              <br />
              {errors.category && <small>{errors.category}</small>}
              <br />
              <br />

              <label htmlFor="brand">Brand</label>
              <br />
              <select
                style={{
                  width: "90%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  marginBottom: "20px",
                  fontSize: "15px",
                }}
              >
                <option>Select Brand1</option>
                <option>Select Brand2</option>
                <option>Select Brand3</option>
              </select>
              <br />
              {errors.brand && <small>{errors.brand}</small>}

              <br />
              <br />

              <label htmlFor="colors">Colors</label>
              <br />
              <Field
                type="text"
                name="colors"
                style={{
                  width: "90%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  marginBottom: "20px",
                  fontSize: "15px",
                }}
                value={values.colors}
              ></Field>
              <br />
              {errors.colors && <small>{errors.colors}</small>}
              <br />
              <br />

              <label htmlFor="shortDescription">Short Description</label>
              <br />
              {/* <Field type="text" name="Short Description" style={{width: '90%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginBottom: '20px',
            fontSize:'15px',
            }}></Field> */}

              <textarea
                name="text"
                id=""
                rows="3"
                cols="78"
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  marginBottom: "20px",
                  fontSize: "15px",
                }}
              ></textarea>
              <br />
              {errors.shortDescription && (
                <small>{errors.shortDescription}</small>
              )}
              <br />
              <br />

              {/* <div style={{display:'flex', gridTemplateColumns:'auto auto',}}> */}
              <label htmlFor="price">Price</label>
              <br />
              <Field
                type="text"
                name="price"
                style={{
                  width: "40%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  marginBottom: "20px",
                  fontSize: "15px",
                }}
                value={values.price}
              ></Field>
              <br />
              {errors.price && <small>{errors.price}</small>}
              <br />
              <br />

              <div style={{ marginTop: "-130px", marginLeft: "350px" }}>
                <label htmlFor="oldPrice">Old Price</label>
                <br />
                <Field
                  type="text"
                  name="oldPrice"
                  style={{
                    width: "70%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    marginBottom: "20px",
                    fontSize: "15px",
                  }}
                  value={values.oldPrice}
                ></Field>
                <br />
                {errors.oldPrice && <small>{errors.oldPrice}</small>}
                <br />
                <br />
              </div>
              {/* </div> */}

              {/* <div style={{display:'flex', gridTemplateColumns:'auto auto'}}> */}
              <label htmlFor="sku">SKU</label>
              <br />
              <Field
                type="text"
                name="sku"
                style={{
                  width: "40%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  marginBottom: "20px",
                  fontSize: "15px",
                }}
                value={values.sku}
              ></Field>
              <br />
              {errors.sku && <small>{errors.sku}</small>}
              <br />
              <br />

              <div style={{ marginTop: "-130px", marginLeft: "350px" }}>
                <label htmlFor="stock">Stock</label>
                <br />
                <Field
                  type="text"
                  name="stock"
                  style={{
                    width: "70%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    marginBottom: "20px",
                    fontSize: "15px",
                  }}
                  value={values.stock}
                ></Field>
                <br />
                {errors.stock && <small>{errors.stock}</small>}
                <br />
                <br />
              </div>
              {/* </div> */}

              <label htmlFor="description">Description</label>
              <br />
              {/* <Field type="text" name="Description" style={{width: '120%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginBottom: '20px',
            fontSize:'15px',
            }}></Field> */}
              <textarea
                name="text"
                id=""
                rows="10"
                cols="78"
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  marginBottom: "20px",
                  fontSize: "15px",
                }}
              ></textarea>
              <br />
              {errors.description && <small>{errors.description}</small>}
              <br />
              <br />

              <div>
                <label>
                  <input type="checkbox" /> Add to Featured Products
                </label>
                <label style={{ marginLeft: "40px" }}>
                  <input type="checkbox" /> Add to On Sale
                </label>
                <label style={{ marginLeft: "40px" }}>
                  <input type="checkbox" /> Add to Top Rated
                </label>
                <label style={{ marginLeft: "40px" }}>
                  <input type="checkbox" /> Add to Special Offers
                </label>
              </div>
              <br />
              <br />

              <label htmlFor="specification">Specification</label>
              <br />
              {/* <Field type="text" name="Specification" style={{width: '120%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginBottom: '20px',
            fontSize:'15px',
            }}></Field> */}
              <textarea
                name="text"
                id=""
                rows="10"
                cols="78"
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  marginBottom: "20px",
                  fontSize: "15px",
                }}
              ></textarea>
              <br />
              {errors.specification && <small>{errors.specification}</small>}
              <br />
              <br />

              <label>
                More Images
                <span style={{ color: "#8a8a96", fontSize: "14px" }}>
                  (700px X 700px)
                </span>
              </label>
              <br />

              <label
                for="uploade"
                style={{
                  display: "inline-block",
                  backgroundColor: "#2596be",
                  color: "white",
                  padding: "10px",
                  cursor: "pointer",
                  marginTop: "1rem",
                  fontSize: "15px",
                }}
              >
                Upload
              </label>
              <br />
              <br />
              <div>
                <input
                  type="file"
                  accept="image/*"
                  id="uploade"
                  name="image"
                  onChange={handleImageChange}
                  hidden
                />
                {preview && (
                  <img
                    src={preview}
                    alt="Image Preview"
                    style={{ maxWidth: "40%", height: "auto" }}
                  />
                )}
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: "#1bc5bd",
                  color: "#ffffff",
                  padding: "10px 15px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Save
              </button>
            </Form>
          )}
        </Formik>

        <div>
          <br />
          <br />
          <label>
            Default Image{" "}
            <span style={{ color: "#8a8a96", fontSize: "14px" }}>
              (700px X 700px)
            </span>
          </label>
          <br />
          {/* <input type="file" id="upload" hidden/> */}
          {/* <label for="upload" style={{display: 'inline-block',
        backgroundColor: '#2596be',
        color: 'white',
        padding: '10px 200px',
        cursor: 'pointer',
        marginTop: '1rem',
        fontSize:'15px',
        }}>Upload</label> */}

          <label
            for="uploade"
            style={{
              display: "inline-block",
              backgroundColor: "#2596be",
              color: "white",
              padding: "10px 100px",
              cursor: "pointer",
              marginTop: "1rem",
              fontSize: "15px",
            }}
          >
            Upload
          </label>
          <br />
          <br />
          <div>
            <input
              type="file"
              accept="image/*"
              id="uploade"
              name="image"
              onChange={handleImageChange}
              hidden
            />
            {preview && (
              <img
                src={preview}
                alt="Image Preview"
                style={{ maxWidth: "85%", height: "auto" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
