import {useSelector} from "react-redux"
import {DrinkCard} from "../../components/DrinkCard/DrinkCard"
import "./Favourites.css"

/**
 * @param {{idDrink:string}} drink
 */

export const Favourites = () => {
	const drinks = useSelector((state) => state.coctails.drinks)

	if (drinks.filter((drink) => drink.isLiked === true).length > 0) {
		return (
			<div className={"container"}>
				<h1 className={"home__title"}>Here you can find coctails !</h1>
				{drinks
					.filter((drink) => drink.isLiked === true)
					.map((drink) => (
						<DrinkCard drink={drink} key={drink.idDrink} />
					))}
			</div>
		)
	} else return <h1 className={"favourites__no-content"}>No favourites coctails yet!</h1>
}
