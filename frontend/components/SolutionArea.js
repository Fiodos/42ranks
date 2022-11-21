import React from "react"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic";
import "@uiw/react-textarea-code-editor/dist.css";
import SolutionButtons from "./SolutionButtons";

const CodeEditor = dynamic(
	() => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
	{ ssr: false }
  );

export default function SolutionArea() {
	const [code, setCode] = React.useState();
	const [name, setName] = useState("")

	useEffect(() => {
		fetchNames()
	})

	const fetchNames = async () => {
		const response = await fetch('http://localhost:3000/projects/1')
		const data = await response.json()
		setName(data.data[0].Name)
	}

	return (
		<div className="code-area w-4/12">
			<div className="border border-green-500">
				<CodeEditor
					type="text"
					minHeight={500}
					value={code}
					language="c"
					placeholder="Please enter your solution..."
					onChange={(evn) => setCode(evn.target.value)}
					padding={15}
					style={{
						fontSize: 12,
						backgroundColor: "#0000",
						fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
					}}
				/>
			</div>
				<SolutionButtons/>
			</div>
	)
}