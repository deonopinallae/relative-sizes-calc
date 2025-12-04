import { useRef } from 'react'
import { Calc } from '../calc'

export const PxToRemCalc = () => {
	const remInput1Ref = useRef<HTMLInputElement>(null)
	const remInput2Ref = useRef<HTMLInputElement>(null)
	const remResultRef = useRef<HTMLDivElement>(null)

	const pxToRemCalc = () => {
		const input1 = remInput1Ref.current
		const input2 = remInput2Ref.current
		const resultInp = remResultRef.current
		if (!input1 || !input2 || !resultInp) return

		let input1Val = Number(input1.value) || 16
		if (Number(input2.value) === 0 || isNaN(Number(input2.value))) {
			resultInp.innerHTML = 'enter a number'
			return
		}

		const result = (Number(input2.value) / input1Val).toFixed(2)
		resultInp.innerHTML = `${result}rem`
		navigator.clipboard.writeText(resultInp.innerHTML)
		input2.value = ''
	}

	const handleRemKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') pxToRemCalc()
	}

	return (
		<>
			<Calc
				input1Val="font size (default 16px)"
				input2Val="px"
				input1Ref={remInput1Ref}
				input2Ref={remInput2Ref}
				resultRef={remResultRef}
				onCalculate={pxToRemCalc}
				onKeyPress={handleRemKeyPress}
				className="rem"
			/>
		</>
	)
}
