import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

//Genera los Links
const links = [
  { href: '/', label: 'INICIO' },
  { href: '/ambientes/terraza-rooftop', label: 'AMBIENTE' },
  { href: '/historia', label: 'HISTORIA' },
  { href: '/menu', label: 'MENÚ' },
  { href: '/reserva', label: 'RESERVA' },
  { href: '/contacto', label: 'CONTACTO' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const NavMovil = () => {

  //url actual
  const [url, setUrl] = useState('');
  //estado de el Menú Hamburguesa
  const [pantalla, setPantalla] = useState(false);

  //obtiene la url actual
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/ambiente/2' || path === '/ambiente/3') {
      setUrl('/ambiente/1')
    } else {
      setUrl(path)
    }
  });

  //Activa/Desactiva el menú hamburguesa
  const onClick = () => {
    setPantalla(!pantalla)
  }

  // change color menu-hamburguer
  const colorHmburger = (urlActual) => {
    const color = (urlActual === '/reserva') || (urlActual === '/menu') || (urlActual === '/contacto')
      ? '#A99767' 
      : '#fff'

    return color
  }
  
  return (
  <nav>
    <Head>
      <title>Capital Bistró Panamá</title>
      <link rel="icon" href="/favicon.ico" />
      
    </Head> 
    <Link href="/">
      <a className="img">
        <img src={(url === '/contacto') || (url === '/reserva') || (url === '/menu')? '/img/Grupo-119.png' : '/img/Grupo-1101.png'} alt="Logo"/>
      </a>
    </Link>
    <button onClick={onClick} className="btnmenu">
      <svg className="close" viewBox="0 0 448 512">
        <path fill={colorHmburger(url)} d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
      </svg>
    </button>
    <div className="pantalla">
      <button onClick={onClick} className="btnclose">
        <svg className="menu" viewBox="0 0 352 512">
          <path  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
        </svg>  
      </button>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a style={{
                paddingBottom: url === href ? "3px" : "",
                borderBottom: url === href ? "4px solid white" : ""
              }}>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>

    <style jsx>{`
      
      .close {
        fill: ${ url === '/contacto' ? '#A99767' : 'white'};
      }
      
    `}</style>

    <style jsx>{`
      :global(*) {
        margin: 0;
        padding: 0;
      }

      :global(:root) {
        --sizeNav: 1;
      }

      .pantalla {
        position: fixed;
        height: 100vh;
        width: 100%;
        background: rgb(50,50,50,.8);
        display: grid;
        grid-template-columns: 1fr 1fr;
        transition: opacity .5s;
        transform: ${ pantalla ? '' : 'translate(200vw)'};
        opacity: ${ pantalla ? '1' : '0' }
      }

      button {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        margin: 30px;
        width: 30px;
        height: 35px;
      }

      .btnmenu {
        justify-self: flex-end;
        align-self: center; 
        transition: opacity .5s .2s;
        opacity: ${ pantalla ? '0' : '1' }
      }

      .btnclose {
        grid-column: 2/3;
        grid-row: 1/2;
        justify-self: flex-end; 
      }

      .menu {
        fill: white;
      }

      svg {
        width: 30px;
      }

      nav {
        position: absolute;
        width:100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        z-index: 1000;
      }

      img {
        margin: 20px calc( 70px * var(--sizeNav) );
        height: calc( 60px * var(--sizeNav) );
      }

      .img {
        justify-self: flex-start;
      }

      ul {
        margin: 20px calc( 60px * var(--sizeNav) );
        justify-self: center;
        align-self: center;
        grid-column: 1/3;
        grid-row: 1/2;
        display: grid;

      }

      li {
        display: inline;
        margin: 0 calc( 15px * var(--sizeNav) );
        font-size: calc( 14px * var(--sizeNav) );
        text-align: center;
        font-size: 20px;
        margin: 10px 0;
      }

      a {
        text-decoration: none;
        transition: border-bottom .3s;
        color: white;
      }

      a:hover {
        padding-bottom: 3px;
        border-bottom: 4px solid;
      }

      @media screen and (max-width: 970px) {
        :global(:root) {
          --sizeNav: .75;
        }
      }


      @media screen and (min-width: 721px) {

        nav {
          display: none;
        }

      }

    `}</style>
  </nav>
  
  )
}

export default NavMovil
