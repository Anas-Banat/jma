"use client";

import { useRouter } from "next/router";

export default function JobDetails() {
  const router = useRouter();
  const { query } = router;

  if (!query.title) {
    return <p className="text-center p-4">Loading job details...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{query.title}</h1>
      <p className="text-lg text-gray-700 mb-2">
        <span className="font-semibold">Company:</span> {query.company}
      </p>
      <p className="text-lg text-gray-700 mb-2">
        <span className="font-semibold">Location:</span> {query.location}
      </p>
      <p className="text-lg text-gray-700">
        <span className="font-semibold">Description:</span> {query.description}
      </p>
      <button
        onClick={() => router.push("/jobs")}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back to Jobs
      </button>
    </div>
  );
}
