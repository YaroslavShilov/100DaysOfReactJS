import React from 'react';
//const Title:React.FC<{title: string}> = ({title}) => <h1>{title}</h1>

type TitleProps = {
	title: string,
	test?: string
}

const Title = ({title, test='test'}: TitleProps) => <h1>{title} - {test}</h1>

export const Lesson3 = () =>  <Title title={'Hello world'}/>
