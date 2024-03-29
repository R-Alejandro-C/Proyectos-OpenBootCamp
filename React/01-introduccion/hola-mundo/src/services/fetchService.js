export const getAllUser = async()=>{

    let response = await fetch("https://reqres.in/api/users");
    console.log("Response: ", response);
    return response.json()
}


export const getAllPageUser = async(page)=>{

    let response = await fetch(`https://reqres.in/api/users?page=${page}`);
    console.log("Response: ", response);
    return response.json()
}

export const getAllUserDetails = async(id)=>{

    let response = await fetch(`https://reqres.in/api/users/${id}`);
    console.log("Response: ", response);
    return response.json()
}


export const login = async (email, password)=>{
    let body= {
        email: email,
        password:password
    }
    let response =  await fetch(`https://reqres.in/api/login `,{
        method:'POST',
       // mode:'no-cors',
    //credentials:'omit',
        cache:'no-cache',
       /** headers:{
            'Content-Type': 'application/json'
        },*/
        body: JSON.stringify(body), 
    })
    return response.json()
}