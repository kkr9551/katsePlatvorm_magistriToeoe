//import fetch from 'node-fetch';

require("dotenv").config();
//const dropbox = require('dropbox').Dropbox;

const { Dropbox } = require("dropbox");
const fetch = import("node-fetch");

const dbx = new Dropbox({
    accessToken: process.env.DROPBOX_URI,
    fetch,
});

saveDropbox = (content, filename) => {
    dbx.filesUpload({
        path: "/" + filename,
        content: content
    }).then(() => {
        console.log("Completed");
        
    }).catch(
        (err) => {
            console.log(err);
            
        }
    )
}

json_to_csv = (objArray) => {
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let line = '';
    let result = '';
    let columns = [];

    let i = 0
    for (let j = 0; j < array.length; j++) {
        for (let key in array[j]) {
            let keyString = key + "";
            keyString = '"' + keyString.replace(/"/g, '""') + '",';
            if (!columns.includes(key)) {
                columns[i] = key;
                line += keyString;
                i++;
            }
        }
    }

    line = line.slice(0, -1);
    result += line + '\r\n';

    for (let i = 0; i < array.length; i++) {
        let line = '';
        for (let j = 0; j < columns.length; j++) {
            let value = (typeof array[i][columns[j]] === 'undefined') ? '' : array[i][columns[j]];
            let valueString = value + "";
            line += '"' + valueString.replace(/"/g, '""') + '",';
        }

        line = line.slice(0, -1);
        result += line + '\r\n';
    }

    return result;
}

module.exports.saveDropbox = this.saveDropbox;
//module.exports.saveDropbox = saveDropbox
module.exports.json_to_csv = this.json_to_csv;

