"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav({ links, isCollapsed }) {
  const pathName = usePathname();

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) => {
          const isActive = link.href === pathName;
          const baseBtn =
            "inline-flex items-center gap-2 text-sm font-medium transition rounded-md hover:text-white hover:bg-black dark:hover:bg-black";
          const iconBtn = "w-9 h-9 justify-center p-0";
          const fullBtn = "px-3 py-2 w-full justify-start";
          const activeStyles = isActive
            ? "bg-black text-white"
            : "text-gray-700 dark:text-gray-300";

          return isCollapsed ? (
            <div key={index} className="relative group">
              <Link
                href={link.href}
                className={`${baseBtn} ${iconBtn} ${activeStyles}`}
              >
                <link.icon className="h-4 w-4" />
                <span className="sr-only">{link.title}</span>
              </Link>
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 hidden group-hover:block bg-white dark:bg-gray-900 text-sm shadow px-2 py-1 rounded-md z-10">
                <div className="flex items-center gap-4">
                  {link.title}
                  {link.label && (
                    <span className="ml-auto text-gray-400 dark:text-gray-500">
                      {link.label}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <Link
              key={index}
              href={link.href}
              className={`${baseBtn} ${fullBtn} ${activeStyles}`}
            >
              <link.icon className="h-4 w-4 mr-2" />
              {link.title}
              {link.label && (
                <span className="ml-auto text-gray-400 dark:text-gray-300">
                  {link.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
