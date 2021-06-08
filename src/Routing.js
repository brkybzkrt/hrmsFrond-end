
import Employer from "./pages/users/Employer";
import Candidate from "./pages/users/Candidate";
import JobAdvertisements from "./pages/JobAdvertisements"
import Home from "./pages/Home"

export const routes = [

  { path: "/",
  exact: true,
  component: <Home/>,
  title: "Home",
  isHeaderElement: true,}
  ,
    {
      path: "/employer",
      exact: true,
      component: <Employer />,
      title: "Employer",
      isHeaderElement: true,
    },
    {
      path: "/candidate",
      exact: true,
      component: <Candidate/>,
      title: "Candidate",
      isHeaderElement: true,
    },
    {
        path: "/jobAdvertisements",
        exact: true,
        component: <JobAdvertisements/>,
        title: "JobAdvertisements",
        isHeaderElement: true,
      }
   
    
  ];