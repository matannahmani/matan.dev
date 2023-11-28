import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          <span className="text-[hsl(280,100%,70%)]">Matan</span>.Dev
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://www.linkedin.com/in/matannahmani/"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">My LinkedIn Profile →</h3>
            <div className="text-lg">
              Learn more about me, my work experience, and my education.
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://www.lunchy.ai/"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">My Latest Product →</h3>
            <div className="text-lg">
              Lunchy.ai supercharges you and your group dining experience with
              our AI-powered decision making engine.
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
