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
snippetStyle.formatDates();
</script>
```

Build
-----

If you want to build this repository:

```
npm install
gulp
```

Deploy
------
Update the version in `bower.json`, run gulp, and commit your changes. Then run `npm version x.x.x`: this will create a new commit and tag it. You can now run `git push origin master vx.x.x`. And voilà!
