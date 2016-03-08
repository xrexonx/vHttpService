# vHttpService

[![Build Status](https://api.travis-ci.org/xrexonx/vHttpService.svg?branch=master)](https://travis-ci.org/xrexonx/vHttpService)

Simple and lightweight Http Services for Vue.js.

## Installation
Install via npm
```sh
$ npm install vhttpservice
```

## Sample usage

```js
<script src="/dist/vHttpService.min.js"></script>
```

```js
// Quick Sample usage on signing up new user account

! function () {
	"use strict";

	new Vue({
	  	el: '#singUp',
	  	data: {
	  		oUsers : {}
	  	},
	  	methods : {
	  		create: function() {
	  		  // success callback
	  			var sCb = function (response) {
	  				// Manage response here..
	  				console.log(response);
	  			};
	  			// Data bind from the signup form
	  			var oData = this.oUsers

	  			vHttp.send('/create', 'POST', oData, sCb);
	  			
	  		},
	  		edit: function(id, index) {
           
	  		},
	  		update: function() {
           
	  		},
			destroy: function(id) {

	  		}
	  	}
	});

}();
```


## License
MIT © [Rexon A. De los Reyes](http://xrexonx.github.io)


#### Thanks and enjoy. Godspeed!
