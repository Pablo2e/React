const functions = require('firebase-functions'); //llamamos a las funciones
const admin = require('firebase-admin'); //llamamos al servicio para trabajar con el backend de firebase
admin.initializeApp();// inicializamos nuestro proyecto
const auth = admin.auth()

exports.agregarAdministrador = functions.https.onCall((data, context) => {

    if(context.auth.token.admin !== true){
        return {error: 'solo admin puede modificar'}
    }

    return auth.getUserByEmail(data.email)
        .then(user => {
            return auth.setCustomUserClaims(user.uid, {admin: true})
        })
        .then(() => {
            return {message: 'se creó con éxito el administrador'}
        })
        .catch(error => error)
})

exports.eliminarAdministrador = functions.https.onCall((data, context) => {

    if(context.auth.token.admin !== true){
        return {error: 'solo admin puede modificar'}
    }

    return auth.getUserByEmail(data.email)
        .then(user => {
            return auth.setCustomUserClaims(user.uid, {admin: false})
        })
        .then(() => {
            return {message: 'se eliminó con éxito el administrador'}
        })
        .catch(error => error)
})

exports.agregarAutor = functions.https.onCall((data, context) => {

    if(context.auth.token.admin !== true){
        return {error: 'solo admin puede modificar'}
    }

    return auth.getUserByEmail(data.email)
        .then(user => {
            return auth.setCustomUserClaims(user.uid, {autor: true})
        })
        .then(() => {
            return {message: 'se creó con éxito el administrador'}
        })
        .catch(error => error)
})

exports.eliminarAutor = functions.https.onCall((data, context) => {

    if(context.auth.token.admin !== true){
        return {error: 'solo admin puede modificar'}
    }

    return auth.getUserByEmail(data.email)
        .then(user => {
            return auth.setCustomUserClaims(user.uid, {autor: false})
        })
        .then(() => {
            return {message: 'se creó con éxito el administrador'}
        })
        .catch(error => error)
})