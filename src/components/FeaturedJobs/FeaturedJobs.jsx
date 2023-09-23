import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  // this is not the best way to data load show all data
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="text-center mt-24">
      <h3 className="text-5xl font-extrabold">Featured Jobs </h3>
      <p className="font-medium my-6 text-[#757575]">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-2 gap-6 mt-12">
        {jobs.slice(0, dataLength).map((job, idx) => (
          <Job key={idx} job={job}></Job>
        ))}
      </div>
      <div className={dataLength === jobs.length ? "hidden" : ""}>
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn btn-primary text-center my-6 "
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
