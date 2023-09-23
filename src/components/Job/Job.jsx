import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;

  return (
    <div className="card card-compact bg-base-100 shadow-xl p-10">
      <div>
        <img src={logo} alt={job_title} />
      </div>

      <div className="card-body space-y-3 text-left">
        <h2 className="card-title text-[#474747] font-extrabold text-2xl">
          {job_title}{" "}
        </h2>
        <p className="text-[#757575] text-xl font-semibold">{company_name}</p>
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
        <div className="card-actions ">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
