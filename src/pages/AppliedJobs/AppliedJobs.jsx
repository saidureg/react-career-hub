import { useLoaderData } from "react-router-dom";
import { getStoredJobs } from "../../Utilities/localStorage";
import { useEffect } from "react";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  useEffect(() => {
    const storedJobsIds = getStoredJobs();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobsIds.includes(job.id));
      console.log(jobs, storedJobsIds, jobsApplied);
    }
  }, []);

  return (
    <div>
      <h3>this is applied jobs</h3>
    </div>
  );
};

export default AppliedJobs;
