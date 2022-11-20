import styled from "styled-components";
import React from "react";

const Container = styled.form`
  background: gray;
  text-align: center;
  justify-content: center;
  align-content: center;
  padding: 50px;
  margin: 50px;
`
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs) {
  let errors = {};
  let pasVal = (inputs.password.includes(0) || inputs.password.includes(1) || inputs.password.includes(2) || inputs.password.includes(3) || inputs.password.includes(4) || inputs.password.includes(5) || inputs.password.includes(6) || inputs.password.includes(7) || inputs.password.includes(8) || inputs.password.includes(9) || inputs.password.includes(10)) && inputs.password.length >= 6 && inputs.password.length <= 10;
  let userVal = regexEmail.test(inputs.username) && inputs.username.length <= 35;
  if (!pasVal) errors = {...errors, password:"Se requiere una contraseña"};
  if (!userVal) errors = {...errors, username:"Debe ser un correo electrónico"};
  return errors;
}

export default function Form(props) {
    const [userData, setUserData] = React.useState({ username: '', password: '' });
    const [errors, setErrors] = React.useState({ username: '', password: '' });

    const handleInputChange = (e) => {
        setErrors(validate({...userData, [e.target.name]: e.target.value}));
        setUserData({...userData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errores = [];
        const erroresObj = validate(userData);
    
        const arrayKeys = Object.keys(erroresObj);
        for (const clave of arrayKeys) {
          if (erroresObj[clave]) {
            errores.push(erroresObj[clave]);
          }
        }

        if (errores.length === 0) {
          props.login(userData);
          setUserData({ username: '', password: '' })
          setErrors({ username: '', password: '' })
        }
    
        else {
          alert("Debes corregir el correo o la contraseña");
        }
      }

    return (
        <Container onSubmit={handleSubmit}>
            <div style={{marginBottom: "50px"}}>
                <label style={{marginRight: "10px"}}>Correo:</label>
                <input name="username" onChange={handleInputChange} value={userData.username}/>
                {errors.username? <p>{errors.username}</p> : null}
            </div>
            <div style={{marginBottom: "50px"}}>
                <label style={{marginRight: "10px"}}>Contraseña:</label>
                <input name="password" onChange={handleInputChange} value={userData.password}/>
                {errors.password? <p>{errors.password}</p> : null}
            </div>
            <div>
                <button>Entrar</button>
            </div>
        </Container>
    );
 }