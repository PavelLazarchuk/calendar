import React from 'react';
import { Field, ErrorMessage } from 'formik';

const Input = ({ className, name, placeholder, type }) => {
	return (
		<div>
			<Field
				name={name}
				type={type}
				placeholder={placeholder}
				className={className}
			/>
			<ErrorMessage name={name} component="div" />
		</div>
	);
};

export default Input;
