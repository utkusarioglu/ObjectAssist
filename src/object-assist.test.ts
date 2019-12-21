import "./object-assist";


test("replace available single path", () => {

    const value = "random value";
    const value2 = "lelele";
    let obj: any = {
        level1: "already here"
    };

    obj.pave("level1",
        (existing: any) => {
            return value2
        }
    )   

    expect(obj.level1).toStrictEqual(value2)

});


test("pave single new path", () => {

    const value = "random value";
    const value2 = "lelele";
    let obj: any = {

    };

    obj.pave("level1",
        (existing: any) => {
            return value2
        },
        () => {
            return value
        }
    )   

    expect(obj.level1).toStrictEqual(value)

});

test("alter available single path", () => {

    const value = "random value";
    const value2 = "lelele";
    let obj: any = {

    };

    for (var i = 0; i < 4; i++) {
        obj.pave("level1",
            (existing: any) => {
                existing.push(value2);
                return existing;
            },
            () => {
                return [value]
            }
        )
    }

    expect(obj.level1).toStrictEqual([value, value2, value2, value2])

});




test("pave multiple empty paths", () => {

    const value = "random"
    let obj: any = {};

    obj.pave("level1.level2.level3",
        undefined,
        () => {
            return value
        }
    )

    expect(obj.level1.level2.level3).toStrictEqual(value)

});

test("replace multiple path", () => {

    const value = "new"

    let obj: any = {
        level1: {
            level2: {
                level3: "old"
            }
        }
    };

    obj.pave("level1.level2.level3",
        () => {
            return value;
        },
    )

    expect(obj.level1.level2.level3).toStrictEqual(value)

});

test("alter multiple path", () => {

    const value = "new";
    const old = "old";

    let obj: any = {
        level1: {
            level2: {
                level3: [old]
            }
        }
    };

    
    for (var i = 0; i < 3; i++) {
        obj.pave("level1.level2.level3",
            (existing: Array<string>) => {
                existing.push(value)
                return existing;
            },
        )
    }

    expect(obj.level1.level2.level3).toStrictEqual([old, value, value, value])

});


test("alter multiple path without disturbing other properties", () => {

    const value = "new";
    const old = "old";

    let obj: any = {
        level1: {
            level2: {
                level3: [old],
                level_other3: "unrelated3",
            },
            level_other2: "unrelated2",
        },
        level_other1: "unrelated1",
    };

    
    for (var i = 0; i < 3; i++) {
        obj.pave("level1.level2.level3",
            (existing: Array<string>) => {
                existing.push(value)
                return existing;
            },
        )
    }

    expect(obj.level_other1).toBe("unrelated1");
    expect(obj.level1.level_other2).toBe("unrelated2");
    expect(obj.level1.level2.level_other3).toBe("unrelated3");

});

