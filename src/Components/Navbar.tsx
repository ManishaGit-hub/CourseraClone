import React ,{useState} from 'react' //useState lets the component remember things between renders (like whether a menu is open or a user is logged in). without it clicking a button would do nothing visually
import { BookOpen, ChevronDown, Divide, Globe, Search } from 'lucide-react'; //importing SVG icons from lucide library. Instead of writing svg code lucide react gives you clean , consistent and customizable icons asa react components(font library)
import Link from 'next/link'; //(Next.js's built in navigation component. it doesnt reload full page , prefetches pages in the background for faster transitions). a tag full reload. <Link> instant SPA navigation

const Navbar = () => {

    const [user,setUser] = useState<{name:string;
        email:string;
        image:string;
    }|null>(null); //stores the logged in user's data or null if not logged in.the typescript generic tells the state exactly what shape the data should be. |null -> it safely handles the null case without crashing.

    const [isLoggedin,setisLoggedin]=useState(false); //for tracking logging state

    //four boolean flags for UI interaction states (why? Each UI element needs independent control,if you used one state for all dropdowns , opening one would open all of them)
    const [isSearchFocused, setIsSearchFocused] = useState(false); 
    const [isExploreMenuOpen, setIsExploreMenuOpen] = useState(false);
    const [isDegreeMenuOpen, setIsDegreeMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    //static data array. (why array,not hardcoded JSX? Using .map() over an array means if you need to add/remove items, you chamge one place.This is DRY principle ). Hardcoded JSX means-- you write each link manually like within div tag multiple anchor tags.(Hardcoded simply means you manually typed the value directly into the code rather than storing it in a variable or data structure that the code reads from. Any time you find yourself copy - pasting the same JSX block and only changing the text inside, thats the signal to reach for an array+.map())
    const topNav = ["For Individuals","For Businesses","For Universities","For Governments"];

    //A nested array of objects for the Explore dropdown. Why nested? the dropdown has two columns - goals and subjects. Each has a header and multiple items. The data srtucture mirrors the UI structure perfectly.
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

  //Simpler array of objects for the degree dropdown since it only needs title + count
  const degreesMenuItems = [
    { title: "Bachelor's Degrees", count: "15+ Degrees" },
    { title: "Master's Degrees", count: "25+ Degrees" },
    { title: "Graduate Certificates", count: "10+ Certificates" },
    { title: "Professional Degrees", count: "5+ Degrees" },
  ];

  //Simulates a Google sign-in (mock/demo — no real OAuth here).
//Why hardcoded data? This is a UI prototype/learning project. In production, you'd call a real auth provider (NextAuth, Firebase, Supabase) and the user data would come from the API response.
//Two state updates fire → React re-renders → the "Sign in" buttons disappear and the profile avatar appears.  
const handleGoogleSignIn = ()=>{
    setisLoggedin(true);
    setUser({
      name:"Manisha",
      email:"manisha@gmail.com",
      image:"https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
    });
  }

  //Resets auth state. Prevents stale(old) user data from accidentally showing up if sign-in is called again differently. Always clean up completely on logout.
  const handleLogout =()=>{
    setisLoggedin(false);
    setUser(null);
  }

  return (<>
  
    <div className="bg-[#1F2937] text-white"> {/*Top bar (Dark strip)--> Tailwind gives you hundreds of ready-made values. But when none of them match what you need, you put your own value inside [] and Tailwind uses it directly — no setup required. its known as arbitrary values meaning something you choose yourself not a fixed rule.
    syntax:
    The pattern is always:
    tailwind-property-name + [your custom value]*/}
      <div className="max-w-7xl mx-auto px-4">{/* content container - limits content width on large screens so it doesn't stretch edge to edge. mx-auto - margin x axis(centers the container horizontally). padding x axis - prevents content from touching the screen edges on mobile. memory trick: mx-auto horizontal centering always pair with a max-w-* or the cenetring wont work */}
        <div className="flex justify-between items-center py-2"> {/* Activates flexbox on this div. Children becomes flex items arranged in a row...justify-between - x axis items-center - y axis py-2 - gives top bar its height*/}
          <div className="flex items-center space-x-4">
            <Globe className="h-4 w-4 text-gray-400"/> {/*height: 1rem; width: 1rem. Sets icon size. Lucide icons accept className directly(because some icon library cannot be styled with classname they might require their own props ) */}
            <span className="text-sm text-gray-300">English</span>
          </div>
          <div className="flex space-x-6"> {/*space-x-6 — This is a special Tailwind utility. It automatically adds margin-left: 1.5rem to every child except the first one. */}
            {topNav.map((item,index)=>(
              <a key={index} href="#" className="text-sm hover:text-gray-300 transition-colors duration-200">{item}</a> 
            ))} {/*The # means "link to nowhere" — it's a placeholder. Clicking it won't navigate anywhere, just scrolls to the top of the page. */}
          </div>
        </div>
      </div>
    </div>
    <div className="border-b sticky top-0 bg-white z-50"> {/*Main navbar : border-b — Adds a 1px solid border only on the bottom. Creates the visual separation between nav and page content. Responsible for: border, sticky, background, z-index */}
      <div className="max-w-7xl mx-auto px-4"> {/*// Responsible for: max-width, centering, side padding */}
        <div className="flex justify-between items-center h-16"> {/*wrapping course,explore and search bar in one div . Job: Push left group and right group to opposite ends // Responsible for: flex row, height, space-between*/}
          <div className="flex items-center space-x-6"> {/*Job: Group LEFT items together // Responsible for: keeping Logo + Explore + Search in one group */}
            <div className="flex items-center text-[#0056D2] cursor-pointer">
              <BookOpen className="h-8 w-8"/>
              <span className="ml-2 font-bold text-xl tracking-tight">Course</span>
            </div>
            <div className="relative">
              <button onClick={()=>{setIsExploreMenuOpen(!isExploreMenuOpen);setIsDegreeMenuOpen(false)}} className="text-[#0056D2] font-semibold flex items-center hover:opacity-80 transition-opacity">Explore <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${
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

              <div className='relative'>
                <input type="text" placeholder="What do you want to learn?" className={`w-[400px] pl-12 pr-4 py-2 border rounded-sm transition-all duration-200 ${isSearchFocused?"border-[#0056D2] shadow-sm"
                      : "border-gray-300"}`} onFocus={() => setIsSearchFocused(true)} onBlur={() => setIsSearchFocused(false)} />
                <Search className={`absolute left-3 top-2.5 h-5 w-5 transition-colors duration-200 ${
                    isSearchFocused? "text-[#0056D2]" : "text-gray-400"}`}/>
              </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="relative">
              <button
                  className="text-[#0056D2] font-semibold hover:opacity-80 transition-opacity flex items-center"
                  onClick={() => {
                    setIsDegreeMenuOpen(!isDegreeMenuOpen);
                    setIsExploreMenuOpen(false);
                  }}
                >
                  Online Degree
                  <ChevronDown
                    className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                      isDegreeMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              {isDegreeMenuOpen && (
                  <div className="absolute top-full right-0 w-[300px] bg-white shadow-lg rounded-md mt-2 p-4">
                    {degreesMenuItems.map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-md group"
                      >
                        <span className="text-gray-900 group-hover:text-[#0056D2]">
                          {item.title}
                        </span>
                        <span className="text-sm text-gray-500">
                          {item.count}
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            {isLoggedin ? (
                <div className="relative">
                  <button
                    className="flex items-center space-x-2"
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  >
                    <img
                      src={user?.image}
                      alt={user?.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isUserMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isUserMenuOpen && (
                    <div className="absolute top-full right-0 w-[250px] bg-white shadow-lg rounded-md mt-2 py-2">
                      <Link href={`/profile`} className="block">
                        <div className="px-4 py-3 border-b cursor-pointer hover:bg-gray-100 transition">
                          <div className="font-medium text-gray-900">
                            {user?.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {user?.email}
                          </div>
                        </div>
                      </Link>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                      >
                        My Courses
                      </a>
                      <a
                        href="/certificate"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                      >
                        My Certificates
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                      >
                        Settings
                      </a>
                      <button
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
                        onClick={handleLogout}
                      >
                        Sign Out
                      </button>
                    </div>

                  )}
                </div>
                ) : (
                <>
                  <button
                    onClick={handleGoogleSignIn}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-sm text-gray-700 font-semibold hover:bg-gray-50 transition-colors flex items-center space-x-2"
                  >
                    <img
                      src="https://www.google.com/favicon.ico"
                      alt="google"
                      className="w-4 h-4"
                    />
                    <span>Sign in with Google</span>
                  </button>
                  <button className="px-4 py-2 bg-[#0056D2] text-white font-semibold rounded-sm hover:bg-blue-700 transition-colors">
                    Join for Free
                  </button>
                </>
              )}
          </div>




        </div>
      </div>
    </div>
  </>)
}

export default Navbar
