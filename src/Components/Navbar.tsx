import React ,{useState} from 'react'
import { BookOpen, ChevronDown, Divide, Globe } from 'lucide-react';
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
    <div className="border-b sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-6">
            <div className="flex items-center text-[#0056D2] cursor-pointer">
              <BookOpen className="h-8 w-8"/>
              <span className="ml-2 font-bold text-xl tracking-tight">Course</span>
            </div>
            <div className="relative">
              <button onClick={()=>{setIsExploreMenuOpen(!isExploreMenuOpen);setIsDegreeMenuOpen(false);}} className="text-[#0056D2] font-semibold flex items-center hover:opacity-80 transition-opacity">Explore <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                      isExploreMenuOpen ? "rotate-180" : ""
                    }`}/> </button>
                {isExploreMenuOpen && (
                  <div className="absolute top-full left-0 w-[600px] bg-white shadow-lg rounded-md mt-2 p-6 grid grid-cols-2 gap-8">
                    {exploreMenuItems.map((section, index) => (
                      <div key={index}>
                        <h3 className="font-semibold text-gray-900 mb-4">
                          {section.category}
                        </h3>
                        <div className="space-y-4">
                          {section.items.map((item, itemIndex) => (
                            <a key={itemIndex} href="#" className="block group">
                              <div className="text-gray-900 font-medium group-hover:text-[#0056D2]">
                                {item.title}
                              </div>
                              <div className="text-sm text-gray-500">
                                {item.description}
                              </div>
                            </a>
                          ))}
                          </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default Navbar
