// Logic Challenge - Mengelompokkan Hewan
function groupAnimals(animals) {
  for (i = 0 ; i < animals.length-1 ; i++){
    for ( j = 0 ; j < animals.length-1-i ; j++){
      if ( animals[j][0] > animals[j+1][0]){
        var temp = animals[j];
        animals[j] = animals[j+1];
        animals[j+1] = temp;
      }
    }
  }

  var result = [];

  for ( i = 0 ; i < animals.length ; i++){
    var found = false

    for ( j = 0 ; j < result.length ; j++){
      if ( animals[i][0] === result[j][0][0]){
        result[j].push(animals[i])
        found = true;
      }
    }

    if (!found){
      result.push([animals[i]])
    }
  }
  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa',  'kancil', 'unta', 'cicak' ]));