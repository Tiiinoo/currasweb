import React, { useState, useEffect } from 'react'
import { ClothesData } from '../clothesData'
// import { NavBar } from '../navBar'
import {Background} from '../background'
import { MainThing } from '../mainThing'
import { FilteredStuff } from '../filteredStuff'
import { useParams } from 'react-router-dom'

export function ShowClothes() {
	const [categories, setCategories] = useState([])
	const {id} = useParams()

	const catArray = () => {
		let clothesCat = ClothesData
		if (id != undefined) {
			clothesCat = ClothesData.find((item) => {
				return item.category == id
			})
			setCategories(clothesCat)
			console.log(id, clothesCat)
		} else {
			console.log(id, clothesCat)
		}
	}

	useEffect(() => {
		catArray()
	}, [id])

	return (
		<>
			{ id === categories.category && id != undefined
						?
							<FilteredStuff items={ ClothesData.filter(ClothesData => ClothesData.category == id) }/>
								:
									<MainThing slides={ ClothesData } /> 
								
			}
		</>
	)
}
