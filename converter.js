const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
var path = require('path')

ffmpeg.setFfmpegPath(ffmpegPath);

var file = path.join( __dirname, 'input.mp4')

console.log(path.join( __dirname, 'input.mp4'))

ffmpeg(file).format('m3u8').output('outputfile.m3u8').on('end', ()=>{}).run();