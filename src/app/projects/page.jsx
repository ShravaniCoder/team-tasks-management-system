"use client";

import PageTitle from '@/components/PageTitle';
import { Button } from '@/components/ui/button';
import { BadgeCheck, DeleteIcon, Plus } from 'lucide-react';
import React from 'react'
import {
  Drawer,
  
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
import { addProject, deleteProject, toggleProject } from '@/redux/projectSlice';
import { CardContent } from '@/components/CardContent';




const Projects = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.project.projects);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(null);

  const today = new Date().toISOString().split("T")[0];

 
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
      setIsDrawerOpen(false); 
    }
    console.log(projects);

  };
  
  return (
    <div>
      <div className="flex justify-between items-center pb-8">
        {" "}
        <PageTitle title="Projects" />
        <Button onClick={() => setIsDrawerOpen(true)}>
          <Plus />
          New Project
        </Button>
        <Drawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          direction="right"
        >
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
                <Input
                  id="projectName"
                  placeholder="Enter project name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="dueDate">Due Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      onClick={() => setIsOpen((prev) => !prev)}
                      className={cn(
                        "w-full flex items-center justify-start rounded-md border border-input bg-transparent px-3 py-2 text-sm font-normal shadow-sm",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </button>
                  </PopoverTrigger>

                  <PopoverContent
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    className="w-auto p-0"
                  >
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

            <div className="flex ">
              <Button type="submit" variant="container">
                Submit
              </Button>
            </div>
          </form>
        </Drawer>
      </div>
      <section className="grid gap-4 grid-cols-1 w-full gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {projects.map((project) => (
          <CardContent key={project.id}>
            <div className="flex flex-col justify-between">
              <h1 className="text-lg font-semibold">{project.title}</h1>
              <p className="text-sm text-black">Due date: {project.dueDate}</p>
            </div>
            <div className="flex justify-between gap-2 ">
              <Button
                variant="outline"
                onClick={() =>
                  dispatch(toggleProject({ id: project.id, date: today }))
                }
                className={
                  project.completedDates.includes(today)
                    ? "text-green-600 border-green-600"
                    : "text-blue-600 border-blue-600"
                }
              >
                <BadgeCheck />{" "}
                {project.completedDates.includes(today)
                  ? "COMPLETED"
                  : "MARK COMPLETE"}
              </Button>
              <Button variant="destructive" size="sm" onClick={() => dispatch(deleteProject({id: project.id}))}>
                <DeleteIcon />
              </Button>
            </div>
          </CardContent>
        ))}
      </section>
    </div>
  );
}

export default Projects;