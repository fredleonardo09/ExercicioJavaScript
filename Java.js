let receita = {
    titulo: 'Strogonoff',
    porcoes: 1,
    ingradientes:  ['Frango','Creme de leite','Cebola','massa de tomate']
        
    for(let i = 0; i < receita.ingradientes.lenght; i++) {
        console.log(receita.ingradientes[i]);
    }

    }
    console.log(receita.titulo);
    console.log(receita.Ingradientes[0]);
    console.log(receita.Ingradientes[1]);
    console.log(receita.Ingradientes[2]);
    console.log(receita.Ingradientes[3]);

    let livros = new Array [
        {
        id: 1, 
            titulo: "Misery",
            autor: "Stephen King",
            livrolido: "False",
        },
        {
        id: 2,
            titulo: "O iluminado",
            autor: "Stephen King (",
            livrolido: "true",
        },
        {
        id : 3, 
            titulo: "Do Mil ao Milhão. Sem Cortar o Cafezinho.",
            autor:  "Thiago Nigro",
            livrolido: "false",
        },
        {
        id : 4, 
            titulo: "Os segredos da mente milionária",
            autor: "T. Harv Eker",
            livrolido: "false",
        },
        {
        id : 5, 
            titulo: "Mais esperto que o Diabo: O mistério revelado da liberdade e do sucesso ",
            autor: "Napoleon Hill",
            livrolido: "false",
        }
    ]

    fot (i = 0; i < livros.length; i++){
        console.log(livros.nome[i])

        consome.log(livros.autor[i])

        if(livrolido == true){
            console.log('true')
        } else {
            console.log('false')
        }

    }