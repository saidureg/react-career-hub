const getStoredJobs = () => {
  const storedJobsApplication = localStorage.getItem("jobs-application");
  if (storedJobsApplication) {
    return JSON.parse(storedJobsApplication);
  } else {
    return [];
  }
};

const saveJobsApplications = (id) => {
  const storedJobsApplications = getStoredJobs();
  const exist = storedJobsApplications.find((jobId) => jobId === id);
  if (!exist) {
    storedJobsApplications.push(id);
    localStorage.setItem(
      "jobs-application",
      JSON.stringify(storedJobsApplications)
    );
  }
};

export { getStoredJobs, saveJobsApplications };
