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
	},
	extraReducers: (builder) => {
		builder.addCase(fecthGetCoctailByName.pending, (state) => {
			if (state.loading === false) {
				state.loading = true
			}
		})
		builder.addCase(fecthGetCoctailByName.fulfilled, (state, action) => {
			if (action.payload.drinks !== null) {
				state.drinks = action.payload.drinks.map((item) => {
					return {...item, isLiked: false}
				})
			} else {
				alert("по вашему запросу ничего не найдено")
			}

			state.loading = false
		})
		builder.addCase(fecthGetCoctailByName.rejected, (state) => {
			alert("Запрос коктейлей не прошёл")
			state.loading = false
		})
	},
})

export const {likeCoctail} = coctailsSlice.actions

export default coctailsSlice.reducer
