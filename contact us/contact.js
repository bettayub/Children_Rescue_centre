var form_data = {};
			form_data["vName"] = document.querySelector('#vName').value;
			form_data["vDate"] = document.querySelector('#vDate').value;
			form_data["vEmail"] = document.querySelector('#vEmail').value;
			form_data["vTelephone"] = document.querySelector('#vTelephone').value;
			form_data["vMessage"] = document.querySelector('#vMessage').value;
			var form_elements = {};
			form_elements["vName"] = document.querySelector('#vName');
			form_elements["vDate"] = document.querySelector('#vDate');
			form_elements["vEmail"] = document.querySelector('#vEmail');
			form_elements["vTelephone"] = document.querySelector('#vTelephone');
			form_elements["vMessage"] = document.querySelector('#vMessage');
			

			function resetForm(){
				for (var key in form_elements){
				    form_elements[key].value = "";
				} 
			}

			function submitForm() {
				//Do aanything you want
				document.getElementById('contact-submit').innerHTML="Message was sent!";
				setTimeout(function(){resetForm();}, 3000);
			}

			function validateForm(){
				form_data["vName"] = document.querySelector('#vName').value;
			    form_data["vDate"] = document.querySelector('#vDate').value;
				form_data["vEmail"] = document.querySelector('#vEmail').value;
				form_data["vTelephone"] = document.querySelector('#vTelephone').value;
				form_data["vMessage"] = document.querySelector('#vMessage').value;

				
				var telephoneREGEXP = /^\d{3}-\d{9}$/g;
				var emailREGEXP = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

				
				if (form_data["vName"]==""){
					alert("Name can't be blank!");
					return false;
				}
				if (form_data["vDate"]==""){
					alert("Date can't be blank!");
					return false;
				}
				if (form_data["vEmail"]==""){
					alert("Email can't be blank!");
					return false;
				}
				if (!emailREGEXP.test(form_data["vEmail"])){
					alert("Wrong email adress!");
					return false;
				}
				if (form_data["vTelephone"]==""){
					alert("Telephone can't be blank!");
					return false;
				}
				if (!telephoneREGEXP.test(form_data["vTelephone"])){
					alert("Telephone format must be : nnn-nnnnnnnnn (3-9)");
					return false;
				}
				if (form_data["vMessage"]==""){
					alert("Message can't be blank!");
					return false;
				}

				return true;
			}
			function addElement(element) {
			    var header = document.createElement("h4");
			    var text = document.createTextNode(element);
			    header.appendChild(text);
			    document.body.appendChild(header);
			}
