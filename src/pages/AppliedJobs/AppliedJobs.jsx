import { useLoaderData } from "react-router-dom";
import { getStoredJobs } from "../../Utilities/localStorage";
import { useEffect, useState } from "react";
import AppliedJob from "../../components/AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  const jobs = useLoaderData();

  useEffect(() => {
    const storedJobsIds = getStoredJobs();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobsIds.includes(job.id));
      setAppliedJobs(jobsApplied);
      console.log(jobsApplied);
    }
  }, [jobs]);

  return (
    <div>
      <h3>this is applied jobs:{appliedJobs.length} </h3>
      <div className="text-right">
        <details className="dropdown mb-5">
          <summary className="m-1 btn">Filter By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>All</a>
            </li>
            <li>
              <a>Remote</a>
            </li>
            <li>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        {appliedJobs.map((jobApplied, idx) => (
          <AppliedJob key={idx} jobApplied={jobApplied}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
