import React, { useState } from 'react'
import { ClothesData } from '../clothesData'
// import { NavBar } from '../navBar'
import {Background} from '../background'
import { MainThing } from '../mainThing'
import { FilteredStuff } from '../filteredStuff'
import { useParams } from 'react-router-dom'

export function ShowClothes() {
	const {id} = useParams()

	return (
		<>
			<Background />
			{ id == null 
						?
						<MainThing slides={ ClothesData } /> 
							:
								<FilteredStuff items={ ClothesData.filter(ClothesData => ClothesData.category == id) }/>
			}
		</>
	)
}
