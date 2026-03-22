"use client";

import { MessageSquare } from "lucide-react";
import SubmissionsPage from "../components/SubmissionsPage";

export default function ContactPage() {
  return (
    <SubmissionsPage
      type="CONTACT"
      title="Contact Messages"
      description="Review and manage contact form submissions"
      icon={MessageSquare}
    />
  );
}
