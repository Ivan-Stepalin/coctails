import {DrinkCard} from "../DrinkCard/DrinkCard"
import PropTypes from "prop-types"
import "./PageContructor.css"

export const PageConstructor = ({title, drinks, children}) => {
	return (
		<div className={"page__container"}>
			<h1 className={"page__title"}>{title}</h1>
			{children}
			{drinks.length > 0 && (
				<div className={"page__list"}>
					{drinks.map((drink) => (
						<DrinkCard drink={drink} key={drink.idDrink} />
					))}
				</div>
			)}
		</div>
	)
}

PageConstructor.propTypes = {
	title: PropTypes.string,
	drinks: PropTypes.array,
	children: PropTypes.object,
}
