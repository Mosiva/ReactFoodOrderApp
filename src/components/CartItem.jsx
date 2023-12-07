import React from "react";
import { currencyFormatter } from "../util/formatting";

export default function CartItem({
  name,
  quatity,
  price,
  onIncrease,
  onDecrease,
}) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quatity} X {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{quatity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}
