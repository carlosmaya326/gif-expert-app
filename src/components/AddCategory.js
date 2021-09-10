import { useState } from "react";
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState('');
	const handleInputCahnge = (e) => {
		setInputValue(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		if (inputValue.trim().length > 2) {
			setCategories( categories => [ inputValue, ...categories ]);
			setInputValue('');
		}
	}

	return (
		<>
			<form onSubmit={ handleSubmit }>
				<input 
					type="text"
					value={ inputValue }
					onChange={ handleInputCahnge }
				/>
			</form>
		</>
	);
}

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired
}