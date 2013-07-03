#!/usr/bin/env node
var fs = require('fs');
var outfile = "hello.txt";
var out = "A startup is a business built to grow rapidly, gui.\n";
fs.writeFileSync(outfile, out);
console.log("Script: " + firstApp + "\nWrote: "+ out + "To: " + outfile);
