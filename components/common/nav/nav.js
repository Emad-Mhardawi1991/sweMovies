import Link from 'next/link';
import Button from '../../ui/button/button';
import classes from './nav.module.css'
import { MenuIcon, SearchIcon } from '@heroicons/react/solid'


const Nav = () => {




  return <nav className={classes.nav}>
    <Link href='/'>
      <div className={classes.logo}>Logo</div>
    </Link>
    <ul className={classes.nav_links}>
      <li className={classes.link}><Link href='/'>Home</Link></li>
      <li className={classes.link}><Link href='/movies'>Movies</Link></li>
      <li className={classes.link}><Link href='/tv-shows'>TV Shows</Link></li>
      <li className={classes.link}><Link href='/blog'>Blog</Link></li>
      <li className={classes.link}><Link href='/pricing'>Pricing</Link></li>
      <li className={classes.link}><Link href='/contact'>Contact</Link></li>
    </ul>

    <div className={classes.nav_right}>
      <SearchIcon className={classes.searchIcon}/>
      <Button className={classes.authBtn}>Sign In</Button>
      <MenuIcon className={classes.menuIcon}/>
    </div>
  </nav>;
};

export default Nav;
