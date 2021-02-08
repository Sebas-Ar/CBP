
import EditCategory from "./EditCategory"

const Category = ({setActiveCategory, activeCategory}) => {


    return <section className="container">
            <button onClick={() => setActiveCategory(false)} >
               <svg viewBox="0 0 352 512" /* onClick={props.comments} */>
                    <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                </svg>  
            </button>
            <h2>ADMINISTRAR CATEGORÍA</h2>
            
            <EditCategory/>

        
        <style jsx>{`
        
            .container {
                height: ${activeCategory ? '350px' : '0px'};
                padding: ${activeCategory ? '20px' : '0px 20px'};
            }
        
        `}</style>

      
        <style jsx>{`
        
            .container {
                transition: height .5s, padding .5s;
                box-sizing: border-box;
                border-radius: 20px;
                margin: auto;
                width: 50%;
                overflow: hidden;
                position: relative;
                background-color: #111111aa;
            }

            h2 {
                text-align: center;
                color: white;
            }

            button {
                position: absolute;
                top: 20px;
                right: 20px;
                height: 30px;
                width: 30px;
                cursor: pointer;
                background-color: initial;
                border: none;
            }

            svg {
                width: 100%;
                height: 100%;
                color: white;
                transition: transform .5s;
            }
        
        `}</style>

        
    </section>
}

export default Category