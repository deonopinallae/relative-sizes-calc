
export const Calc = ({
	input1Ref,
	input2Ref,
	input1Val,
	input2Val,
	resultRef,
	onCalculate,
	onKeyPress,
    className
}: CalcProps) => {
	return (
		<div className={`${className} wrapper`}>
			<input
				className="input1"
				placeholder={input1Val}
				type="number"
				ref={input1Ref}
				onKeyDown={onKeyPress}
			/>
			<input
				className="input2"
				placeholder={input2Val}
				type="number"
				ref={input2Ref}
				onKeyDown={onKeyPress}
			/>
			<button onClick={onCalculate}>calculate</button>
			<div className="result" ref={resultRef}></div>
		</div>
	)
}

interface CalcProps {
	input1Val: string
	input2Val: string
	input1Ref: React.RefObject<HTMLInputElement>
	input2Ref: React.RefObject<HTMLInputElement>
	resultRef: React.RefObject<HTMLDivElement>
	onCalculate: () => void
	onKeyPress: (e: React.KeyboardEvent) => void,
    class: string,
}
