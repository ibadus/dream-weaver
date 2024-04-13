"use client";

import { format } from "date-fns/format";
import { env } from "~/env";

export default function AddPage() {
	return (
		<main className="flex min-h-screen flex-col items-center">
			<div className="space-y-10 text-center">
				<h1 className="text-5xl font-extrabold tracking-tight sm:text-[4rem]">
					{format(new Date(), "MMMM dd, yyyy")}
				</h1>
				<p>
					To start, please join the call.
				</p>
			</div>
			<iframe src={env.NEXT_PUBLIC_DAILYCO_DOMAIN} width="100%" height="1000px" allowFullScreen allow="camera; microphone" />
		</main>
	)
}