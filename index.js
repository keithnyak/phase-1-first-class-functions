function myCallback(){
  console.log("yes I was called")
}
function returnsANamedFunction(){
  console.log("I come before the called back")
}
(function returnsAnAnonymousFunction(){

})

(function receivesAFunction(myCallback){
  returnsANamedFunction();
  myCallback();
})
