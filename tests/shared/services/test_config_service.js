const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const ErrorCases = require('../../utils/error_cases');
const ValidCases = require('../../utils/valid_cases');
const Promise = require('bluebird');
const fs = require('fs');

const ConfigService = require('../../../src/shared/services/config_service');
const FileService = require('../../../src/shared/services/file_service');


describe('Test_ConfigService', () => {
    const fileService = new FileService(fs);
    let configService = {};

    beforeEach(() => {
        configService = new ConfigService(fileService, ValidCases.ConfigServiceValid.valid_file);
    });

    describe('Constructor setup', async () => {
        it('should load the constructor correctly', async () => {
            await configService.loadConfig();

            expect(configService.fileService).to.equal(fileService);
            expect(configService.configFilePath).to.equal(ValidCases.ConfigServiceValid.valid_file);
        });
    });

    describe('Invalid Cases', async () => {
        it('should ', async () => {

        });


    });

    describe('Valid Cases', async () => {
        it('should ', async () => {

        });
    });

});

