let friends = [{
        name: 'Anna',
        books: ['Bible', 'Harry Potter'],
        age: 21
      }, {
        name: 'Bob',
        books: ['War and peace', 'Romeo and Juliet'],
        age: 26
      }, {
        name: 'Alice',
        books: ['The Lord of the Rings', 'The Shining'],
        age: 18
      }]
let allBooks = friends.reduce((acc,val)=>{
        return [...acc,...val.books]
},[]);
console.log(allBooks);
