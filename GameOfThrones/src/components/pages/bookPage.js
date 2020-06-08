import React from 'react';
import {Field} from "../itemDetails/ItemDetails";
import PageContainer from "./pageContainer";

const BookPage = () => (
	<PageContainer type={'book'}>
		<Field field={'numberOfPages'} label={'Number of pages'} />
		<Field field={'publisher'} label={'Publisher'} />
		<Field field={'released'} label={'Released'} />
	</PageContainer>
)

export default BookPage