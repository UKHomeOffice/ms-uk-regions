# Modern Slavery UK Regions

Exports a list of UK Regions to be used in the modern slavery app.

Can be used with the [Typeahead Aria](https://github.com/UKHomeOffice/typeahed-aria), which is exported with [HOF Frontend Assets](https://github.com/UKHomeOfficeForms/hof-frontend-assets).

## Example Usage

The following is an example of Modern Slavery UK Regions in a HOF `field` with Typeahead Aria:
```
'country-select'-step: {
  mixin: 'select',
  className: ['typeahead', 'js-hidden'],
  options: [''].concat(require('ms-uk-regions')),
  legend: {
    className: 'visuallyhidden'
  },
  validate: ['required']
},
```