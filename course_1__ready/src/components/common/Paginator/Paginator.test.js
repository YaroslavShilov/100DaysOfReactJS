import React from "react";
import {create} from "react-test-renderer";
import {Paginator} from "./Paginator";

describe("Paginator component tests", () => {
	const component = create(<Paginator
		totalItemsCount={11}
		pageSize={1}
		portionSize={10}
	/>)
	const instance = component.root;
	const li = instance.findAllByType("li");
	const buttons = instance.findAllByType("button");

	test("pages count is 11 but should be showed only 10", () => {
		expect(li.length).toBe(10);
	})

	test("if pages count is more then 10 button 'Next' should be presented", () => {
		expect(buttons.length).toBe(1);
	})
})