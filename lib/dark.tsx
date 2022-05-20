import { createGlobalTheme } from "css-variable";
import * as cssVariables from "./theme";

export const darkTheme = createGlobalTheme(":root", cssVariables, {
    textColor: '#c2e174',
    backgroundColor: '#333'
});