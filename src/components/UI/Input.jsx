import React from "react";

export default function Input({ label, id, ...props }) {
  return (
    <p className="control">
      <label html={id}>{label} </label>
      <input id={id} name={id} required {...props} />
    </p>
  );
}
