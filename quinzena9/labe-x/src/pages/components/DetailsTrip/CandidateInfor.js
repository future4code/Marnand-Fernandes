import React from 'react';

const CandidateInfor = (props) => {
	const acceptCandidate = () => {
		props.decide(true, props.candidate.id);
	}

	const rejectCandidate = () => {
		props.decide(false, props.candidate.id);
	}

	return (
		<div>

			{props.candidate.name}
			<button className="btn" onClick={acceptCandidate}>sim</button>
			<button className="btn" onClick={rejectCandidate}>não</button>

		</div>
	);
};

export default CandidateInfor;