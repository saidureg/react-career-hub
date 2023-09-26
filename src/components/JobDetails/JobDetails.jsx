import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getStoredJobs,
  saveJobsApplications,
} from "../../Utilities/localStorage";
import { MdLocationOn, MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineDollar, AiOutlineCalendar } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { Helmet } from "react-helmet-async";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  const job = jobs.find((job) => job.id === idInt);

  const handleApplyBtn = () => {
    const storedData = getStoredJobs();
    saveJobsApplications(idInt);

    const isExist = storedData?.find((jobId) => jobId === job.id);
    if (!isExist) {
      toast("Successfully applied", { autoClose: 2000 });
    } else {
      toast("Already applied", { autoClose: 2000 });
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-24">
      <Helmet>
        <title>Job Details : {id} </title>
      </Helmet>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="col-span-3 text-[#1A1919] font-extrabold space-y-6">
          <p>
            Job Description:{" "}
            <span className="text-[#757575] font-medium">
              {job.job_description}
            </span>{" "}
          </p>
          <p>
            Job Responsibility:{" "}
            <span className="text-[#757575] font-medium">
              {job.job_responsibility}
            </span>{" "}
          </p>

          <div>
            <h4>Educational Requirements:</h4>
            <span className="text-[#757575] font-medium">
              {job.educational_requirements}
            </span>{" "}
          </div>
          <div>
            <h4>Experiences:</h4>
            <p className="text-[#757575] font-medium">{job.experiences}</p>
          </div>
        </div>
        <div className="col-span-1 rounded-lg">
          <div className="background text-xl text-[#474747] font-bold space-y-4 p-4">
            <h3 className=" border-b ">Job Details</h3>
            <h2 className="flex items-center gap-2">
              <AiOutlineDollar></AiOutlineDollar>
              Salary:
              <span className="text-[#757575] font-medium">
                {job.salary}
              </span>{" "}
            </h2>
            <h4 className="flex items-center gap-2">
              <AiOutlineCalendar></AiOutlineCalendar>
              Job Title:
              <span className="text-[#757575] font-medium">
                {job.job_title}
              </span>{" "}
            </h4>
            <h3 className=" border-b ">Contact Information</h3>
            <h2 className="flex items-center gap-2">
              <BsTelephone></BsTelephone> Phone:
              <span className="text-[#757575] font-medium">
                {job.contact_information.phone}
              </span>
            </h2>
            <h4 className="flex items-center gap-2">
              <MdOutlineMailOutline></MdOutlineMailOutline>
              Email:
              <span className="text-[#757575] font-medium">
                {job.contact_information.email}
              </span>
            </h4>
            <h4>
              <span className="flex items-center gap-2">
                <MdLocationOn></MdLocationOn>
                Address:
              </span>
              <span className="text-[#757575] font-medium">
                {job.contact_information.address}
              </span>
            </h4>
          </div>
          <div>
            <button onClick={handleApplyBtn} className="btn linear w-full mt-4">
              Apply Now
            </button>
          </div>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
