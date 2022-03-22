import {configureStore} from "@reduxjs/toolkit"
import coctailsReducer from "./coctailsSlice"

export default configureStore({
	reducer: {
		coctails: coctailsReducer,
	},
})
