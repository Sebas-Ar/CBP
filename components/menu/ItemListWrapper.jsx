// import Comment from "./Comment"
import Proptypes from 'prop-types'

import { connect } from 'react-redux'
import {
    mapStateToProps,
    mapDispatchToProps,
} from '../../redux/mapToProps/menuMapToProps'

const ItemListWrapper = ({ children, img }) => (
    <article>
        <div>{children}</div>

        {/* <Comment item={props.item} comments={props.comments} turnOn={props.turnOn}/> */}
        {img ? <img src={img} alt="photo de plato" /> : null}

        <style jsx>{`
            div {
                align-self: center;
                margin: 30px 10px;
                max-height: 270px;
                overflow-y: auto;
            }

            div::-webkit-scrollbar {
                width: 7px;
            }

            div::-webkit-scrollbar-thumb {
                background-color: #a99767;
                border-radius: 5px;
            }

            div::-webkit-scrollbar-track {
                background-color: #3b3b3b22;
                border-radius: 5px;
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
                justify-self: center;
                align-self: center;
            }

            @media screen and (max-width: 570px) {
                article {
                    grid-template-columns: 1fr;
                }

                article > img {
                    grid-row: 1/2;
                }

                article > img {
                    height: 242px;
                    width: 175px;
                }
            }
        `}</style>
    </article>
)

ItemListWrapper.propTypes = {
    children: Proptypes.element.isRequired,
    img: Proptypes.string.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemListWrapper)
