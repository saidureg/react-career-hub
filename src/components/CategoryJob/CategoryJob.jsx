import PropTypes from "prop-types";

const CategoryJob = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div className="background border rounded-lg p-6">
      <img className="w-[40px] mb-8" src={logo} alt={category_name} />
      <div className="text-left">
        <h3 className="mb-3 text-xl font-extrabold text-[#474747]">
          {category_name}{" "}
        </h3>
        <p className="text-[#A3A3A3] font-medium">{availability} </p>
      </div>
    </div>
  );
};

CategoryJob.propTypes = {
  category: PropTypes.object,
};

export default CategoryJob;
