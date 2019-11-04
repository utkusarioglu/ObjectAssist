import "./object-assist";

test("pave", () => {

    //console.log("thing", thing);

    const value = "random value"
    let obj: any = {};

    obj.pave("level1.level2",
        () => { },
        () => {
            return value
        }
    )

    expect(obj.level1.level2).toBe(value)

});