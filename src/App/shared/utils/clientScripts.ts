import {
	FetchData,
	FetchItem,
	ItemData,
	ItemDataString,
} from '../../../UIKit/CustomList/CustomListTypes'
import { ObjectItem } from '../../../UIKit/Filters/FiltersTypes'
import { ScheduleItem } from '../../components/Schedule/ScheduleTypes'

/** Заглушка ожидания ответа сервера */
function randomDelay() {
	const delay = Math.random() * 1000
	return new Promise((resolve) => {
		setTimeout(resolve, delay)
	})
}

/** Получение вариантов возрастной группы */
async function getWorkAgeVariants(): Promise<ObjectItem[]> {
	await randomDelay()
	return [
		new ObjectItem({ value: 'Дети', code: 'children' }),
		new ObjectItem({ value: 'Взрослые', code: 'adults' }),
	]
}

/** Получение вариантов ВМП */
async function getWorkRiskVariants(): Promise<ObjectItem[]> {
	await randomDelay()
	return [
		new ObjectItem({ value: 'Амбулаторно-поликлиническая помощь', code: 'test1' }),
		new ObjectItem({ value: 'test2', code: 'test2' }),
		new ObjectItem({ value: 'test3', code: 'test3' }),
	]
}

/** Получение режима работы */
async function getSchedule({
	workAge,
	workRisk,
}: {
	workAge?: ObjectItem
	workRisk?: ObjectItem
}): Promise<FetchData<ScheduleItem>> {
	if (!workAge || !workRisk)
		return {
			items: [],
			hasMore: false,
		}

	await randomDelay()
	const items: FetchItem<ScheduleItem>[] = [
		{
			id: 'test',
			data: {
				day: new ItemDataString('Понедельник'),
				startTime: new ItemDataString('08:00:00'),
				endTime: new ItemDataString('20:00:00'),
				isClockround: new ItemDataString('Нет'),
				isNotWorkink: new ItemDataString('Нет'),
			},
		},
		{
			id: 'test',
			data: {
				day: new ItemDataString('Понедельник'),
				startTime: new ItemDataString('08:00:00'),
				endTime: new ItemDataString('20:00:00'),
				isClockround: new ItemDataString('Нет'),
				isNotWorkink: new ItemDataString('Нет'),
			},
		},
		{
			id: 'test',
			data: {
				day: new ItemDataString('Понедельник'),
				startTime: new ItemDataString('08:00:00'),
				endTime: new ItemDataString('20:00:00'),
				isClockround: new ItemDataString('Нет'),
				isNotWorkink: new ItemDataString('Нет'),
			},
		},
		{
			id: 'test',
			data: {
				day: new ItemDataString('Понедельник'),
				startTime: new ItemDataString('08:00:00'),
				endTime: new ItemDataString('20:00:00'),
				isClockround: new ItemDataString('Нет'),
				isNotWorkink: new ItemDataString('Нет'),
			},
		},
	]

	return {
		items: items,
		hasMore: false,
	}
}

export default { getWorkAgeVariants, getWorkRiskVariants, getSchedule }
