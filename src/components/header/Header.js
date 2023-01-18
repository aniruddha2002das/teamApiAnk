import Searchbar from "./Searchbar"
import Navbar from "./Navbar"

export default function Header() {
	return (
		<>
			<header>
				<div className='name'> medi<span>a</span></div>
				<Searchbar />
				<Navbar/>
				
			</header>
			<div className="hr"></div>
		</>
	)
}
