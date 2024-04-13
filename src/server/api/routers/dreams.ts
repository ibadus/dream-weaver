import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const old_dreams = [
	{
	  date: "April 13, 2024",
	  data: [
		{
		  title: "Falling from the Sky",
		  description: "I was falling from the sky, and I couldn't stop. I was so scared, but then I woke up.",
		  illustration_link: "https://source.unsplash.com/featured/?falling",
		  path: "/dream/falling-from-the-sky",
		  id: "falling-from-the-sky"
		},
		{
		  title: "Flying in the Clouds",
		  description: "I was flying in the clouds, and I felt so free. It was the most amazing feeling in the world.",
		  illustration_link: "https://source.unsplash.com/featured/?clouds",
		  path: "/dream/flying-in-the-clouds",
		  id: "flying-in-the-clouds"
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
		  path: "/dream/bear-in-the-forest",
		  id: "bear-in-the-forest"
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
		  path: "/dream/boat-in-the-ocean",
		  id: "boat-in-the-ocean"
		},
		{
		  title: "Dancing in the Rain",
		  description: "I was dancing in the rain, and I felt so alive. The raindrops were cold on my skin, but I didn't care. I was so happy and carefree. It was the best dream I've ever had.",
		  illustration_link: "https://source.unsplash.com/featured/?rain",
		  path: "/dream/dancing-in-the-rain",
		  id: "dancing-in-the-rain"
		},
		{
		  title: "Running in the Desert",
		  description: "I was running in the desert, and I felt so hot. The sun was beating down on me, and I was so thirsty. I kept running and running, but I couldn't find any water. I was so scared, but then I woke up.",
		  illustration_link: "https://source.unsplash.com/featured/?desert",
		  path: "/dream/running-in-the-desert",
		  id: "running-in-the-desert"
		}
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
