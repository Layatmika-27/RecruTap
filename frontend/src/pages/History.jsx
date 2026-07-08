import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

function History() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {

    async function fetchJobs(){

      try{

        const response = await api.get("/jobs");

        setJobs(response.data);

      }
      catch(error){

        console.error("Failed to fetch jobs", error);

      }

    }

    fetchJobs();

  }, []);


  return (

    <div className="page">

      <Navbar />

      <h1>Analysis History</h1>

      <p>
        Previously analyzed job opportunities.
      </p>


      <div className="history-grid">

        {
          jobs.map((job)=>(
            
            <div className="history-card" key={job.id}>

              <h2>
                {job.company}
              </h2>

              <h3>
                {job.job_title}
              </h3>

              <p>
                Risk Score:
                <strong>
                  {" "}{job.risk_score}/100
                </strong>
              </p>

              <p>
                {job.recommendation}
              </p>

            </div>

          ))
        }

      </div>


    </div>

  );
}

export default History;