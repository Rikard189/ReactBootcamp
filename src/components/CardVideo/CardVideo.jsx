import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = _theme => ({
    root: {
      maxWidth: 345
    },
    media: {
      height: 180,
    },
  });

class CardVideo extends React.Component {
    render() {
        const { classes, videoInfo} = this.props;

        return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={videoInfo.thumbnails.standard.url}
                        title={videoInfo.title}
                    />
                    <CardContent>
                        <Typography noWrap gutterBottom variant="h5" component="h2">
                            {videoInfo.title}
                        </Typography>
                        <Typography noWrap variant="body2" color="textSecondary" component="p">
                            {videoInfo.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(useStyles)(CardVideo);