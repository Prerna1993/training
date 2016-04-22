 // This function will validate username.
		 function validateUser()
		 {
		 	var x =	document.forms["myForm"]["fname"].value;
		 
			if ( x==null || x=="")
			document.getElementById("name").innerHTML="*Required";
		else{
			document.getElementById("name").innerHTML="";
		}
			
		}
			// This function will validate password.
			function validatePassword()
			{
				var y = document.forms["myForm"]["password"].value;
				if ( y.length<6 || y.length>=15)
				document.getElementById("pass").innerHTML="*Password must be 6-15 char long";
				else{
					document.getElementById("pass").innerHTML="";
				}
			
				
			}
			// This function will validate E-mail Id.
			function validateEmail()
			{
				var z = document.forms["myForm"]["email"].value;
    			var atpos = z.indexOf("@");
    			var dotpos = z.lastIndexOf(".");
    			if (atpos<1 || dotpos<atpos+2 || dotpos+2>=z.length)
        		document.getElementById("mail").innerHTML="*Not a valid e-mail address";
        	else{
        		document.getElementById("mail").innerHTML="";
        	}
    	}
    	function validate()
	{
		var x =	document.forms["myForm"]["fname"].value;
		var y = document.forms["myForm"]["password"].value;
		var z = document.forms["myForm"]["email"].value;
		
 		// This function will validate username.
			if ( x==null || x=="")
			{
			document.getElementById("name").innerHTML="*Required";
			check1=false;
			}
			else
			{
			document.getElementById("name").innerHTML="";
			check1=true;
			}
			
		
			// This function will validate password.
				
				if ( y.length<6 || y.length>=15)
				{
				document.getElementById("pass").innerHTML="*Password must be 6-15 char long";
				check2=false;
				}
				else
				{
					document.getElementById("pass").innerHTML="";
					check2=true;
				}
			
				
			
			// This function will validate E-mail Id.
			
				
    			var atpos = z.indexOf("@");
    			var dotpos = z.lastIndexOf(".");
    			if (atpos<1 || dotpos<atpos+2 || dotpos+2>=z.length)
    			{
        		document.getElementById("mail").innerHTML="*Not a valid e-mail address";
        		check3=false;
        		}
        	else{
        		document.getElementById("mail").innerHTML="";
        		check3=true;
        		}
    	
    	if (check1===true && check2===true && check3===true) 
    	signUp();
    };


    function signUp()
	{	var x =	document.forms["myForm"]["fname"].value;
		var y = document.forms["myForm"]["password"].value;
		var z = document.forms["myForm"]["email"].value;
		console.log("signed_up");
		if (x===""|| null || y===""||null || z===""||null)
		{
			console.log("if");
		myForm.fname.focus();
		myForm.password.focus();
		myForm.email.focus();
			
		}
		else
		{
			console.log("else");
			function user(firstName,passWord,Email_Id)
				{
				this.firstName=firstName;
				this.passWord=passWord;
				this.Email_Id=Email_Id;
				}
				var userName =	document.forms["myForm"]["fname"].value;
				var password = document.forms["myForm"]["password"].value;
				var Email_Id = document.forms["myForm"]["email"].value;
				var newUser  = new user(userName,password,Email_Id);
				newContacts1();
				newContacts.push(newUser);
				localStorage.setItem("users", JSON.stringify(newContacts));
				document.forms["myForm"]["fname"].value="";
				document.forms["myForm"]["password"].value="";
				document.forms["myForm"]["email"].value="";
				console.log(newContacts);
				alert("Bravo ,signed_up");
		}
	};
	
	var newContacts1= function()
	{
		newContacts=JSON.parse(localStorage.getItem("users"));
		console.log(typeof(newContacts));
		var userName =	document.forms["myForm2"]["fname2"].value;
		var password= document.forms["myForm2"]["password2"].value;
		if(newContacts===null)
		{
			
			localStorage.setItem("users",JSON.stringify([]));
			newContacts=JSON.parse(localStorage.getItem("users"));
		// }else
		// {
		// 	if (newContacts.length>0)
		// 	{
		// 			localStorage.setItem("users",JSON.stringify([]));
		// 			newContacts=JSON.parse(localStorage.getItem("users"));
		// 			console.log("if")
			
			}
			
		else{
				console.log("else1");
				alert("not a user ,please Sign_up");
				document.forms["myForm2"]["fname2"].value="";
				document.forms["myForm2"]["password2"].value="";
				myForm.fname.focus();
				console.log("else");
			}
	
	};
	

	function lookUp()
	{	var userName =	document.forms["myForm2"]["fname2"].value;
		var password= document.forms["myForm2"]["password2"].value;
		console.log(userName);
		console.log(password);
		var test=false;
		newContacts1();
		

			
		

				for(var i=0;i<newContacts.length;i++)
				{	
					if(userName===newContacts[i].firstName && password===newContacts[i].passWord)
					{	
						var x="Welcome " + userName;
				
						alert (x);
						
						test=true;
				 		break;
				   	}
				  	if(userName!==newContacts[i].firstName && password===newContacts[i].passWord)
					{	
				    	alert("Wrong userName");
				    	document.forms["myForm2"]["fname2"].value="";
						myForm2.Reg_id.focus();
						test=false;
						break;
					}
					if(userName===newContacts[i].firstName && password!==newContacts[i].passWord )
					{	console.log(password);
						console.log(userName);
				    	alert("wrong password");
				    	document.forms["myForm2"]["password2"].value="";
						myForm2.password2.focus();
						test=false;
						break;

				  	}
					if(i==newContacts.length-1 && userName!==newContacts[i].firstName && password!==newContacts[i].passWord)
				  	{
				    	alert("Not a user, please reg"); 
				    	document.forms["myForm2"]["fname2"].value="";
				    	document.forms["myForm2"]["password2"].value="";
						myForm2.fname2.focus();
						test=false;
						break;
				  	}
				}
		
		if(test==true)
		{
			localStorage.setItem("logged_in", "yes");	
				createDiv();
		}
	};
	
	 function switchVisible() {
    	var div1=document.getElementById('Div1');
    	var div2=document.getElementById('Div2');
    	
      if (div1 !== undefined && div2 !== undefined) {
    	  div2.style.display = div1.style.display === '' ? 'none' : 'block';
    	  div1.style.display = div2.style.display === 'block' ? 'none' : 'block';
    	  up.style.display='none';
    	  Text1.style.display="none";
      }
    }
    function createDiv(){
    	 var n= document.getElementById("r");
    	 var img1=document.createElement("img");
    	 img1.setAttribute("src","gnome_panel_force_quit.png");
    	 img1.setAttribute("width","30px");
    	 img1.setAttribute("height","30px")
    	  var A=document.createElement("a");
    	  A.setAttribute("href","#"); 
    	  A.setAttribute("onclick","log_out()");
    	  A.setAttribute("id","logout");
    	  var text= document.createTextNode("Log_out"); 
    	  A.appendChild(img1);
    	  A.appendChild(text);
    	  n.appendChild(A);
    	  switchVisible();
    	  var x=localStorage.getItem("name");
    }
    function log_out(){
    	localStorage.setItem("logged_in","no");
    	var userName =	document.forms["myForm2"]["fname2"].value;
		var password= document.forms["myForm2"]["password2"].value;
    	var div1=document.getElementById('Div1');
    	var div2=document.getElementById('Div2');
    	var n= document.getElementById("r");
    	var log= document.getElementById("logout");
    	n.removeChild(log);
    	div2.style.display = div1.style.display === '' ? 'none' : 'block';
    	div1.style.display = div2.style.display === 'block' ? '' : 'block';
    	up.style.display='block';
    	document.forms["myForm2"]["fname2"].value="";
		document.forms["myForm2"]["password2"].value="";
		alert("you are logged_out");
  
    }
    
    function allStorage() {
    	var values = [], 
    		keys = Object.keys(localStorage), 
    		i = keys.length;
    	while( i-- ) {
    		values.push(localStorage.getItem(keys[i]));
    	}
    	return values;
    }
    
    window.onload = function ()
			{
				var x = localStorage.getItem("logged_in");
				if(x==="yes")
				{
					createDiv();
				}
			}	
