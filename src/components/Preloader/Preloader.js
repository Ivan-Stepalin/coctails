import "./Preloader.css"
import PropTypes from "prop-types"

export const Preloader = ({isOpen}) => {
	const opened = isOpen ? "loader-container_opened" : ""

	return (
		<div className={`loader-container ${opened}`}>
			<div className="loader" />
		</div>
	)
}

Preloader.propTypes = {
	isOpen: PropTypes.bool,
}
