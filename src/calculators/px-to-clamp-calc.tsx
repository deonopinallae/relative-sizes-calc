import { useRef } from 'react'
import { Calc } from '../calc'

export const PxToClampCalc = () => {
	const clampInput1Ref = useRef<HTMLInputElement>(null)
	const clampInput2Ref = useRef<HTMLInputElement>(null)
	const clampResultRef = useRef<HTMLDivElement>(null)

	const pxToClampCalc = () => {
		const input1 = clampInput1Ref.current
		const input2 = clampInput2Ref.current
		const resultInp = clampResultRef.current
		if (!input1 || !input2 || !resultInp) return

		let input1Val = Number(input1.value) || 1440
		if (Number(input2.value) === 0 || isNaN(Number(input2.value))) {
			resultInp.innerHTML = 'enter a number'
			return
		}

		const result = ((Number(input2.value) / input1Val) * 100).toFixed(2)
		resultInp.innerHTML = `clamp(${Math.round(Number(input2.value) / 1.5)}px, ${result}vw, ${Number(input2.value)}px)`
		navigator.clipboard.writeText(resultInp.innerHTML)
		input2.value = ''
	}

	const handleClampKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') pxToClampCalc()
	}

	return (
		<>
			<Calc
				input1Val="viewport (default 1440px)"
				input2Val="px"
				input1Ref={clampInput1Ref}
				input2Ref={clampInput2Ref}
				resultRef={clampResultRef}
				onCalculate={pxToClampCalc}
				onKeyPress={handleClampKeyPress}
				className="vw"
			/>
		</>
	)
}
