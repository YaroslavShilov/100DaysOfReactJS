import React from 'react';
import {Field} from "../itemDetails/ItemDetails";
import PageContainer from "./pageContainer";

const HousePage = () => (
	<PageContainer type={'house'}>
		<Field field={'region'} label={'Region'} />
		<Field field={'words'} label={'Words'} />
		<Field field={'titles'} label={'Titles'} />
		{/*<Field field={'overlord'} label={'Overlord'} />*/}
		<Field field={'ancertralWeapons'} label={'Ancertral weapons'} />
	</PageContainer>
)
export default HousePage