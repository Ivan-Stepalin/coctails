import PropTypes from "prop-types"
import "./DrinkCard.css"
import {useDispatch} from "react-redux"
import {likeCoctail} from "../../redux/coctailsSlice"

/**
 * @param {{strDrinkThumb:string}} drink
 * @param {{strDrink:string}} drink
 * @param {{strInstructions:string}} drink
 */

export const DrinkCard = ({drink}) => {
	const dispatch = useDispatch()

	//создание массива ингридиентов
	const ingredients = () => {
		const ingredientsTemp = []
		for (let i = 1; i < 16; i++) {
			if (drink[`strIngredient${i}`] !== null) {
				ingredientsTemp.push(drink[`strIngredient${i}`])
			}
		}

		return ingredientsTemp.join(", ")
	}

	return (
		<div className={"drink-card"}>
			<div className={"drink-card__img"} style={{background: `url(${drink.strDrinkThumb})`, backgroundSize: "cover"}}>
				<div
					className={drink.isLiked ? "drink-card__img-button-like" : "drink-card__img-button-dislike"}
					onClick={() => dispatch(likeCoctail(drink.idDrink))}
				/>
			</div>
			{/*<img src={drink.strDrinkThumb} alt={drink.strDrink} className={"drink-card__img"} />*/}
			<div className={"drink-card__description"}>
				<h3 className={"drink-card__title"}>{drink.strDrink}</h3>
				<p className={"drink-card__info"}>
					<span className={"drink-card__info-name"}>Instructions: </span>
					{drink.strInstructions}
				</p>
				<p className={"drink-card__info"}>
					<span className={"drink-card__info-name"}>Ingridients: </span>
					{ingredients()}
				</p>
			</div>
		</div>
	)
}

DrinkCard.propTypes = {
	drink: PropTypes.object,
}
