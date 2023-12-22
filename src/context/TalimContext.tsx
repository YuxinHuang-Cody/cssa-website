'use client'

import { blogList, courseList, eventList, teacherList } from "@/data/Data";
import { ReactNode, createContext, useContext, useEffect, useState } from "react"

interface TalimContextData {
    isDarkTheme: boolean;
    toggleTheme: () => void;
    handleBlogPageChange: (newPage:number) => void;
    currentBlogPage: number;
    totalBlogPages: number;
    displayedBlogs: BlogItem[];
    isHeaderFixed: boolean;
    displayedBlogs2: BlogItem[];
    totalBlogPages2: number;
    displayedBlogs3: BlogItem[];
    totalBlogPages3: number;
    displayedBlogs4: BlogItem[];
    totalBlogPages4: number;
    handleTeamPageChange: (newPage:number) => void;
    currentTeamPage: number;
    totalTeamPages: number;
    displayedTeams: TeamItem[];
    totalTeamPages2: number;
    displayedTeams2: TeamItem[];
    totalTeamPages3: number;
    displayedTeams3: TeamItem[];
    displayedEvents: EventItem[];
    handleEventPageChange: (newPage:number) => void;
    currentEventPage: number;
    totalEventPages: number;
    displayedEvents2: EventItem[];
    totalEventPages2: number;
    displayedEvents3: EventItem[];
    totalEventPages3: number;
    displayedCourses: CourseItem[];
    handleCoursePageChange: (newPage:number) => void;
    currentCoursePage: number;
    totalCoursePages: number;
    displayedCourses2: CourseItem[];
    totalCoursePages2: number;
    displayedCourses3: CourseItem[];
    totalCoursePages3: number;
    displayedCourses4: CourseItem[];
    totalCoursePages4: number;
    closeVideoModal: () => void;
    openVideoModal: (url: string) => void;
    isVideoModalOpen: boolean;
    videoUrl: string;
    isSidebarOpen: boolean;
    handleSidebarOpen: () => void;
    handleSidebarClose: () => void;
}

type BlogItem = {
    id: number;
    imgSrc: string;
    date: string;
    title: string;
    author: string;
    category: string;
    desc: string;
    slug: string;
    comments?: number;
}

type TeamItem = {
    id: number;
    imgSrc: string;
    name: string;
    slug: string;
    position: string;
}

type EventItem = {
    id: number;
    youtubeUrl: string;
    dayDate: string;
    monthYear: string;
    location: string;
    startTime: string;
    endTime: string;
    participants: string;
    skillLevel: string;
    title: string;
    slug: string;
    imgSrc?: string;
}

type CourseItem = {
    id: number;
    youtubeUrl: string;
    imgSrc: string;
    price: string;
    author: string;
    title: string;
    slug: string;
    lessons: number;
    students: number;
    desc: string;
    age: string;
    time: string;
    seat: number;
    programTitle?: string;
    duration?: number;
}

const TalimContext = createContext<TalimContextData | undefined>(undefined);

interface TalimProviderProps {
    children: ReactNode;
}

