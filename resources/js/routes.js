// creare il file routes.js che importa vue e vue-router, lo inizializza e effettua l’export default

// Importo Vue
import Vue from "vue";
// Importo il router
import VueRouter from "vue-router";

// Vue ora usa il router
Vue.use(VueRouter);

// Creo il router
const router = new VueRouter({
    mode:'history',
});

// apro la connessione da questo lato
export default router;
