import React from "react"
import styled from "styled-components"
import axios from "axios"
import {TrackCard} from "../TrackCard/TrackCard"

const PlaylistDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TrackCreationForm = styled.form`
    width: 100vw;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    div {
        display: flex;
        flex-direction: column;
    }
`

export default class PlaylistDetail extends React.Component {
    state = {
        tracks: [],
        trackName: "",
        artist: "",
        url: ""
    };

    componentDidMount = () => {
        this.fetchTracks()
    };

    fetchTracks = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`, 
        {headers: { Authorization: "marnand-fernandes-tang" }}
        ).then(response => {
            this.setState({tracks: response.data.result.tracks})
        }).catch(err => {
            console.log(err)
        });
    };

    removeTrackFromPlaylist = (trackId) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks/${trackId}`, 
        {headers: { Authorization: "marnand-fernandes-tang" }}
        ).then(() => {
            this.fetchTracks();
        }).catch(err => {
            console.log(err)
        });
    };

    changeInputValues = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    addTrackToPlaylist = (e) => {
        e.preventDefault() //impedi comportamento padrão do elemento
        const body = {
            name: this.state.trackName,
            artist: this.state.artist,
            url: this.state.url
        };

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`,
            body,
            {headers: { Authorization: "marnand-fernandes-tang" }}
        ).then(() => {
            this.fetchTracks()
        }).catch(err => {
            console.log(err);
        });

        this.setState({
            trackName: "",
            artist: "",
            url: ""
        })
    };

    render () {
        const tracks = this.state.tracks.map(track => {
            return <TrackCard 
                key={track.id}
                trackName={track.name}
                artist={track.artist}
                url={track.url}
                trackId={track.id}
                removeTrackFromPlaylist={this.removeTrackFromPlaylist}
            />
        })

        return (
            <PlaylistDetailContainer>
                <TrackCreationForm onSubmit={this.addTrackToPlaylist} >
                    <div>
                        <label>Nome da música:</label>
                        <input 
                            placeholder="Nome da música"
                            name="trackName"
                            value={this.state.trackName}
                            onChange={this.changeInputValues}
                        />
                    </div>
                    <div>
                        <label>Artista:</label>
                        <input 
                            placeholder="Nome do Artista"
                            name="artist"
                            value={this.state.artist}
                            onChange={this.changeInputValues}
                        />
                    </div>
                    <div>
                        <label>URL da música:</label>
                        <input 
                            placeholder="URL da música"
                            name="url"
                            value={this.state.url}
                            onChange={this.changeInputValues}
                        />
                    </div>
                    <button type="submit" >Adicionar música</button>
                </TrackCreationForm>
                {tracks}
                <button onClick={() => this.props.changePage("playlists", "")} >Voltar para playlists</button>
            </PlaylistDetailContainer>
        )
    }
}