import Box from "@mui/material/Box"
import { alpha, styled } from "@mui/material"
import { LogoAquaGradientBrandnameWhiteDotAqua } from "./Logo"



const Root = styled(Box)(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 9999,
    width: '100vw',
    height: '100vh',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& .logo': {
        width: 234
    },
    '&.hide': {
        display: 'none'
    }
}))

const Loader = styled(Box)(() => ({
    width: 234,
    height: 7.5,
    backgroundColor: alpha('#000', .15),
    borderRadius: 8,
    '& .bar': {
        width: '50%',
        height: '100%',
        backgroundColor: '#fff',
        borderRadius: 'inherit'
    }
}))



export default function (props) {
    return (
        <Root 
            id={props.id}
            className={props.className}
        >

            <LogoAquaGradientBrandnameWhiteDotAqua 
                className="logo" />

            <Loader 
                sx={{
                    m: 2
                }}
            >
                <Box className="bar" />
            </Loader>

        </Root>
    )
}