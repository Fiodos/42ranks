import Head from "next/head"
import React from "react"

const Layout = (props) => {
	return (
		<div>
			<Head>
				<title>{props.pageTitle}</title>
			</Head>
			<div>
				{props.children}
			</div>
		</div>
	)
}
export default Layout