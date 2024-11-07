import React from 'react'
import { useParams } from 'react-router-dom'

// const Guest = ({ match }) => {
//     return (
//         <div>This is {match.params.theName} page</div>
//     )
// }
const Guest = () => {
    const { theName } = useParams()
    return (
        <div>
            <h1>This is {theName}'s  page</h1>
        </div>
    )
}

export default Guest