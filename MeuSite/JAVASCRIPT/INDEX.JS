var nome, cpf, tel, nquartos, temploc, cidade, bairro;
function eventoclick(){
    
    nome=document.getElementByIdGetById("fname");
    cpf=document.getElementByIdGetById("CPF");
    tel=document.getElementByIdGetById("tel");
    nquartos=document.getElementByIdGetById("nquartos");
    temploc=document.getElementByIdGetByName("PERIODO_LOC");
    cidade=document.getElementByIdGetById("cidade");
    bairro=document.getElementByIdGetById("bairro");
    if (nome&&CPF&&tel&&nquartos&&temploc&&cidade&&bairro!=""){
        alert("cadastro efetuado com sucesso");
    }
    else{
        alert("cadastro incompleto");

    }
    
}