function route(){

	var x=document.getElementById("source");
	var y=document.getElementById("destination");
	
	if(x.value==="From" || y.value=== "To"){
		alert("please select proper location");
		console.log("alert");
		x.value="From";
		y.value="To";
	}
	else{
		// btn1.style.display="none";
		// var n= document.getElementById("Div3");
		// var btn=document.createElement("button");
		// btn.setAttribute("type","button");
		// btn.setAttribute("onclick","showRoute()")
		// var text=document.createTextNode("Route");
		// btn.appendChild(text);
		// n.appendChild(btn);
		showRoute();

	}
console.log(x.value);
console.log(y.value);

};
function showRoute(){
	Div1.style.display="none";
	Div4.style.display="block";
	Div5.style.display="block";
	Text1.style.display="none";
	foot.style.display="none";

	var n= document.getElementById("Div6");
	var x=document.getElementById("source");
	var y=document.getElementById("destination");
	if(x.value==="Kolkata" && y.value==="Delhi")
	{
		var text=document.createTextNode("Availabe routes:-")
		n.appendChild(text);
		var sel=document.createElement("select");
		var opt1=document.createElement("option");
		opt1.appendChild(document.createTextNode("Kolkata-Delhi"));
		// var opt2=document.createElement("option");
		// opt2.appendChild(document.createTextNode("vai Durgapur"));
		sel.appendChild(opt1);
		// sel.appendChild(opt2);
		n.appendChild(sel);

	}
	if(x.value==="Kolkata" && y.value==="Gujarat" )
	{
		var text=document.createTextNode("Availabe routes:-")
		n.appendChild(text);
		var sel=document.createElement("select");
		var opt1=document.createElement("option");
		opt1.appendChild(document.createTextNode("Kolkata-Ranigunj-Hyderabad-Shirdi-Ahmedabad"));
		// var opt2=document.createElement("option");
		// opt2.appendChild(document.createTextNode("vai Durgapur"));
		sel.appendChild(opt1);
		// sel.appendChild(opt2);
		n.appendChild(sel);

	}
	if(x.value==="Kolkata" && y.value==="Mumbai")
	{
		var text=document.createTextNode("Availabe routes:-")
		n.appendChild(text);
		var sel=document.createElement("select");
		var opt1=document.createElement("option");
		opt1.appendChild(document.createTextNode("Kolkata-Durgapur-RajNagar-Mumbai"));
		// var opt2=document.createElement("option");
		// opt2.appendChild(document.createTextNode("vai Durgapur"));
		sel.appendChild(opt1);
		// sel.appendChild(opt2);
		n.appendChild(sel);

	}

};
function calculate()
{
	var x=document.getElementById("source");
	var y=document.getElementById("destination");
	var z=document.getElementById("put1");
	if(x.value==="Kolkata" && y.value==="Mumbai")
	{
		console.log(z.value);
	var	calc = (z.value)*9000;
	var val="Rs. " + calc +"/-";
	var val1=document.createTextNode(val);
	var n=document.getElementById("Div5");
	var a=document.createElement("p");
	a.appendChild(value);
	n.appendChild(a);
	
    }
   if(x.value==="Kolkata" && y.value==="Gujarat" )
	{
	var	calc = (z.value)*8000;
	var val="Rs. " + calc +"/-";
	var value=document.createTextNode(val);
	var n=document.getElementById("Div5");
	var a=document.createElement("p");
	a.appendChild(value);
	n.appendChild(a);
		
	}
	if(x.value==="Kolkata" && y.value==="Delhi")
	{
	var	calc = (z.value)*6000;
	var val="Rs. " + calc +"/-";
	var value=document.createTextNode(val);
	var n=document.getElementById("Div5");
	var a=document.createElement("p");
	a.appendChild(value);
	n.appendChild(a);
	}
};
