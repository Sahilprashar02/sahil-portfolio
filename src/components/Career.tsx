import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* GIS Vision India */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>GIS Trainee</h4>
                <h5>GIS Vision India</h5>
              </div>
              <h3>Aug – Nov 2024</h3>
            </div>
            <p>
              Supported large-scale road monitoring projects by processing and validating drone imagery datasets covering <strong>15,000+ km</strong>. Assisted in spatial data processing, asset digitization, and geodatabase management.
            </p>
          </div>

          {/* DronaMaps Pvt Ltd */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Developer</h4>
                <h5>DronaMaps Pvt Ltd</h5>
              </div>
              <h3>Dec 2024 – Now</h3>
            </div>
            <ul className="career-bullets">
              <li>Building and enhancing a highway inspection and analytics platform for the <strong>National Highways Authority of India (NHAI)</strong>, enabling large-scale monitoring and improving data-driven decision-making.</li>
              <li>Designed and built a <strong>Reconstruction Module</strong> (Highway Generation Using Drone Images) to reconstruct highway UI from drone imagery, improving visualization of large-scale road data.</li>
              <li>Led a team to develop end-to-end data workflows for processing drone imagery, generating orthomosaics, DSMs, and DTMs across <strong>18,000+ km</strong> of highways.</li>
              <li>Designed and built a full-stack <strong>media management feature</strong> enabling content sharing with role-based access control (RBAC), supporting <strong>1k+ active users</strong>.</li>
              <li>Built an image de-duplication system reducing manual curation by <strong>70%</strong>.</li>
              <li>Developed <strong>GIS automation tools</strong> using Python and JavaScript, automating workflows in QGIS and ArcGIS Pro, reducing manual effort by <strong>60%</strong>.</li>
              <li>Developed an <strong>AI-powered analytics module</strong> by integrating the output of the ML model into the platform, enabling automated insights and improving highway maintenance decision-making.</li>
              <li>Contributed to the <strong>Drone Analytics Monitoring System (DAMS)</strong>, building real-time dashboards, and integrating geospatial services.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
