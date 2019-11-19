import "./object-assist";

test("pave", () => {

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


test("pave next to existing", () => {

    const value = "random value";
    const value2 = "lelele";
    let obj: any = {
        level1: {
            level2: [value]
        }
    };

    obj.pave("level1.level2",
        (existing: any) => {
            existing.push(value2)
        },
        () => {
            return value
        }
    )

    expect(obj.level1.level2).toStrictEqual([value, value2])

});