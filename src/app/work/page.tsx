import Link from "next/link";
import { resumeData } from "@/data/resume";
import Footer from "@/components/Footer";

const companyUrls: Record<string, string> = {
  "7Factor": "https://7factor.io",
};

const educationUrls: Record<string, string> = {
  "Worcester Polytechnic Institute": "https://www.wpi.edu",
};

export const metadata = {
  title: "My Work - Tim Kwartler",
  description: "Career background of Tim Kwartler, Software Engineer",
};

export default function WhatIDo() {
  return (
    <main className="min-h-screen bg-neutral-900 flex flex-col">
      <div className="flex-grow max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-12 font-[family-name:var(--font-playfair)] tracking-wide">
          My Work
        </h1>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">
            Background
          </h2>
          <div className="prose prose-invert max-w-none">
            {resumeData.careerBackground.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-300 leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-6 text-gray-300">
            Curious to learn more?{" "}
            <Link
              href="/resume"
              className="text-blue-400 hover:underline font-medium"
            >
              Check out my full resume.
            </Link>
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Projects
          </h2>
          <div className="space-y-6">
            {resumeData.projects?.map((project, index) => (
              <div
                key={index}
                className="bg-neutral-800/50 rounded-lg p-6 border border-neutral-700 border-l-4 border-l-green-500 shadow-[inset_4px_0_12px_-4px_rgba(34,197,94,0.3)]"
              >
                <h3 className="text-xl font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-3 text-gray-300">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Experience
          </h2>
          <div className="space-y-6">
            {resumeData.experience.map((job, index) => (
              <div
                key={index}
                className="bg-neutral-800/50 rounded-lg p-6 border border-neutral-700 border-l-4 border-l-blue-500 shadow-[inset_4px_0_12px_-4px_rgba(59,130,246,0.3)]"
              >
                <h3 className="text-xl font-semibold text-white">
                  {job.position}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  {companyUrls[job.company] ? (
                    <a href={companyUrls[job.company]} target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:underline">
                      {job.company}
                    </a>
                  ) : (
                    <span className="text-blue-400 font-semibold">{job.company}</span>
                  )} · {job.location} · {job.startDate} – {job.endDate}
                </p>
                <p className="mt-3 text-gray-300">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Education
          </h2>
          <div className="space-y-6">
            {resumeData.education.map((edu, index) => (
              <div
                key={index}
                className="bg-neutral-800/50 rounded-lg p-6 border border-neutral-700 border-l-4 border-l-purple-500 shadow-[inset_4px_0_12px_-4px_rgba(168,85,247,0.3)]"
              >
                <h3 className="text-xl font-semibold text-white">
                  {edu.degree}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  {educationUrls[edu.institution] ? (
                    <a href={educationUrls[edu.institution]} target="_blank" rel="noopener noreferrer" className="text-purple-400 font-semibold hover:underline">
                      {edu.institution}
                    </a>
                  ) : (
                    <span className="text-purple-400 font-semibold">{edu.institution}</span>
                  )} · {edu.location}
                </p>
                <p className="mt-3 text-gray-300">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-8">
            Activities
          </h2>
          <div className="space-y-6">
            {resumeData.activities?.map((activity, index) => (
              <div
                key={index}
                className="bg-neutral-800/50 rounded-lg p-6 border border-neutral-700 border-l-4 border-l-orange-500 shadow-[inset_4px_0_12px_-4px_rgba(249,115,22,0.3)]"
              >
                <h3 className="text-xl font-semibold text-white">
                  {activity.role}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  <span className="text-orange-400 font-semibold">{activity.organization}</span> · {activity.startDate} – {activity.endDate}
                </p>
                <p className="mt-3 text-gray-300">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
