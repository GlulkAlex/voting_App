// @flow
/**: number*/
//*:: type foo = number;
//*flow-include type boo = number;

//*x: any
//*x: mixed
//*foo?: string -> foo: string|void
//*undefined: void
//*null: null
//*"foo": "foo"
//*1: 1
//*true: true
//*function reversed<T>(array: T[]): T[] {
//*function sum(...xs: number[]): number {
//*<A,B>([a,b]: [A,B]): [B,A] => [b,a];
"use strict";

/*** config ***/
/*** config end ***/
///> using info / code from http://blog.tompawlak.org/generate-random-values-nodejs-javascript

/*** Node.js modules ***/
const crypto = require('crypto');
/*** Node.js modules end ***/
///>>> helper
function random_Bucket(
  ///> interval start
  lower_Limit/*: number = 0 */
  ///> interval end
  ,upper_Limit/*: number = 1*/
  ,is_Debug_Mode/*: ?boolean *///<- optional
) /*: number */{
  //assert(lower_Limit < upper_Limit);

  ///> must be inclusive
  ///> so, for {0, 1} -> 2
  ///> for {x, x} -> 1 <- useless / meaningless
  ///> for {0, 2} => {0, 1, 2} -> 3
  var buckets /*: number */= upper_Limit - lower_Limit + 1;
  var rand_Float /*: number */= Math.random();
  //var bucket_Float /*: number */= rand_Float * (buckets - 1);
  var bucket_Float /*: number */= rand_Float * (buckets);
  ///>DONE does this creates even distribution ???
  ///> not even close
  //[173, 328, 323, 176 ].reduce( (prev, curr) => prev + curr ); -> 1000
  //[ 138, 243, 246, 241, 132 ] -> so use .floor instead of .round
  //var bucket /*: number */= Math.round(bucket_Float);
  //[ 256, 248, 249, 247, 0 ] for 1000
  var bucket /*: number */= Math.floor(bucket_Float);
  //[ 442, 396, 162, 0 ]
  //var bucket/*: number */ = Math.round(buckets % (Math.random() * (buckets - 1)));
  //[ 451, 439, 110, 0 ]
  //var bucket/*: number */ = Math.round(buckets % (Math.random() * buckets));
  //[ 354, 344, 94, 0, 208 ]
  //var bucket/*: number */ = Math.round(buckets % (Math.random() * (buckets + 1)));
  //"".concat(
  if (is_Debug_Mode) {console.log(
    {
      lower_Limit: lower_Limit
      ,upper_Limit: upper_Limit
      ,buckets: buckets
      ,rand_Float: rand_Float
      ,bucket_Float: bucket_Float
      ,bucket: bucket
      ,result: lower_Limit + bucket
    }
  );}


  return lower_Limit + bucket;
}

///>>> helper
function pick_Random_Bucket(
  ///> interval start
  lower_Limit/*: number = 0 */
  ///> interval end
  ,upper_Limit/*: number = 1*/
  ,is_Debug_Mode/*: ?boolean *///<- optional
) /*: number */{
  //assert(lower_Limit < upper_Limit);

  ///> must be inclusive
  ///> so, for {0, 1} -> 2
  ///> for {x, x} -> 1 <- useless / meaningless
  ///> for {0, 2} => {0, 1, 2} -> 3
  var buckets /*: number */= upper_Limit - lower_Limit + 1;
  var bucket /*: number */= crypto.randomBytes(1).readUInt8(0) % buckets;
  if (is_Debug_Mode) {console.log(
    {
      lower_Limit: lower_Limit
      ,upper_Limit: upper_Limit
      ,buckets: buckets
      ,bucket: bucket
      ,result: lower_Limit + bucket
    }
  );}


  return lower_Limit + bucket;
}

