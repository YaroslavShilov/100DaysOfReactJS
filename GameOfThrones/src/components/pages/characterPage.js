import React from 'react';
import {Field} from "../itemDetails/ItemDetails";
import PageContainer from "./pageContainer";

const CharacterPage = () => (
	<PageContainer type={"character"}>
		<Field field={'gender'} label={'Gender'}/>
		<Field field={'born'} label={'Born'}/>
		<Field field={'died'} label={'Died'}/>
		<Field field={'culture'} label={'Culture'}/>
	</PageContainer>
)
export default CharacterPage