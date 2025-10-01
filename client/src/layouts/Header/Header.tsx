import HeaderLogo from "./HeaderLogo";
import HeaderMore from "./HeaderMore";
import HeaderWrapper from "./HeaderWrapper";
import NavBar from "./NavBar";
import Profile from "./Profile";
import Search from "./Search";

export default function Header() {
    
    return (
        <HeaderWrapper>
            <div className="flex-1 flex items-center">
                <HeaderLogo />
                <NavBar />
            </div>
            <div className="flex gap-4 items-center">
                <Search />
                <Profile />
                <HeaderMore />
            </div>
        </HeaderWrapper>
    )
}