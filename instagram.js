const { Usuario, Comentario, Post, sequelize} = require('./models');

Usuario.findAll()
.then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
    ;

});

Post.findAll()
.then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
    ;
});

Comentario.findAll()
.then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
    ;
});
