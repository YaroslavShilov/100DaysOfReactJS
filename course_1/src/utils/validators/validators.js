export const requiredField = (value) => {
	if(value) return undefined

	return 'Field is required';
}

export const maxLength = maxLength => value => {
	if(value.length > maxLength ) return `Max length is ${maxLength} symbols`

	return undefined
}