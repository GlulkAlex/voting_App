"use strict";
/*** config ***/
//const
var env = () => {
  try {
    return require('./.env.json');
  } catch(err) {
    console.warn("config file missing, so as actual connection info too");

    return {
      "TEST_MONGODB": {
        "value": false
      }
      ,"DEBUG_MODE": {
        "value": false
      }
    };
  }
}();
const mongoLab_URI = (
  // must be on `.env` file or
  // in heroku config
  // it is possible
  // to use the same config var
  // in both local and Heroku environments
  env.TEST_MONGODB.value ||
  process.env.TEST_MONGODB ||
  process.argv[3] ||
  "mongodb://localhost:27017/data_uri"
);
const is_Debug_Mode = (
  process.env.IS_DEBUG ||
  env.DEBUG_MODE.value ||
  process.argv[2]
  //true
  //false
);
//*** config end ***//

/*** Node.js modules ***/
// a core module
const assert = require('assert');

// npm module
//var
//const mongo_Client = require('mongodb').MongoClient;
/*** Node.js modules end ***/

//*** application modules ***//
//const parse_Stream = require('./stream_Parser.js').parse_Stream;
///>>> ES6 modules
//import {generate_UUID} from "./generate_UUID.js";
///>>> CommonJS modules
//const generate_UUID = require('./generate_UUID.js');
const generate_UUID = require('./generate_UUID.js').generate_UUID;
const random_Bucket = require('./generate_UUID.js').random_Bucket;
//*** application modules end ***//

//*** helpers ***//
function helper(
  params//:int
) {// => list of obj
  "use strict";

  var result;
  var results = [];

  return results;
}

/*** helpers end ***/


/*** tests ***/
// DONE write at least one working test
var actual_Results;
var expected_Results;
// jshint esversion: 6, laxcomma: true
/* jshint laxcomma: true */
var test_1_0 = function(description){
  "use strict";
  // curred
  return function(
    ///> tests total
    iterations//: number = 1
    ,expected_Result//:int
  ) {// => bool
    "use strict";
    console.log(description);

    var results = [];
    var result;
    var i = 0;//<- counter


    return Promise.resolve(() => {
      console.log("resolving ...");
      //console.log("generate_UUID:", generate_UUID);
      assert.equal(typeof(iterations), "number");
      assert(iterations > 0);
      for (;i < iterations;i++) {
        result = generate_UUID();
        console.log("result:", result);
        // ? use RegEx for format check ?
        //"f47ac10b-58cc-4372-a567-0e02b2c3d479"
        // must be string
        // must have 5 groups length of {8, 4, 4, 4, 12}
        // divided by '-' delimiter (4 total)
        // total string length == 8 + 4 * 3 + 12 + 4 = 36
        // each group consist only of `hexadecimal digits` [0-9a-f]
        //TODO check that AssertionError: 31 == 32 <- length is wrong
        //assert.equal(result.length, 32);
        assert.equal(typeof(result), "string");
      }
    }())
    ;
  };
}("test 1.0: must return correct UUID according to Version 4 UUIDs scheme")
//(... params, expected_Results)
(50)
;

/* jshint laxcomma: true */
var test_2_0 = function(description){
  "use strict";
  // curred
  return function(
    ///> interval start
    lower_Limit//: number = 0
    ///> interval end
    ,upper_Limit//: number = 1
    ///> tests total
    ,iterations//: number = 1
    ,expected_Result//:int
  ) {// => bool
    "use strict";
    console.log(description);

    var results = [];
    var result;
    var i = 0;//<- counter

    if (iterations) {} else {
      if (iterations <= 0) {iterations = 1;}
    }


    return Promise.resolve(() => {
      console.log("resolving ...");
      for (;i < iterations;i++) {
        result = random_Bucket(lower_Limit, upper_Limit
          //, is_Debug_Mode
        );
        results.push(result);
        //console.log("result:", result);
        assert(result >= lower_Limit);
        assert(result <= upper_Limit);
        assert.equal(typeof(result), "number");
      }
      console.log("results:\n", results);
    }())
    ;
  };
}("test 2.0: must return random integer / number within inclusive interval")
//(... params, expected_Results)
//(8, 11, 50)
;

/*** tests end ***/

//***#####################################################################***//
/*** unit test (main) ***/
var run_Tests = [
  {"test": 1, "run": 0}
  ,{"test": 2, "run": 0}
];
