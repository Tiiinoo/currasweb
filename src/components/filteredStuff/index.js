import React from 'react'
import './filteredStuff.css'
import { useParams } from 'react-router-dom'

export function FilteredStuff({items = []}) {
	const {id} = useParams()

	const teta = () => console.log(id)
	
	return (

		<>
		 <div className="articlesContainer">
		 	<p>Acá filtro los {id}</p>
			 {items.map((data, index) => (
			 <img src={data.image} alt={data.alt} key={index} onClick={teta} />
		 ))}
		 </div>
		</>
	)
}
