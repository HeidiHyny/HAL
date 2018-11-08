// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase : {
     apiKey 				:  'AIzaSyB9OJlA9VVSxlaQ9SD6UNrD1hNbkWf108I',
     authDomain			: 'hal-app-a7a57.firebaseapp.com',
     databaseURL			: 'https://hal-app-a7a57.firebaseio.com',
     projectId				: 'hal-app-a7a57',
     storageBucket			: 'hal-app-a7a57.appspot.com',
     messagingSenderId		: '232053946667'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
