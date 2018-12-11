const Promise = require('bluebird');

class FileService {

    constructor(fs){
        this.fs = fs;
    }

    async readFileToString(filePath, encodingType) {
        let content;
        this.encodingType = encodingType || 'utf-8';

        if(filePath == '') {
            return Promise.resolve(false);
        }

        try {
            content = this.fs.readFileSync(filePath, {encoding: this.encodingType});
            return Promise.resolve({
                content: content,
            });
        } catch (err) {
            return Promise.resolve(false);
        }


    }
}

module.exports = FileService;