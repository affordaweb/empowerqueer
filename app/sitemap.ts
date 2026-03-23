import { MetadataRoute } from "next";

const BASE = "https://www.empowerqueerhub.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/resources", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/events", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/directory", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/kopisodes", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/trainings", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/opportunities", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/voices", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/gallery", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/donate", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/accessibility", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/faqs", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/submit", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/privacy-policy", priority: 0.4, changeFrequency: "yearly" as const },
    { url: "/terms", priority: 0.4, changeFrequency: "yearly" as const },
  ];

  return pages.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
