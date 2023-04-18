import { NavLink } from "react-router-dom"
// import Link from "@mui/material/Link"
import { alpha, styled } from '@mui/material/styles'



const StyledButton = styled(NavLink)(({ theme }) => ({
    width: 'fit-content',
    backgroundColor: theme.palette.primary.main,
    padding: '24px 24px',
    borderRadius: 18,
    textDecoration: 'none',
    display: 'flex!important',
    flexDirection: 'row!important',
    alignItems: 'center!important',
    justifyContent: 'center!important',
    boxShadow: `0px 5px 5px 0px ${alpha('#000', .33)}`,
    '& > *': {
        margin: '0 9px'
    },
    '& .label': {
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: 16.5,
        fontWeight: 600,
        lineHeight: '100%'
    },
    '& svg.icon': {
        width: 19.2
    },
    '&:hover': {
        backgroundColor: '#fff',
        '& .label': {
            color: theme.palette.primary.main,
            fontWeight: 700
        },
        '& svg.icon': {
            fill: theme.palette.primary.main,
            stroke: theme.palette.primary.main
        }
    },
    [theme.breakpoints.down("md")]: {
        padding: '24px 19.5px',
        borderRadius: 15,
        '& > *': {
            margin: '0 6px'
        },
        '& .label': {
            fontSize: 16.5
        },
        '& svg.icon': {
            width: 21.3
        }
    }
}))



export default StyledButton