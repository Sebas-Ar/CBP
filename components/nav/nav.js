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

const Nav = () => {

  //url actual
  const [url, setUrl] = useState('');

  //Obtiene la url
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/ambiente/2' || path === '/ambiente/3') {
      setUrl('/ambiente/1')
    } else {
      setUrl(path)
    }
  });
  
  return (
  <nav>
    <Head>
      <title>Capital Bistró Panamá</title>
      <link rel="icon" href="/favicon.ico" />
      
    </Head> 
    <Link href="/">
      <a className="img">
        <img src={(url === '/contacto') || (url === '/reserva') ? '/img/Grupo-119.png' : '/img/Grupo-1101.png'} alt="Logo"/>
      </a>
    </Link>
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <Link href={href}>
            {
              ((url === '/menu') || (url === '/contacto')) 
                ? <a className="link" style={{
                    color: '#A99767',
                    paddingBottom: url === href ? "3px" : "",
                    borderBottom: url === href ? "4px solid #A99767" : ""
                  }}>{label}</a>
                : <a className="link" style={{
                    color: 'white',
                    paddingBottom: url === href ? "3px" : "",
                    borderBottom: url === href ? "4px solid white" : ""
                  }}>{label}</a>
            }
          </Link>
        </li>
      ))}
    </ul>
    
    <style jsx>{`
      @font-face {
          font-family: Raleway;
          src: url("/fonts/Raleway-Light.ttf");
      }

      
      :global(*) {
        margin: 0;
        padding: 0;
        font-family: Raleway;
      }

      :global(:root) {
        --sizeNav: 1;
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
        justify-self: flex-end;
      }

      li {
        display: inline;
        margin: 0 calc( 15px * var(--sizeNav) );
        font-size: calc( 14px * var(--sizeNav) );
      }

      .link {
        text-decoration: none;
        transition: border-bottom .3s;
      }

      .link:hover {
        padding-bottom: 3px;
        border-bottom: 4px solid ;
      }

      @media screen and (max-width: 970px) {
        :global(:root) {
          --sizeNav: .75;
        }
      }

      @media screen and (max-width: 720px) {
        :global(:root) {
          --sizeNav: .6;
        }
      }

    `}</style>
  </nav>
  
  )
}

export default Nav
