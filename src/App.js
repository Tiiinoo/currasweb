import './App.css';
import { Policies } from './components/policies';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { Route, Routes } from "react-router-dom";
import { ShowClothes } from './components/showClothes'
import {Background} from './components/background'

import { NavBar } from './components/navBar'


function App() {
  return (
			<>
				<div className="app">	
						<Background />
						<NavBar />
						
						<Routes>
							<Route path="/" element={<ShowClothes />} />
							<Route path="/category/:id" element={<ShowClothes />} />
							<Route path="/about" element={<About />} />
							<Route path="/policies" element={<Policies />} />
							<Route path="/contact" element={<Contact />} />
						</Routes>	
						<Footer />
				</div>
			</>
  );
}

export default App;
