const {ConsultHealth} = require("../index");

test('toBe', () => {
    expect(ConsultHealth('medico', '157360')).toBe("medico 2312");
});