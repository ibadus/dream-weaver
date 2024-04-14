import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const old_dreams = [
	{
	  date: "April 13, 2024",
	  data: [
		{
		  title: "Failed Prison escape",
		  description: "I was in prison, and I tried to escape. I dug a tunnel under the wall, but the guards caught me. I was so close to freedom, but I failed. I was so scared, but then I woke up.",
		  illustration_link: "https://source.unsplash.com/featured/?prison",
		  vid_link: "/1.mp4",
		  path: "/dream/prison-escape",
		  id: "prison-escape"
		},
		{
		  title: "Bison invasion",
		  description: "I was in my house, and a herd of bison invaded my backyard. They were so big and scary, and they destroyed everything. I was so scared, but then I woke up.",
		  illustration_link: "https://source.unsplash.com/featured/?bisons",
		  path: "/dream/bisons-invasion",
		  vid_link: "/2.mp4",
		  id: "bisons-invasion"
		}
	  ]
	},
	{
	  date: "April 12, 2024",
	  data: [
		{
		  title: "Skeleton invasion in the future",
		  description: "I was in the future, and the world was overrun by skeletons. They were everywhere, and they were so scary. I was so scared, but then I woke up.",
		  illustration_link: "https://source.unsplash.com/featured/?skeleton",
		  path: "/dream/skeleton-invasion",
		  vid_link: "/3.mp4",
		  id: "skeleton-invasion"
		},
	  ]
	},
	{
	  date: "April 11, 2024",
	  data: [
		{
		  date: "April 11, 2024",
		  title: "Killer looking at me in the dark",
		  description: "I was outside my house at night, and I saw a killer looking at me from the shadows. He had a knife, and he was so scary. I was so scared, but then I woke up.",
		  illustration_link: "https://source.unsplash.com/featured/?killer",
		  path: "/dream/killer",
		  vid_link: "/4.mp4",
		  id: "killer"
		},
	  ]
	},
  ]

export const dreamsRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.post.create({
        data: {
          name: input.name,
        },
      });
    }),

  getAll: publicProcedure.query(() => {
    return old_dreams
  }),

  getSpecific: publicProcedure.input(z.object({ id: z.string() })).query(({ input }) => {
	for (const dream of old_dreams) {
		for (const dreamData of dream.data) {
			if (dreamData.id === input.id) {
				return dreamData
			}
		}
	}
	return null
  })
});
