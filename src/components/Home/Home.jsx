import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategories from "../JobCategory/JobCategories";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Career Hub | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto">
        <JobCategories></JobCategories>
        <FeaturedJobs></FeaturedJobs>
      </div>
    </div>
  );
};

export default Home;
