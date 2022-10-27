import Footer from "./footer/Footer";
import NavBar from "./navbar/NavBar";
import SideBar from "./sidebar/SideBar";
import { StyledLayout } from "./StyledLayout.styles";

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <SideBar />
      <div className="main-wrapper">
        <nav>
          <NavBar />
        </nav>
        <div className="mainChildren-wrapper">
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </StyledLayout>
  );
};

export default Layout;
