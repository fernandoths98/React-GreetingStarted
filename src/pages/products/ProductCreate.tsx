import axios from "axios";
import React, { Component, SyntheticEvent, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ImageUpload from "../../components/ImageUpload";
import Wrapper from "../../components/Wrapper";

const ProductCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios.post("products", {
      title,
      description,
      image,
      price,
    });

    setRedirect(true);

  };

  if (redirect) {
    return <Redirect to={"/products"} />;
  }

  return (
    <Wrapper>
      <div>
        <main className="form-signin mt-5">
          <form onSubmit={submit}>
            <h1 className="h3 mb-4 fw-normal">Create New Products</h1>
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="floatingFirstName"
                placeholder="John"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <label htmlFor="floatingFirstName">Title</label>
            </div>

            <div className="form-floating">
              <textarea
                className="form-control mb-2"
                id="floatingLastname"
                placeholder="Doe"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
              <label htmlFor="floatingLastName">Description</label>
            </div>

            <label className="mb-2">Upload Image :</label>
            <div className="input-group">
              <input
                className="form-control"
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              />
              <ImageUpload uploaded={setImage}/>
            </div>
            <button
              className="w-100 btn btn-sm btn-secondary mt-4"
              type="submit"
            >
              Add new product
            </button>
          </form>
        </main>
      </div>
    </Wrapper>
  );
};
export default ProductCreate;
