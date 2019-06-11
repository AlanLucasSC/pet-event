import FirebaseService from '../services/firebaseService'

export const getActiveties = async () => {
    var activeties = await FirebaseService.getOneData('activeties')
    return activeties
}

export const getUserActiveties = async (rga) => {
    var activeties = await FirebaseService.getOneData('users', rga, 'activeties')
    return activeties
}

export const activityInscription = async (rga, activity) => {
    var form = {
        inscription: true
    }

    var hasInserted = await FirebaseService.insertData(form, 'users', rga, 'activeties', activity)
    return hasInserted
}

export const removeActivityInscription = async (rga, activity) => {
    var hasRemoved = await FirebaseService.removeData('users', rga, 'activeties', activity)
    return hasRemoved
}

export const updateDecrementVacanciesActivity = async (activityName) => {
    var hasRemoved = await FirebaseService.updateData((activity) => {
        if(activity){
            activity.vacancies--
        }
        return activity
    }, 'activeties', activityName)
    return hasRemoved
}

export const updateIncrementVacanciesActivity = async (activityName) => {
    var hasRemoved = await FirebaseService.updateData((activity) => {
        if(activity){
            activity.vacancies++
        }
        return activity
    }, 'activeties', activityName)
    return hasRemoved
}