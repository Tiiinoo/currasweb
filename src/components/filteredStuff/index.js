import React from 'react'
import './filteredStuff.css'
import { useParams } from 'react-router-dom'

export function FilteredStuff({items = []}) {
	const {id} = useParams()

	console.log(items)
	
	return (

		<>
		 <div className="articlesContainer">
		 	<p>Acá te filtro los {id}</p>
			 {items.map((data, index) => (
			 <img src={data.image} key={index} />
		 ))}
		 </div>
		</>
	)
}
