const functions = require('firebase-functions'); //llamamos a las funciones
const admin = require('firebase-admin'); //llamamos al servicio para trabajar con el backend de firebase
admin.initializeApp();// inicializamos nuestro proyecto
const auth = admin.auth();

exports.agregarAdministrador = functions.https.onCall((data, context) => {

    /* if(context.auth.token.admin !== true){
        return {error: 'No tienes los permisos'}
    } */

    return auth.getUserByEmail(data)
        .then(user => {
            return auth.setCustomUserClaims(user.uid, {admin:true})
        })
        .then(() => {
            return {mensaje: 'Se creó el administracor'}
        })
        .catch(error =>{
            return {error:error}
        })

})