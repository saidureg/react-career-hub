import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategories from "../JobCategory/JobCategories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto">
        <JobCategories></JobCategories>
        <FeaturedJobs></FeaturedJobs>
      </div>
    </div>
  );
};

export default Home;
