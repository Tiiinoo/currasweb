import React, { useState, useEffect } from 'react'
import { ClothesData } from '../clothesData'
import { MainThing } from '../mainThing'
import { FilteredStuff } from '../filteredStuff'
import { useParams } from 'react-router-dom'

export function ShowClothes() {
	// const [clothesList, setClothesList] = useState([])
	const {id} = useParams()

	// console.log({id})
	
	useEffect(() => {
		console.log('Id:', id)
		return () => {
			console.log('Id:', id)
		}
	}, [id])
	return (
		<>
			{ id == null 
						?
						<MainThing slides={ ClothesData } /> 
							:
								<FilteredStuff items={ ClothesData.filter(ClothesData => ClothesData.category == id) }/>
			}
		</>
	)
}
