import {useSelector} from "react-redux"
import "./Favourites.css"
import {PageConstructor} from "../../components/PageConstructor/PageConstructor"

/**
 * @param {{idDrink:string}} drink
 */

export const Favourites = () => {
	const drinks = useSelector((state) => state.coctails.drinks)

	if (drinks.filter((drink) => drink.isLiked === true).length > 0) {
		return <PageConstructor title={"Favourite coctails !"} drinks={drinks.filter((drink) => drink.isLiked === true)} />
	} else return <h1 className={"favourites__no-content"}>No favourites coctails yet!</h1>
}
