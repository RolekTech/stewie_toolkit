const Promise = require('bluebird');


class ConfigService {

    constructor(fileService, configFilePath) {
        this.fileService = fileService;
        this.configFilePath = configFilePath;

        this.configContent = {};

    }

    async loadConfig() {
        return Promise.resolve(false);
    }
}


module.exports = ConfigService;