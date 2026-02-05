import Link from "next/link";
import { resumeData } from "@/data/resume";
import Footer from "@/components/Footer";

const projectColors = [
  { gradient: "from-blue-600 to-cyan-500", badge: "bg-blue-500/20 text-blue-300" },
  { gradient: "from-purple-600 to-pink-500", badge: "bg-purple-500/20 text-purple-300" },
  { gradient: "from-green-600 to-emerald-500", badge: "bg-green-500/20 text-green-300" },
  { gradient: "from-orange-600 to-yellow-500", badge: "bg-orange-500/20 text-orange-300" },
];

export const metadata = {
  title: "My Work - Tim Kwartler",
  description: "Projects and work by Tim Kwartler, Software Engineer",
};

export default function WhatIDo() {
  return (
    <main className="min-h-screen bg-neutral-900 flex flex-col">
      <div className="flex-grow max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)] tracking-wide">
          My Work
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Projects I&apos;ve built and things I&apos;m proud of
        </p>

        <section className="mb-16">
          <div className="grid gap-8 md:grid-cols-2">
            {resumeData.projects?.map((project, index) => {
              const colors = projectColors[index % projectColors.length];
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-neutral-800 border border-neutral-700 hover:border-neutral-600 transition-all duration-300 hover:shadow-2xl hover:shadow-neutral-900/50 hover:-translate-y-1"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  <div className="relative p-8">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${colors.badge} mb-4`}>
                      Project
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

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
        </section>

        <div className="text-center py-8">
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Full Resume
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
