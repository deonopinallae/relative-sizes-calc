import { PxToClampCalc } from './calculators/px-to-clamp-calc'
import { PxToRemCalc } from './calculators/px-to-rem-calc'

export const App = () => {
	return (
		<>
			<PxToRemCalc />
			<PxToClampCalc />
		</>
	)
}
