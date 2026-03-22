"use client";

import { Briefcase } from "lucide-react";
import SubmissionsPage from "../components/SubmissionsPage";

export default function OpportunitiesPage() {
  return (
    <SubmissionsPage
      type="OPPORTUNITY"
      title="Opportunities"
      description="Review and manage livelihood and opportunity submissions"
      icon={Briefcase}
    />
  );
}
