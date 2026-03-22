"use client";

import { Calendar } from "lucide-react";
import SubmissionsPage from "../components/SubmissionsPage";

export default function EventsPage() {
  return (
    <SubmissionsPage
      type="EVENT"
      title="Events"
      description="Review and manage event submissions from the community"
      icon={Calendar}
    />
  );
}
