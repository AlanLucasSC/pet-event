import React from 'react'

export const Submit = (props) => {
    return (
        <button id="submit" className="btn btn-lg btn-primary btn-block text-uppercase" type="submit"> { props.children } </button>
    )
}