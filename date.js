exports.getDate = function (){
    
    const today = new Date();
      
    const options = { // for date format 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long'
    };

    return today.toLocaleDateString("en-US", options);
}; // without the () so it only run on the app.js when we use it on the cost we called date

exports.getDay = function (){

    const today = new Date();
      
    const options = { // for date format 
        weekday: 'long', 
    };

    return today.toLocaleDateString("en-US", options);
};

