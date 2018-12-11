const Promise = require('bluebird');

class FileService{

    constructor(startingDir){

    }

    readFileToString(filePath, encodingType) {

        return Promise.resolve(false);
    }
}

module.exports = FileService;