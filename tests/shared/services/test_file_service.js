const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const FileService = require('../../../src/shared/services/file_service');
const ErrorCases = require('../../utils/error_cases');


describe('Test_FileService', () => {
    const Invalid_File = ErrorCases.FileServicesErrors.Invalid_File;

    let fileService = {};

    beforeEach(() => {
        fileService = new FileService();
    });


    it('squeal', () => {
        var thing = "squiggs";

        thing.should.be.a('string');
        //thing.should.equal('squiggs__');
    });

    it('should return `undefined` when invalid file path is given', () => {
        const results = fileService.readFileToString(Invalid_File.path, Invalid_File.encodingType);

        expect(results).to.equal(undefined);
        expect(results).to.not.equal(null);
    })
});

