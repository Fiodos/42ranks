import Timer from "../components/Clock"
import { useRouter } from "next/router"

export default function SolutionButtons() {
	const router = useRouter()

	return (
		<div className="flex pt-4">
			<button onClick={() => router.push("/")} className="text-base text-left bg-transparent hover:bg-green-500 text-green-700 font-mono hover:text-white py-0 px-2 border border-green-500 hover:border-transparent rounded">
				Submit
			</button>
			<button className="ml-10 text-base text-left bg-transparent hover:bg-green-500 text-green-700 font-mono hover:text-white py-0 px-2 border border-green-500 hover:border-transparent rounded">
				Test
			</button>
			<div class = "ml-32 bbg-transparent hover:bg-green-500 text-green-700 font-mono hover:text-white py-0 px-2 border border-green-500 hover:border-transparent rounded">
			<Timer />
			</div>
		</div>
	)
}