import React from 'react'
import { 
    activityInscription, 
    removeActivityInscription,
    updateDecrementVacanciesActivity,
    updateIncrementVacanciesActivity
} from '../effects'

export const ItemGroup = ( props ) => {
    var className = `list-group-item list-group-item-action ` + ( props.id === 0 ? 'active' : '' )
    var itemId = `item-${props.id}`
    var contentId = `#content-${props.id}`
    return (
        <a className={ className } id={ itemId } data-toggle="list" href={ contentId } role="tab" aria-controls="home">
            { props.title }
            { props.hasInscription ? (<span className="badge badge-success badge-pill">inscrito</span>) : null }
        </a>
    )
}

export const ItemGroupContent = ( props ) => {
    var className = `mt-2 text-justify tab-pane fade show ` + ( props.id === 0 ? 'active' : '' )
    var itemId = `content-${props.id}`
    
    var inscriptionButton = props.vacancies !== 0 ? props.hasInscription ? (
        <button type="button" onClick={ 
            () => {
                removeActivityInscription(props.rga, props.title) 
                updateIncrementVacanciesActivity(props.title)
                props.reload()
            }
        } className="btn btn-outline-danger">Sair da atividade</button>
    ) : (
        <button type="button" onClick={ 
            () => {
                activityInscription(props.rga, props.title) 
                updateDecrementVacanciesActivity(props.title)
                props.reload()
            }
        } className="btn btn-outline-primary">Inscrever-se na atividade</button>
    ) : null

    return (
        <div className={ className } id={ itemId } role="tabpanel" aria-labelledby="list-home-list">
            <p>{ props.description }</p>
            { props.type !== "ALL" ? inscriptionButton : null }
            { props.vacancies ? (
                <div>
                    <span className="badge badge-success badge-pill"> { `Vagas: ${props.vacancies}` }</span>
                </div>
            ) : null }
        </div>
    )
}