import React from "react";
import Terminator from "../Terminator/Terminator";

const TerminatorList = ({ models }) => {
	const terminatorComponents = models.map(
		(model) => {
			return (
				<Terminator
					id={model.id}
					name={model.name}
					serialNumber={model.serialNumber}
				/>
			)
		}
	)
	return (
		<div>
			{terminatorComponents}
		</div>
	)
}
export default TerminatorList;