export default function DreamPage({ params }: { params: { slug: string } }) {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			<p>
				Welcome to the dream page for dream with ID: {params.slug}
			</p>
		</main>
	)
}