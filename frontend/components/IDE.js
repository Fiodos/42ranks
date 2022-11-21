import QuestionArea from './QuestionArea'
import SolutionArea from './SolutionArea'
import Matrix from './Matrix'

export default function IDE() {
  return (
	<div className="flex flex-wrap space-x-28 pt-6">
		<Matrix/>
		<QuestionArea/>
		<SolutionArea/>
		<Matrix/>
	</div>
  )
}