import { Container,Row,Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillMail
  } from "react-icons/ai";
  const Navlinks=({link,tagname})=>{
    return(
    <li className="social-icons">
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="icon-colour  home-social-icons"
    >
      {tagname}
    </a>
  </li>
    )
  }
export default function socialmedia(){
    return(
    <Container className="home-about-section" >
         <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
            <Navlinks link={"https://github.com/Ishrathshaik123"} tagname={<AiFillGithub />}/>
            <Navlinks link={"https://x.com/ishrathshaik58"} tagname={<AiOutlineTwitter />} />
            <Navlinks link={"ishrathbanuushaik@gmail.com"} tagname={<AiFillMail />}/>
            <Navlinks link={"www.linkedin.com/in/shaikishrathbanu"} tagname={<AiFillLinkedin />}/>
            <Navlinks link={"https://www.instagram.com/ishrathh/"} tagname={<AiFillInstagram />}/>
            </ul>
          </Col>
        </Row>
    </Container>
    )
}