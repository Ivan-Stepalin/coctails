import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {coctailsAPI} from "./coctailsAPI"

export const fecthGetCoctailByName = createAsyncThunk("coctails/fecthCoctails", async (name) => {
	const response = await coctailsAPI.getCoctailByName(name)
	return response.data
})

const coctailsSlice = createSlice({
	name: "coctails",
	initialState: {
		drinks: [],
		loading: false,
	},
	reducers: {
		// addProductToShoppingList(state, action) {
		//   state.shoppingList.push(action.payload);
		// },
		// removeProductFromShoppingList(state, action) {
		//   state.shoppingList = state.shoppingList.filter(
		//     (product) => product.id !== action.payload.id
		//   );
		// },
	},
	extraReducers: (builder) => {
		builder.addCase(fecthGetCoctailByName.pending, (state, action) => {
			if (state.loading === false) {
				state.loading = true
			}
		})
		builder.addCase(fecthGetCoctailByName.fulfilled, (state, action) => {
			state.drinks = action.payload.drinks
			state.loading = false
		})
		builder.addCase(fecthGetCoctailByName.rejected, (state, action) => {
			alert("Запрос коктейлей не прошёл")
			state.loading = false
		})
	},
})

// export const { addProductToShoppingList, removeProductFromShoppingList } =
//   coctailsSlice.actions;

export default coctailsSlice.reducer
