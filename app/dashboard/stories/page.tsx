"use client";

import { BookHeart } from "lucide-react";
import SubmissionsPage from "../components/SubmissionsPage";

export default function StoriesPage() {
  return (
    <SubmissionsPage
      type="STORY"
      title="Stories"
      description="Review and manage community story submissions"
      icon={BookHeart}
    />
  );
}
