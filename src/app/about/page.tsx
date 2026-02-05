import Image from "next/image";
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
            Outside of work, I&apos;m passionate about Rubik&apos;s cubes and competitive speedcubing—I even serve as President of WPI&apos;s Rubik&apos;s Cube Club. I also love managing livestream production for esports events, combining my technical skills with my love for gaming and live entertainment.
          </p>

          <p className="text-gray-300 leading-relaxed">
            In my free time, I enjoy building personal tech projects. One of my favorites is Ripcord, an open-source Discord bot I created for Minecraft server management. There&apos;s something satisfying about solving real problems with code, even if it&apos;s just making it easier to manage a game server with friends.
          </p>

          <p className="text-gray-300 leading-relaxed">
            When I&apos;m not coding or cubing, you can usually find me playing video games or watching YouTube. I&apos;m always down for a good gaming session or discovering new content creators.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <figure className="space-y-2 mx-auto sm:mx-0 w-3/4 sm:w-full">
              <div className="w-full aspect-[3/2] relative rounded-lg overflow-hidden">
                <Image
                  src="/TorontoBarPic.jpg"
                  alt="Tim at a bar in Toronto with a Rubik's cube"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-400 italic text-center">
                Cubing in Toronto
              </figcaption>
            </figure>

            <figure className="space-y-2 mx-auto sm:mx-0 w-3/4 sm:w-full">
              <div className="w-full aspect-[3/2] relative rounded-lg overflow-hidden">
                <Image
                  src="/StrayCats.jpg"
                  alt="Tim with family at a Stray Cats concert in NYC"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-400 italic text-center">
                Stray Cats concert in NYC
              </figcaption>
            </figure>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <figure className="space-y-2 mx-auto sm:mx-0 w-3/4 sm:w-full">
              <div className="w-full aspect-[3/4] relative rounded-lg overflow-hidden">
                <Image
                  src="/timk.jpeg"
                  alt="Tim in NYC"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-400 italic text-center">
                NYC skyline
              </figcaption>
            </figure>

            <figure className="space-y-2 mx-auto sm:mx-0 w-3/4 sm:w-full">
              <div className="w-full aspect-[3/4] relative rounded-lg overflow-hidden">
                <Image
                  src="/Prom1.png"
                  alt="Tim with friends at prom"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-400 italic text-center">
                Prom with friends
              </figcaption>
            </figure>

            <figure className="space-y-2 mx-auto sm:mx-0 w-3/4 sm:w-full">
              <div className="w-full aspect-[3/4] relative rounded-lg overflow-hidden">
                <Image
                  src="/PXL_20250603_230529150.jpg"
                  alt="Tim with a friend at an event"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-400 italic text-center">
                Hanging with friends
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
