# vHttpService

[![Build Status](https://api.travis-ci.org/xrexonx/vHttpService.svg?branch=master)](https://travis-ci.org/xrexonx/vHttpService)

Simple and lightweight Http Services for Vue.js.

## Installation
Install via npm
```sh
$ npm install vhttpservice
```

## Sample usage
Include scripts
```js
<script src="http://cdn.jsdelivr.net/vue/1.0.16/vue.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue-resource/0.1.17/vue-resource.min.js"></script> 

// Include after loading the vue and vue-resource.
<script src="/dist/vHttpService.min.js"></script>

<script src="/js/UserController.js"></script>
```

```js
// Quick Sample usage on signing up new user account
// Should be somewhere on your UserController.js files

(function () {
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
				
				// Invoke vHtpp.send('url', 'method', objData, fnSuccessCallback);
	  			vHttp.send('/create', 'POST', oData, sCb);
	  			
	  		},
	  		edit: function(id, index) {
	  			// Just like the create methods, 
	  			//should set oData
	  			//should create your success callback inside this scope
           			vHttp.send('/edit', 'GET', oData, sCb);
	  		},
	  		update: function() {
	  			// Just like the create methods, 
	  			//should set oData
	  			//should create your success callback inside this scope	  		
           			vHttp.send('/update', 'POST', oData, sCb);
	  		},
			destroy: function(id) {
	  			// Just like the create methods, 
	  			//should set oData
	  			//should create your success callback inside this scope			
				vHttp.send('/delete', 'DELETE', oData, sCb);
	  		}
	  	}
	});

})();
```


## License
MIT © [Rexon A. De los Reyes](http://xrexonx.github.io)


#### Thanks and enjoy. Godspeed!
