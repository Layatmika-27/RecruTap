import Navbar from "../components/Navbar";
import "../styles/results.css";

import { useLocation } from "react-router-dom";

function Results() {

  const location = useLocation();

  const result = location.state;

  if (!result) {
    return (
      <>
        <Navbar />

        <div className="results-container">
          <h1>No analysis found.</h1>
          <p>Please analyze a job first.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="results-container">

        <h1>Job Analysis Report</h1>

        <div className="result-card">

          <h2>{result.company}</h2>

          <h3>Risk Score</h3>

          <h1>{result.risk_score} / 100</h1>

          <h3>Recommendation</h3>

          <p>{result.recommendation}</p>

          <h3>Detected Risks</h3>

          <ul>

            {result.reasons.map((reason, index) => (

              <li key={index}>{reason}</li>

            ))}

          </ul>

        </div>

      </div>

    </>
  );
}

export default Results;