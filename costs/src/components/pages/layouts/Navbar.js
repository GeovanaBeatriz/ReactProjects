import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'


function Navbar(){
    return(
        <nav className={styles.navbar}>
        <Container>
        <Link></Link>
        <ul className={styles.list}>
            <li className={styles.item}><Link to='/'>Home</Link></li>
            <li className={styles.item}><Link to='/project'>Projects</Link></li>
            <li className={styles.item}><Link to='/company'>Company</Link></li>
            <li className={styles.item}><Link to='/contact'>Contact</Link></li>
            <li className={styles.item}><Link to='/newProject'>New Project</Link></li>
        </ul>
        </Container>
      </nav>
    )
}

export default Navbar