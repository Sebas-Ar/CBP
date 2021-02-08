import React from 'react'
import Comment from '../../components/menu/Comment'


const Item = (props) => {

    return (
        <article>
            <div>
                {props.children}
            </div>

            <Comment item={props.item} comments={props.comments} turnOn={props.turnOn}/>
            {
                props.img
                    ?
                    <img src={`/menu-imgs/${props.img}`} alt="photo de plato" />
                    :
                    null
            }

            <style jsx>{`

                div {
                    align-self: center;
                    margin: 30px 10px;
                }

                article {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    overflow: hidden;
                }

                article > img {
                    object-fit: cover;
                    margin: 40px 20px 0px 10px;
                    height: 360px;
                    width: 250px;
                    justify-self:center;
                    align-self:center;
                }
            `}</style>
        </article>
    )
}

export default Item
