import React from "react";

const FormSection = ({ title, fields }) => {
  const formFields = fields.map((element, index) => (
    <div key={index}>
      <label htmlFor={element}>{element}</label>
      <input type={element} name={element} id={element} placeholder={element} />
    </div>
  ));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        marginTop: "2rem",
        color: "black",
      }}
    >
      <h1>{title}</h1>
      {formFields}
    </div>
  );
};

export default FormSection;
