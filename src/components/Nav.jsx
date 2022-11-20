import SearchBar from "./SearchBar.jsx"
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = styled.nav`
   background: #008B8B;
   display: flex;
   align-items: center;
   justify-content: space-between;
`

const DivButtons = styled.div`
   margin-left: 10px;
`
const Buttons = styled.button`
   margin: 10px;
   background: #9f5f3f;
   color: white;
   border-radius: 5px;
   cursor:pointer;
   width: 200px;
   height: 40px;
`

export default function Nav(props) {
   const navigate = useNavigate();
   let urlActual = useLocation();
   if (urlActual.pathname !== "/") {
      const backHome = () => navigate("/home");
      const goAbout = () => navigate("/about")

      return (
         <NavBar>
            <DivButtons>
               <Buttons onClick={backHome}>Home</Buttons>
               <Buttons onClick={goAbout}>About</Buttons>
               <Buttons onClick={props.logout}>Logout</Buttons>
            </DivButtons>
            <SearchBar onSearch={props.onSearch}/>
         </NavBar>
      );
   }
   else return null;
 }