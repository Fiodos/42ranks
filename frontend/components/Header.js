import { useRouter } from "next/router"
import BluePill from "./BluePill"
import Pic42 from "./Pic42"
import MyDropdown from "./MyDropdown"

export default function Header() {
	const router = useRouter()

	return (
	<div>
		<header className="bg-black p-1.5 h-28">
			<div className="flex justify-between items-center">
				<div>
					 <MyDropdown/>
				</div>
				<div className="flex justify-center items-center">
					<button onClick={() => router.push("/")}>
						<Pic42 />
					</button>
				</div>
					<a className="pr-10">
						<BluePill />
					</a>
				</div>
			</header>
		</div>
		)
}
