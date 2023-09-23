import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  const job = jobs.find((job) => job.id === idInt);

  console.log(job);

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="col-span-3 border ">
          <h3 className="text-3xl">Details coming soon </h3>
          <h2>here show JobDetails: {job.id} </h2>
          <p> {job.job_description} </p>
        </div>
        <div className="col-span-1 border p-4">
          <h3 className="text-3xl">Job Details</h3>
          <h2>Salary: {job.salary} </h2>
          <h4>Job Title: {job.job_title} </h4>
          <div>
            <button className="btn btn-primary w-full mt-4">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
