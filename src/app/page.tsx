import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Make Anything possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Web development
            </span>
          </h1>
          <p className="text-gray-300 hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            cumque id eum ducimus animi iusto min
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/skills"
              className="rounded-[20px] relative bg-blue-500 hover:bg-blue-400  px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
            <Link
              href="/projects"
              className="rounded-[20px] hover:bg-blue-400  px-5 py-3 text-lg text-white max-w-[200px] border"
            >
              My Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-[20px] hover:bg-blue-400  px-5 py-3 text-lg text-white max-w-[200px] border"
          >
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      <div className="flex absolute bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/skills"
          className="rounded-[20px] bg-blue-500 hover:bg-blue-400  px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Learn more
        </Link>
        <Link
          href="/projects"
          className="rounded-[20px] bg-blue-500 hover:bg-blue-400  px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My Projects
        </Link>
        <Link
          href="/contact"
          className="rounded-[20px] hover:bg-blue-400  px-5 py-3 text-lg text-white max-w-[200px] border"
        >
          Contact Me
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          width={300}
          height={300}
          className="absolute right-55 top-40"
        />

        <Image src="/cliff.webp" alt="cliff" height={480} width={480} />
      </div>

      <div className="absolute w-full h-auto bottom-0 z-[5]">
        <Image
          src="/trees.webp"
          alt="trees"
          height={2000}
          width={2000}
          className="h-full w-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="horse"
        width={300}
        height={300}
        className="absolute left-0 top-10 z-[10]"
      />
    </main>
  );
}
