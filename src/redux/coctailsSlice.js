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
		likeCoctail(state, action) {
			const toggledDrink = state.drinks.find((drink) => drink.idDrink === action.payload)
			toggledDrink.isLiked = !toggledDrink.isLiked
		},
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
			if (action.payload.drinks !== null) {
				const drinks = action.payload.drinks.map((item) => {
					return {...item, isLiked: false}
				})
				state.drinks = drinks
			} else {
				alert("по вашему запросу ничего не найдено")
			}

			state.loading = false
		})
		builder.addCase(fecthGetCoctailByName.rejected, (state, action) => {
			alert("Запрос коктейлей не прошёл")
			state.loading = false
		})
	},
})

export const {likeCoctail} = coctailsSlice.actions

export default coctailsSlice.reducer
