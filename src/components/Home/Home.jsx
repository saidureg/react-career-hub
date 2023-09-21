import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategories from "../JobCategory/JobCategories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JobCategories></JobCategories>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
