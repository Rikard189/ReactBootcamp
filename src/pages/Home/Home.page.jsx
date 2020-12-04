import React from 'react';
import axios from 'axios';
import CardVideo from '../../components/CardVideo';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './Home.styles.scss';

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
                'https://youtube.googleapis.com/youtube/v3/videos', {
                    params: {
                        part: 'snippet',
                        chart: 'mostPopular',
                        key: 'AIzaSyDdCvn8cIfFpDn-9sVkGHiJ_SYVbeoHVwA',
                        maxResults: 20
                    }
                }
            )
            
            console.log(response)
            this.setState({
                Videos: response.data.items.map((video) => {
                    let videoInfo = video.snippet;
                    return (
                        <Grid key={video.id} item>
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
            <div className="home-page">
                <h1 className="home-header">REACT BOOTCAMP 2020</h1>
                <Container maxWidth={false}>
                    <Grid container justify="center" spacing={3} >
                        {this.state.Videos}
                    </Grid>
                </Container>
            </div>
    )};
}