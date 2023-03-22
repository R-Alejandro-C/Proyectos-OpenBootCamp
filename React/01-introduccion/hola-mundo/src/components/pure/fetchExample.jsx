import React,{useState, useEffect} from 'react';
import { getAllPageUser, getAllUser,getAllUserDetails,login } from '../../services/fetchService';


const FetchExample = () => {

const [users, setusers] = useState([]);
const [page, setpage] = useState([]);
const [totalUser, settotalUser] = useState([]);
const [userPages, setUserPage] = useState([])
const [selectedUser, setselectedUser] = useState([]);
useEffect(() => {
    obtainUser();
}, []);

    const obtainUser = ()=>{
     getAllUser()
        .then((response)=>{
            console.log("All users", response.data);
            setusers(response.data)
            setpage(response.total_pages)
            settotalUser(response.total)
            setUserPage(response.per_page)
        })
        .catch((error)=>{
            alert(`algo va mal ${error}`)
        })
        .finally(()=>{
            console.log("Final de obtencion de datos");
            console.table(users);
      })
    }
    
    const obtainPageUser = (page)=>{
        getAllPageUser(page)
           .then((response)=>{
               console.log("All Page users", response.data);
               setusers(response.data)
               
           })
           .catch((error)=>{
               alert(`algo va mal ${error}`)
           })
           .finally(()=>{
               console.log("Final de obtencion de datos");
               console.table(users);
         })
       }
       const obtainDetailsUser = (id)=>{
        getAllUserDetails(id)
           .then((response)=>{
               console.log("All Page users", response.data);
               setselectedUser(response.data)
               console.log(setselectedUser);
           })
           .catch((error)=>{
               alert(`algo va mal ${error}`)
           })
           .finally(()=>{
               console.log("Final de obtencion de details datos");
               console.log("select", setselectedUser);
         })
       }

       const authUser = ()=>{
        login("eve.holt@reqres.in", "cityslicka")
        .then((response)=>{
            console.log("TOKEN", response.token);
            sessionStorage.setItem("Token",response.token)
        })
        .catch((error)=>{
            alert(`algo va mal ${error}`)
        })
        .finally(()=>{
            console.log("Final de obtencion de details datos");
        })
       }


    return (
        <div>
            <button onClick={authUser}>Logear</button>
            <h2>Users:</h2>
            { users.map((user, index) => 
                (<p key={index} onClick={()=> obtainDetailsUser(user.id)}>
                    {user.first_name} {user.last_name}
                </p>)
                
                ) 
                
            }
            <p>Mostrar {userPages} usuarios de {totalUser}</p>
            <button onClick={()=>obtainPageUser(1)}>1 </button>
            <button onClick={()=>obtainPageUser(2)}>2 </button>

            <div>
                {selectedUser.first_name? (                <div>
                    {selectedUser &&(
                        <div>
                            <p>Name: {selectedUser.first_name}</p>
                            <p>apellido: {selectedUser.last_name}</p>
                            <p>mail: {selectedUser.email}</p>
                            <img alt='avatar' src={selectedUser.avatar} style={{height:"50px", width:"50px"}}/>
                        </div>
                    )}
                </div>):(<h2>Para ver detalles presiona en el usuario</h2>)}
                <h3>Detalle de usuario </h3>

            </div>
            <h2>Fin</h2>

        </div>
    );
}

export default FetchExample;
