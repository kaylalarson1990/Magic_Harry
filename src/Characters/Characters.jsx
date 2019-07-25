import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Characters extends Component {
    constructor() {
        super()
        this.state = {
            error: ''
        }
    }

    render(){
        const {name, role, house, school, id, species} = this.props
        return(
            <article className="characterCard">
                <h2>{name}</h2>
                <p>{role}</p>
                <p>{house}</p>
                <p>{school}</p>
                <p>{species}</p>
            </article>

        )
    }
}

Characters.propTypes = {
    name: PropTypes.string,
    role: PropTypes.string,
    house: PropTypes.string,
    species: PropTypes.string,
    id: PropTypes.number
}

export default Characters;