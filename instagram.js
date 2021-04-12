const { Usuario, Comentario, Post, sequelize } = require('./models');
const { Op } = require('sequelize');


// Usuario

//CREATE
// Usuario.create({
//     nome: 'mariana',
//     email: 'mariana@email.com',
//     senha: 'mariana'

// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });


//alterando o email de sergio
// Usuario.update({
//     email: 'sergio@digitalhouse.com'
// }, {
//     where: {
//         id: 2
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })


// DESTROY 
// apagado o usuario felipe
// Usuario.destroy({
//     where: {
//         id: 3
//     }
// }).then((resultado) => {
//     console.log(resultado);
// });

// LISTA OS USUARIOS
Usuario.findAll().then((usuarios) => {
    console.log(usuarios.map((usuario) => usuario.toJSON()));
})

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

// for (let i = 0; i < 6; i += 2) {
//     Comentario.findAll({
//       order: [['id', 'DESC']],
//       offset: i,
//       limit: 2,
//     }).then((resultado) => {
//       console.table(resultado.map((comment) => comment.toJSON()));
//     });
//   }

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
//criando um post relacionado ao meu usuario
Post.create({
  texto: 'estudando sequelize!',
  usuarios_id: 14,
  n_likes: 1,
}).then((resultado) => {
  console.log(resultado.toJSON());
});

// Post.findAll().then((posts) => {
//     console.log(posts_id.map((posts) => post.toJSON()));
// })

// Post.findAll({
//     where: {
//         texto: {[Op.like]: 'oi%'}
//     }
// })
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
//     ;
// });




