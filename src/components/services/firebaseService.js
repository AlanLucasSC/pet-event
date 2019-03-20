import {firebaseDatabase} from '../utils/firebaseUtils'

export default class FirebaseService {

    static getOneData = async (path, id) => {
        const query = firebaseDatabase.ref(path).child(id)

        const snapshot = await query.once('value')
        const value = snapshot.val()

        return value
    }

    static listenIfChildAdded = (path, id, callback) => {
        const query = firebaseDatabase.ref(path).child(id)

        query.on("child_added", callback);
    }

    static insertData = (path, id, form) => {
        try {
            const query = firebaseDatabase.ref(path).child(id)
            query.set(form)
            return true
        } catch (error) {
            return false
        }
    }

}