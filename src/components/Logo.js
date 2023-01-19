import Link from "@mui/material/Link"
import styled from "@mui/material/styles/styled"



const Root = styled(Link)(() => ({
    width: 135,
    display: 'block',
    '& img': {
        width: '100%'
    }
}))



function LogoBrandVoilet ({ ...props }) {
    return (
        <Root {...props}>
            <img src="/image/logo/logo-purple-and-brandname-purple-plus-purple-dot_w300.png" alt="antpay logo" />
        </Root>
    )
}

function LogoAquaGradient ({ ...props }) {
    return (
        <Root {...props}>
            <img src="/image/logo/logo-aqua-gradient_w300.png" alt="antpay logo" />
        </Root>
    )
}

function LogoAquaGradientBrandnameWhiteDotViolet ({ ...props }) {
    return (
        <Root {...props}>
            <img src="/image/logo/logo-aqua-gradient-and-brand-name-white-plus-purple-dot-w300.png" alt="antpay logo" />
        </Root>
    )
}
function LogoAquaGradientBrandnameWhiteDotVioletLG ({ ...props }) {
    return (
        <Root {...props}>
            <img src="/image/logo/logo-aqua-gradient-and-brandname-white-plus-purple-dot_w600.png" alt="antpay logo" />
        </Root>
    )
}

function LogoAquaGradientBrandnameWhiteDotAqua ({ ...props }) {
    return (
        <Root {...props}>
            <img src="/image/logo/logo-aqua-gradient-and-brandname-white-plus-aqua-dot_w300.png" alt="antpay logo" />
        </Root>
    )
}




export {
    LogoBrandVoilet,
    LogoAquaGradient,
    LogoAquaGradientBrandnameWhiteDotViolet,
    LogoAquaGradientBrandnameWhiteDotVioletLG,
    LogoAquaGradientBrandnameWhiteDotAqua
}