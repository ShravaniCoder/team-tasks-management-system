"use client";

import PageTitle from '@/components/PageTitle';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import React from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
 
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from '@/redux/projectSlice';
import { CardContent } from '@/components/CardContent';



const Projects = ({ className }) => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.project.projects);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(null);

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(
        addProject({
          id: Date.now(),
          title,
          dueDate: date ? format(date, "PPP") : "",
        })
      );
      setTitle("");
      setDate(null);
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center pb-8">
        {" "}
        <PageTitle title="Projects" />
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <Button>
              <Plus />
              New Project
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <form
              onSubmit={handleSubmit}
              className={cn(
                "flex flex-col items-center justify-center p-8 gap-6 h-full",
                className
              )}
            >
              <div className="w-full max-w-md space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="projectName">Project Name</Label>
                  <Input id="projectName" placeholder="Enter project name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="dueDate">Due Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={`w-full justify-start text-left font-normal ${
                          !date ? "text-muted-foreground" : ""
                        }`}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <DrawerTrigger asChild>
                  <Button>
                    <Plus />
                    New Project
                  </Button>
                </DrawerTrigger>

                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </div>
            </form>
          </DrawerContent>
        </Drawer>
      </div>
      <section className="grid gap-4 grid-cols-1 w-full gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        <CardContent>
          {projects.map((project) => (
            <div key={project.id}>
              <h1>{project.title}</h1>
              <p>{project.dueDate}</p>
            </div>
          ))}
        </CardContent>
      </section>
      {/* <table className="w-full border mt-4 text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className="border-t">
              <td className="px-4 py-2">{project.title}</td>
              <td className="px-4 py-2">{project.dueDate}</td>
            </tr>
          ))}
        </tbody>

      </table> */}
    </div>
  );
}

export default Projects;