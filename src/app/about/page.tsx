import Footer from "@/components/Footer";

export const metadata = {
  title: "About Me - Tim Kwartler",
  description: "Learn more about Tim Kwartler",
};

export default function About() {
  return (
    <main className="min-h-screen bg-neutral-900 flex flex-col">
      <div className="flex-grow max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-12 font-[family-name:var(--font-playfair)] tracking-wide">
          About Me
        </h1>

        <div className="prose prose-invert max-w-none space-y-6">
          <p className="text-gray-300 leading-relaxed">
            I&apos;m Tim. I grew up in Boston and am currently pursuing my Master&apos;s in Computer Science at Worcester Polytechnic Institute.
          </p>

          <p className="text-gray-300 leading-relaxed">
            [Add a paragraph about your interests and hobbies outside of work.]
          </p>

          <p className="text-gray-300 leading-relaxed">
            [Add a paragraph about what you enjoy doing in your free time.]
          </p>

          <p className="text-gray-300 leading-relaxed">
            [Add any other personal details you&apos;d like to share.]
          </p>
        </div>

        <div className="mt-16 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <figure className="space-y-2 mx-auto sm:mx-0 w-3/4 sm:w-full">
              <div className="w-full aspect-[3/2] bg-neutral-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">Photo placeholder</span>
              </div>
              <figcaption className="text-sm text-gray-400 italic text-center">
                [Caption for photo 1]
              </figcaption>
            </figure>

            <figure className="space-y-2 mx-auto sm:mx-0 w-3/4 sm:w-full">
              <div className="w-full aspect-[3/2] bg-neutral-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">Photo placeholder</span>
              </div>
              <figcaption className="text-sm text-gray-400 italic text-center">
                [Caption for photo 2]
              </figcaption>
            </figure>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <figure className="space-y-2 mx-auto sm:mx-0 w-3/4 sm:w-full">
              <div className="w-full aspect-[2/3] bg-neutral-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">Photo placeholder</span>
              </div>
              <figcaption className="text-sm text-gray-400 italic text-center">
                [Caption for photo 3]
              </figcaption>
            </figure>

            <figure className="space-y-2 mx-auto sm:mx-0 w-3/4 sm:w-full">
              <div className="w-full aspect-[2/3] bg-neutral-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">Photo placeholder</span>
              </div>
              <figcaption className="text-sm text-gray-400 italic text-center">
                [Caption for photo 4]
              </figcaption>
            </figure>

            <figure className="space-y-2 mx-auto sm:mx-0 w-3/4 sm:w-full">
              <div className="w-full aspect-[2/3] bg-neutral-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">Photo placeholder</span>
              </div>
              <figcaption className="text-sm text-gray-400 italic text-center">
                [Caption for photo 5]
              </figcaption>
            </figure>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <figure className="space-y-2 mx-auto sm:mx-0 w-3/4 sm:w-full">
              <div className="w-full aspect-[3/2] bg-neutral-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">Photo placeholder</span>
              </div>
              <figcaption className="text-sm text-gray-400 italic text-center">
                [Caption for photo 6]
              </figcaption>
            </figure>

            <figure className="space-y-2 mx-auto sm:mx-0 w-3/4 sm:w-full">
              <div className="w-full aspect-[3/2] bg-neutral-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">Photo placeholder</span>
              </div>
              <figcaption className="text-sm text-gray-400 italic text-center">
                [Caption for photo 7]
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
