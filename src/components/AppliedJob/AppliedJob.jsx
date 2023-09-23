import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import PropTypes from "prop-types";

const AppliedJob = ({ jobApplied }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = jobApplied;
  return (
    <div className="card card-side bg-base-100 my-6 pr-10 border border-[#E8E8E8]">
      <figure className="border rounded-lg w-[240px] p-10 bg-[#F4F4F4] m-4">
        <img src={logo} alt={job_title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="btn border border-[#7E90FE] text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-extrabold mr-4">
            {remote_or_onsite}{" "}
          </button>
          <button className="btn border border-[#7E90FE] text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-extrabold">
            {job_type}{" "}
          </button>
        </div>
        <div className="flex gap-6 text-[#757575] font-semibold text-xl">
          <h4 className="flex items-center gap-2">
            <MdLocationOn></MdLocationOn> {location}
          </h4>
          <h4 className="flex items-center gap-2">
            <AiOutlineDollar></AiOutlineDollar> {salary}{" "}
          </h4>
        </div>
      </div>
      <div className="card-actions items-center">
        <button className="btn linear">view Details</button>
      </div>
    </div>
  );
};

AppliedJob.propTypes = {
  jobApplied: PropTypes.object,
};

export default AppliedJob;
