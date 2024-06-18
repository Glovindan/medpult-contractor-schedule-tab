import React from 'react';
import { WorkAgeVariant } from '../WorkAgeSelectorTypes';

interface WorkAgeOptionProps extends WorkAgeVariant {
	clickHandler: () => void;
}

/** Компонент выбора возрастной группы */
function WorkAgeOption({ value, code, selected, clickHandler }: WorkAgeOptionProps) {
	return (
		<div onClick={clickHandler} className={`work-age-option ${selected ? 'work-age-option_selected' : ''}`}>
			{value}
		</ div>
	)
}

export default WorkAgeOption
