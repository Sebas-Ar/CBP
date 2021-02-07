import React, { useState, useEffect } from 'react'

import { useSelector, connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../redux/mapToProps/menuMapToProps";

const ItemList = (props) => {

    //Cambia el Item seleccionado
    const change = () => {
        props.changeItem(parseInt(props.change))
        props.updateItemSelected(props.title)
        props.updateImgSelected(props.img)
    }

    const { itemSelected } = useSelector(state => state.menu)

    return (
        <li onClick={change}>

            <h5>{props.title}</h5>
            <div className="info">
                <div>
                    {
                        props.category.map(categoy => (
                            <span key={categoy}>{categoy}</span>
                        ))
                    }
                </div>
                <div className="description">
                    <div className="linea"></div>
                    <p>{props.text}</p>
                </div>
                <div className="comentArea">
                    <em onClick={props.comments}>comentarios</em>
                    <div className="puntuacion">
                        <div className="promedio">
                        </div>
                        <svg viewBox="187.421 0 3276.909 560" className="stars">
                            <polygon fill="#FFFFFF" points="992.352,560 1160.561,460.5 1316.498,560 " />
                            <polygon fill="#FFFFFF" points="3173.199,0 3258.5,178.5 3464.33,226.5 3464.33,-0.035 " />
                            <polygon fill="#FFFFFF" points="3302.5,354.5 3336.5,560.034 3464.33,560.034 3464.33,226.5 " />
                            <polygon fill="#FFFFFF" points="3336.5,560.034 3173.199,458.5 3011.165,560 " />
                            <polygon fill="#FFFFFF" points="2752.5,216.5 2586.5,182.5 2498.814,-0.035 3173.199,0 3088.5,178.5 2916.5,216.5 3030.5,350.5   3011.165,560 2662.5,560.034 2634.5,352.5 " />
                            <polygon fill="#FFFFFF" points="2498.814,458.5 2662.5,560.034 2338.228,560 " />
                            <polygon fill="#FFFFFF" points="1962.5,354.5 2000.5,560.034 2338.228,560 2362.5,344.5 2238.5,218.5 2410.5,194.5 2498.814,-0.035   1824.309,0 1922.5,184.5 2068.5,224.5 " />
                            <polygon fill="#FFFFFF" points="1990.5,560.034 1825.876,458.5 1665.289,560 " />
                            <polyline fill="#FFFFFF" points="1152.938,3.036 1824.309,0 1744.5,184.5 1578.5,214.5 1692.5,352.5 1665.289,560 1316.5,560.034   1300.5,338.5 1420.5,224.5 1244.5,184.5 1144.606,0.932 " />
                            <polygon fill="#FFFFFF" points="995.174,560 1014.5,362.5 894.5,224.5 1066.5,184.5 1154.385,0 479.889,0 566.5,184.5 762.5,224.5   628.5,344.5 642.5,560.034 " />
                            <polygon fill="#FFFFFF" points="642.5,560.034 481.445,460.5 323.681,560 492.5,614.5 " />
                            <polyline fill="#FFFFFF" points="182.5,224.5 187.425,228.224 346.5,348.5 323.681,560 172.5,602.5 " />
                            <polygon fill="#FFFFFF" points="481.445,0 187.42,0 187.42,224.5 386.5,196.5 " />
                            <path fill="#FFCC99" d="M1415.548,187.557l-159.797-23.297l-71.422-144.813c-12.797-25.813-49.875-26.141-62.781,0l-71.422,144.813  l-159.797,23.297c-28.656,4.156-40.141,39.484-19.359,59.719l115.609,112.656l-27.344,159.141  c-4.922,28.766,25.375,50.313,50.75,36.859l142.953-75.141l142.953,75.141c25.375,13.344,55.672-8.094,50.75-36.859l-27.344-159.141  l115.609-112.656C1455.688,227.041,1444.204,191.713,1415.548,187.557L1415.548,187.557z M1262.97,341.557l25.922,151.375  l-135.953-71.422l-135.953,71.422l25.922-151.375L932.876,234.369l152.031-22.094l68.031-137.813l68.031,137.813l152.031,22.094  L1262.97,341.557L1262.97,341.557z" />
                            <path fill="#FFCC99" d="M2088.485,187.557l-159.797-23.297l-71.422-144.813c-12.797-25.813-49.875-26.141-62.781,0l-71.422,144.813  l-159.797,23.297c-28.656,4.156-40.141,39.484-19.359,59.719l115.609,112.656l-27.344,159.141  c-4.922,28.766,25.375,50.313,50.75,36.859l142.953-75.141l142.953,75.141c25.375,13.344,55.672-8.094,50.75-36.859l-27.344-159.141  l115.609-112.656C2128.626,227.041,2117.142,191.713,2088.485,187.557L2088.485,187.557z M1935.907,341.557l25.922,151.375  l-135.953-71.422l-135.953,71.422l25.922-151.375l-110.031-107.188l152.031-22.094l68.031-137.813l68.031,137.813l152.031,22.094  L1935.907,341.557L1935.907,341.557z" />
                            <path fill="#FFCC99" d="M744.055,187.557L584.258,164.26L512.836,19.448c-12.797-25.813-49.875-26.141-62.781,0L378.633,164.26  l-159.797,23.297c-28.656,4.156-40.141,39.484-19.359,59.719l115.609,112.656l-27.344,159.141  c-4.922,28.766,25.375,50.313,50.75,36.859l142.953-75.141l142.953,75.141c25.375,13.344,55.672-8.094,50.75-36.859l-27.344-159.141  l115.609-112.656C784.195,227.042,772.711,191.713,744.055,187.557L744.055,187.557z M591.477,341.557l25.922,151.375  L481.445,421.51l-135.953,71.422l25.922-151.375L261.383,234.37l152.031-22.094l68.031-137.813l68.031,137.813l152.031,22.094  L591.477,341.557L591.477,341.557z" />
                            <path fill="#FFCC99" d="M2761.424,187.557l-159.797-23.297l-71.422-144.813c-12.797-25.813-49.875-26.141-62.781,0l-71.422,144.813  l-159.797,23.297c-28.656,4.156-40.141,39.484-19.359,59.719l115.609,112.656l-27.344,159.141  c-4.922,28.766,25.375,50.313,50.75,36.859l142.953-75.141l142.953,75.141c25.375,13.344,55.672-8.094,50.75-36.859l-27.344-159.141  l115.609-112.656C2801.564,227.041,2790.08,191.713,2761.424,187.557L2761.424,187.557z M2608.846,341.557l25.922,151.375  l-135.953-71.422l-135.953,71.422l25.922-151.375l-110.031-107.188l152.031-22.094l68.031-137.813l68.031,137.813l152.031,22.094  L2608.846,341.557L2608.846,341.557z" />
                            <path fill="#FFCC99" d="M3434.361,187.557l-159.797-23.297l-71.422-144.813c-12.797-25.813-49.875-26.141-62.781,0l-71.422,144.813  l-159.797,23.297c-28.656,4.156-40.141,39.484-19.359,59.719l115.609,112.656l-27.344,159.141  c-4.922,28.766,25.375,50.313,50.75,36.859l142.953-75.141l142.953,75.141c25.375,13.344,55.672-8.094,50.75-36.859l-27.344-159.141  l115.609-112.656C3474.502,227.041,3463.018,191.713,3434.361,187.557L3434.361,187.557z M3281.783,341.557l25.922,151.375  l-135.953-71.422l-135.953,71.422l25.922-151.375l-110.031-107.188l152.031-22.094l68.031-137.813l68.031,137.813l152.031,22.094  L3281.783,341.557L3281.783,341.557z" />
                        </svg>
                    </div>
                </div>
            </div>

            <style jsx>{`

                h5 {
                    cursor: pointer;
                    font-weight: 700;
                    font-size: 20px;
                }

                .description {
                    margin: 10px 0;
                    display:grid;
                    grid-template-columns: 1fr 5fr;
                }

                .description > p {
                    align-self: center;
                    color: black;
                    font-size: 14px;
                    margin: 5px 0;
                }

                .linea {
                    height: 100%;
                    width: 3px;
                    background: #A99767;
                    justify-self: flex-end;
                    margin-right: 20px;
                    align-self: center;

                }
                .info {
                    margin: 0 10px;
                    overflow: hidden;
                    transition: height 1s, opacity 2s;
                }

                span {
                    background: #A99767;
                    margin-right: 5px;
                    padding: 6px 20px;
                    font-size: 10px;
                    color: white;
                    
                }

                .comentArea {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                }

                em {
                    color: #A99767;
                    font-style: normal;
                    cursor: pointer;
                }

                li {
                    padding: 5px 0;
                    font-size: 20px;
                    color: #A99767;
                    position: relative;
                    cursor: auto;
                    list-style: none;
                    margin: 0 0 0 25px;
                }

                li:hover {
                    color: #F1D58C;
                }

                li::before {
                    content: " ";
                    position: absolute;
                    left: -25px;
                    top: 15px;
                    height: 10px;
                    width: 10px;
                    border-radius: 50%;
                }

                li:hover::before {
                    background: #F1D58C;
                }

                .puntuacion {
                    position: relative;
                }

                .promedio {
                    position: absolute;
                    width: 100%;
                    height: 25px;
                    background: #F1D58C;
                }

                .stars {
                    position: absolute;
                    width: 100%;
                }
                
            `}</style>

            <style jsx>{`
                li {
                    color: ${ props.title === itemSelected ? "#F1D58C" : "#A99767"};
                }

                li::before {
                    background: ${ props.title === itemSelected ? "#F1D58C" : "#A99767"};
                }

                .info {
                    height: ${ props.title === itemSelected ? "140px" : "0px" };
                    opacity: ${ props.title === itemSelected ? "1" : "0" };
                }

            `}</style>
        </li>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
