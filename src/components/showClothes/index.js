import React, { useState } from 'react'
import { ClothesData } from '../clothesData'
import { MainThing } from '../mainThing'

export function ShowClothes() {

	return (
		<>
			<MainThing slides={ ClothesData } />
		</>
	)
}
