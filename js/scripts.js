var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();

var changeText = text.replace('Velociraptor', dinosaurUpperCased);
var leftText = changeText.slice(0,72.5);
console.log(leftText);