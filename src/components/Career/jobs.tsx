"use client";

import { useState } from "react";
import { useRouter } from "next/router";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
}

const jobs: Job[] = [
  { id: 1, title: "Software Engineer", company: "Tech Corp", location: "New York", description: "Develop and maintain software." },
  { id: 2, title: "Marketing Specialist", company: "Biz Solutions", location: "San Francisco", description: "Manage marketing campaigns." },
  { id: 3, title: "UI/UX Designer", company: "Creative Studio", location: "Remote", description: "Design user interfaces and experiences." },
];

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleJobClick = (job: Job) => {
    const queryString = new URLSearchParams({
      id: job.id.toString(),
      title: job.title,
      company: job.company,
      location: job.location,
      description: job.description,
    }).toString();
  
    router.push({
      pathname: "/jobs/[id]",
      query: queryString,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Available Jobs</h1>
      <input
        type="text"
        placeholder="Search for a job"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg cursor-pointer"
            onClick={() => handleJobClick(job)}
          >
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-500">{job.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
