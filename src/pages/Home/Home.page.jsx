import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardVideo from '../../components/CardVideo';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './Home.styles.scss';

export default function Home({search}) {
    
    const [videos, setVideos] = useState([]);

    useEffect( () => {
        if(!search || !search.trim()){
            fetchInitialVideos();
        } else {
            fetchSearchVideos();
            console.log(videos);
        }
        
    }, [search]);

    const fetchInitialVideos = async () =>{
        const response = await axios.get(
            'https://youtube.googleapis.com/youtube/v3/videos', {
                params: {
                    part: 'snippet',
                    chart: 'mostPopular',
                    maxResults: 20,
                    key: 'AIzaSyDdCvn8cIfFpDn-9sVkGHiJ_SYVbeoHVwA',
                }
            }
        )
        
        setVideos(response.data.items);
    }

    const fetchSearchVideos = async () => {
        const response = await axios.get(
            'https://www.googleapis.com/youtube/v3/search', {
                params: {
                    part: 'snippet',
                    q: search,
                    maxResults: 20,
                    type: 'video',
                    key: 'AIzaSyDdCvn8cIfFpDn-9sVkGHiJ_SYVbeoHVwA',
                }
            }
        )

        setVideos(response.data.items);
    }
    
    return (
            <div className="home-page">
                <h1 className="home-header">REACT BOOTCAMP 2020</h1>
                <Container maxWidth={false}>
                    <Grid container justify="center" spacing={3} >
                        {videos.map((video) => {
                            return (
                                <CardVideo key={video.etag} videoInfo={video}></CardVideo>
                            )
                        })}
                    </Grid>
                </Container>
            </div>
    );
}