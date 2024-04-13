import { format } from "date-fns/format";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { CloudMoon } from "lucide-react";
import Image from "next/image";

import { api } from "~/trpc/server";

const old_dreams = [
  {
    date: "April 13, 2024",
    data: [
      {
        title: "Falling from the Sky",
        description: "I was falling from the sky, and I couldn't stop. I was so scared, but then I woke up.",
        illustration_link: "https://source.unsplash.com/featured/?falling",
        path: "/dream/april-13-2024",
      },
      {
        title: "Flying in the Clouds",
        description: "I was flying in the clouds, and I felt so free. It was the most amazing feeling in the world.",
        illustration_link: "https://source.unsplash.com/featured/?clouds",
        path: "/dream/april-13-2024",
      }
    ]
  },
  {
    date: "April 12, 2024",
    data: [
      {
        title: "Bear in the Forest",
        description: "I was in a forest, and I saw a bear. I ran away from it, but it chased me. I climbed a tree to escape, but the bear followed me. I was so scared, but then I woke up.",
        illustration_link: "https://source.unsplash.com/featured/?bear",
        path: "/dream/april-12-2024",
      },

    ]
  },
  {
    date: "April 11, 2024",
    data: [
      {
        date: "April 11, 2024",
        title: "Boat in the Ocean",
        description: "I was on a boat in the middle of the ocean. The water was so blue, and the sky was so clear. I felt so free and at peace. It was the most beautiful dream I've ever had.",
        illustration_link: "https://source.unsplash.com/featured/?boat",
        path: "/dream/april-11-2024",
      },
      {
        title: "Dancing in the Rain",
        description: "I was dancing in the rain, and I felt so alive. The raindrops were cold on my skin, but I didn't care. I was so happy and carefree. It was the best dream I've ever had.",
        illustration_link: "https://source.unsplash.com/featured/?rain",
        path: "/dream/april-11-2024",
      },
      {
        title: "Running in the Desert",
        description: "I was running in the desert, and I felt so hot. The sun was beating down on me, and I was so thirsty. I kept running and running, but I couldn't find any water. I was so scared, but then I woke up.",
        illustration_link: "https://source.unsplash.com/featured/?desert",
        path: "/dream/april-11-2024",
      }
    ]
  },
]


export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-10 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[4rem]">
          Welcome, Dreamer 💭
        </h1>
        <h3 className="text-xl font-extrabold tracking-tight sm:text-[2rem]">
          It{"'"}s {format(new Date(), "MMMM dd, yyyy")} 🕒
        </h3>
        <Button className="text-xl">
          <CloudMoon className="mr-3" />
          Add New Weaver
        </Button>
        <div className="grid grid-cols-1 gap-4 md:gap-8">
          {old_dreams.length > 0 && old_dreams.map((dreams) => (
            <>
              <h2 className="font-extrabold">
                {dreams.date}
              </h2>
              {dreams.data.length > 0 && dreams.data.map((dream) => (
                <Link
                  key={dream.path}
                  className="flex flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-gray-200"
                  href={dream.path}
                >
                  <div className="flex">
                    <Image
                      src={dream.illustration_link}
                      alt="Illustration"
                      width={100}
                      height={64}
                      className="rounded-xl"
                    />
                    <div className="block p-4 max-w-xl overflow-ellipsis">
                      <h3 className="text-2xl font-bold">{dream.title}</h3>
                      <div className="text-lg">
                        {dream.description}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </>
          ))}
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-white">
            {hello ? hello.greeting : "Loading tRPC query..."}
          </p>
        </div>
      </div>
    </main>
  );
}