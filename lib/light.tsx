import { createGlobalTheme } from "css-variable";
import * as cssVariables from "./theme";

export const lightTheme = createGlobalTheme(":root", cssVariables, {
    textColor: '#333',
    backgroundColor: '#c2e174'
});