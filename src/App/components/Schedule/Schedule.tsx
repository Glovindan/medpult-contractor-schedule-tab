import React, { useEffect, useState } from 'react';
import CustomList from '../../../UIKit/CustomList/CustomList';
import { FetchData, ItemData, ListColumnData, SortData } from '../../../UIKit/CustomList/CustomListTypes';
import { SelectTaskData } from '../../shared/types';
import utils from '../../shared/utils/utils';
import { operatingModeTabContext } from '../../stores/operatingModeTabContext';
import Scripts from '../../shared/utils/clientScripts';
import { ScheduleItem } from './ScheduleTypes';
import { ObjectItem } from '../../../UIKit/Filters/FiltersTypes';

interface ScheduleProps {
}

interface SearchData {
	/** Вид медицинской помощи */
	workRisk?: ObjectItem
	/** Возрастная категория */
	workAge?: ObjectItem
}

/** Таблица с режимом работы */
export default function Schedule({ }: ScheduleProps) {
	const { data, setValue } = operatingModeTabContext.useContext();
	const [searchData, setSearchData] = useState<SearchData>({
		workRisk: data.workRisk,
		workAge: data.workAge
	});

	/** Установка обработчика нажатия на поиск */
	const setSearchHandler = (callback: () => void) => {
		setValue("searchHandler", callback)
	}

	/** Колонки списка */
	const columns = [
		new ListColumnData({ name: "день недели", code: "day", fr: 1 }),
		new ListColumnData({ name: "Начало работы", code: "startTime", fr: 1 }),
		new ListColumnData({ name: "окончание работы", code: "endTime", fr: 1 }),
		new ListColumnData({ name: "круглосуточно", code: "isClockround", fr: 1 }),
		new ListColumnData({ name: "не работает", code: "isNotWorkink", fr: 1 }),
	]

	const getDataHandler = async (page: number, sortData?: undefined, searchData?: SearchData) => {
		return Scripts.getSchedule({ workAge: searchData?.workAge, workRisk: searchData?.workRisk })
	}

	/** Установка данных поиска */
	useEffect(() => {
		setSearchData({
			workRisk: data.workRisk,
			workAge: data.workAge
		})
	}, [data.workAge, data.workRisk])

	/** Поиск */
	useEffect(() => {
		data.searchHandler();
	}, [data.searchHandler])

	return (
		<div className="schedule">
			<CustomList<SearchData, ScheduleItem> searchData={searchData} setSearchHandler={setSearchHandler} columnsSettings={columns} getDataHandler={getDataHandler} isScrollable={false} />
		</div>
	)
}