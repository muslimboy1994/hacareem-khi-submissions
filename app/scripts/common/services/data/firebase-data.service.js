(function() {
	'use strict';

	angular
		.module('restaurant.common')
		.factory('db', ['ENV', function(ENV) {
			firebase.initializeApp(ENV.firebaseConfig);
			return firebase.database().ref()
		}])
		.factory('firebaseDataService', firebaseDataService);

	firebaseDataService.$inject = ['_', 'db', '$firebaseArray', '$firebaseObject'];

	/* @ngInject */
	function firebaseDataService(_, db, $firebaseArray, $firebaseObject) {
		var service = {
			getSuggestedPLaces: getSuggestedPLaces,
			getBusiness: getBusiness,
            newRegister: newRegister,
            personLogin: personLogin,
            regFinal: regFinal,
            accountCheck: accountCheck,
            getSuggestionsFor: getSuggestionsFor
		};
		return service;

		// ***********************************************************
        
        // Return null if there is no suggestion other wise return array
		function getSuggestedPLaces(location,loginDetail){
            
            var temp = [
                {
                    loc:'Mohatta Palace',
                    lat:'',
                    lon:''
                },{
                    loc:'Frere Hall',
                    lat:'',
                    lon:''
                },{
                    loc:'Mazar-e-Quaid',
                    lat:'',
                    lon:''
                },{
                    loc:'Clifton Beach',
                    lat:'',
                    lon:''
                },{
                    loc:'PAF Museum',
                    lat:'',
                    lon:''
                },{
                    loc:'Empress Market',
                    lat:'',
                    lon:''
                },{
                    loc:'Safari Park',
                    lat:'',
                    lon:''
                }
            ];
            return temp;
                        
        }
        
        // Return null if there is no suggestion other wise return array
        function getSuggestionsFor(location,loginDetail,callback){
            
            var temp = [{
                    loc:'Fast Nuces'
                },{
                    loc:'Regal center'
                },{
                    loc:'Atrium'
                }];
            
            /*
            var query = db.child('suggestiontree/destByTime/358a71abf8/monday/5/0');
            var result = $firebaseObject(query).$loaded().then(function(res){
                var afterInit = initItem(res);
                callback(afterInit);
            });
            //console.log(result);
            */
            callback(temp) ;
        }

		function getBusiness() {
			var query = db.child('business');
			return $firebaseObject(query).$loaded().then(initItem);
		}

		function initItem(item) {
			return angular.extend({}, item, {
				guid: item.$id
			});
		}
        
        function accountCheck(data,callback){
            
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(data.email))
                callback ({error: true, message: 'Incorrect email address'});
            var check = false;
            
            db.once("value")
              .then(function(snapshot) {
                
                //Checking if email exist
                
                var snappy2 = snapshot.child('users/list');
                snappy2.forEach(function(childSnapshot) {
                    if(childSnapshot.child('email').val()==data.email){
                        check=true;
                        return !check;
                    }
                    
                });
                
                if(check){
                    callback( {error: true, message: 'Email Address already exist'});
                }else{
                    callback( {error: false, message: ''});
                }
            });
                
        }
        
        function newRegister(data){
            
            // Now Insertion
            db.once("value")
              .then(function(snapshot) {
                var snappy2 = snapshot.child('users/list');
                
                // Getting max value
                var max = 0;
                snappy2.forEach(function(childSnapshot) {
                    if(Number(childSnapshot.key)>max){
                        max = Number(childSnapshot.key);
                    }
                });
                max= max+1;

                //Inserting Data
                db.child('users/list/'+max).set(data);
            });
            
        }
        
        function regFinal(max,data){
            db.child('users/list/'+max).set(data);
        }
        
        function personLogin(data,callback){
            
            db.once("value")
              .then(function(snapshot) {
                
                var id = -1;
                
                //Checking if email exist
                var snappy2 = snapshot.child('users/list');
                snappy2.forEach(function(childSnapshot) {
                    //console.log(childSnapshot);
                    if(childSnapshot.child('email').val()==data.email && childSnapshot.child('password').val()==data.password){
                        id  = Number(childSnapshot.key);
                        return false;
                    }
                    
                });
                
                var query = db.child('users/list').child(id);
                var item = initItem($firebaseObject(query).$loaded());
			    callback( {id: id, fb: item } );
                
                
              });
            
        }

		function initArray(array) {
			return _.map(array, initItem);
		}
	}
})();
