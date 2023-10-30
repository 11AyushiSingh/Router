import { Link } from 'react-router-dom';
import './NavBar.css'
function NavBar(){
  return(
    <>
    <div className="Nav">
    <Link className='home' to="/">Home</Link>
    <Link className='books' to="/Books">Books</Link>
    <Link className='favorites' to="/School">Favorites</Link>
    </div>
    </>
  );
}
export default NavBar;