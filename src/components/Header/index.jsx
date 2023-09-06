import { Link } from 'react-router-dom'

// images
import Icon from '../../images/icon.png'

// styles
import './styles.css'

export default function Header() {

    return (
        <header className='header' >
            <img className='img-icon' src={Icon} alt='Application icon.' />

            <nav className='nav'>
                <Link style={{textDecoration: 'none'}} to='/'>
                    <span className='span-link'>Home</span>
                </Link>
                
                <Link style={{textDecoration: 'none'}} to='/about'>
                    <span className='span-link'>About</span>
                </Link>

                <Link style={{textDecoration: 'none'}} to='/privacy-policy'>
                    <span className='span-link'>Privacy Policy</span>
                </Link>

                <Link style={{textDecoration: 'none'}} to='/delete-account'>
                    <span className='span-link'>Delete Account</span>
                </Link>
            </nav>
        </header>
    )
}