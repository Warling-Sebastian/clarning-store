import React from "react";

function SearchImput(props) {
  const imput = {
    type: props.type,
    className: props.className,
    placeholder: props.placeholder,
    name: props.name,
  };
  return (
    <>
      <input
        className={imput.className}
        type={imput.type}
        name={imput.name}
        placeholder={imput.placeholder}
      />
    </>
  );
}

export default SearchImput;
