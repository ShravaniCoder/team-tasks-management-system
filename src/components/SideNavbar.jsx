"use client";
import React, { useState } from 'react';
import {
  CalendarCheck,
  ChevronRight,
  LayoutDashboard,
  NotebookPen,
  ProjectorIcon,
  UserRoundPlus,
} from "lucide-react";
import { Nav } from './ui/nav';
import { Button } from './ui/button';
import { FaPeopleRoof } from "react-icons/fa6";
import {
  useWindowWidth,
} from "@react-hook/window-size";

const SideNavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768
  function toggleSidebar() {
    setIsCollapsed(!isCollapsed)
  }
  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-5">
      <div className="flex pb-14 text-base gap-2 font-bold items-center justify-center">
        <FaPeopleRoof />
        {!isCollapsed && !mobileWidth && <span>TEAM FLOW</span>}
      </div>

      {!mobileWidth && (
        <div className="absolute right-[-25px] top-10">
          {" "}
          <Button
            onClick={toggleSidebar}
            variant="secondary"
           
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            icon: LayoutDashboard,
            variant: "default",
            href: "/",
          },
          {
            title: "Projects",
            icon: ProjectorIcon,
            variant: "ghost",
            href: "/projects",
          },
          {
            title: "Tasks",
            icon: NotebookPen,
            variant: "ghost",
            href: "/tasks",
          },
          {
            title: "Members",
            icon: UserRoundPlus,
            variant: "ghost",
            href: "/members",
          },
          {
            title: "Assign Task",
            icon: CalendarCheck,
            variant: "ghost",
            href: "/assignTask",
          },
        ]}
      />
    </div>
  );
}

export default SideNavbar;