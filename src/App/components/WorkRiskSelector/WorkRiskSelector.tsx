import React, { PropsWithChildren, useEffect, useState } from 'react'
import { operatingModeTabContext } from '../../stores/operatingModeTabContext'
import CustomSelect from '../../../UIKit/CustomSelect/CustomSelect';
import Scripts from '../../shared/utils/clientScripts';
import { ObjectItem } from '../../../UIKit/Filters/FiltersTypes';

interface WorkRiskSelectorProps {
}


/** Компонент выбора вида медицинской помощи */
function WorkRiskSelector({ }: PropsWithChildren<WorkRiskSelectorProps>) {
	const { data, setValue } = operatingModeTabContext.useContext();
	console.log(data)

	/** Обработчик выбора значения */
	const setValueHandler = (value: string, code?: string) => {
		console.log(data)
		setValue("workRisk", new ObjectItem({ value, code }))
	}

	return (
		<div className="work-risk-selector">
			<div className="work-risk-selector__title">ВМП:</div>
			<div className="work-risk-selector__selector">
				<CustomSelect setValue={setValueHandler} getDataHandler={Scripts.getWorkRiskVariants} value={data.workRisk?.value} />
			</div>
		</div>
	)
}

export default WorkRiskSelector
