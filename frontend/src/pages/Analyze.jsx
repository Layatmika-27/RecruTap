import Navbar from "../components/Navbar";
import AnalyzeForm from "../components/AnalyzeForm";

function Analyze() {
  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "900px",
          margin: "50px auto",
          padding: "20px",
        }}
      >
        <h1>Analyze Job Posting</h1>

        <p>
          Paste the job details below and let RecruTap evaluate the opportunity.
        </p>

        <AnalyzeForm />
      </div>
    </>
  );
}

export default Analyze;