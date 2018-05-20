// Expect method
var expect = require('chai').expect;

expect(true).to.be.true;

function titleCase (title) {
    var words = title.split(' '); // individual words in title
    var titleCasedWords = words.map(function (word) {
        return word[0].toUpperCase() + word.substring(1);
    });
    return titleCasedWords.join(' '); // put them back together
     
}

expect(titleCase('paris, texas')).to.be.a('string');
expect(titleCase('a')).to.equal('A');
expect(titleCase('vertigo')).to.equal('Vertigo');

expect(titleCase('paris, texas')).to.equal('Paris, Texas');



