import { Profile } from "../components/Profile"
import { PublicationHome } from "../components/PublicationHome"

const Home = () => {

    return (
        <div className="container mx-auto grid grid-cols-5 justify-items-center gap-4">
            <Profile />
            <PublicationHome />
        </div>
    )
}

export { Home }