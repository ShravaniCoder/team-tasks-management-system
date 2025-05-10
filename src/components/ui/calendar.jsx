"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function Calendar({
  className = "",
  classNames = {},
  showOutsideDays = true,
  ...props
}) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={`p-3 ${className}`}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "text-sm font-medium",
        nav: "flex items-center gap-1",
        nav_button:
          "w-7 h-7 border border-gray-300 dark:border-gray-700 rounded-md bg-transparent p-0 opacity-50 hover:opacity-100 transition",
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-x-1",
        head_row: "flex",
        head_cell:
          "text-gray-400 dark:text-gray-500 rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: `${
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        } relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-blue-100`,
        day: "w-8 h-8 p-0 font-normal rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition aria-selected:opacity-100",
        day_range_start: "day-range-start bg-blue-600 text-white",
        day_range_end: "day-range-end bg-blue-600 text-white",
        day_selected:
          "bg-blue-600 text-white hover:bg-blue-600 focus:bg-blue-600",
        day_today: "bg-gray-100 dark:bg-gray-800 text-blue-600 font-bold",
        day_outside:
          "day-outside text-gray-400 dark:text-gray-600 aria-selected:text-gray-400",
        day_disabled: "text-gray-400 opacity-50",
        day_range_middle: "bg-blue-100 text-blue-800",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className = "", ...props }) => (
          <ChevronLeft className={`w-4 h-4 ${className}`} {...props} />
        ),
        IconRight: ({ className = "", ...props }) => (
          <ChevronRight className={`w-4 h-4 ${className}`} {...props} />
        ),
      }}
      {...props}
    />
  );
}

export { Calendar };
