import React from "react"
import styled from "styled-components"
import axios from "axios"
import {PlaylistCard} from "../PlaylistCard"

const PlaylistsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default class Playlists extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount = () => {
        this.fetchPlaylists()
    }

    fetchPlaylists = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', 
        {headers: { Authorization: "marnand-fernandes-tang" }}
        ).then(response => {
            this.setState({playlists: response.data.result.list})
        }).catch(err => {
            console.log(err)
        })
    }

    deletePlaylist = (playlistId) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, 
        {headers: { Authorization: "marnand-fernandes-tang" }}
        ).then(response => {
            this.fetchPlaylists()
        }).catch(err => {
            console.log(err)
        })
    }

    render () {
        const playlists = this.state.playlists.map(playlist => {
            return <PlaylistCard 
                key={playlist.id}
                changePage={this.props.changePage}
                name={playlist.name}
                playlistId={playlist.id}
                deletePlaylist={this.deletePlaylist}
            />
        })

        return (
            <PlaylistsContainer>
                {playlists}
            </PlaylistsContainer>
        )
    }
}