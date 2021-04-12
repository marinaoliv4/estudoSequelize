const { Usuario, Comentario, Post, sequelize } = require('./models');
const { Op } = require('sequelize');


// Usuario

// usuario com letra "a" no nome
// Usuario.findAll({
//     where: {
//         nome: {[Op.like]: '%a%'}
//     }
// })
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
//     ;

// });

//usuario que nao tem a letra "a" no nome
// Usuario.findAll({
//   where: {
//     nome: {[Op.notLike]: '%a%'},
//   },
// }).then((resultado) => {
//   console.table(resultado.map((user) => user.toJSON()));
// });

//comenario

//buscar comentarios e exibir 2 por vez
//exemplo abaixo feito por herbert 

for (let i = 0; i < 6; i += 2) {
    Comentario.findAll({
      order: [['id', 'DESC']],
      offset: i,
      limit: 2,
    }).then((resultado) => {
      console.table(resultado.map((comment) => comment.toJSON()));
    });
  }

// Comentario.findAll({
//     order: [
//         ['id', 'ASC']
//     ],
//     limit: 2    
// })
// .then((resultado) => {
//     console.log(resultado.map(post => post.toJSON()));
// });




// Comentario.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
//     ;
// });


//post

// Post.findAll({
//     where: {
//         texto: {[Op.like]: 'oi%'}
//     }
// })
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
//     ;
// });




