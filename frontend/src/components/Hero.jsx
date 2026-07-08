import "./Hero.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Tap.
        <br />
        Verify.
        <br />
        Apply.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        AI-powered job verification for students and fresh graduates.
        Detect suspicious hiring practices, hidden registration fees,
        fake recruiters and risky job postings before you apply.
      </motion.p>

      <motion.div
        className="buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link to="/analyze">
          <button className="primary-btn">
            Analyze Job
          </button>
        </Link>

        <button className="secondary-btn">
          Learn More
        </button>
      </motion.div>

      <motion.div
        className="feature-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >

        <div className="feature-card">
          <h3>🛡 AI Scam Detector</h3>

          <p>
            Detect hidden fees, fake recruiters and suspicious hiring practices.
          </p>
        </div>

        <div className="feature-card">
          <h3>📊 Risk Analysis</h3>

          <p>
            Receive an AI-generated risk score with detailed explanations.
          </p>
        </div>

        <div className="feature-card">
          <h3>✅ Trust Signals</h3>

          <p>
            Evaluate company credibility before sharing your resume.
          </p>
        </div>

      </motion.div>

    </section>
  );
}

export default Hero;