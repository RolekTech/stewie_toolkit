const Promise = require('bluebird');


class ConfigService {

    constructor(fileService, configFilePath) {
        this.fileService = fileService;
        this.configFilePath = configFilePath;

        this.configContent = {};
        this.encodingType = 'utf-8';
    }

    async loadConfig() {
        const results = await this.fileService.readFileToString(this.configFilePath, this.encodingType);

        return Promise.resolve(results);
    }
}


module.exports = ConfigService;