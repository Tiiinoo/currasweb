import './App.css';
import {Background} from './components/background';
import { NavBar } from './components/navBar';
import { MainThing } from './components/mainThing';
import { Footer } from './components/footer';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
			<>
				<div className="App">		
					<header className="App-header">
						<NavBar />						
					</header>
					<main className="Main-header">					
								<MainThing />
					</main>
					<footer className="App-footie">
						<Footer />
					</footer>
				</div>	
			</>
  );
}

export default App;
