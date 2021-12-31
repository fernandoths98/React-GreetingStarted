import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
import Wrapper from "../../components/Wrapper";
import { Product } from "../../models/product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`products?page=${page}`);

      setProducts(data.data);
      setLastPage(data.meta.last_page);
    })();
  }, []);

  const del = async (id: number) => {
    if (window.confirm("Are you sure want to delete this record?")) {
      await axios.delete(`products/${id}`);

      setProducts(products.filter((p: Product) => p.id !== id));
    }
  };

  return (
    <Wrapper>
      <div className="pt-3 pb-2 mb-3 border-bottom">
        <Link
          to="/products/createProducts"
          className="btn btn-sm btn-outline-secondary"
          // onClick={() => del(user.id)}
        >
          Add Product
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p: Product) => {
          
              return (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>
                    <img
                      src={process.env.PUBLIC_URL + "/assets/1.png"}
                      width="100"
                    />
                  </td>
                  <td>{p.title}</td>
                  <td>{p.description}</td>
                  <td>{p.price}</td>
                  <td>
                    <div className="btn-group mr-2">
                      <Link
                        to={`/products/${p.id}/update`}
                        href="#"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </Link>

                      <a
                        href="#"
                        className="btn btn-sm btn-outline-secondary"
                        // onClick={() => del(p.id)}
                      >
                        Delete
                      </a>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination
        page={page}
        lastPage={lastPage}
        pageChanged={(page) => setPage(page)}
      />
    </Wrapper>
  );
};

export default Products;
