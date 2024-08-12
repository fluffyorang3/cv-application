import React from "react";

const FormSection = ({ title, fields }) => {
  const formFields = fields.map((element, index) => (
    <div key={index}>
      <label htmlFor={element}>{element}</label>
      <input type={element} name={element} id={element} placeholder={element} />
    </div>
  ));

  return (
    <>
      <h1>{title}</h1>
      {formFields}
    </>
  );
};

export default FormSection;
