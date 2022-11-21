import Header from "../components/Header"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import Table42 from "../components/Table42"

export default function Leaderboard() {
	return (
		<Layout pageTitle="42rank">
			<Header />
			<Table42/>
			<Footer/>
		</Layout>
	)
}