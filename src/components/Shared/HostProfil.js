import React from 'react'
import PropTypes from 'prop-types';
import '../../styles/HostProfil/HostProfil.css'


export default function HostProfil({ host }) {
    return(
        <div className='profil'>
            <p className='profil-name'>{host.name}</p>
            <div className='profil-borders'>
                <img src={host.picture} alt={host.name} className='profil-photo' />
            </div>
        </div>
    )
}

HostProfil.propTypes = {
    host: PropTypes.object
}