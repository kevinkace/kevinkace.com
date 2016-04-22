### [ttSails](https://github.com/kevinkace/ttSails)

A [SailsJs](http://sailsjs.org/) app for tracking skateboarding tricks and spots to skate. This started mostly as a reason to give SailsJs a try, which has a few things going for it I really liked:
- clear and simple base for API creation
- comes with [Gulp](http://gulpjs.com/) support
- [Waterline ORM](https://github.com/balderdashy/waterline) with support to write to disc, bypassing the need for DB creation
- [Postgres](http://www.postgresql.org/), which I'll migrate to once dev is more stable
I've incorporated [Browserify](http://browserify.org/) and [Mitrhil](http://mithril.js.org/) for the frontend application, Mithril view templates are universal (shared between front and back end). A lot to do here still.