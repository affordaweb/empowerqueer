"use client";

import { GraduationCap } from "lucide-react";
import SubmissionsPage from "../components/SubmissionsPage";

export default function TrainingsPage() {
  return (
    <SubmissionsPage
      type="TRAINING"
      title="Trainings"
      description="Review and manage training program submissions"
      icon={GraduationCap}
    />
  );
}
