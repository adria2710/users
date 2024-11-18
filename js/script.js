const url = "https://jsonplaceholder.typicode.com/users"


fetch(url)
.then((Response) =>{
    return Response.json()
    console.log(Response)
})
.then(data => {
    data.forEach((user)=>{
        const lista = document.getElementById("listaUsuarios")
        lista.classList.add("listausu")
        user.img = "../assets/img/"+ user.id + ".jpeg"
        user.edad = Math.random() * (18-65) + 1
        const divContenedor = document.createElement("div")
        divContenedor.classList.add("contenedor");
        const nombre = document.createElement("h4")
        const apellido = document.createElement("h4")
        const edad = document.createElement("h4")
        const email = document.createElement("h4")
        const telefono = document.createElement("h4")
        const compañia = document.createElement("h4")
        const imagen = document.createElement("img")
        nombre.classList.add("nombre")
        apellido.classList.add("apellido")
        edad.classList.add("edad")
        email.classList.add("email")
        telefono.classList.add("telefono")
        compañia.classList.add("compañia")
        nombre.innerText = "Nombre: " + user.name
        apellido.innerText = "Apellido: " + user.username
        edad.innerText = "Edad: " + user.edad
        email.innerText = "Email: " + user.email
        telefono.innerText = "Telefono: " + user.phone
        imagen.src = user.img
        divContenedor.appendChild(nombre)
        divContenedor.appendChild(apellido)
        divContenedor.appendChild(edad)
        divContenedor.appendChild(email)
        divContenedor.appendChild(telefono)
        divContenedor.appendChild(imagen)
        lista.appendChild(divContenedor)
        
    })
})

