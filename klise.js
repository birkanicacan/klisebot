/*var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-41918757-2']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();*/


function KliseCtrl($scope) {

$scope.theklise='';
$scope.indx=0;
	
$scope.kliselist = [
	{text:'Atıyorum isteyene'},
	{text:'Çok sınav var'},
	{text:'Finalde midterm öncesi dahil değil'},
	{text:'Çok bozdu çok'},
	{text:'Ellere dikkat'},
	{text:'Naptın?'},
	{text:'Amacın ne?'},
	{text:'Naber'},
	{text:'Koyduk mu?'},
	{text:'Sen meşgulsun sanırım ben yatıyorum iyi geceler!'},
];

 
 /* $scope.addTask = function() {
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
  };
 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };


  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  }; */

  $scope.newklise = function() {
	 $scope.indx=Math.round(Math.random()*10);
	 $scope.theklise= $scope.kliselist[$scope.indx].text;	
  };
  

	  
};	  


/*$scope.selectS2S = function() {

				if(localStorage['S2Sstatus']!=undefined) 
				{
					$scope.programs[0].done=localStorage['S2Sstatus'];
				}

				localStorage['S2Sstatus']=1;
				localStorage['NSUstatus']=0;
				localStorage['EGZstatus']=0;
  	 			$scope.programs[0].done=1;
				$scope.programs[1].done=0;
				$scope.programs[2].done=0;
				
				
};
  

 $scope.selectNSU = function() {				
				if(localStorage['NSUstatus']!=undefined) 
				{
					$scope.programs[1].done=localStorage['NSUstatus'];
				}
				localStorage['S2Sstatus']=0;
				localStorage['NSUstatus']=1;
				localStorage['EGZstatus']=0;
  	 			$scope.programs[0].done=0;
				$scope.programs[1].done=1;
				$scope.programs[2].done=0;
				
};

 $scope.selectEGZ = function() {
			
				if(localStorage['EGZstatus']!=undefined) 
				{
					$scope.programs[2].done=localStorage['EGZstatus'];
				}
				localStorage['S2Sstatus']=0;
				localStorage['NSUstatus']=0;
				localStorage['EGZstatus']=1;
  	 			$scope.programs[0].done=0;
				$scope.programs[1].done=0;
				$scope.programs[2].done=1;
};

 $scope.localsync1 = function() {
			
		if(localStorage['S2Sstatus']!=undefined) 
		{
			$scope.programs[0].done=localStorage['S2Sstatus'];
		}
		
		if(localStorage['NSUstatus']!=undefined) 
		{
			$scope.programs[1].done=localStorage['NSUstatus'];
		}
		
		if(localStorage['EGZstatus']!=undefined) 
		{
			$scope.programs[2].done=localStorage['EGZstatus'];
		}
		
		if(localStorage['Region']=='Americas')
		{
 			$scope.programs[0].target=8;
			$scope.programs[1].target=12;
			$scope.programs[2].target=12;
		}
		
		if(localStorage['Region']=='APAC')
		{
 			$scope.programs[0].target=8;
			$scope.programs[1].target=12;
			$scope.programs[2].target=12;
		}
		
		if(localStorage['Region']=='EMEA')
		{
 			$scope.programs[0].target=8;
			$scope.programs[1].target=15;
			$scope.programs[2].target=15;
		}
		
		if(localStorage['Region']==undefined)
		{
			 chrome.tabs.create({url:"options.html"});
		}
};

 $scope.localsync2 = function() {
	
		angular.forEach($scope.structuretasks, function(task) {
		      if(localStorage[task.text]!=undefined)	{
				task.done=localStorage[task.text];
				}
		    });
		
		angular.forEach($scope.extensiontasks, function(task) {
		      if(localStorage[task.text]!=undefined)	{
				task.done=localStorage[task.text];
				}
	  		});
			
		angular.forEach($scope.billingandbudgetingtasks, function(task) {
		      if(localStorage[task.text]!=undefined)	{
				task.done=localStorage[task.text];
				}
	  		});

		angular.forEach($scope.billingtasks, function(task) {
		      if(localStorage[task.text]!=undefined)	{
				task.done=localStorage[task.text];
				}
	  		});	
	
			angular.forEach($scope.displaynetworktasks, function(task) {
			      if(localStorage[task.text]!=undefined)	{
					task.done=localStorage[task.text];
					}
		  		});	
		
			angular.forEach($scope.advancedfeaturestasks, function(task) {
			      if(localStorage[task.text]!=undefined)	{
					task.done=localStorage[task.text];
					}
				});		
			angular.forEach($scope.educationtasks, function(task) {
			      if(localStorage[task.text]!=undefined)	{
					task.done=localStorage[task.text];
					}
		  		});	
			
			angular.forEach($scope.transferstasks, function(task) {
			      if(localStorage[task.text]!=undefined)	{
					task.done=localStorage[task.text];
					}
		  		});								
	
};

 $scope.localsync3 = function(tasktext,taskdone) {
				localStorage[tasktext]=taskdone;
};


 $scope.programname = function() {
				var programname='';
  	 			
				if($scope.programs[0].done==true)
				programname='S2S';
				if($scope.programs[1].done==true)
				programname='NSU';
				if($scope.programs[2].done==true)
				programname='EGZ';
					
				return programname;
};


 $scope.submit = function (){
	
	var container = document.getElementsByClassName("gwt-Anchor");

	var opportunities = [];
	var all_pitched = [];

	for (var i = 0; i < container.length; i++) {
		all_pitched[i] = container[i].innerHTML;
	}
	
	return container.length;
}


  $scope.sum = function() {
    var count = 0;
    angular.forEach($scope.structuretasks, function(task) {
      if(task.done==1)	{
		count+=task.point;
		}
    });
    
	angular.forEach($scope.extensiontasks, function(task) {
      if(task.done==1)	{
		count+=task.point;
		}
    });

	angular.forEach($scope.billingandbudgetingtasks, function(task) {
      if(task.done==1)	{
		count+=task.point;
		}
    });

	angular.forEach($scope.billingtasks, function(task) {
      if(task.done==1)	{
		count+=task.point;
		}
    });

	angular.forEach($scope.displaynetworktasks, function(task) {
      if(task.done==1)	{
		count+=task.point;
		}
    });

	angular.forEach($scope.advancedfeaturestasks, function(task) {
      if(task.done==1)	{
		count+=task.point;
		}
    });

	angular.forEach($scope.educationtasks, function(task) {
      if(task.done==1)	{
		count+=task.point;
		}
    });

	angular.forEach($scope.transferstasks, function(task) {
      if(task.done==1)	{
		count+=task.point;
		}
    });

	//localStorage.setItem('')
    return count;
  };

	$scope.progtarget = function() {
    	var progtarget=0;
		angular.forEach($scope.programs, function(program) {
      		if(program.done==true)	{
				progtarget=program.target;
			}
    	});
		return progtarget;
  	};

	$scope.ifabovetarget = function() {
		var count = 0;
		var progtarget=0;
	   angular.forEach($scope.structuretasks, function(task) {
	      if(task.done==1)	{
			count+=task.point;
			}
	    });

		angular.forEach($scope.extensiontasks, function(task) {
	      if(task.done==1)	{
			count+=task.point;
			}
	    });

		angular.forEach($scope.billingandbudgetingtasks, function(task) {
	      if(task.done==1)	{
			count+=task.point;
			}
	    });

		angular.forEach($scope.billingtasks, function(task) {
	      if(task.done==1)	{
			count+=task.point;
			}
	    });

		angular.forEach($scope.displaynetworktasks, function(task) {
	      if(task.done==1)	{
			count+=task.point;
			}
	    });

		angular.forEach($scope.advancedfeaturestasks, function(task) {
	      if(task.done==1)	{
			count+=task.point;
			}
	    });

		angular.forEach($scope.educationtasks, function(task) {
	      if(task.done==1)	{
			count+=task.point;
			}
	    });

		angular.forEach($scope.transferstasks, function(task) {
	      if(task.done==1)	{
			count+=task.point;
			}
	    });
	
		angular.forEach($scope.programs, function(program) {
      		if(program.done==1)	{
				progtarget=program.target;
			}
    	});
		
		if(count>=progtarget)	{
			return 1;
		}
		else{
			return 0;
		}
  	};


};*/