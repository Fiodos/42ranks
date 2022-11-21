import { useState, useEffect } from 'react'


export default function QuestionArea() {

	const [description, setDescription] = useState("")
	const [name, setName] = useState("")
	const [score, setScore] = useState("")

	useEffect(() => {
		fetchProjects()
		fetchNames()
		fetchScore()
	})

	// the one inside the url should be dynamic
	const fetchProjects = async () => {
		const response = await fetch('http://localhost:3000/projects/1')
		const data = await response.json()
		setDescription(data.data[0].Description)
		console.log(data)
	}

	const fetchNames = async () => {
		const response = await fetch('http://localhost:3000/projects/1')
		const data = await response.json()
		setName(data.data[0].Name)
		console.log(data)
	}

	const fetchScore = async () => {
		const response = await fetch('http://localhost:3000/projects/1')
		const data = await response.json()
		setScore(data.data[0].Score)
		console.log(data)
	}

	return (
		<div className="question">
			<h2 className="font-mono pb-4">{name}()</h2>
			<h3 className="font-mono text-base pb-4">xp: {score}</h3>
			<h3 className="font-mono text-base pb-4">difficulty: easy peasy</h3>
			<div className="font-mono text-xs p-4 w-96 border-2 rounded-xl border-green-500">
				{description}
			</div>
		</div>
	)
}