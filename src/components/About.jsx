import styled from "styled-components"
import styles from "./Letra.module.css"

const AboutDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 100px;
`
const AboutImg = styled.img`
  width: 200px;
  height: 200px;
  cursor: pointer;
  border: solid 10px #008f39;
  border-radius: 100%;
`

const facebook = () => {
    window.location.href = "https://www.facebook.com/profile.php?id=100002049420907";
}

const github = () => {
    window.location.href = "https://github.com/SamotLqq";
}

const linkedin = () => {
    window.location.href = "https://www.linkedin.com/in/tom%C3%A1s-albanesi-07122b1b5/?originalSubdomain=ar";
}

export default function About(props) {
    return (
        <div>
            <div className={styles.portal}><h1 className={styles.title}>Mis redes: </h1></div>
            <AboutDiv>
                <AboutImg onClick={facebook} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png" alt="" />
                <AboutImg onClick={github} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
                <AboutImg onClick={linkedin} src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
            </AboutDiv>
        </div>
    )
 }