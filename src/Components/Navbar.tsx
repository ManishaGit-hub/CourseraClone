import React from 'react'

const Navbar = () => {

    const topNav = ["For Individuals","For Businesses","For Universities","For Governments"];

  const exploreMenuItems = [
    {
      category: "Goals",
      items: [
        {
          title: "Take a Free Course",
          description: "Learn from top universities for free",
        },
        {
          title: "Earn a Degree",
          description: "Get a degree from a top university",
        },
        {
          title: "Earn a Certificate",
          description: "Professional certificates from companies",
        },
        {
          title: "Advance Your Career",
          description: "Learn skills to boost your career",
        },
      ],
    },
    {
      category: "Subjects",
      items: [
        {
          title: "Data Science",
          description: "Learn data analysis and visualization",
        },
        {
          title: "Business",
          description: "Develop business management skills",
        },
        {
          title: "Computer Science",
          description: "Learn programming and software development",
        },
        {
          title: "Information Technology",
          description: "Master IT and cloud computing",
        },
      ],
    },
  ];

  const degreesMenuItems = [
    { title: "Bachelor's Degrees", count: "15+ Degrees" },
    { title: "Master's Degrees", count: "25+ Degrees" },
    { title: "Graduate Certificates", count: "10+ Certificates" },
    { title: "Professional Degrees", count: "5+ Degrees" },
  ];


  return (
    <div>Navbar</div>
  )
}

export default Navbar