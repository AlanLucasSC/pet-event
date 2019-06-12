import FirebaseService from '../services/firebaseService'

export const getActiveties = async () => {
    var activeties = await FirebaseService.getOneData('activeties')
    return activeties
}

export const getUserActiveties = async (rga) => {
    var activeties = await FirebaseService.getOneData('users', rga, 'activeties')
    return activeties
}

export const activityInscription = async (rga, activity, name) => {
    var formInscription = {
        inscription: true
    }

    var formUser = {
        rga: rga,
        presence: false,
        name: name
    }

    var hasInserted = await FirebaseService.insertData(formInscription, 'users', rga, 'activeties', activity)

    var activityName = activity
    await FirebaseService.updateData((activity) => {
        if(activity){
            activity.vacancies--
        }
        return activity
    }, 'activeties', activityName)

    setTimeout(() => {
        FirebaseService.insertData(formUser, 'activeties', activity, 'users', rga)
    }, 1000);

    return hasInserted
}

export const removeActivityInscription = async (rga, activity) => {
    var hasRemoved = await FirebaseService.removeData('users', rga, 'activeties', activity)
    setTimeout(() => {
        FirebaseService.removeData('activeties', activity, 'users', rga)
    }, 1000);
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