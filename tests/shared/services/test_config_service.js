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
    const devConfigFilePath = './configs/dev.json';
    const fileService = new FileService(fs);
    let expectedConfig;
    let configService = {};

    beforeEach( async () => {
        configService = new ConfigService(fileService, devConfigFilePath);
        expectedConfig = await fileService.readFileToString('./configs/dev.json', 'utf-8');
    });

    describe('Constructor setup', async () => {
        it('should load the constructor correctly', async () => {
            await configService.loadConfig();

            expect(configService.fileService).to.equal(fileService);
            expect(configService.configFilePath).to.equal(devConfigFilePath);
        });
    });

    // describe('Invalid Cases', async () => {
    //     it('should ', async () => {
    //
    //     });
    // });

    describe('Valid Cases', async () => {

        it('should return the `configs/dev.json` file contents', async () => {
            const results = await configService.loadConfig();

            console.log('expected:: ', expectedConfig);
            console.log('results:: ', results);
            expect(results).to.deep.equal(expectedConfig);
        });
    });

});

