const utils = require( './utils' );

it( 'Add 2 numbers', () => {
  var sum = utils.add( 1, 2 );
  if ( sum !== 3 ) {
    throw new Error( `Expected 3, but get ${ sum }` );
  }
} );
