import React from 'react'
import { initGlobalContext } from './GlobalContext'
import { ObjectItem } from '../../UIKit/Filters/FiltersTypes'

/** Данные вкладки */
export class OperatingModeTabData {
	/** Вид медицинской помощи */
	workRisk?: ObjectItem
	/** Возрастная категория */
	workAge?: ObjectItem

	constructor() {}
}

export const operatingModeTabContext = initGlobalContext<OperatingModeTabData>(
	new OperatingModeTabData()
)
