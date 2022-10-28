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
    }
};

const StyledThemeProvider =({children}) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default StyledThemeProvider;