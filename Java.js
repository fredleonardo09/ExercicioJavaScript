let receita = {
    titulo: 'Strogonoff',
    porcoes: 1,
    Ingradientes:  ['Frango','Creme de leite','Cebola','Massa de tomate']
    
}

    console.log(receita.titulo)
    console.log(receita.porcoes)
    console.log(receita.Ingradientes[0])
    console.log(receita.Ingradientes[1])
    console.log(receita.Ingradientes[2])
    console.log(receita.Ingradientes[3])

    var Livros = [
        {
        id: 1, 
            titulo: "Misery",
            autor: "Stephen King",
            livrolido: false,
        },
        {
        id: 2,
            titulo: "O iluminado",
            autor: "Stephen King ",
            livrolido: true,
        },
        {
        id : 3, 
            titulo: "Do Mil ao Milhão. Sem Cortar o Cafezinho.",
            autor:  "Thiago Nigro",
            livrolido: false,
        },
        {
        id : 4, 
            titulo: "Os segredos da mente milionária",
            autor: "T. Harv Eker",
            livrolido: true,
        },
        {
        id : 5, 
            titulo: "Mais esperto que o Diabo: O mistério revelado da liberdade e do sucesso ",
            autor: "Napoleon Hill",
            livrolido: false,
        }
    ];
    
    for (let i = 0; i < Livros.length; i++){
  
        console.log(Livros.titulo);
        console.log(Livros.autor);

        function Livros(livrolido) {
            if(livrolido == true){
              
                console.log("Você já leu este livro" + Livros.titulo + Livros.autor);
            } else {
                
                console.log("Você não leu este livro" + Livros.titulo + Livros.autor);
            }
              
    }

      
    }
