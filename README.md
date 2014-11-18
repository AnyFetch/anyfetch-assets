anyfetch-assets
======================

Introduction
------------

Anyfetch Assets is made to help you use default anyfetch snippet & full mustache templates by styling them, and provide other usefull resources as provider images for example.

Snippet style tries to be not intrusive and respactful toward your current styles. Those styles will only apply on template elements (with the class namespace `anyfetch-`). They are also made of relative measures and font agnostic.

Usage
-----

Just run in your terminal:

```shell
bower install --save anyfetch-assets
```

and in your HTML:

```html
<link rel="stylesheet" type="text/css" src="bower_components/anyfetch-assets/dist/index.min.css" />
<script type="text/javascript" src="bower_components/anyfetch-assets/dist/index-moment.min.js"></script>
<script type="text/javascript" charset="utf-8">
anyfetchAssets.formatDates();
</script>
```

Build
-----

If you want to build this repository:

```
npm install
gulp
```

Contributing
------

* Update the version in `bower.json`.
* Run `gulp` to compile production files in the `dist/` directory.
* Commit your changes and the `dist/` folder.
* Run `npm version x.x.x`: this will create a new commit and tag it.
* You can now run `git push origin master vx.x.x`.
* You're done!

Adding an icon
------

You have to respect some rules when you plan to add an icon in anyfetch-assets (like a provider icon for example):

* Use SVG format (Inkscape is preferred).
* Follow [these sizes](https://cdn.rawgit.com/AnyFetch/anyfetch-assets/icon-improvements/icon-guidelines.svg). Set your canvas size to 512*512px, draw your icon centered in a 440*440px size. (in Inkscape: File > Document Properties > Custom dimensions).
* Generate a grayscale icon if needed. (in Inkscape: Select All, then Filters > Color > Desaturate). Save it as filename_grayscale.svg
* Run `gulp` to minimise your svg in the `dist/` directory, but as this process can be destructive, be sure to check if your icon is not broken in a web browser.
If others icons are modified in the process (`git diff`), ensure they are not broken too.
* Commit your changes and the `dist/` folder, and follow instruction described in the *Contributing* section of this README.
