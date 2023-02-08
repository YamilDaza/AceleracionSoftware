import React, { useEffect, useState } from 'react';
import "./css/App.css";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const App = () => {

  const [users, setUsers] = useState([]);
  const [tablaUsers, setTablaUsers] = useState([]);
  const [search, setSearch] = useState('');

  const peticionGet = async () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      setUsers(res.data)
      setTablaUsers(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
    filtrar(e.target.value);
    // console.log('Search: ' + e.target.value)
  }

  const filtrar = (terminoBusqueda) => {
    let resultadoBusqueda = tablaUsers.filter((item) => {
      if(item.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || item.company.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
        return item;
      }
    })
    setUsers(resultadoBusqueda);
  }

  useEffect(() => {
    peticionGet();
  }, [])

  return(
    <div className='app'>
      <div className='containerInput'>
        <input
          className='form-control inputBuscar'
          value={search}
          placeholder="Search for name or company"
          onChange={handleChange}
        />
        <button className='btn btn-success'>
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>


      <div className='table-responsive'>
        <table className='table table-sm table-bordered'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Username</th>
              <th>Mail</th>
              <th>Website</th>
              <th>City</th>
              <th>Company</th>
            </tr>
          </thead>

          <tbody>
            {
              users && users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                  <td>{user.address.city}</td>
                  <td>{user.company.name}</td>
                </tr>
              ))
            }
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default App;
