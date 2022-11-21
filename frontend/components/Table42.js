import Image from "next/image"
import { useEffect } from "react"

export default function Table42() {
	const users = [
		"lorbke",
		"fyuzhyk",
		"mhedtman",
		"pgeseer",
		"jschneid",
		"dgross",
		"jwillert",
		"mheinze"
	]

	const scores = [
		"2450",
		"2220",
		"2100",
		"2001",
		"2000",
		"1988",
		"1974",
		"420",
	]

	const links = [
		"https://avatars.githubusercontent.com/u/82974473?v=4",
		"https://avatars.githubusercontent.com/u/86247590?v=4",
		"https://avatars.githubusercontent.com/u/74193326?v=4",
		"https://avatars.githubusercontent.com/u/25722176?v=4",
		"https://avatars.githubusercontent.com/u/92728359?v=4",
		"https://avatars.githubusercontent.com/u/103501922?v=4",
		"https://avatars.githubusercontent.com/u/99881471?v=4",
		"https://avatars.githubusercontent.com/u/60296042?v=4"
	]

	return (
		<div class="flex flex-col">
		<div class="overflow-x-auto m:-mx-6 lg:-mx-8">
			<div class="py-2 inline-block min-w-full m:px-6 lg:px-8">
			<div class="overflow-hidden">
				<table class="min-w-full">
				<thead class="border-b border-[#32682F]">
					<tr>
					<th scope="col" class="text-base font-mono text-[#32682F] px-6 py-4 text-left">
						Ranking
					</th>
					<th scope="col" class="text-base font-mono text-[#32682F] px-6 py-4 text-center">
						Intra
					</th>
					<th scope="col" class="text-base font-mono text-[#32682F] px-6 py-4 text-left">
						42rank XP
					</th>
					</tr>
				</thead>
				<tbody>
				{
					users.map((user, index) => (
						<tr className="border-b border-[#32682F]">
						<div className="mt-3 ml-10">
							<Image src={links[index]} width={35} height={35} style={{borderRadius: '10px', overflow: 'hidden'}}/>
						</div>
						<td className="text-base text-[#32682F] font-mono px-6 py-4 whitespace-nowrap text-center">
							{user}
						</td>
						<td className="text-base text-[#32682F] font-mono px-6 py-4 whitespace-nowrap">
							{scores[index]}
						</td>
						</tr>
					))
				}
				</tbody>
				</table>
			</div>
			</div>
		</div>
		</div>
	)
}