import Barcharts from "@/components/BarChart";
import Card from "@/components/Card";
import { CardContent } from "@/components/CardContent";
import PageTitle from "@/components/PageTitle";
import { Status } from "@/components/Status";

import {
  FolderKanban, // For Total Projects
  CheckSquare, // For Total Tasks
  Hourglass, // For Pending Tasks
  BadgeCheck, // For Completed Tasks
} from "lucide-react";

const cardData = [
  {
    label: "Total Projects",
    icon: FolderKanban,
    amount: "24",
    description: "Active and archived projects",
  },
  {
    label: "Total Tasks",
    icon: CheckSquare,
    amount: "154",
    description: "All assigned tasks",
  },
  {
    label: "Pending Tasks",
    icon: Hourglass,
    amount: "37",
    description: "Tasks waiting for completion",
  },
  {
    label: "Completed Tasks",
    icon: BadgeCheck,
    amount: "117",
    description: "Tasks successfully completed",
  },
];

const userData = [
  { name: "John Doe", email: "john.doe@example.com", completed: 5, pending: 3 },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    completed: 8,
    pending: 2,
  },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    completed: 12,
    pending: 1,
  },
  {
    name: "Bob Brown",
    email: "bob.brown@example.com",
    completed: 3,
    pending: 7,
  },
  {
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    completed: 6,
    pending: 4,
  },
];


export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section className="grid gap-4 grid-cols-1 w-full gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            label={card.label}
            icon={card.icon}
            amount={card.amount}
            description={card.description}
          />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <Barcharts />
        </CardContent>
        <CardContent>
          <p className="font-semibold text-lg">Team Members</p>
          <p className="text-sm text-gray-400">
            Completed: 117 tasks | Pending: 37 tasks this month.
          </p>

          {userData.map((d, i) => (
            <Status key={i} name={d.name} email={d.email} completed={d.completed} pending={d.pending} />
          ))}
        </CardContent>
      </section>
    </div>
  );
}
