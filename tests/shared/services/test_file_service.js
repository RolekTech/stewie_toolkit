const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const ErrorCases = require('../../utils/error_cases');
const ValidCases = require('../../utils/valid_cases');
const Promise = require('bluebird');
const fs = require('fs');

const FileService = require('../../../src/shared/services/file_service');


describe('Test_FileService', () => {
    const invalidFile = ErrorCases.FileServicesErrors.Invalid_File;
    const validFile = ValidCases.FileServicesValid.Valid_File;

    let fileService = {};

    beforeEach(() => {
        fileService = new FileService(fs);
    });


    it('squeal', () => {
        var thing = "squiggs";

        thing.should.be.a('string');
        //thing.should.equal('squiggs__');
    });

    describe('Invalid Cases', async () => {
        it('should return `false` when invalid file path is given', async () => {
            const results = await fileService.readFileToString(invalidFile.path, validFile.encodingType);

            expect(results).to.equal(false);
        });

        it('should return `false` if an empty String is provided for the file path.', async () => {
            const results = await fileService.readFileToString('', invalidFile.encodingType);

            expect(results).to.equal(false);
        });

    });

    describe('Valid Cases', async () => {
        it('should return `sherpa_here` for a valid file', async () => {
            const results = await fileService.readFileToString(validFile.path, validFile.encodingType);

            expect(results).deep.equal({
                content: validFile.content
            });
        });
    });

});

