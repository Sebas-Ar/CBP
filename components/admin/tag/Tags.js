import AddTag from "./AddTag"
import TagList from "./TagList"

const Tags = () => {

    return <section className="container">

        <h2>ADMINISTRAR ETIQUETAS</h2>
        <AddTag />
        <br/>
        <TagList />

        <style jsx>{`

            .container {
                margin-top: 10px;
            }

            h2 {
                color: white;
                text-align: center;
                margin-bottom: 10px;
            }
        `}</style>
    </section>
}

export default Tags