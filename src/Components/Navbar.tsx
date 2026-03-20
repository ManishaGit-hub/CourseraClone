import React ,{useState} from 'react'
import { Globe } from 'lucide-react';
const Navbar = () => {

    const [user,setUser] = useState<{name:string;
        email:string;
        image:string;
    }|null>(null);

    const [isLoggedin,setisLoggedin]=useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [isExploreMenuOpen, setIsExploreMenuOpen] = useState(false);
    const [isDegreeMenuOpen, setIsDegreeMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

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


  return (<>
    <div className="bg-[#1F2937] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center space-x-4">
            <Globe className="h-4 w-4 text-gray-400"/>
            <span className="text-sm text-gray-300">English</span>
          </div>
          <div className="flex space-x-6">
            {topNav.map((item,index)=>(
              <a key={index} href="#" className="text-sm hover:text-gray-300 transition-colors duration-200">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default Navbar
