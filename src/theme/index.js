import { ThemeProvider } from "styled-components";

const theme = {
    color: {
        mainRedColor: "#EB1616",
        mainLightRedColor: "#82191D",
        mainDarkRedColor: "#4E1B21",
        mainHoverRed: "#BC1212",
        mainNavyColor: "#5E7284",
        mainLightColor: "#FFFFFF",
        primaryDarkBg: "#191C24",
        secondaryDarkbg: "#000000",
    },
    background: {
        mainAshBg: "#EDEDED",
        mainHomePageBg: "#000000",
        mainHompageDarkBg: "#191C24", 
        mainRedBg: "#EB1616",
    },
    fontsize: {
        fontsize14: "14px",
        fontsize12: "12px",
        fontsize16: "16px",
        fontsize20: "20px"
    },
    fontWight: {
        fontWight70: 700
    }
};

const StyledThemeProvider =({children}) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default StyledThemeProvider;