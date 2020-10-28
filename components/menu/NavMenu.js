import React, { useState, useEffect } from 'react'
import NavList from './NavList';
import NavButton from './NavButton';
import ItemList from './ItemList';
import Item from './Item';

// CARTA
import licores from './carta/licoresList'
import tapas from './carta/tapasList'
import fuertes from './carta/fuertesList'
import bebidas from './carta/bebidasList'

const NavMenu = (props) => {
    
    //Menu principal seleccionado
    const [menu, setMenu] = useState(0);
    //submenú seleccionado
    const [submenu, setSubmenu] = useState(0);
    //Item seleccionado
    const [item, setItem] = useState(0);
    //muestra el área de comentarios
    const [turnOn, setTurnOn] = useState(false);

    //Obtiene la ubicacion del menú principal del elemnto padre
    useEffect(() => {
        props.change(menu)
    });

    //Cambia el submenu y el item a la posicion '0' al cambiar el munú principal
    useEffect(() => {
        setItem(0)
        setSubmenu(0)
    }, [menu]);
    
    //Cambia el item a la posicion '0' al cambiar el submunú
    useEffect(() => {
        setItem(0)
    }, [submenu]);


    //Funcion pasada a los NavButton para cambiar el menú principal
    function changeBut(men) {
        setMenu(men)
    }

    //Funcion pasada a los NavList para cambiar el submenú
    function changeLi(sub) {
        setSubmenu(sub)
    }

    //Funcion pasada a los ItemList para cambiar el item
    function changeItem(it) {
        setItem(it)
    }

    //Funcion pasada a item para activar/desactivar lo comentarios
    const comments = () => {
        setTurnOn(!turnOn)
    }

    const items = 
    [
        //Licores
        [
            <React.Fragment>
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[0][0][0]} price={licores[0][0][1]} text={licores[0][0][2]} category={licores[0][0][3]} change="0" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[0][1][0]} price={licores[0][1][1]} text={licores[0][1][2]} category={licores[0][1][3]} change="1" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[0][2][0]} price={licores[0][2][1]} text={licores[0][2][2]} category={licores[0][2][3]} change="2" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[0][3][0]} price={licores[0][3][1]} text={licores[0][3][2]} category={licores[0][3][3]} change="3" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[0][4][0]} price={licores[0][4][1]} text={licores[0][4][2]} category={licores[0][4][3]} change="4" />
            </React.Fragment>,
            <React.Fragment>
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[1][0][0]} price={licores[1][0][1]} text={licores[1][0][2]} category={licores[1][0][3]} change="0" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[1][1][0]} price={licores[1][1][1]} text={licores[1][1][2]} category={licores[1][1][3]} change="1" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[1][2][0]} price={licores[1][2][1]} text={licores[1][2][2]} category={licores[1][2][3]} change="2" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[1][3][0]} price={licores[1][3][1]} text={licores[1][3][2]} category={licores[1][3][3]} change="3"/>
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[1][4][0]} price={licores[1][4][1]} text={licores[1][4][2]} category={licores[1][4][3]} change="4"/>
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[1][5][0]} price={licores[1][5][1]} text={licores[1][5][2]} category={licores[1][5][3]} change="5"/>
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[1][6][0]} price={licores[1][6][1]} text={licores[1][6][2]} category={licores[1][6][3]} change="6"/>
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[1][7][0]} price={licores[1][7][1]} text={licores[1][7][2]} category={licores[1][7][3]} change="7"/>
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[1][8][0]} price={licores[1][8][1]} text={licores[1][8][2]} category={licores[1][8][3]} change="8"/>
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[1][9][0]} price={licores[1][9][1]} text={licores[1][9][2]} category={licores[1][9][3]} change="9"/>
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[1][10][0]} price={licores[1][10][1]} text={licores[1][10][2]} category={licores[1][10][3]} change="10"/>
            </React.Fragment>,
            <React.Fragment>
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[2][0][0]} price={licores[2][0][1]} text={licores[2][0][2]} category={licores[2][0][3]} change="0" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[2][1][0]} price={licores[2][1][1]} text={licores[2][1][2]} category={licores[2][1][3]} change="1" />
            </React.Fragment>,
            <React.Fragment>
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[3][0][0]} price={licores[3][0][1]} text={licores[3][0][2]} category={licores[3][0][3]} change="0" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[3][1][0]} price={licores[3][1][1]} text={licores[3][1][2]} category={licores[3][1][3]} change="1" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[3][2][0]} price={licores[3][2][1]} text={licores[3][2][2]} category={licores[3][2][3]} change="2" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[3][3][0]} price={licores[3][3][1]} text={licores[3][3][2]} category={licores[3][3][3]} change="3" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[3][4][0]} price={licores[3][4][1]} text={licores[3][4][2]} category={licores[3][4][3]} change="4" />
            </React.Fragment>,
            <React.Fragment>
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[4][0][0]} price={licores[4][0][1]} text={licores[4][0][2]} category={licores[4][0][3]} change="0" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[4][1][0]} price={licores[4][1][1]} text={licores[4][1][2]} category={licores[4][1][3]} change="1" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[4][2][0]} price={licores[4][2][1]} text={licores[4][2][2]} category={licores[4][2][3]} change="2" />
            </React.Fragment>,
            <React.Fragment>
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[5][0][0]} price={licores[5][0][1]} text={licores[5][0][2]} category={licores[5][0][3]} change="0" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[5][1][0]} price={licores[5][1][1]} text={licores[5][1][2]} category={licores[5][1][3]} change="1" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[5][2][0]} price={licores[5][2][1]} text={licores[5][2][2]} category={licores[5][2][3]} change="2" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[5][3][0]} price={licores[5][3][1]} text={licores[5][3][2]} category={licores[5][3][3]} change="3" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[5][4][0]} price={licores[5][4][1]} text={licores[5][4][2]} category={licores[5][4][3]} change="4" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[5][5][0]} price={licores[5][5][1]} text={licores[5][5][2]} category={licores[5][5][3]} change="5" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[5][6][0]} price={licores[5][6][1]} text={licores[5][6][2]} category={licores[5][6][3]} change="6" />
            </React.Fragment>,
            <React.Fragment>
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[6][0][0]} price={licores[6][0][1]} text={licores[6][0][2]} category={licores[6][0][3]} change="0" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[6][1][0]} price={licores[6][1][1]} text={licores[6][1][2]} category={licores[6][1][3]} change="1" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[6][2][0]} price={licores[6][2][1]} text={licores[6][2][2]} category={licores[6][2][3]} change="2" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[6][3][0]} price={licores[6][3][1]} text={licores[6][3][2]} category={licores[6][3][3]} change="3" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[6][4][0]} price={licores[6][4][1]} text={licores[6][4][2]} category={licores[6][4][3]} change="4" />
            </React.Fragment>,
            <React.Fragment>
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[7][0][0]} price={licores[7][0][1]} text={licores[7][0][2]} category={licores[7][0][3]} change="0" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[7][1][0]} price={licores[7][1][1]} text={licores[7][1][2]} category={licores[7][1][3]} change="1" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[7][2][0]} price={licores[7][2][1]} text={licores[7][2][2]} category={licores[7][2][3]} change="2" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[7][3][0]} price={licores[7][3][1]} text={licores[7][3][2]} category={licores[7][3][3]} change="3" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[7][4][0]} price={licores[7][4][1]} text={licores[7][4][2]} category={licores[7][4][3]} change="4" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[7][5][0]} price={licores[7][5][1]} text={licores[7][5][2]} category={licores[7][5][3]} change="5" />
            </React.Fragment>,
            <React.Fragment>
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[8][0][0]} price={licores[8][0][1]} text={licores[8][0][2]} category={licores[8][0][3]} change="0" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[8][1][0]} price={licores[8][1][1]} text={licores[8][1][2]} category={licores[8][1][3]} change="1" />
            </React.Fragment>,
            <React.Fragment>
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[9][0][0]} price={licores[9][0][1]} text={licores[9][0][2]} category={licores[9][0][3]} change="0" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[9][1][0]} price={licores[9][1][1]} text={licores[9][1][2]} category={licores[9][1][3]} change="1" />
            </React.Fragment>,
            <React.Fragment>
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[10][0][0]} price={licores[10][0][1]} text={licores[10][0][2]} category={licores[10][0][3]} change="0" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[10][1][0]} price={licores[10][1][1]} text={licores[10][1][2]} category={licores[10][1][3]} change="1" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[10][2][0]} price={licores[10][2][1]} text={licores[10][2][2]} category={licores[10][2][3]} change="2" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[10][3][0]} price={licores[10][3][1]} text={licores[10][3][2]} category={licores[10][3][3]} change="3" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[10][4][0]} price={licores[10][4][1]} text={licores[10][4][2]} category={licores[10][4][3]} change="4" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[10][5][0]} price={licores[10][5][1]} text={licores[10][5][2]} category={licores[10][5][3]} change="5" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[10][6][0]} price={licores[10][6][1]} text={licores[10][6][2]} category={licores[10][6][3]} change="6" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[10][7][0]} price={licores[10][7][1]} text={licores[10][7][2]} category={licores[10][7][3]} change="7" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[10][8][0]} price={licores[10][8][1]} text={licores[10][8][2]} category={licores[10][8][3]} change="8" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[10][9][0]} price={licores[10][9][1]} text={licores[10][9][2]} category={licores[10][9][3]} change="9" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[10][10][0]} price={licores[10][10][1]} text={licores[10][10][2]} category={licores[10][10][3]} change="10" />
            </React.Fragment>,
            <React.Fragment>
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[11][0][0]} price={licores[11][0][1]} text={licores[11][0][2]} category={licores[11][0][3]} change="0" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[11][1][0]} price={licores[11][1][1]} text={licores[11][1][2]} category={licores[11][1][3]} change="1" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[11][2][0]} price={licores[11][2][1]} text={licores[11][2][2]} category={licores[11][2][3]} change="2" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[11][3][0]} price={licores[11][3][1]} text={licores[11][3][2]} category={licores[11][3][3]} change="3" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[11][4][0]} price={licores[11][4][1]} text={licores[11][4][2]} category={licores[11][4][3]} change="4" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[11][5][0]} price={licores[11][5][1]} text={licores[11][5][2]} category={licores[11][5][3]} change="5" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={licores[11][6][0]} price={licores[11][6][1]} text={licores[11][6][2]} category={licores[11][6][3]} change="6" />
            </React.Fragment>
        
        ],
        //Tapas
        [
            <React.Fragment>
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={tapas[0][0][0]} price={tapas[0][0][1]} text={tapas[0][0][2]} category={tapas[0][0][3]} change="0" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={tapas[0][1][0]} price={tapas[0][1][1]} text={tapas[0][1][2]} category={tapas[0][1][3]} change="1" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={tapas[0][2][0]} price={tapas[0][2][1]} text={tapas[0][2][2]} category={tapas[0][2][3]} change="2" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={tapas[0][3][0]} price={tapas[0][3][1]} text={tapas[0][3][2]} category={tapas[0][3][3]} change="3" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={tapas[0][4][0]} price={tapas[0][4][1]} text={tapas[0][4][2]} category={tapas[0][4][3]} change="4" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={tapas[0][5][0]} price={tapas[0][5][1]} text={tapas[0][5][2]} category={tapas[0][5][3]} change="5" />
            </React.Fragment>,
            <React.Fragment>
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={tapas[1][0][0]} price={tapas[1][0][1]} text={tapas[1][0][2]} category={tapas[1][0][3]} change="0" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={tapas[1][1][0]} price={tapas[1][1][1]} text={tapas[1][1][2]} category={tapas[1][1][3]} change="1" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={tapas[1][2][0]} price={tapas[1][2][1]} text={tapas[1][2][2]} category={tapas[1][2][3]} change="2" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={tapas[1][3][0]} price={tapas[1][3][1]} text={tapas[1][3][2]} category={tapas[1][3][3]} change="3" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={tapas[1][4][0]} price={tapas[1][4][1]} text={tapas[1][4][2]} category={tapas[1][4][3]} change="4" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={tapas[1][5][0]} price={tapas[1][5][1]} text={tapas[1][5][2]} category={tapas[1][5][3]} change="5" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={tapas[1][6][0]} price={tapas[1][6][1]} text={tapas[1][6][2]} category={tapas[1][6][3]} change="6" />
            </React.Fragment>,
            <React.Fragment>
                <ItemList changeItem={changeItem} submenu={submenu} item={item} title={tapas[2][0][0]} price={tapas[2][0][1]} text={tapas[2][0][2]} category={tapas[2][0][3]} change="0" />
                <ItemList changeItem={changeItem} submenu={submenu} item={item} title={tapas[2][1][0]} price={tapas[2][1][1]} text={tapas[2][1][2]} category={tapas[2][1][3]} change="1" />
                <ItemList changeItem={changeItem} submenu={submenu} item={item} title={tapas[2][2][0]} price={tapas[2][2][1]} text={tapas[2][2][2]} category={tapas[2][2][3]} change="2" />
            </React.Fragment>
        ],
        //Fuertes
        [
            <React.Fragment>
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={fuertes[0][0][0]} price={fuertes[0][0][1]} text={fuertes[0][0][2]} category={fuertes[0][0][3]} change="0" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={fuertes[0][1][0]} price={fuertes[0][1][1]} text={fuertes[0][1][2]} category={fuertes[0][1][3]} change="1" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={fuertes[0][2][0]} price={fuertes[0][2][1]} text={fuertes[0][2][2]} category={fuertes[0][2][3]} change="2" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={fuertes[0][3][0]} price={fuertes[0][3][1]} text={fuertes[0][3][2]} category={fuertes[0][3][3]} change="3" />
            </React.Fragment>,
            <React.Fragment>
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={fuertes[1][0][0]} price={fuertes[1][0][1]} text={fuertes[1][0][2]} category={fuertes[1][0][3]} change="0" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={fuertes[1][1][0]} price={fuertes[1][1][1]} text={fuertes[1][1][2]} category={fuertes[1][1][3]} change="1" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={fuertes[1][2][0]} price={fuertes[1][2][1]} text={fuertes[1][2][2]} category={fuertes[1][2][3]} change="2" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={fuertes[1][3][0]} price={fuertes[1][3][1]} text={fuertes[1][3][2]} category={fuertes[1][3][3]} change="3" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={fuertes[1][4][0]} price={fuertes[1][4][1]} text={fuertes[1][4][2]} category={fuertes[1][4][3]} change="4" />
            </React.Fragment>,
        ],
        //Postres
        [
            
        ],
        //bebidas
        [
            <React.Fragment>
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={bebidas[0][0][0]} price={bebidas[0][0][1]} text={bebidas[0][0][2]} category={bebidas[0][0][3]} change="0" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={bebidas[0][1][0]} price={bebidas[0][1][1]} text={bebidas[0][1][2]} category={bebidas[0][1][3]} change="1" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={bebidas[0][2][0]} price={bebidas[0][2][1]} text={bebidas[0][2][2]} category={bebidas[0][2][3]} change="2" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={bebidas[0][3][0]} price={bebidas[0][3][1]} text={bebidas[0][3][2]} category={bebidas[0][3][3]} change="3" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={bebidas[0][4][0]} price={bebidas[0][4][1]} text={bebidas[0][4][2]} category={bebidas[0][4][3]} change="4" />
            </React.Fragment>,
            <React.Fragment>
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={bebidas[1][0][0]} price={bebidas[1][0][1]} text={bebidas[1][0][2]} category={bebidas[1][0][3]} change="0" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={bebidas[1][1][0]} price={bebidas[1][1][1]} text={bebidas[1][1][2]} category={bebidas[1][1][3]} change="1" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={bebidas[1][2][0]} price={bebidas[1][2][1]} text={bebidas[1][2][2]} category={bebidas[1][2][3]} change="2" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={bebidas[1][3][0]} price={bebidas[1][3][1]} text={bebidas[1][3][2]} category={bebidas[1][3][3]} change="3" />
            </React.Fragment>,
            <React.Fragment>
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={bebidas[2][0][0]} price={bebidas[2][0][1]} text={bebidas[2][0][2]} category={bebidas[2][0][3]} change="0" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={bebidas[2][1][0]} price={bebidas[2][1][1]} text={bebidas[2][1][2]} category={bebidas[2][1][3]} change="1" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={bebidas[2][2][0]} price={bebidas[2][2][1]} text={bebidas[2][2][2]} category={bebidas[2][2][3]} change="2" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={bebidas[2][3][0]} price={bebidas[2][3][1]} text={bebidas[2][3][2]} category={bebidas[2][3][3]} change="3" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={bebidas[2][4][0]} price={bebidas[2][4][1]} text={bebidas[2][4][2]} category={bebidas[2][4][3]} change="4" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={bebidas[2][5][0]} price={bebidas[2][5][1]} text={bebidas[2][5][2]} category={bebidas[2][5][3]} change="4" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={bebidas[2][6][0]} price={bebidas[2][6][1]} text={bebidas[2][6][2]} category={bebidas[2][6][3]} change="4" />
            </React.Fragment>,
            <React.Fragment>
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={bebidas[3][0][0]} price={bebidas[3][0][1]} text={bebidas[3][0][2]} category={bebidas[3][0][3]} change="0" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={bebidas[3][1][0]} price={bebidas[3][1][1]} text={bebidas[3][1][2]} category={bebidas[3][1][3]} change="1" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={bebidas[3][2][0]} price={bebidas[3][2][1]} text={bebidas[3][2][2]} category={bebidas[3][2][3]} change="2" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={bebidas[3][3][0]} price={bebidas[3][3][1]} text={bebidas[3][3][2]} category={bebidas[3][3][3]} change="3" />
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={bebidas[3][4][0]} price={bebidas[3][4][1]} text={bebidas[3][4][2]} category={bebidas[3][4][3]} change="4" />
            </React.Fragment>,
            <React.Fragment>
                <ItemList comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={bebidas[4][0][0]} price={bebidas[4][0][1]} text={bebidas[4][0][2]} category={bebidas[4][0][3]} change="0" />
            </React.Fragment>,
        ]
    ]

    return ( 

    <div className="content">
        <nav>
            <NavButton changeBut={changeBut} menu={menu} text="LICORES" change="0" />
            <div></div>
            <NavButton changeBut={changeBut} menu={menu} text="ENTRADAS Y TAPAS" change="1" />
            <div></div>
            <NavButton changeBut={changeBut} menu={menu} text="PLATOS FUERTES" change="2" />
            <div></div>
            <NavButton changeBut={changeBut} menu={menu} text="POSTRES" change="3" />
            <div></div>
            <NavButton changeBut={changeBut} menu={menu} text="BEBIDAS" change="4" />

            <ul className="licores" style={{ display: menu === 0 ? '' : 'none'}} >
                <NavList changeLi={changeLi} sub={submenu} text="VINOS BLANCOS" change="0"/>
                <NavList changeLi={changeLi} sub={submenu} text="VINOS TINTOS" change="1" />
                <NavList changeLi={changeLi} sub={submenu} text="VINO ROSADO" change="2" />
                <NavList changeLi={changeLi} sub={submenu} text="ESPUMANTES" change="3"/>
                <NavList changeLi={changeLi} sub={submenu} text="COSECHA TARDÍA" change="4"/>
                <NavList changeLi={changeLi} sub={submenu} text="WHISKY" change="5" />
                <NavList changeLi={changeLi} sub={submenu} text="GIN" change="6" />
                <NavList changeLi={changeLi} sub={submenu} text="RON" change="7"/>
                <NavList changeLi={changeLi} sub={submenu} text="TEQUILA" change="8"/>
                <NavList changeLi={changeLi} sub={submenu} text="VODKA" change="9"/>
                <NavList changeLi={changeLi} sub={submenu} text="CERVEZAS" change="10" />
                <NavList changeLi={changeLi} sub={submenu} text="CÓCTELES" change="11" />
            </ul>
            <ul className="tapas" style={{ display: menu === 1 ? '' : 'none' }} >
                <NavList changeLi={changeLi} sub={submenu} text="TAPAS FRÍAS" change="0" />
                <NavList changeLi={changeLi} sub={submenu} text="TAPAS CALIENTES" change="1" />
                <NavList changeLi={changeLi} sub={submenu} text="PANES" change="2" />
            </ul>
            <ul className="fuertes" style={{ display: menu === 2 ? '' : 'none' }} >
                <NavList changeLi={changeLi} sub={submenu} text="DEL MAR" change="0" />
                <NavList changeLi={changeLi} sub={submenu} text="DE LA TIERRA" change="1" />
            </ul>
            <ul className="postres" style={{ display: menu === 3 ? '' : 'none' }} >
                <NavList changeLi={changeLi} sub={submenu} text="LOREM" change="0" />
                <NavList changeLi={changeLi} sub={submenu} text="LOREM" change="1" />
                <NavList changeLi={changeLi} sub={submenu} text="LOREM" change="2" />
            </ul>
            <ul className="postres" style={{ display: menu === 4 ? '' : 'none' }} >
                <NavList changeLi={changeLi} sub={submenu} text="AGUAS" change="0" />
                <NavList changeLi={changeLi} sub={submenu} text="SODAS" change="1" />
                <NavList changeLi={changeLi} sub={submenu} text="JUGOS" change="2" />
                <NavList changeLi={changeLi} sub={submenu} text="CAFÉ" change="3" />
                <NavList changeLi={changeLi} sub={submenu} text="TÉ" change="4" />
            </ul>

        </nav>
        
        <Item menu={menu} submenu={submenu} item={item} comments={comments} turnOn={turnOn}>
            <ul>
                {items[menu][submenu]}
            </ul>
        </Item>
        
        
        <style jsx>{`

            .content {
                margin: 100px 60px 0 0;
                justify-self: flex-end;
                width: 650px;
                z-index: 200;
            }

            nav {
                display: grid;
                grid-template-columns: 1fr 1px 1fr 1px 1fr 1px 1fr 1px 1fr;
            }

            .licores {
                grid-template-columns: 1fr 1fr 1fr 1fr;
            }
            .tapas {
                grid-template-columns: 1fr 1fr 1fr;
            }
            .fuertes {
                grid-template-columns: 1fr 1fr;
            }
            .postres {
                grid-template-columns: 1fr 1fr 1fr;
            }

            nav > ul {
                grid-column: 1/10;
                background: #F1D58C;
                display: grid;
                justify-items: center;
                transition: display 5s 5s;
            }

            /*item*/

            .description {
                display:grid;
                grid-template-columns: 1fr 5fr;
            }

            .description > p {
                align-self: center;
            }

            .linea {
                height: 60%;
                width: 3px;
                background: #A99767;
                justify-self: flex-end;
                margin-right: 20px;
                align-self: center;

            }
            .info {
                display:grid;
                grid-template-rows: 1fr 1fr 1.5fr 1fr 2fr;
                margin: 60px 10px 0 50px;
            }

            .info > h3 {
                font-size: 30px;
                font-weight: 900;
                color: #A99767;
                position: relative;
            }

            .info > h3::before {
                content: " ";
                position: absolute;
                left: -25px;
                top: 10px;
                height: 10px;
                width: 10px;
                background: #A99767;
                border-radius: 50%;
            }

            .info > div > span {
                background: #A99767;
                padding: 6px 20px;
                font-size: 12px;
                color: white;
            }

            .info > .precio {
                text-align: center;
                font-size: 40px;
                color: #A99767;
            }

            .item {
                display: grid;
                grid-template-columns: 2fr 1fr;
            }

            .item > img {
                margin: 40px 20px 0px 10px;
                height: 360px;
                justify-self:center;
                align-self:center;
            }

        `}</style>
    
    </div>
    
    )
}

export default NavMenu