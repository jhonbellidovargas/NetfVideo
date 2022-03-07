import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'
import {Redirect,useParams } from 'react-router-dom'
import { getVideoSource } from '../actions'
import NotFound from './NotFound'


import '../assets/styles/components/Player.scss'

const Player = (props) => {
    //match es la parte que manda router
    const { id } = useParams(props.match);
    const hasPlaying = Object.keys(props.playing).length > 0

    useEffect (() => {
        props.getVideoSource(id)
    },[])

    let navigate = useNavigate()
    const handleClick = () => {
        navigate(-1)
    }
    return hasPlaying ? (
        <div className="Player">
            <video controls={true} autoPlay>
                <source src={props.playing.source} type="video/mp4" />
            </video>
            <div className="Player-back">
                <button type="button" onClick={handleClick}>
                    Regresar
                </button>
            </div>
        </div>
    ) :
        <NotFound />
}

const mapDispatchToProps = {
    getVideoSource
}

const mapStateToProps = (state) => {
    return {
        playing: state.playing,
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(Player)