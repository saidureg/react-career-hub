import { useLoaderData } from "react-router-dom";
import { getStoredJobs } from "../../Utilities/localStorage";
import { useEffect, useState } from "react";
import AppliedJob from "../../components/AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const jobs = useLoaderData();

  useEffect(() => {
    const storedJobsIds = getStoredJobs();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobsIds.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const filterJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(filterJobs);
    } else if (filter === "onsite") {
      const filterJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(filterJobs);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-14">
      <div className="text-right">
        <details className="dropdown">
          <summary className="m-1 btn">Filter By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleJobsFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleJobsFilter("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleJobsFilter("onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        {displayJobs.map((jobApplied, idx) => (
          <AppliedJob key={idx} jobApplied={jobApplied}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
