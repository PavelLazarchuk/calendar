import React from 'react';
import { Field } from 'formik';

const Radio = ({ value, name }) => {
	return <Field type="radio" name={name} value={value} />;
};

export default Radio;
