import Feed from "@component/feed"

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text  text-center">discover & share 
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center">AI powered prompt</span>
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis earum doloribus minus laboriosam, sunt ipsum consequatur natus quia quasi tempora, non illo nihil, ullam aliquam officia. Corporis a quas assumenda?
            </p>

           <Feed />
        </section>
    )
}

export default Home 