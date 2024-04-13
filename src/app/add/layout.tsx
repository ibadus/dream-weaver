import { ArrowLeft } from "lucide-react";
import { Button } from "~/components/ui/button";
import Link from "next/link";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<nav className="mt-4">
				<Link href="/">
					<Button variant="link">
						<ArrowLeft />
					</Button>
				</Link>
			</nav>
			{children}
		</>
	);
}