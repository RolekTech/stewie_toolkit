const chai = require("chai");

chai.should();

describe('Test_FileService', () => {
    it('squeal', () => {
        var thing = "squiggs";

        thing.should.be.a('string');
        thing.should.equal('squiggs__');
    });
});

