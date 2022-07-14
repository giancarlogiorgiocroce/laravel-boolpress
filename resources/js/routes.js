// creare il file routes.js che importa vue e vue-router, lo inizializza e effettua l’export default

// Importo Vue
import Vue from "vue";
// Importo il router
import VueRouter from "vue-router";
import HomeComp from './components/pages/HomeComp';
import AboutComp from './components/pages/AboutComp';
import BlogComp from './components/pages/BlogComp';
import ContactsComp from './components/pages/ContactsComp';

// Vue ora usa il router
Vue.use(VueRouter);

// Creo il router
const router = new VueRouter({
    mode:'history',
    routes:[
        { path:'/', name:'home', component: HomeComp },
        { path:'/chi-siamo', name:'about', component: AboutComp },
        { path:'/blog', name:'blog', component: BlogComp},
        { path:'/contatti', name:'contacts', component: ContactsComp},
    ]
});

// apro la connessione da questo lato
export default router;
