import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="text-center">
      <h3 className="text-5xl font-extrabold">Featured Jobs: {jobs.length} </h3>
      <p className="font-medium">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-2 gap-6 mt-12">
        {jobs.map((job, idx) => (
          <Job key={idx} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
