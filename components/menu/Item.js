import React, {useState ,useEffect} from 'react'
import Comment from '../../components/menu/Comment'


const Item = (props) => {

    return (
        <article>
            <div>
                {props.children}
            </div>

            <Comment menu={props.menu} submenu={props.submenu} item={props.item} comments={props.comments} turnOn={props.turnOn}/>

            <img src="/img/bebida.png" alt="" />

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
                    margin: 40px 20px 0px 10px;
                    height: 360px;
                    justify-self:center;
                    align-self:center;
                }
            `}</style>
        </article>
    )
}

export default Item
