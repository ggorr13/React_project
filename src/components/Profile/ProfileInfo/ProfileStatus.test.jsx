import ProfileStatus from "./ProfileStatus";

const {create} = require("react-test-renderer");

describe("ProfileStatus component", () => {
    test("status from props should be in the state" ,() => {
        const component = create(<ProfileStatus status="Hello World"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Hello World");
    });

    test(`after creation <h6> with status should be displayed with correct status` ,() => {
        const component = create(<ProfileStatus status={"Hello World"}/>);
        const root = component.root;
        let h6 = root.findByType("h6");
        expect(h6).not.toBeNull();
    });

    test(`after creation <input> should contains correct status` ,() => {
        const component = create(<ProfileStatus status={"Hello World"}/>);
        const root = component.root;

        expect(() => {
            root.findByType("input");
        }).toThrow();
    });

    test(`after creation <h6> should contains correct status` ,() => {
        const component = create(<ProfileStatus status={"Hello World"}/>);
        const root = component.root;
        let h6 = root.findByType("h6");
        expect(h6.children[0]).toBe('Hello World');
    });

    test(`input should be displayed in editMode instead of span` ,() => {
        const component = create(<ProfileStatus status={"Hello World"}/>);
        const root = component.root;
        let h6 = root.findByType("h6");
        h6.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe('Hello World');
    });

    test(`callback should be called` ,() => {
        const mockCallback =jest.fn()
        const component = create(<ProfileStatus status={"Hello World"} updateStatusThunk={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });

});