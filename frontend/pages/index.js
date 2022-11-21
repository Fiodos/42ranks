import { useRouter } from "next/router"
import Header from "../components/Header"
import Layout from "../components/Layout"
import RanksPicThick from "../components/asciiCode"

function Index() {
	const router = useRouter()

	return (
			<Layout pageTitle="Welcome to 42rank">
				<Header />
				<div class="pt-10 pl-24 flex justify-center items-center">
					<RanksPicThick />
				</div>
				<div class ="flex justify-center pt-20 pl-4">
					<span class="box">
						<button onClick={() => router.push("/challenge")}>
							<h2 className="font-mono">
								{`>`}cd challenge
							</h2>
						</button>
					</span>
				</div>
			</Layout>
	)
}
export default Index