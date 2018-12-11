const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const ErrorCases = require('../../utils/error_cases');
const Promise = require('bluebird');

const FileService = require('../../../src/shared/services/file_service');


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

    it('should return `false` when invalid file path is given', async () => {
        const results = await fileService.readFileToString(Invalid_File.path, Invalid_File.encodingType);

        expect(results).to.equal(false);
    });
});

