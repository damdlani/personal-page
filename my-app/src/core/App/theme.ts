const colorNames = {
    black: "#252525",
    semiDark: "#363636B8",
    grey: "#6E7E91",
    lightGrey: "#E5E5E5",
    lightestGrey: "#D1D5DA4D",
    white: "#FFFFFF",
    lighterBlue: "#0366D6",
    lightestBlue: "#0366D633",
    darkerBlue: "#2188FF",
    darkestBlue: "#0366D680",
    backgroundLight: "#FBFBFE"
}

const common = {
    breakpoints: {
        desktop: '1024px',
        mobile: '767px',
        small: '400px'
    },
    borderRadius: "4px",
}


export const themeLight = {
    ...common,
    colors: {
        primary: colorNames.lighterBlue,
        textPrimary: colorNames.black,
        site: {
            background: colorNames.backgroundLight,
            text: colorNames.grey
        },
        boxBackground: colorNames.white,
        portfolioTile: {
            border: colorNames.lightestGrey,
            borderHover: colorNames.lightestBlue,
            title: colorNames.lighterBlue,
            link: colorNames.lighterBlue
        },
        themeSwitch: {
            background: colorNames.lightGrey,
            icon: colorNames.white
        }
    },
}

export const themeDark = {
    ...common,
    colors: {
        primary: colorNames.darkerBlue,
        textPrimary: colorNames.white,
        site: {
            background: colorNames.black,
            text: colorNames.white
        },
        boxBackground: colorNames.semiDark,
        portfolioTile: {
            border: colorNames.lightestGrey,
            borderHover: colorNames.darkestBlue,
            title: colorNames.white,
            link: colorNames.darkerBlue
        },
        themeSwitch: {
            background: colorNames.semiDark,
            icon: colorNames.white
        }
    },
}