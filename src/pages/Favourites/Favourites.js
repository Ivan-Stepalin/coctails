import {useSelector} from "react-redux"
import {DrinkCard} from "../../components/DrinkCard/DrinkCard"
import "./Favourites.css"

/**
 * @param {{idDrink:string}} drink
 */

export const Favourites = () => {
	const drinks = useSelector((state) => state.coctails.drinks)

	if (drinks.filter((drink) => drink.isLiked === true).length > 0) {
		return drinks.filter((drink) => drink.isLiked === true).map((drink) => <DrinkCard drink={drink} key={drink.idDrink} />)
	} else return <h1 className={"favourites__no-content"}>No favourites coctails yet!</h1>
}
