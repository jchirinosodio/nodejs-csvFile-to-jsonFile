INSTRUCTIONS:

You can either use .txt or .csv files

-> Most of the code its very well documented, so read commets found inside of app.js

*--- IMPORTANT ----* 

CHANGE  .import_data/rawData.csv
Inside app.js if you change the name of the file you are adding you will need to modify line: 

line 74:   var textFile = fs.readFileSync('./import_data/rawData.csv', 'utf8');

So it makes sense to whatever name of your file(remember it can either be txt or csv file)


*--- IMPORTANT ----* 

Make sure each file you are converting, has column names in it, some csv come without column names, so you need to manually add those, in order for this app to build
a json object name on each property.

For example, for the given example.txt.: 

Luis, 1230, cr, san jose

Maria, 1230, usa, texas

Pedro, 1230, cr, san jose

You would need to manually create the column names, i.e in this scenario it could look like this:

name, phoneNumber, countryCode, region

Luis, 1230, cr, san jose

Maria, 1230, usa, texas

Pedro, 1230, cr, san jose

As you can see the first line of csv/text file, we added the column names, also make sure it makes sense since this would be the key-value pair for each value.
[
    {"name":"Luis"," phoneNumber":" 1230"," countryCode":" cr"," region":" san jose"},

    {"name":"Maria"," phoneNumber":" 1230"," countryCode":" usa"," region":" texas"},

    {"name":"Pedro"," phoneNumber":" 1230"," countryCode":" cr"," region":" san jose"}
    
]

HOW TO RUN: 

node app.js 