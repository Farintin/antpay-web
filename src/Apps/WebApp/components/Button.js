import { Button } from "@mui/material"
import styled from "@mui/material/styles/styled"






export default styled(Button)(({ theme }) => ({
    // width: '100%',
    backgroundColor: theme.palette.primary.main,
    padding: '22px 42px',
    borderRadius: 12,
    '& > *': {
        margin: '0 8px'
    },
    '& .label': {
        color: '#fff',
        fontSize: 16,
        fontWeight: 600,
        lineHeight: '75%'
    },
    '&:hover': {
        backgroundColor: '#fff',
        '& .label': {
            color: theme.palette.primary.main
        }
    }
}))