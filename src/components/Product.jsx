import React from "react";

const Product = ({ idx, product }) => {
  const { name, seller, price, stock, img } = product;

  return (
    <tr>
      <th>{++idx}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <figure className="mask mask-squircle w-12 h-12">
              <img src={img} alt={name} />
            </figure>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{seller}</div>
          </div>
        </div>
      </td>
      <td>
        <span>$</span>
        <span>{price}</span>
      </td>
      <td>{stock}</td>
    </tr>
  );
};

export default Product;
