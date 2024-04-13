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
						<Image
							src="https://source.unsplash.com/featured/?boat"
							alt="Illustration"
							width={600}
							height={600}
							className="rounded-xl"
						/>
					</CardHeader>
					<CardContent>
						<p>
							{dream.description}
						</p>
					</CardContent>
					<CardFooter className="justify-center">
						<Button>
							Play
						</Button>
					</CardFooter>
				</Card>
			</div>
		</main>
	)
}