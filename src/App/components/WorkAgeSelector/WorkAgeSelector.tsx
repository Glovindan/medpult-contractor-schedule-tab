import React, { PropsWithChildren, useEffect, useState } from 'react'
import { operatingModeTabContext } from '../../stores/operatingModeTabContext'
import { ObjectItem } from '../../../UIKit/Filters/FiltersTypes';
import Scripts from '../../shared/utils/clientScripts';
import { WorkAgeVariant } from './WorkAgeSelectorTypes';
import WorkAgeOption from './WorkAgeOption/WorkAgeOption';

interface WorkAgeSelectorProps {
}


/** Компонент выбора возрастной группы */
function WorkAgeSelector({ }: PropsWithChildren<WorkAgeSelectorProps>) {
	const { data, setValue } = operatingModeTabContext.useContext();
	const [options, setOptions] = useState<WorkAgeVariant[]>([])
	const [possibleOptions, setPossibleOptions] = useState<ObjectItem[]>([])

	// Получение вариантов
	const getVariants = async () => {
		// Выбранный вариант (По-умолчанию первый)
		const currentOption = data.workAge ?? possibleOptions[0];

		const options: WorkAgeVariant[] = possibleOptions.map(option => {
			const selected = option.code === currentOption.code;

			return new WorkAgeVariant({ ...option, selected })
		})

		setOptions(options)
	}

	// Получение всех возможных вариантов
	React.useLayoutEffect(() => { Scripts.getWorkAgeVariants().then(options => setPossibleOptions(options)) }, [])
	// Отрисовка вариантов при изменении выбранного варианта
	React.useLayoutEffect(() => { getVariants() }, [data.workAge, possibleOptions])

	/** factory обработчика нажатия на вариант */
	const onClickOptionFactory = (code: string) => {
		return () => setValue("workAge", new ObjectItem({ code: code }))
	}

	return (
		<div className="work-age-selector">
			<div className="work-age-selector__title">Режим работы:</div>
			<div className="work-age-selector__options">
				{
					options?.map(option => <WorkAgeOption {...option} clickHandler={onClickOptionFactory(option.code)} />)
				}
			</div>
		</div>
	)
}

export default WorkAgeSelector
