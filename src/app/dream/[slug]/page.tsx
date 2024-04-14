import { api } from "~/trpc/server";
import { format } from "date-fns/format";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "~/components/ui/card"
import Image from "next/image";
import { Button } from "~/components/ui/button";

export default async function DreamPage({ params }: { params: { slug: string } }) {
	const dream = await api.dreams.getSpecific({ id: params.slug });

	if (!dream) {
		return (
			<main className="flex min-h-screen flex-col items-center justify-center">
				<p>
					Sorry, we couldn{"'"}t find the dream you were looking for.
				</p>
			</main>
		)
	}

	return (
		<main className="flex min-h-screen flex-col items-center space-y-20">
			<h1 className="text-5xl font-extrabold tracking-tight sm:text-[4rem]">
				{format(new Date(), "MMMM dd, yyyy")}
			</h1>
			<div>
				<Card>
					<CardHeader className="space-y-4">
						<CardTitle className="text-center text-2xl">
							{dream.title}
						</CardTitle>
						<div className="flex justify-center">
							<video width="500" height="600" controls muted autoPlay preload="none">
								<source src={dream.vid_link} type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</div>
					</CardHeader>
					<CardContent>
						<h2>
							Summary:
						</h2>
						<p>
							{dream.description}
						</p>
					</CardContent>
				</Card>
			</div>
		</main>
	)
}