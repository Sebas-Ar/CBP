import React, { useState, useEffect } from 'react'

const Comment = (props) => {

    const [turnOn, setTurnOn] = useState(props.turnOn);
    const [stars, setStars] = useState(0);

    useEffect(() => {
        setTurnOn(props.turnOn)
    });

    const changeStart = (star) => {
        setStars(star)
    }

    return (
        <section>

            <div className="pantalla" ></div>    

            <div className="content">
                <svg className="equis" viewBox="0 0 352 512" onClick={props.comments}>
                    <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                </svg> 
                {props.menu}-
                {props.submenu}-
                {props.item}
                <div className="stars">
                    <svg viewBox="187.421 0 3276.909 560" className="star">
                        <path onClick={() => {changeStart(5)}} className="cinco" d="M3140.361,19.469l-71.422,144.813l-159.797,23.297c-28.656,4.156-40.141,39.484-19.359,59.719l115.609,112.656  l-27.344,159.141c-4.922,28.766,25.375,50.313,50.75,36.859l142.953-75.141l142.953,75.141c25.375,13.344,55.672-8.094,50.75-36.859  l-27.344-159.141l115.609-112.656c20.781-20.234,9.297-55.563-19.359-59.719l-159.797-23.297l-71.422-144.813  C3190.346-6.343,3153.268-6.671,3140.361,19.469z" />
                        <path onClick={() => {changeStart(4)}} className="cuatro" d="M2467.424,19.469l-71.422,144.813l-159.797,23.297c-28.656,4.156-40.141,39.484-19.359,59.719l115.609,112.656  l-27.344,159.141c-4.922,28.766,25.375,50.313,50.75,36.859l142.953-75.141l142.953,75.141c25.375,13.344,55.672-8.094,50.75-36.859  l-27.344-159.141l115.609-112.656c20.781-20.234,9.297-55.563-19.359-59.719l-159.797-23.297l-71.422-144.813  C2517.408-6.343,2480.33-6.671,2467.424,19.469z" />
                        <path onClick={() => {changeStart(3)}} className="tres" d="M1794.486,19.469l-71.422,144.813l-159.797,23.297c-28.656,4.156-40.141,39.484-19.359,59.719l115.609,112.656  l-27.344,159.141c-4.922,28.766,25.375,50.313,50.75,36.859l142.953-75.141l142.953,75.141c25.375,13.344,55.672-8.094,50.75-36.859  l-27.344-159.141l115.609-112.656c20.781-20.234,9.297-55.563-19.359-59.719l-159.797-23.297l-71.422-144.813  C1844.471-6.343,1807.393-6.671,1794.486,19.469z" />
                        <path onClick={() => {changeStart(2)}} className="dos" d="M1121.548,19.469l-71.422,144.813l-159.797,23.297c-28.656,4.156-40.141,39.484-19.359,59.719l115.609,112.656  l-27.344,159.141c-4.922,28.766,25.375,50.313,50.75,36.859l142.953-75.141l142.953,75.141c25.375,13.344,55.672-8.094,50.75-36.859  l-27.344-159.141l115.609-112.656c20.781-20.234,9.297-55.563-19.359-59.719l-159.797-23.297l-71.422-144.813  C1171.532-6.343,1134.454-6.671,1121.548,19.469z" />
                        <path onClick={() => {changeStart(1)}} className="uno" d="M448.609,19.469l-71.422,144.813l-159.797,23.297c-28.656,4.156-40.141,39.484-19.359,59.719l115.609,112.656  l-27.344,159.141c-4.922,28.766,25.375,50.313,50.75,36.859L480,480.813l142.953,75.141c25.375,13.344,55.672-8.094,50.75-36.859  l-27.344-159.141l115.609-112.656c20.781-20.234,9.297-55.563-19.359-59.719l-159.797-23.297L511.391,19.469  C498.594-6.344,461.516-6.672,448.609,19.469z" />
                    </svg>
                </div>
            </div>

            <style jsx>{`
                
                section {
                    display: ${ turnOn ? 'grid' : 'none' };
                }    

                .uno {
                    opacity: ${ stars === 1 ? '1' : ''};
                }

                .dos, .uno {
                    opacity: ${ stars === 2 ? '1' : ''};
                }

                .tres, .dos, .uno {
                    opacity: ${ stars === 3 ? '1' : ''};
                }

                .cuatro, .tres, .dos, .uno {
                    opacity: ${ stars === 4 ? '1' : ''};
                }

                .cinco, .cuatro, .tres, .dos, .uno {
                    opacity: ${ stars === 5 ? '1' : ''};
                }
                
            `}</style>

            <style jsx>{`

                section {
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 100vh;
                    width: 100%;
                    align-items: center;
                    justify-items: center;

                }
                
                .pantalla {
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    background: #33333377;
                }    

                .equis {
                    height: 30px;
                    position: absolute; 
                    right: 20px;
                    top: 20px;
                    cursor: pointer;
                }

                .content {
                    position: relative;
                    height: 500px;
                    width: 80%;
                    background: white;
                    z-index: 10;
                }

                .stars {
                    margin: 100px;
                }

                .star {
                    height: 20px;
                    display: block;
                    fill: #F1D58C;
                }

                .uno, .dos, .tres, .cuatro, .cinco {
                    opacity: .3;
                    cursor: pointer;
                    transition: opacity .1s;
                }
                
                .uno:hover{
                    opacity: 1;
                }

                .dos:hover, .dos:hover ~ .uno{
                    opacity: 1;
                }

                .tres:hover, .tres:hover ~ .dos, .tres:hover ~ .uno{
                    opacity: 1;
                }

                .cuatro:hover, .cuatro:hover ~ .tres, .cuatro:hover ~ .dos, .cuatro:hover ~ .uno {
                    opacity: 1;
                }

                .cinco:hover, .cinco:hover ~ .cuatro, .cinco:hover ~ .tres, .cinco:hover ~ .dos, .cinco:hover ~ .uno {
                    opacity: 1;
                }
                
            
            `}</style>
        </section>
    )
}

export default Comment
