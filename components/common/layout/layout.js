import { useState,useEffect } from 'react';
import classes from './layout.module.css'
import Nav from "../nav/nav";
import Footer from '../footer/footer';


const Layout = (props) => {
  const [isScroll, setIsScroll] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      const scrollY = window.scrollY;
      if(scrollY > 0){
        setIsScroll(true)
      }else{
        setIsScroll(false)  
      }
    })

   
  })


  return (
    <div>
      <header className={`${classes.header} ${isScroll &&'bg-primary_black transition duration-150'}`}>
        <Nav/>
      </header>
      <main>{props.children}</main>
      <footer className='pt-20 bg-primary_black'>
        <Footer/>
      </footer>
    </div>
  );
};

export default Layout;
