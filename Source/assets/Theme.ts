const indigoColor = "rgba(14, 14, 44, 1)";
const purpleColor = "rgba(74, 74, 104, 1)";
const darksalmonColor = "rgba(233, 150, 122, 1)";
const greyColor = "rgba(140, 140, 161, 1)";
const whiteColor = "rgba(239, 239, 253, 1)";
const blackColor = "rgba(0, 0, 0, 1)";

export const theme = {
    colors: {
        indigoColor,
        purpleColor,
        darksalmonColor,
        greyColor,
        whiteColor,
        blackColor
    }
};

export const DarkTheme = {
    dark: true,
    mode: 'dark',
    colors: {
        ...theme.colors,
        background: purpleColor,
        card: indigoColor,
        cardSecondary: indigoColor,
        title: whiteColor,
        text: whiteColor,
        textSecondary: purpleColor,
        border: whiteColor,
        primary: indigoColor,
        notification: whiteColor,
        status_bar: 'light',
        tintColor: purpleColor,
        chip: greyColor,
        chipSecondary: whiteColor
    },
};

export const LightTheme = {
    dark: false,
    mode: 'light',
    colors: {
        ...theme.colors,
        background: whiteColor,
        card: greyColor,
        cardSecondary : whiteColor,
        title: indigoColor,
        text: whiteColor,
        textSecondary: greyColor,
        border: indigoColor,
        primary: whiteColor,
        notification: darksalmonColor,
        status_bar: 'dark',
        tintColor: indigoColor,
        chip: whiteColor,
        chipSecondary: greyColor
    },
};
