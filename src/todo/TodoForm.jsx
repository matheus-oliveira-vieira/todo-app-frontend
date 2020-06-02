import React from 'react'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'
export default props => {
    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control' placeholder='Add task here'></input>
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton style='success' icon='plus'></IconButton>
            </Grid>
        </div>  
    )
}