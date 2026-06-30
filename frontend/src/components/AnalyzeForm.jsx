import { useState } from "react";

function AnalyzeForm() {
  const [formData, setFormData] = useState({
    company: "",
    jobTitle: "",
    jobUrl: "",
    description: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(formData);

    alert("Analysis request sent!");
  }

  return (
    <form className="analyze-form" onSubmit={handleSubmit}>

      <label>Company Name</label>

      <input
        type="text"
        name="company"
        placeholder="Google"
        value={formData.company}
        onChange={handleChange}
      />

      <label>Job Title</label>

      <input
        type="text"
        name="jobTitle"
        placeholder="Data Analyst Intern"
        value={formData.jobTitle}
        onChange={handleChange}
      />

      <label>Job URL</label>

      <input
        type="url"
        name="jobUrl"
        placeholder="https://..."
        value={formData.jobUrl}
        onChange={handleChange}
      />

      <label>Job Description</label>

      <textarea
        rows="8"
        name="description"
        placeholder="Paste the complete job description..."
        value={formData.description}
        onChange={handleChange}
      />

      <button type="submit">
        Analyze Job
      </button>

    </form>
  );
}

export default AnalyzeForm;