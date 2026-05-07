import { usuario } from "./bd.js";

const email = usuario.email;
const senha = usuario.senha;

function verficarCredenciais() {
  const emailInformado = document.getElementById("email").value;
  const senhaInformado = document.getElementById("senha").value;

  if (emailInformado === email) {
    alert("E-mail informado corretamente!");
    if (senhaInformado === senha) {
      alert("Senha informada corretamente");
      window.location = "home.html";
    } else alert("Senha informada incorretamente!");
  } else alert("E-mail informado incorretamente!");
}


document.addEventListener("DOMContentLoaded",()=>{
  const botao = document.querySelector("button");
  botao.addEventListener("click", (e)=>{
    e.preventDefault();
    verficarCredenciais();
  })
})