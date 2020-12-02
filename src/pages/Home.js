import React from 'react';
import axios from 'axios';
import CardVideo from '../components/CardVideo';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Videos: []
        }
    }

    componentDidMount() {
        this.renderVideos();
    }

    renderVideos = async () => {
        try {
            let response = await axios.get(
                'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLRW7iEDD9RDStI3Uc2RCFbqdilK2pQO97&key=AIzaSyDdCvn8cIfFpDn-9sVkGHiJ_SYVbeoHVwA&maxResults=50', {
                    params: {
                        part: 'snippet',
                        playlistId: 'PLRW7iEDD9RDStI3Uc2RCFbqdilK2pQO97',
                        key: 'AIzaSyDdCvn8cIfFpDn-9sVkGHiJ_SYVbeoHVwA',
                        maxResults: 50
                    }
                }
            )
            
            console.log(response.data.items)
            this.setState({
                Videos: response.data.items.map((video) => {
                    let videoInfo = video.snippet;
                    return (
                        <Grid key={videoInfo.videoId} item>
                            <CardVideo videoInfo={videoInfo} />
                        </Grid>
                    )
                })
            });
        } catch(err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div>
                <h1>HOME</h1>
                <Container maxWidth={false}>
                    <Grid container justify="center" spacing={3} >
                        {this.state.Videos}
                    </Grid>
                </Container>
            </div>
    )};
}