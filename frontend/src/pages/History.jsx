import Navbar from "../components/Navbar";

function History() {
  return (
    <div className="page">
      <Navbar />

      <div
        style={{
          padding: "100px 8%",
        }}
      >
        <h1>History</h1>

        <p>Your previously analyzed jobs will appear here.</p>
      </div>
    </div>
  );
}

export default History;