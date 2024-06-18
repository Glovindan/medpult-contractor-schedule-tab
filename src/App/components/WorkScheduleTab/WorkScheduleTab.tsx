import React, { useEffect } from 'react';
import { operatingModeTabContext } from '../../stores/operatingModeTabContext';
import WorkAgeSelector from '../WorkAgeSelector/WorkAgeSelector';
import WorkRiskSelector from '../WorkRiskSelector/WorkRiskSelector';
import Schedule from '../Schedule/Schedule';

interface OperatingModeTabProps {
}

/** Вкладка Режим работы */
function WorkScheduleTab() {
	const [data, setValue] = operatingModeTabContext.useState();

	return (
		<operatingModeTabContext.Provider value={{ data, setValue }}>
			<div className="work-schedule-tab">
				<div className="work-schedule-tab__settings">
					<WorkAgeSelector />
					<WorkRiskSelector />
				</div>
				<Schedule />
			</div>
		</operatingModeTabContext.Provider >
	)
}

export default WorkScheduleTab
