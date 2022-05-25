#!/usr/bin/env node
 
var pandoc = require("pandoc-filter");
const { convert } = require('convert-svg-to-png');
var Str = pandoc.Str;

async function action({ t: type, c: value }, format, meta) {
    
    if (type != "CodeBlock") return null;
    var attrs = value[0],
    content = value[1];
    var id = attrs[0],
        classes = attrs[1];

    if (classes.indexOf('svgkepng') < 0) return null;
    
    var png = await convert(content);
    var newImage = 'data:image/png;base64,' + png.toString('base64');

    return pandoc.Para(
        [
            pandoc.Image(
                [id, [], []],
                [pandoc.Str('')],
                [newImage, '']
            )
        ]
    );
}
 
// pandoc.stdio(action);
pandoc.toJSONFilter(async function(type, value, format, meta){
    return action(type, value, format, meta);
});