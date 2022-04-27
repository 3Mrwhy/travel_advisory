import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Typography, InputBase, Box } from '@material-ui/core';
import ToolBar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './style';
const Header = () => {
    const classes = useStyles();
    return(
        <AppBar position='static'>
            <ToolBar className={classes.toolbar}> 
                <Typography variant="h5" className={classes.title}> 
                    Travel Advisory        
                </Typography>

                <Box display="flex"> 
                    <Typography variant="h6" className={classes.title}>
                        Explore new places
                    </Typography>
                    
                    {/* <Autocomplete> */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}> 
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput}}/>
                        </div> 
                    {/* </Autocomplete> */}
                </Box>
            </ToolBar>
        </AppBar>
    )
}

export default Header