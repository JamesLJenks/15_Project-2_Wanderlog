console.log(`
                                                                                                                                                                                                                                                     
dddddddd                                                                                                                                                      
WWWWWWWW                           WWWWWWWW                                            d::::::d                                       lllllll                                                                   1111111                000000000     
W::::::W                           W::::::W                                            d::::::d                                       l:::::l                                                                  1::::::1              00:::::::::00   
W::::::W                           W::::::W                                            d::::::d                                       l:::::l                                                                 1:::::::1            00:::::::::::::00 
W::::::W                           W::::::W                                            d:::::d                                        l:::::l                                                                 111:::::1           0:::::::000:::::::0
W:::::W           WWWWW           W:::::Waaaaaaaaaaaaa  nnnn  nnnnnnnn        ddddddddd:::::d     eeeeeeeeeeee    rrrrr   rrrrrrrrr   l::::l    ooooooooooo      ggggggggg   ggggg     vvvvvvv           vvvvvvv1::::1           0::::::0   0::::::0
W:::::W         W:::::W         W:::::W a::::::::::::a n:::nn::::::::nn    dd::::::::::::::d   ee::::::::::::ee  r::::rrr:::::::::r  l::::l  oo:::::::::::oo   g:::::::::ggg::::g      v:::::v         v:::::v 1::::1           0:::::0     0:::::0
W:::::W       W:::::::W       W:::::W  aaaaaaaaa:::::an::::::::::::::nn  d::::::::::::::::d  e::::::eeeee:::::eer:::::::::::::::::r l::::l o:::::::::::::::o g:::::::::::::::::g       v:::::v       v:::::v  1::::1           0:::::0     0:::::0
W:::::W     W:::::::::W     W:::::W            a::::ann:::::::::::::::nd:::::::ddddd:::::d e::::::e     e:::::err::::::rrrrr::::::rl::::l o:::::ooooo:::::og::::::ggggg::::::gg        v:::::v     v:::::v   1::::l           0:::::0 000 0:::::0
W:::::W   W:::::W:::::W   W:::::W      aaaaaaa:::::a  n:::::nnnn:::::nd::::::d    d:::::d e:::::::eeeee::::::e r:::::r     r:::::rl::::l o::::o     o::::og:::::g     g:::::g          v:::::v   v:::::v    1::::l           0:::::0 000 0:::::0
W:::::W W:::::W W:::::W W:::::W     aa::::::::::::a  n::::n    n::::nd:::::d     d:::::d e:::::::::::::::::e  r:::::r     rrrrrrrl::::l o::::o     o::::og:::::g     g:::::g           v:::::v v:::::v     1::::l           0:::::0     0:::::0
W:::::W:::::W   W:::::W:::::W     a::::aaaa::::::a  n::::n    n::::nd:::::d     d:::::d e::::::eeeeeeeeeee   r:::::r            l::::l o::::o     o::::og:::::g     g:::::g            v:::::v:::::v      1::::l           0:::::0     0:::::0
W:::::::::W     W:::::::::W     a::::a    a:::::a  n::::n    n::::nd:::::d     d:::::d e:::::::e            r:::::r            l::::l o::::o     o::::og::::::g    g:::::g             v:::::::::v       1::::l           0::::::0   0::::::0
W:::::::W       W:::::::W      a::::a    a:::::a  n::::n    n::::nd::::::ddddd::::::dde::::::::e           r:::::r           l::::::lo:::::ooooo:::::og:::::::ggggg:::::g              v:::::::v     111::::::111        0:::::::000:::::::0
W:::::W         W:::::W       a:::::aaaa::::::a  n::::n    n::::n d:::::::::::::::::d e::::::::eeeeeeee   r:::::r           l::::::lo:::::::::::::::o g::::::::::::::::g               v:::::v      1::::::::::1 ......  00:::::::::::::00 
W:::W           W:::W         a::::::::::aa:::a n::::n    n::::n  d:::::::::ddd::::d  ee:::::::::::::e   r:::::r           l::::::l oo:::::::::::oo   gg::::::::::::::g                v:::v       1::::::::::1 .::::.    00:::::::::00   
WWW             WWW           aaaaaaaaaa  aaaa nnnnnn    nnnnnn   ddddddddd   ddddd    eeeeeeeeeeeeee   rrrrrrr           llllllll   ooooooooooo       gggggggg::::::g                 vvv        111111111111 ......      000000000     
                                                                                                                                                              g:::::g                                                                   
                                                                                                                                                  gggggg     g:::::g                                                                   
                                                                                                                                                g:::::gg   gg:::::g                                                                   
                                                                                                                                                g::::::ggg:::::::g                                                                   
                                                                                                                                                 gg:::::::::::::g                                                                    
                                                                                                                                                    ggg::::::ggg                                                                      
                                                                                                                                                         gggggg                                                                         
`)
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;


//Set up session with cookies
const sess = {
    secret: 'Super secret secret',
    cookie: { maxAge: 36000 },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({db:sequelize})   
};

app.use(session(sess));
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
// mystore.sync()
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});