export const TalimProvider: React.FC<TalimProviderProps> = ({ children }) => {
    // Theme Selection
    const [isDarkTheme, setIsDarkTheme] = useState(false);

   // Function to toggle theme
   const toggleTheme = () => {
    // Toggle the theme status
    setIsDarkTheme(!isDarkTheme);
  };

  // Add or remove the 'dark_mode' class from the body based on the theme status
  useEffect(() => {

    if (isDarkTheme) {
      document.body.classList.add('dark_mode');
  
    } else {
      document.body.classList.remove('dark_mode');
    }
  }, [isDarkTheme]);
    
    // Blog Section 1
    const [currentBlogPage, setCurrentBlogPage] = useState(1);
    const blogsPerPage = 6; // Number of blogs to display per page
    const startIndex = (currentBlogPage - 1) * blogsPerPage;
    const endIndex = currentBlogPage * blogsPerPage;
    const blogList1 = blogList.slice(0,16)
    const displayedBlogs = blogList1.slice(startIndex, endIndex);
    const totalBlogs = blogList1.length;
    const totalBlogPages = Math.ceil(totalBlogs / blogsPerPage);

    const handleBlogPageChange = (newPage: number) => {
        setCurrentBlogPage(newPage);
        setTimeout(() => {
            window.scrollTo(0, 200);
        }, 500);
    };
    // Blog Section 2
    const blogList2 = blogList.slice(16,33)
    const displayedBlogs2 = blogList2.slice(startIndex, endIndex);
    const totalBlogs2 = blogList2.length;
    const totalBlogPages2 = Math.ceil(totalBlogs2 / blogsPerPage);

    // Blog Section 3
    const blogList3 = blogList.slice(33,48)
    const displayedBlogs3 = blogList3.slice(startIndex, endIndex);
    const totalBlogs3 = blogList3.length;
    const totalBlogPages3 = Math.ceil(totalBlogs3 / blogsPerPage);

    // Blog Section 4
    const blogList4 = blogList.slice(-14)
    const displayedBlogs4 = blogList4.slice(startIndex, endIndex);
    const totalBlogs4 = blogList4.length;
    const totalBlogPages4 = Math.ceil(totalBlogs4 / blogsPerPage);

    // Sticky Header Section on Scroll
    const [isHeaderFixed, setIsHeaderFixed] = useState<boolean>(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
              setIsHeaderFixed(true);
            } else {
              setIsHeaderFixed(false);
            }
          };
          window.addEventListener("scroll", handleScroll);
    },[])
    // Team Type 1
    const [currentTeamPage, setCurrentTeamPage] = useState(1);
    const teamMemberPerPage = 6; // Number of Teams to display per page
    const teamStartIndex = (currentTeamPage - 1) * teamMemberPerPage;
    const teamEndIndex = currentTeamPage * teamMemberPerPage;
    const teacherList1 = teacherList.slice(0,17)
    const displayedTeams =teacherList1.slice(teamStartIndex, teamEndIndex);
    const totalTeams =teacherList1.length;
    const totalTeamPages = Math.ceil(totalTeams / teamMemberPerPage);

    const handleTeamPageChange = (newPage: number) => {
        setCurrentTeamPage(newPage);
        setTimeout(() => {
            window.scrollTo(0, 200);
        }, 500);
    };

    // Team Type 2
    const teacherList2 = teacherList.slice(17,32)
    const displayedTeams2 =teacherList2.slice(teamStartIndex, teamEndIndex);
    const totalTeams2 =teacherList2.length;
    const totalTeamPages2 = Math.ceil(totalTeams2 / teamMemberPerPage);

    // Team Type 3
    const teacherList3 = teacherList.slice(-14)
    const displayedTeams3 =teacherList3.slice(teamStartIndex, teamEndIndex);
    const totalTeams3 =teacherList3.length;
    const totalTeamPages3 = Math.ceil(totalTeams3 / teamMemberPerPage);

    // Event Type 1
    const [currentEventPage, setCurrentEventPage] = useState(1);
    const eventPerPage = 8; // Number of Events to display per page
    const eventStartIndex = (currentEventPage - 1) * eventPerPage;
    const eventEndIndex = currentEventPage * eventPerPage;
    const eventList1 = eventList.slice(0,15)
    const displayedEvents =eventList1.slice(eventStartIndex, eventEndIndex);
    const totalEvents =eventList1.length;
    const totalEventPages = Math.ceil(totalEvents / eventPerPage);

    const handleEventPageChange = (newPage: number) => {
        setCurrentEventPage(newPage);
        setTimeout(() => {
            window.scrollTo(0, 200);
        }, 500);
    };

    // Event type 2
    const eventPerPage2 = 6; // Number of Events to display per page
    const eventStartIndex2 = (currentEventPage - 1) * eventPerPage2;
    const eventEndIndex2 = currentEventPage * eventPerPage2;
    const eventList2 = eventList.slice(-13)
    const displayedEvents2 =eventList2.slice(eventStartIndex2, eventEndIndex2);
    const totalEvents2 =eventList2.length;
    const totalEventPages2 = Math.ceil(totalEvents2 / eventPerPage2);

    // Event type 3
    const displayedEvents3 =eventList1.slice(eventStartIndex2, eventEndIndex2);
    const totalEventPages3 = Math.ceil(totalEvents / eventPerPage2);

    // Course Type 1
    const [currentCoursePage, setCurrentCoursePage] = useState(1);
    const coursePerPage = 9; // Number of Events to display per page
    const courseStartIndex = (currentCoursePage - 1) * coursePerPage;
    const courseEndIndex = currentCoursePage * coursePerPage;
    const courseList1 = courseList.slice(0,15)
    const displayedCourses =courseList1.slice(courseStartIndex, courseEndIndex);
    const totalCourses =courseList1.length;
    const totalCoursePages = Math.ceil(totalCourses / coursePerPage);

    const handleCoursePageChange = (newPage: number) => {
        setCurrentCoursePage(newPage);
        setTimeout(() => {
            window.scrollTo(0, 200);
        }, 500);
    };

    // Course Type 2
    const courseList2 = courseList.slice(15,31)
    const displayedCourses2 =courseList2.slice(courseStartIndex, courseEndIndex);
    const totalCourses2 =courseList2.length;
    const totalCoursePages2 = Math.ceil(totalCourses2 / coursePerPage);

    // Course Type 3
    const coursePerPage2 = 3; // Number of Events to display per page
    const courseStartIndex2 = (currentCoursePage - 1) * coursePerPage2;
    const courseEndIndex2 = currentCoursePage * coursePerPage2;
    const courseList3 = courseList.slice(31,39)
    const displayedCourses3 =courseList3.slice(courseStartIndex2, courseEndIndex2);
    const totalCourses3 =courseList3.length;
    const totalCoursePages3 = Math.ceil(totalCourses3 / coursePerPage2);

     // Course Type 4
     const courseList4 = courseList.slice(-16)
     const displayedCourses4 =courseList4.slice(courseStartIndex, courseEndIndex);
     const totalCourses4 =courseList4.length;
     const totalCoursePages4 = Math.ceil(totalCourses4 / coursePerPage);

    // Video modal 
   const [isVideoModalOpen,setIsVideoModalOpen] = useState<boolean>(false)
   const [videoUrl,setVideoUrl] = useState<string>('')
   const closeVideoModal = () => {
    setIsVideoModalOpen(false)
   };
   const openVideoModal = (url: string) => {
    setIsVideoModalOpen(true);
    setVideoUrl(url);
  }
  
