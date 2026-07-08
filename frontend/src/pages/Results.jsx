import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

function Results() {

  const { state } = useLocation();

  if (!state) {
    return (
      <>
        <Navbar />

        <div
          style={{
            padding: "100px 8%",
          }}
        >
          <h2>No analysis found.</h2>
        </div>
      </>
    );
  }

  return (
  <div className="page">
    <Navbar />

    <div
      style={{
        padding: "70px 8%",
        minHeight: "100vh",
      }}
    >
      <h1>Job Analysis Report</h1>

      <div
        style={{
          marginTop: "40px",
          background: "#fff",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 10px 25px rgba(0,0,0,.08)",
        }}
      >
        <h2>{state.company}</h2>

        <br />

        <h3>Risk Score</h3>

        <h1>{state.risk_score} / 100</h1>

        <br />

        <h3>Recommendation</h3>

        <p>{state.recommendation}</p>

        <br />

        <h3>Detected Risks</h3>

        <ul>
          {state.reasons.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
}

export default Results;