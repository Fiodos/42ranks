import Header from "../components/Header"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import IDE from "../components/IDE"

export default function Challenge() {
	return (
		<Layout pageTitle="Welcome to 42rank">
			<Header />
			<IDE/>
		<Footer/>
		</Layout>
	)
}
