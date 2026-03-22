"use client";

import { MapPin } from "lucide-react";
import SubmissionsPage from "../components/SubmissionsPage";

export default function DirectoryPage() {
  return (
    <SubmissionsPage
      type="DIRECTORY"
      title="Directory"
      description="Review and manage directory listing submissions"
      icon={MapPin}
    />
  );
}
