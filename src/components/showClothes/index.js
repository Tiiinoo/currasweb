import React, { useState } from 'react'
import { ClothesData } from '../clothesData'
import { MainThing } from '../mainThing'
import { useParams } from 'react-router-dom'

export function ShowClothes() {

	
	return (
		<>
			<MainThing slides={ ClothesData } />
		</>
	)
}