//var uuid = require('node-uuid');
/*
from: https://en.wikipedia.org/wiki/Universally_unique_identifier

A universally unique identifier (UUID) is
an identifier standard
used in software construction.
A UUID is
simply a 128-bit value.
The meaning of each bit is
defined by
any of several variants.
For human-readable display,
many systems use
a `canonical format`
using
`hexadecimal` text
with inserted `hyphen` characters.

Version 4 (random):
Version 4 UUIDs use
a scheme
relying only on `random numbers`.
This algorithm sets
the `version number` (4 bits)
as well as
two `reserved bits`.
All other bits (the remaining 122 bits) are
set using
a random or pseudorandom data source.
Version 4 UUIDs have the `form`:
  xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
  where 'x' is
  any `hexadecimal digit` and
  'y' is
  one of {8, 9, A, or B}
  (e.g., f47ac10b-58cc-4372-a567-0e02b2c3d479).
*/
///>>> ES modules
//export
function generate_UUID(
  is_Debug_Mode/*: ?boolean *///<- optional
)/*: string*/ {
  var place_Holder/*: Array<string>*/ = [
    "xxxxxxxx",//.length -> 8
    "xxxx",//.length -> 4
    "4xxx",//.length -> 1 + 3
    "yxxx",//.length -> 1 + 3
    //.length -> 12
    "xxxxxxxxxxxx",/// <- Never put a comma after the last element (like "BMW",).
    ///> The effect is inconsistent across browsers.
    ///> in NodeJS & Chromium it works just OK
  ]//.join("-")
  ;
  //Number(10).toString(16); -> 'a'
  //parseInt(11).toString(16); -> 'b'
  //var Y_ENUM/*: Array<string|number>*/ = [8, 9, 'A', 'B'];
  var new_UUID/*: string*/ = "";
  const ORDER_SHIFT = Math.pow(10, 18);
  //"0.bc58b36333c7d"
  //Math.random().toString(16).length; -> 15 == 2 + 13
  //DONE seq_1.length must be strictly equal to 8
  //var seq_1/*: string*/ = Math.random().toString(16).slice(2);
  //var seq_2/*: string*/ = Math.random().toString(16).slice(2, 2 + 6);
  //TODO seq_3.length must be strictly equal to 12
  //var seq_3/*: string*/ = Math.random().toString(16).slice(2, 2 + 12);
  //> result: 35a53304-41fc-41.2-8c02-9d8c67028c00
  //> too many trailing '0' & '41.2' <- ??? whf ???
  /*
  crypto.randomBytes(256, (err, buf) => {
    if (err) throw err;
    console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`);
  });
  //256 bytes of random data: 5e8e941e5893e1c97f2909cc85ee478e3e6ea42e0e0eedc02c6e5fb9ae024b88f75d12a24f8a3d447b61d4171cfa7c3466b574074c52e5186ff023c82f3ea83a2a30ad1bea774041e8dd4fa04842ee514ea294d8887ca1496db05f0fc1232c0b82eb3414e74dacca6e0af1def0a1d61a249f35558fcc6f46914f727b1da2d9b8b52effe891a4fdb18361f0c8c63c5ae4f96f78e6d84a36149e2b86a8078860cf0b9fa1bdb2a3f60afca3d351e02cd681659a496f8429d41b96e3e93a6a5516925719871fe793541ced665dfe187c4f88ec39c1f30ea4beb1848506be37977c531696580397a77a3c8e0922288e5143f04bd1c1d94ec3c33d0cf94492417fa815
  */
  var hex_Sequence/*: string*/ = ""
    /*.concat(
      //(Math.random() * ORDER_SHIFT).toString(16)
      Math.random().toString(16).slice(2)
      ,Math.random().toString(16).slice(2)
      ,Math.random().toString(16).slice(2)
      ,Math.random().toString(16).slice(2)
    )*/
  ;
  const LOWER_LIMIT = 8;
  const UPPER_LIMIT = 11;

  hex_Sequence = crypto.randomBytes(32).toString('hex');

  if (is_Debug_Mode) {console.log(
  {
    hex_Sequence: hex_Sequence
    ,length: hex_Sequence.length
  }
  );}
  place_Holder[0] = hex_Sequence.slice(0, 8);
  place_Holder[1] = hex_Sequence.slice(8, 8 + 4);
  place_Holder[2] = '4' + hex_Sequence.slice(8 + 4, 8 + 4 + 3);
  //place_Holder[3] = 'a' + seq_2.slice(-3);
  place_Holder[3] = parseInt(
      //random_Bucket(LOWER_LIMIT, UPPER_LIMIT)
      pick_Random_Bucket(LOWER_LIMIT, UPPER_LIMIT)
    ).toString(16) +
    hex_Sequence.slice(8 + 4 + 3, 8 + 4 + 3 + 3);
  place_Holder[4] = hex_Sequence.slice(8 + 4 + 3 + 3, 8 + 4 + 3 + 3 + 12);
  new_UUID = place_Holder.join("-");

  return new_UUID;
}


/*##########################################################################*/
///>>> CommonJS modules
/*
If you want
the root of your module's export to be
a function (such as a constructor) or
if you want
to export a complete object
in one assignment
instead of
building it one property at a time,
assign it to module.exports
instead of exports.
*/
//generate_UUID: { generate_UUID: '01a05c22-5c22-4ac4-a712-70f4544f' }
//module.exports.generate_UUID = generate_UUID();
//generate_UUID: { generate_UUID: [Function: generate_UUID] }
//module.exports.generate_UUID = generate_UUID;
exports.generate_UUID = generate_UUID;
exports.random_Bucket = random_Bucket;
//generate_UUID: function generate_UUID()/*: string*/ {
//module.exports = generate_UUID;
