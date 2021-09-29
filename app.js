const fs = require('fs');
const Papa = require('papaparse');

const readData = [];

// Papaparser configuration 
const parserConfig = {
    delimiter: "", // auto-detect
    newline: "", // auto-detect
    quoteChar: '"',
    escapeChar: '"',
    header: true,
    transformHeader: undefined,
    dynamicTyping: false,
    preview: 0,
    encoding: "",
    worker: false,
    comments: false,
    // This function specifies what to do each record it finds
    step: function(results, parser) {
        if (results.errors.length >= 1) {
            console.log(`Error: ${results}`)
        } else {
            // If not error then push to array: readData
            readData.push(JSON.stringify(results.data));
        }
    },
    // This function is called once it has finished parsing all the lines of the csv or txt file
    complete: function(results) {
        // Create a json file and update it Syncronously with the data parsed already located on readData
        const writeStream = fs.createWriteStream('./results/results.json');

        // Being a node js write stream with "[" to build the array of records
        writeStream.write('[');
        // Creates and Indice that will keep record of the amount of records inserted afterwards
        var indice = 0
        for (i in readData) {
            indice += 1;
            // For each record found write inside the stream flow and check if there is any other record missing in
            // the next intereation, to check wheather use a comma or no [in case it reached the end of the array provided]
            if ((parseInt(i) + 1) != readData.length) {
                writeStream.write(`${readData[i]},`)
            } else {
                writeStream.write(`${readData[i]}`)
            }
        }
        // Finish the array and print the results
        writeStream.write(']');
        writeStream.end();
        console.log('Records inserted: ', indice)
    },
    error: function(err) {
        console.log(JSON.parse(err));
    },
    download: false,
    downloadRequestHeaders: undefined,
    downloadRequestBody: undefined,
    skipEmptyLines: false,
    chunk: undefined,
    fastMode: undefined,
    beforeFirstChunk: undefined,
    withCredentials: undefined,
    transform: undefined,
    delimitersToGuess: [',', '\t', '|', ';', Papa.RECORD_SEP, Papa.UNIT_SEP]
};

/* This is a self callable function, which calls itself once app.js file is being called by nodeJs
/ and starts to read syncrounously the file provided to later on start the actually parsing.

 ******  MODIFY THE PATH OF THE FILE YOU MAY WANT TO TRANSFORM TO JSON  on the following lines *****

*/
(function() {
    var textFile = fs.readFileSync('./import_data/rawData.csv', 'utf8');
    Papa.parse(textFile, parserConfig);
})();