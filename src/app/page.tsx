import { format } from "date-fns/format";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { CloudMoon } from "lucide-react";
import Image from "next/image";

import { api } from "~/trpc/server";

export default async function Home() {
  const old_dreams = await api.dreams.getAll();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-10 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[4rem]">
          Welcome, Dreamer 💭
        </h1>
        <h3 className="text-xl font-extrabold tracking-tight sm:text-[2rem]">
          It{"'"}s {format(new Date(), "MMMM dd, yyyy")} 🕒
        </h3>
        <Link href="/add">
          <Button className="text-xl">
            <CloudMoon className="mr-3" />
            Add New Weaver
          </Button>
        </Link>
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
      </div>
    </main>
  );
}