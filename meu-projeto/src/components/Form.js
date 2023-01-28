import {useState} from 'react'

function Form(){
    function cadastrarUsuario(e){
        e.preventdefault() //para a execução do formulario
        console.log("Usuario cadastrado")
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlfor='name'>Nome:</label>
                <input type="text" id="name" name="name" placeholder="Digite seu nome" onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <div>
                <label htmlfor='password'>Senha:</label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha" onChange={(e)=>setPassword(e.target.value)}></input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
            
        </div>
    )
}
export default Form