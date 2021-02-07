import { useState } from "react"
import EditCategory from "./EditCategory"

const Category = () => {

    const [activeCategory, setActiveCategory] = useState(true)

    return <section className="container">
            <button onClick={() => setActiveCategory(!activeCategory)} >
                <svg viewBox="0 0 448 512"><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>
            </button>
            <h2>ADMINISTRAR CATEGORÍA</h2>
            
            <EditCategory/>

        
        <style jsx>{`
        
            .container {
                height: ${activeCategory ? '500px' : '125px'};
            }

            svg {
                transform: rotate(${activeCategory ? '0' : '180'}deg);
            }

            svg:hover {
                transform: scale(1.1) rotate(${activeCategory ? '0' : '180'}deg);
            }
        
        `}</style>

      
        <style jsx>{`
        
            .container {
                transition: height .5s;
                box-sizing: border-box;
                padding: 20px;
                border-radius: 20px;
                background-color: #a99767cc;
                margin: auto;
                width: 50%;
                overflow: hidden;
                position: relative;
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