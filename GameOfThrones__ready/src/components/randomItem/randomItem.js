import React from 'react';
import RandomItemContainer, {Field} from "./randomItemContainer";

const RandomItem = () => (
		<RandomItemContainer type={'character'}>
			<Field field={'gender'} label={'Gender'}/>
			<Field field={'born'} label={'Born'}/>
			<Field field={'died'} label={'Died'}/>
			<Field field={'culture'} label={'Culture'}/>
		</RandomItemContainer>
);

export default RandomItem