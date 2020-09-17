import React from "react";
import {ProfileStatus} from "./ProfileStatus";
import {create, act} from "react-test-renderer";

describe("ProfileStatus component", () => {

	const component = create(<ProfileStatus status={"test"}/>)
	const instance = component.root;
	const p = instance.findByType("p");

	test("status from props should be in the state", () => {
		expect(instance.props.status).toBe("test");
	})

	test("after creating 'p' should be displayed", () => {
		expect(p).not.toBeNull();
	})

	test("after creating 'p' should contains correct status", () => {
		expect(p.children[0]).toBe("test");
	})

	test("after creating 'input' should be displayed", () => {
		expect(() => {
			instance.findByType("input");
		}).toThrow();
	})

	test("input should be displayed in editMode instead of p", () => {
		act(p.props.onDoubleClick)
		const input = instance.findByType("input")
		expect(input.props.value).toBe("test")
	})

})