import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product.jsx";
import Pagination from "../components/Pagination.jsx";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    axios.get(`/products.json`).then((response) => setProducts(response.data));
  }, []);

  useEffect(() => {
    if (products.length)
      setPageCount(Math.ceil(products.length / productsPerPage));
  }, [products.length]);

  return (
    <section className={`py-16`}>
      <div className="container">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {products
                .slice(
                  (currentPage - 1) * productsPerPage,
                  currentPage * productsPerPage,
                )
                .map((product, idx) => (
                  <Product
                    key={product._id}
                    idx={(currentPage - 1) * productsPerPage + idx}
                    product={product}
                  />
                ))}
            </tbody>
          </table>
        </div>
        <Pagination setCurrentPage={setCurrentPage} pageCount={pageCount} />
      </div>
    </section>
  );
};

export default Products;
