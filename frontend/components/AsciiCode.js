import Image from 'next/image'

export function RanksPic() {
  return (
    <div>
      <Image src='/../public/ranks_ascii_thin.png' width={300} height={300} />
    </div>
  )
}

export default function RanksPicThick() {
	return (
		<div>
      <Image src='/../public/ranks_ascii_thick.png' width={700} height={700} />
	  	</div>
	)
}