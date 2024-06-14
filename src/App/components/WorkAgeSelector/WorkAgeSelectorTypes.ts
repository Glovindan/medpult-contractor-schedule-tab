import { ObjectItem } from '../../../UIKit/Filters/FiltersTypes'

/** Данные элемента возрастной группы */
export class WorkAgeVariant extends ObjectItem {
	selected: boolean

	constructor({ value, code, selected }: { value?: string; code?: string; selected?: boolean }) {
		super({ value, code })
		this.selected = selected || false
	}
}
