var express = require('express');

var router = express.Router();

/*
POST cookie setter page.

This is where we process the setting of cookies based on values we get from XCK.
*/
router.post('/', function(req, res, next) {
  let myData = JSON.parse(req.body);
  // console.log(myData.result);
  cookieHandler(myData.result, res);

  res.set('Content-Type', 'text/html');
  res.send("XcooBee Kit cookie setter page processed your cookies.");
});


// sets all needed cookies
function cookieHandler(cookieObject, res) {
  if (cookieObject.application) {
    // set required cookies here
    res.cookie("xckAppCookie", "My application cookie");
  } else {
    // remove required cookie here
    res.clearCookie("xckAppCookie");
  };

  if (cookieObject.usage) {
    // set user personalization cookies here
    res.cookie("xckUsageCookie", "My personalization cookie");
  } else {
    // remove user personalization cookies here
    res.clearCookie("xckUsageCookie");
  };

  if (cookieObject.statistics) {
    // set site statistics gathering cookies here
    res.cookie("xckStatisticsCookie", "My statistics cookie");
  } else {
    // remove site statistics gathering cookies here
    res.clearCookie("xckStatisticsCookie");
  };

  if (cookieObject.advertising) {
    // set advertising and marketing and tracking cookies here
    res.cookie("xckAdvertisingCookie", "My advertising cookie");
  } else {
    // remove advertising and marketing and tracking cookies here
    res.clearCookie("xckAdvertisingCookie");
  };
}

module.exports = router;
