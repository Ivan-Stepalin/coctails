import "./Home.css"
import {useDispatch, useSelector} from "react-redux"
import {useEffect, useState} from "react"
import {fecthGetCoctailByName} from "../../redux/coctailsSlice"
import {DrinkCard} from "../../components/DrinkCard/DrinkCard"
import {Preloader} from "../../components/Preloader/Preloader"
import {PageConstructor} from "../../components/PageConstructor/PageConstructor"

export const Home = () => {
	const dispatch = useDispatch()

	//значение строки поиска
	const [search, setSearch] = useState("")

	//напитки
	const drinks = useSelector((state) => state.coctails.drinks)

	//состояние загрузки данных
	const isLoading = useSelector((state) => state.coctails.loading)

	const handleGetCoctailsByName = () => {
		dispatch(fecthGetCoctailByName(search))
	}

	return (
		<PageConstructor title={"Here you can find coctails !"} drinks={drinks}>
			<Preloader isOpen={isLoading} />
			<fieldset className={"home__fieldset"}>
				<input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="enter coctail name" className={"home__input"} />
				<button className={"home__button"} onClick={handleGetCoctailsByName}>
					Search
				</button>
			</fieldset>
		</PageConstructor>
	)
}
