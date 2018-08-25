let path = require('path')

let friends = require('../data/friends.js')

module.exports = function(app){
    //view friends
    app.get('/data/friends', function(req, res){
        res.json(friends);
    })
    
    
    // post data
    app.post('/data/friends', function(req, res){
        
        let userInput = req.body;
        console.log('userData '+ JSON.stringify(userInput))
        
        let userResponse = userInput.scores;
        console.log('userData '+ userInput);
        
        
//Find match
        
        //set up variables
        let matchName = "";
        let matchImage = "";
        //Total Difference has to be a large number so that there are no ties
        let totalDifference = 10000;
        
        //Examine all options
        
        for(let i=0; i <friends.length;i++){
            //console.log('match ' + JSON.stringify(friends[i]));
        
        let diff = 0;
        
        for(let k = 0; k < userResponse.length; k++){
            diff +=Math.abs(friends[i].scores[k] - userResponse[k]);
        }
            
        console.log('diff =' + diff);
            
        if(diff < totalDifference){
            
            totalDifference = diff;
            matchName = friends[i].name;
            matchImage = friends[i].photo;
            
            
        }
            
            
    }
        
        
        console.log(matchName)
        friends.push(userInput);
        //console.log(friends);
        
        res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
        
        
    });  
};

























