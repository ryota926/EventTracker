import React from 'react'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment'
import {useDispatch} from 'react-redux'


import useStyles from './styles'
import {deletePost, likePost} from '../../../actions/posts'

const Post = ({post, setCurrentId}) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    return(
        <Card className = {classes.card}>
            <CardMedia className = {classes.media} image = {post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title = {post.title} />
            <div className = {classes.overlay}>
                <Typography variant = "h6">{post.author}</Typography>
            </div>
            <div className = {classes.posted}>
                <Typography variant = "caption" >Posted {moment(post.postedAt).fromNow()}</Typography>
            </div>
            <div className = {classes.overlay2}>
                <Button style = {{color: 'white'}} size = "small" onClick={() => setCurrentId(post._id)}>
                    <EditIcon fontSize = "default"/>
                </Button>
            </div>
            <div className = {classes.details}>
                <Typography variant = "body2" color = "textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className = {classes.title} variant = "h5" gutterBottom >{post.title}</Typography>
            <CardContent>
                <Typography className = {classes.title} variant = "body2" color = "textSecondary" component = "p" >{post.message}</Typography>
            </CardContent>
            <CardActions className = {classes.cardActions}>
                <Button size = "small" color = "primary" onClick = {() => dispatch(likePost(post._id)) }>
                    <ThumbUpAltIcon fontSize = "small"/>
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
                
                <Button size = "small" color = "primary" onClick = {() => {/*FOR DELETE FUNCTION dispatch(deletePost(post._id)*/} }> 
                    <DeleteIcon fontSize = "small"/>
                    &nbsp; Delete 
                </Button>
            </CardActions>
        </Card>
        )
}

export default Post;