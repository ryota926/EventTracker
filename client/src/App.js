import React, {useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import {useDispatch} from 'react-redux'

import {getPosts} from './actions/posts'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import HighLights from './images/highlightLogo.png'
import useStyles from './styles'


const App = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    
    useEffect(() =>{
        dispatch(getPosts())
    }, [dispatch])

    return(
        <Container maxidth = "lg"> 
            <AppBar className = {classes.appBar} position = "static" color = "inherit">
                <Typography className = {classes.headings} varient = "h2" align = "center"> Event Tracker </Typography>
                <img className = {classes.image} src = {HighLights} alt = "HighLights" height = "60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify = "space-between" alignItems = "stretch" spacing = {3}> 
                        <Grid item xs = {12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs = {12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App