// Card.jsx
import React from "react";
import { CardContent } from "./CardContent";

export default function Card({ label, icon: Icon, amount, description }) {
  return (
    <CardContent>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-600">{label}</span>
        <Icon className="h-5 w-5 text-gray-500" />
      </div>
      <h2 className="text-2xl font-bold">{amount}</h2>
      <p className="text-sm text-gray-500">{description}</p>
    </CardContent>
  );
}
