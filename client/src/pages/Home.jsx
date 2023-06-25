import { PublicationHome } from "../components/PublicationHome"

const Home = () => {

    return (
        <main className="container mx-auto flex justify-center">
            <div className="w-3/4">
                <PublicationHome />
            </div>
        </main>
    )
}

export { Home }