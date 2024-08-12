import React from "react";
import FormSection from "./components/FormSection"; // Adjust the path if needed
import "./style.css";

function App() {
  return (
    <div>
      <form action="">
        <FormSection
          title="General Information"
          fields={["Name", "Email", "Phone"]}
        />
        <FormSection
          title="Education"
          fields={["School name", "Title", "Date"]}
        />
        <FormSection
          title="Experience"
          fields={["Company name", "Title", "Responsibility"]}
        />
        <button type="submit">Submit</button>
        <button>Edit</button>
      </form>
    </div>
  );
}

export default App;
