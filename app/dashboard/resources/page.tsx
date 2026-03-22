"use client";

import { BookOpen } from "lucide-react";
import SubmissionsPage from "../components/SubmissionsPage";

export default function ResourcesPage() {
  return (
    <SubmissionsPage
      type="RESOURCE"
      title="Resources"
      description="Review and manage resource submissions from the community"
      icon={BookOpen}
    />
  );
}
