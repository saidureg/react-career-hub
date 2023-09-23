import { useEffect, useState } from "react";
import CategoryJob from "../CategoryJob/CategoryJob";

const JobCategories = () => {
  const [jobCategories, setJobCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setJobCategories(data));
  }, []);
  return (
    <div className="text-center mt-24">
      <h3 className="text-4xl font-extrabold">Job Category List</h3>
      <p className="font-medium text-[#757575] my-6">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-4 gap-5">
        {jobCategories.map((category, idx) => (
          <CategoryJob key={idx} category={category}></CategoryJob>
        ))}
      </div>
    </div>
  );
};

export default JobCategories;
