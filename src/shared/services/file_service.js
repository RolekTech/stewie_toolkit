const Promise = require('bluebird');

class FileService{

    constructor(fs){
        this.fs = fs;
    }

    async readFileToString(filePath, encodingType) {
        let content;

        if(filePath == '') {
            return Promise.resolve(false);
        }

        try {
            content = this.fs.readFileSync(filePath, {encoding: encodingType});
            return Promise.resolve({
                content: content,
            });
        } catch (err) {
            return Promise.resolve(false);
        }


    }
}

module.exports = FileService;