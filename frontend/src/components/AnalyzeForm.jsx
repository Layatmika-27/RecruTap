import "./AnalyzeForm.css";
import api from "../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AnalyzeForm() {
  const [formData, setFormData] = useState({
    company: "",
    jobTitle: "",
    jobUrl: "",
    description: "",
  });

  const navigate = useNavigate();

  // Handles typing in the form
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  // Handles form submission
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post(
        "/analyze",
        formData
      );

console.log("Navigate is about to happen");

  navigate("/results", {
  state: response.data,
});

      console.log(response.data);

    } catch (error) {
      console.error(error);

      alert("Backend connection failed.");
    }
  }

  return (
  <div className="analyze-page">

    <h1>Analyze a Job Posting</h1>

    <p>
      Paste the job details below and let RecruTap evaluate the
      legitimacy of the opportunity.
    </p>

    <form className="analyze-form" onSubmit={handleSubmit}>

      <label>Company Name</label>
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="Google"
      />

      <label>Job Title</label>
      <input
        type="text"
        name="jobTitle"
        value={formData.jobTitle}
        onChange={handleChange}
        placeholder="Data Analyst Intern"
      />

      <label>Job URL</label>
      <input
        type="url"
        name="jobUrl"
        value={formData.jobUrl}
        onChange={handleChange}
        placeholder="https://..."
      />

      <label>Job Description</label>

      <textarea
        rows="8"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Paste the complete job description..."
      />

      <button
        className="primary-btn"
        type="submit"
      >
        Analyze Job
      </button>

    </form>

  </div>
);
}
export default AnalyzeForm;