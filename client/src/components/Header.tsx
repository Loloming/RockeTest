import { HeaderDiv } from "../styles";
import logo from "../assets/logo_rocket.png"

const Header = () => {
    return (
        <>
            <HeaderDiv>
                <img width='50' height='50' src={logo} />
                <h1 style={{ fontFamily: '"IBM Plex Sans", sans-serif', fontWeight: '400' }}>rocket code <span style={{ color: "#A6F674", fontFamily: '"Teko", sans-serif' }}>ChatBot</span></h1>
            </HeaderDiv>
        </>
    );
};

export default Header;