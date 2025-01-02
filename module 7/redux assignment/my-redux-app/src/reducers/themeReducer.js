// src/reducers/themeReducer.js

const initialState = {
    theme: 'light', // Default theme is light
  };
  
  const themeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_THEME':
        return {
          ...state,
          theme: state.theme === 'light' ? 'dark' : 'light', // Toggle between light and dark
        };
      default:
        return state;
    }
  };
  
  export default themeReducer;
  