import ChatBox from "../components/ChatBox";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { HomeContainer } from "../styles";

const Home = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <Header />
            <HomeContainer>
                <ChatBox />
            </HomeContainer>
            <Footer />
        </div>
    );
};

export default Home;