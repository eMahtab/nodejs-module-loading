console.log("Module M3 ");

module.exports = function(){

    return {
        func3 : function(){
                console.log("Function 3 in module 3");
                },

        sum  :  function(a,b){
                 return a+b;
                 },

        alpha : 10
    };      

}