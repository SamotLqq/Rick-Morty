import { useEffect, useState} from 'react'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'
import {Route , Routes, useNavigate } from 'react-router-dom'
import About from './components/About.jsx'
import Detail from './components/Detail.jsx'
import Form from './components/Form.jsx'
import Favorites from './components/Favorites.jsx'


function App () {
  const [characters, setCharacters] = useState([]);

  const buscarCharacter = (data) => {
    for (let index = 0; index < characters.length; index++) {
      if (data.image === characters[index].image) return true;
    }
    return false;
  }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name && !buscarCharacter(data)) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else if (buscarCharacter(data)){
            window.alert('Personaje ya agregado');
          }
          else {
            window.alert('No hay personajes con ese ID')
          }
       });
  }

  function onClose(name) {
    const filtro = characters.filter((pj) => pj.name !== name)
    setCharacters(filtro);
  }

  const navigate = useNavigate()
  const [access, setAccess] = useState(false);
  const username = 'tmsalbanesi@gmail.com';
  const password = 'tomi2901';

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
    }
    else alert("Usuario o Contraseña incorrecto/a");
  }

  function logout(userData) {
    navigate("/");
    setAccess(false);
  }

  useEffect(() => {
    !access || navigate('/home');
 }, [access]);



  return (
    <div style={{padding: '25px'}}>
      <div>
        <Nav logout={logout} onSearch={onSearch}/>
      </div>
      <Routes>
        <Route path='/' element={<Form login={login}/>}/>
        <Route path='/home' element={ 
          <div>
            <Cards
              characters={characters}
              onClose={onClose}
            />
          </div>
        }/>
        <Route path='/about' element={<About></About>}/>
        <Route path='/detail/:detailId' element={<Detail></Detail>}/>
        <Route path='/favorites' element={<Favorites></Favorites>}/>
      </Routes>
    </div>
  )
}

export default App
