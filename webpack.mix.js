let mix = require('laravel-mix')
let path = require('path');

require('./nova.mix.js');

mix
    .setPublicPath('dist')
    .js('resources/js/field.js', 'js')
    .vue({ version: 3 })
    .nova('numaxlab/nova-ckeditor5-classic')
