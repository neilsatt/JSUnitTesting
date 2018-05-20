// Expect method
var expect = require('chai').expect;

expect(true).to.be.true;

function titleCase (title) {
    return title;
}

expect(titleCase('paris, texas')).to.be.a('string');
expect(titleCase('paris, texas')).to.equal('Paris, Texas');



