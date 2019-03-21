import Dashboard from "@/assets/Dashboard.svg";
import Discount from "@/assets/Discount.svg";
import List from "@/assets/List.svg";
import Bell from "@/assets/Bell.svg";
import Settings from "@/assets/Settings.svg";
import Help from "@/assets/Help.svg";

export default {
  items: [
    {
      id: 1,
      title: "Dashboard",
      icon: Dashboard,
      slug: "dashboard"
    },
    {
      id: 2,
      title: "Campaigns",
      icon: Discount,
      rgb: [6, 142, 249],
      slug: "campaigns"
    },
    {
      id: 3,
      title: "Offers",
      icon: List,
      slug: "offers"
    }
  ],
  bottomItems: [
    {
      id: 4,
      title: "Updates",
      icon: Bell,
      slug: "updates"
    },
    {
      id: 5,
      title: "Settings",
      icon: Settings,
      slug: "settings"
    },
    {
      id: 6,
      title: "Help",
      icon: Help,
      slug: "help"
    }
  ]
};
