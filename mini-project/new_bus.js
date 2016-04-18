
		
		
		
		 // This function will validate username.
function validateUser()
{
	var x =	document.forms["myForm"]["fname"].value;
	if ( x==null || x=="")
	document.getElementById("name").innerHTML="*Required";
}
			// This function will validate password.
function validatePassword()
{
	var y = document.forms["myForm"]["password"].value;
	if ( y.length<6)
	document.getElementById("pass").innerHTML="*Password must be atleast 6 char long";
}
			// This function will validate E-mail Id.
function validateEmail()
{
	var z = document.forms["myForm"]["email"].value;
    var atpos = z.indexOf("@");
    var dotpos = z.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=z.length)
    document.getElementById("mail").innerHTML="*Not a valid e-mail address";
        		// myForm.email.focus();
   }
	// Array to show stored contacts as object.
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "password": "Akira05",
        "Reg_Id":"Akira000",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "password": "0994372684",
        "Reg_Id":"Harry001",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "password": "0487345643",
        "Reg_Id":"Sherlock002",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "password": "unknown",
        "Reg_Id":"Kristian003",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];	
	
	var z = document.forms["myForm"]["email"].value;

	function lookUp()
	{	var x =	document.forms["myForm"]["fname"].value;
		var userName =	document.forms["myForm2"]["fname2"].value;
		var password= document.forms["myForm2"]["password2"].value;
		var Reg_Id=document.forms["myForm2"]["Reg_id"].value;
		console.log(userName);
		console.log(password);
		console.log(Reg_Id);

		var log_In=false;
		
		for(var i=0;i<contacts.length;i++)
		{
			if(userName===contacts[i].firstName && password===contacts[i].password && Reg_Id===contacts[i].Reg_Id)
			{
				log_In=true;
		 		break;
		   	}
			else if(userName===contacts[i].firstName && Reg_Id===contacts[i].Reg_Id && password!==contacts[i].password )
			{
		    	alert("wrong password");
		    	document.forms["myForm2"]["password2"].value="";
				myForm2.password2.focus();
				log_In=false;
				break;

		  	}
		  	else if(userName===contacts[i].firstName && password===contacts[i].password && Reg_Id!==contacts[i].Reg_Id)
			{
		    	alert("wrong Reg_Id");
		    	document.forms["myForm2"]["Reg_id"].value="";
				myForm2.Reg_id.focus();
				log_In=false;
				break;
			}
			else if(i==contacts.length-1 && userName!==contacts[i].firstName && password!==contacts[i].password && Reg_Id!==contacts[i].Reg_Id)
		  	{
		    	alert("Not a user, please reg"); 
		    	document.forms["myForm2"]["fname2"].value="";
		    	document.forms["myForm2"]["password2"].value="";
		    	document.forms["myForm2"]["Reg_id"].value="";
				// myForm2.fname2.focus();
				myForm.fname.focus();
				log_In=false;
				break;

		    
		  	}
		}
		
		return log_In;

	}
	function sign_in()
	{
		var userName =	document.forms["myForm2"]["fname2"].value;
		if(lookUp())
		{
			var x = "welocome "+ userName;
			alert(x);
			redirect();
			function redirect()
    		{
			    
			     // setTimeout('window.location.href="http://localhost/training/index.html"', 0);
    		}

		}
	}
	function signUp()
	{
		function user(firstName,passWord)
		{
		this.firstName=firstName;
		this.passWord=passWord;
		}
		var userName =	document.forms["myForm"]["fname"].value;
		var password = document.forms["myForm"]["password"].value;
		var newUser  = new user(userName,password);
		contacts.push(newUser);
		console.log(contacts);
	}



	
	
		
		