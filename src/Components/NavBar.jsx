import {AppBar, Toolbar, makeStyles} from '@material-ui/core';
import {NavLink} from 'react-router-dom'

const useStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color:'#FFFFFF',
        textDecoration: 'none', 
        marginRight: '20px',
        fontSize:'20px',
    }
})

const NavBar = () => {
    const classes = useStyle(); 
    return(
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <NavLink className={classes.tabs} to="/" exact>CRUD</NavLink>
                <NavLink className={classes.tabs} to="all" exact>All Users</NavLink>
                <NavLink className={classes.tabs} to="add" exact>Add Users</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;