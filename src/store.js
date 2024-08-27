import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';  // Importa el reducer del CartSlice

const store = configureStore({
    reducer: {
        cart: cartReducer,  // Configura el store con el reducer y la clave 'cart'
    },
});

export default store;  // Exporta el store para usarlo en tu aplicación
