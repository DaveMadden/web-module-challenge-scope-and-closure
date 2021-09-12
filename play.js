// console.log("working");

const passed = 3;

const addTo = function(){
  const inner = 2;
  return inner + passed;
}

// console.log(addTo());
//this will look at the addTo() object itself:
console.dir(addTo);