import React from "react";
import { useState } from "react";
import MainNavBar from "../navbar/MainNavBar";
import StyledHome from "./StyledHome.styles";
import LoginBtn from "./buttons/LoginBtn";
import LogoutBtn from "./buttons/LogoutBtn";
import InputField from "../../../components/inputField/InputField";
import FieldInput from "../../../module/common/inputfields/FieldInput";
import Footer from "../../../layout/footer/Footer";

const Home = () => {
  const [isSignIn, setIsSignIn] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogIn = () => {
    setIsLoggedIn(true);
  };
  const handleLogOut = () => {
    setIsLoggedIn(false);
  };
  let button;
  if (isLoggedIn) {
    button = <LogoutBtn onClick={handleLogOut} />;
  } else {
    button = <LoginBtn onClick={handleLogIn} />;
  }

  return (
    <StyledHome>
      <MainNavBar isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
      <div>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          consectetur. Itaque totam cupiditate doloribus ipsum fugit enim,
          dolores minus ratione quibusdam consequuntur perferendis temporibus
          nemo, quas aliquid repellat porro quidem sed iure soluta similique ex
          nulla officia accusamus rerum? Impedit debitis laudantium nobis neque,
          minima deleniti repellendus doloremque fugiat assumenda, voluptatum
          autem, nisi sit quod! Natus ipsa excepturi quaerat recusandae
          distinctio necessitatibus, dolore odio molestiae, repudiandae eos
          optio culpa fuga. Voluptas obcaecati accusantium recusandae nam
          aperiam dicta officiis modi tenetur, similique fugit delectus animi
          vel nulla amet laudantium optio soluta corporis assumenda asperiores
          beatae, eius saepe accusamus voluptatum. Molestiae incidunt cum illo,
          illum facilis dolor laudantium ullam, perspiciatis obcaecati
          exercitationem, necessitatibus officiis! Cum earum officia, nihil
          veritatis at voluptas iusto quos perferendis iure quisquam,
          reprehenderit libero error! Optio molestias quidem soluta neque, cum
          commodi debitis dignissimos autem dicta cupiditate labore fugiat
          veniam tenetur facere voluptatum aperiam maxime incidunt maiores
          recusandae obcaecati beatae temporibus excepturi consectetur odio.
          Voluptates hic fugit quibusdam omnis eos totam odio sint ea quo nihil
          veniam vel odit consectetur nesciunt repellat voluptatem dolorum enim
          dignissimos ratione, ipsam nam. Nobis distinctio facere totam commodi
          minima provident ut quibusdam aliquid inventore praesentium, labore
          cumque alias amet id, eum deserunt?
        </p>
        <h3>Contact Us</h3>
        <form action="">
            <FieldInput placeholder={"Send a message"} type={"textarea"} />
        </form>
      </div>
      {isLoggedIn && button}
      <Footer /> 
    </StyledHome>
  );
};

export default Home;
