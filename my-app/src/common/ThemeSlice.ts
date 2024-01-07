import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../core/store";

type initialStateType = {
    isLightTheme: boolean
}

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        isLightTheme: true,
    },
    reducers: {
        toggleTheme: state => {
            state.isLightTheme = !state.isLightTheme;
        },
    }
});

export const {
    toggleTheme,
} = themeSlice.actions;
const selectThemeState = (state: RootState) => state.theme;

export const selectIsLightTheme = (state: RootState) => selectThemeState(state).isLightTheme;

export default themeSlice.reducer;