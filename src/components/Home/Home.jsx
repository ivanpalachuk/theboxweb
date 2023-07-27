import Carrousel from "./Carrousel";
import MenuContainer from "../MenuContainer/MenuContainer";
import BranchesContainer from "../Branches/BranchesContainer/BranchesContainer";

const Home = () => {
    return (
        <>
            <div className="bg-black">
                <Carrousel />
                <MenuContainer />
                <BranchesContainer />
            </div>
        </>
    );
};

export default Home