//   Mobile Sidebar
const [isSidebarOpen,setIsSidebarOpen] = useState(false);

const handleSidebarOpen = () => {
    setIsSidebarOpen(true);
}

const handleSidebarClose = () => {
    setIsSidebarOpen(false);
}

    const contextValue: TalimContextData = {
        handleBlogPageChange,
        currentBlogPage,
        totalBlogPages,
        displayedBlogs,
        isHeaderFixed,
        displayedBlogs2,
        totalBlogPages2,
        displayedBlogs3,
        totalBlogPages3,
        displayedBlogs4,
        totalBlogPages4,
        handleTeamPageChange,
        currentTeamPage,
        totalTeamPages,
        displayedTeams,
        totalTeamPages2,
        displayedTeams2,
        totalTeamPages3,
        displayedTeams3,
        displayedEvents,
        handleEventPageChange,
        currentEventPage,
        totalEventPages,
        displayedEvents2,
        totalEventPages2,
        displayedEvents3,
        totalEventPages3,
        displayedCourses,
        handleCoursePageChange,
        currentCoursePage,
        totalCoursePages,
        displayedCourses2,
        totalCoursePages2,
        displayedCourses3,
        totalCoursePages3,
        displayedCourses4,
        totalCoursePages4,
        isDarkTheme,
        toggleTheme,
        isVideoModalOpen,
        openVideoModal,
        closeVideoModal,
        videoUrl,
        isSidebarOpen,
        handleSidebarClose,
        handleSidebarOpen,
    }
    return (
        <TalimContext.Provider value={contextValue}>
            {children}
        </TalimContext.Provider>
    )
}

export const useTalimContext = () => {
    const context = useContext(TalimContext);
    if(!context) {
        throw new Error("useTalimContext must be used within TalimProvider");
    }
    return context;
}