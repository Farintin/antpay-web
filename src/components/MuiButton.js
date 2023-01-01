import Link from "@mui/material/Link"
import styled from "@mui/material/styles/styled"



const StyledButton = styled(Link)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: '23px 34px',
    borderRadius: 15,
    textDecoration: 'none',
    '& .label': {
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: 14,
        fontWeight: 600,
        lineHeight: '100%'
    },
    '&:hover': {
        backgroundColor: '#fff',
        '& .label': {
            color: theme.palette.primary.main
        }
    }
}))



export default StyledButton