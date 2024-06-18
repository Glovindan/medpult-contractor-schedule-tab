import { ItemDataString } from '../../../UIKit/CustomList/CustomListTypes'

/** Строка режима работы */
export interface ScheduleItem {
	/** День недели */
	day: ItemDataString
	/** Начало работы */
	startTime: ItemDataString
	/** Окончание работы */
	endTime: ItemDataString
	/** Круглосуточно */
	isClockround: ItemDataString
	/** Не работает */
	isNotWorkink: ItemDataString
}
