# XcooBee Cookie Kit Express Sample App

This app demonstrates the use of the XcooBee Cookie Kit (XCK) with a nodejs express backend.

The initial design is based on W3 School Template (W3.CSS).

For further information on the XCK please visit [XcooBee XCK Documentation](https://www.xcoobee.com/docs/developer-documentation/plugins/xcoobee-cookie-kit/)



## installation

You will need nodejs installed. We recommend nodejs 8 or higher. Go to [nodejs.org](https://nodejs.org) to download and install for your system.

Run `npm install` in the directory where you have unzipped the files.


## running sample site

You can start this express app using this command line in terminal after you have navigated to the directory where you have unzipped and installed the files. In terminal/command window:

On Mac and Linux:

```
DEBUG=myapp:* npm start

```

On Windows:

```
set DEBUG=myapp:* & npm start
```

You should now be able to access the site on `http://localhost:3000` in any of your browsers.


To stop the site press `CTRL + C` in terminal window.


## Cookie Kit Location and Working

The XCK is loaded via `foot.pug` template which is used as an include template, i.e. other templates simply include it.

The foot.pug then, loads the main library with line:

```
script(id="xcoobee-cookie-kit" src="https://app.xcoobee.net/scripts/kit/xcoobee-cookie-kit.min.js")
```

The XCK will then be started with a script located in `public/scripts/cookie-kit-init.js` javascript file.
The call for this is also part of the `foot.pug` template.

```
script(src="scripts/cookie-kit-init.js")
```

If you want to make changes and experiment with the XCK, you mainly will need to change the values in `public/scripts/cookie-kit-init.js`.


## Cookie Setting / Unsetting

The cookie setting for the express application occurs in the `routes/cookiesetter.js` javascript file. Here we process the HTTP POST event to the `/cookiesetter` route and depending on user selection set or unset cookies.

You should expand the methodology here to set your cookies, clean them up, handle more exceptions, etc.

You should be able to track the impact of this code in your browser. As you change the values in the cookie popup dialog and click `OK`, you should see corresponding changes in your cookies using the browser's developer tools.

DON'T FORGET TO RESTART YOUR APP AFTER YOU MAKE CHANGES TO CODE.

You can also use nodemon to monitor and automatically restart of course: (https://nodemon.io/).
