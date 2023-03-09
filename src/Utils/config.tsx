import { TbWaveSawTool } from "react-icons/tb";
import { HiOutlineStatusOnline, HiUserGroup } from "react-icons/hi";
import { BsFillGridFill, BsSunriseFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { GiMicrophone } from "react-icons/gi";
import {
  FaBible,
  FaCalendarCheck,
  FaFile,
  FaHandHoldingHeart,
  FaPrayingHands,
  FaUser,
} from "react-icons/fa";
import {
  Configurations,
  Dashboard,
  ManageChurches,
  AdminReports,
  AdminSubscription,
  TransactionLogs,
  UserManager,
} from "../Pages/Private/Admin";
import {
  Announcement,
  Booking,
  ChurchActivities,
  ChurchFinance,
  Media,
  PostAds,
  Prayers,
  Reports,
  Subscriptions,
  SuperAdminGroups,
  SuperAdminManager,
} from "../Pages/Private/SuperAdmin";
import {
  Announcements,
  Bible,
  UserChurchActivities,
  DailyReflection,
  Giving,
  UserGroups,
  Home,
  PrayerWall,
  Profile,
  Sermon,
} from "../Pages/Private/User";
import {
  MdAnnouncement,
  MdPermMedia,
  MdPostAdd,
  MdSubscriptions,
} from "react-icons/md";
import { RiBookMarkFill } from "react-icons/ri";

export const rolesRouters = {
  user: [
    {
      route: "/",
      nav: "Home",
      icon: <BsFillGridFill />,
      component: <Home />,
    },
    {
      route: "/prayer-wall",
      nav: "Prayer Wall",
      icon: <FaPrayingHands />,
      component: <PrayerWall />,
    },
    {
      route: "/bible",
      nav: "Bible",
      icon: <FaBible />,
      component: <Bible />,
    },
    {
      route: "/sermon",
      nav: "Sermon",
      icon: <GiMicrophone />,
      component: <Sermon />,
    },
    {
      route: "/profile",
      nav: "Profile",
      icon: <FaUser />,
      component: <Profile />,
    },
    {
      route: "/giving",
      nav: "Giving",
      icon: <FaHandHoldingHeart />,
      component: <Giving />,
    },
    {
      route: "/church-activity",
      nav: "Church Activity",
      icon: <TbWaveSawTool />,
      component: <UserChurchActivities />,
    },
    {
      route: "/daily-reflection",
      nav: "Daily Reflection",
      icon: <BsSunriseFill />,
      component: <DailyReflection />,
    },
    {
      route: "/groups",
      nav: "Groups",
      icon: <HiUserGroup />,
      component: <UserGroups />,
    },
    {
      route: "/announcements",
      nav: "Announcements",
      icon: <HiOutlineStatusOnline />,
      component: <Announcements />,
    },
  ],
  admin: [
    {
      route: "/",
      nav: "Dashboard",
      icon: <BsFillGridFill />,
      component: <Dashboard />,
    },
    {
      route: "/user-manager",
      nav: "User Manager",
      icon: <FaUser />,
      component: <UserManager />,
    },
    {
      route: "/subscription",
      nav: "Subscription",
      icon: <MdSubscriptions />,
      component: <AdminSubscription />,
    },
    {
      route: "/manage-churches",
      nav: "Manage Churches",
      icon: <FaCalendarCheck />,
      component: <ManageChurches />,
    },
    {
      route: "/configurations",
      nav: "Configurations",
      icon: <IoMdSettings />,
      component: <Configurations />,
    },
    {
      route: "/transaction-logs",
      nav: "Transaction Logs",
      icon: <RiBookMarkFill />,
      component: <TransactionLogs />,
    },
    {
      route: "/reports",
      nav: "Reports",
      icon: <FaFile />,
      component: <AdminReports />,
    },
  ],
  superAdmin: [
    {
      route: "/",
      nav: "Dashboard",
      icon: <BsFillGridFill />,
      component: "Dashboard",
    },
    {
      route: "/church-activities",
      nav: "Church Activities",
      icon: <TbWaveSawTool />,
      component: <ChurchActivities />,
    },
    {
      route: "/groups",
      nav: "Group",
      icon: <HiUserGroup />,
      component: <SuperAdminGroups />,
    },
    {
      route: "/media",
      nav: "Media/Content",
      icon: <MdPermMedia />,
      component: <Media />,
    },
    {
      route: "/post-ads",
      nav: "Post Ads",
      icon: <MdPostAdd />,
      component: <PostAds />,
    },
    {
      route: "/subscription",
      nav: "Subscription",
      icon: <MdSubscriptions />,
      component: <Subscriptions />,
    },
    {
      route: "/church-finance",
      nav: "Church Finance",
      icon: <RiBookMarkFill />,
      component: <ChurchFinance />,
    },
    {
      route: "/reports",
      nav: "Reports",
      icon: <FaFile />,
      component: <Reports />,
    },
    {
      route: "/user-manager",
      nav: "User Manager",
      icon: <FaUser />,
      component: <SuperAdminManager />,
    },
    {
      route: "/announcement",
      nav: "Announcement",
      icon: <MdAnnouncement />,
      component: <Announcement />,
    },
    {
      route: "/prayers",
      nav: "Prayers/Verses",
      icon: <FaPrayingHands />,
      component: <Prayers />,
    },
    {
      route: "/booking",
      nav: "Booking/Request",
      icon: <FaCalendarCheck />,
      component: <Booking />,
    },
  ],
};
