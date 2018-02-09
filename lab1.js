function init() {
		"use strict";
		var users={
			username:"raj",
			Password:"pam"
		};
		var u=document.getElementById("username");
		var p=document.getElementById("password");
		var frm=document.getElementById("frm_main");
		console.log(frm);
		var disUser=document.getElementById("display_username");
		var disPass=document.getElementById("display_password");
		
		
		function auth(){
			reset_frm();
			var _user = u.value.trim();
			var _password = p.value.trim();
			if(_user&&_password){
				
				if(u.value===users.username&&p.value===users.Password){
					disUser.innerHTML=users.username;
					disPass.innerHTML=users.Password;
					disUser.style.display="block";
					disPass.style.display="block";
					console.log(disUser);
					
				}
				else
				{
					disUser.style.display="block";
					disUser.innerHTML="wrong username or password";
				}
			}
			else
			{
				if(!_user){
					u.style.backgroundColor="red";
				}
				if(!_password){
					p.style.backgroundColor="red";
				}
				
			}
			return false;
		}
		function reset_frm(){
			disUser.style.display="none";
			disPass.style.display="none";
			u.style.backgroundColor="white";
			p.style.backgroundColor="white";
		}
		frm.onsubmit=auth;
}
window.onload=init;		
		


