import { ObjectItem } from '../../../UIKit/Filters/FiltersTypes'

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

export default { getWorkAgeVariants, getWorkRiskVariants }
