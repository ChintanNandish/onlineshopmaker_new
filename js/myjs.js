			function check_data(){
				var pattern = /^\w+\@[a-zA-Z_.]+\.\w{2,5}$/;
				var notstart = /^[^0-9][a-z0-9]+$/;
				var m_pattern = /^[0-9]+$/;
				var u_pattern=/^[A-Z][a-z]+$/;
				var username = /^[a-zA-Z0-9_]+$/;
				var pass_pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
				var uname=document.getElementById("uname").value;
				var firstname = document.getElementById("fname").value;
				var lastname = document.getElementById("lname").value;
				var phoneno = document.getElementById("mob").value;
				var email = document.getElementById("email").value;
				var pwd = document.getElementById("pwd").value;
				var cpwd = document.getElementById("cpwd").value;
				
				
				
				if(u_pattern.test(firstname)==false){
					alert("Firstname can not start from digits and small letters and must have more than one characters!");
					document.getElementById("fname").focus();
					
					return false;
				}
				if(u_pattern.test(lastname)==false){
					alert("Lastname can not start from digits and small letters and must have more than one characters!");
					document.getElementById("lname").focus();
					
					return false;
				}
				if(username.test(uname)==false){
					alert("Username must contain upper/lowercase letters and numbers");
					document.getElementById("uname").focus();
				
					return false;
				}
				else if(uname.length < 6 || uname.length > 15){
					alert("User name must have characters/numbers between 6-15!");
					document.getElementById("uname").focus();
				
					return false;
				}
				if(pass_pattern.test(pwd)==false){
					alert("Password must contain at least one number, one special character(!@#$%^&*), one upper and lower case character with the length between 8-20!");
					document.getElementById("pwd").focus();
				
					return false;
				}
				else if(pwd.length <8 || pwd.length >20){
					alert("Password must have length between 8-20!");
					document.getElementById("pwd").focus();
				
					return false;
				}
				else if(cpwd!=pwd){
					alert("Password and ConfirmPassword must be same");
					document.getElementById("cpwd").focus();
				
					return false;
				}
				if(pattern.test(email)==false){
					alert("Please Enter Valid Email Id");
					document.getElementById("email").focus();
				
					return false;
				}
				if(isNaN(phoneno)){
					alert("Phone No must contain numbers");
					document.getElementById("mob").focus();
				
					return false;
				}
				else if(phoneno.length!=10)
				{
					alert("Phone No must be of 10 digits");
					document.getElementById("mob").focus();
				
					return false;
				}		
				document.signup.submit();
		}

			
			function try_login(){
				var username = /^[a-zA-Z0-9_]+$/;
				var pass_pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
				var uname=document.getElementById("uname").value;
				var pwd = document.getElementById("pwd").value;
				if(username.test(uname)==false){
					alert("Invalid Username or Password!");
					document.getElementById("uname").focus();
					return false;
				}
				else if(uname.length < 6 || uname.length > 15){
					alert("Invalid Username or Password!");
					document.getElementById("uname").focus();
					return false;
				}
				if(pass_pattern.test(pwd)==false){
					alert("Invalid Username or Password!");
					document.getElementById("pwd").focus();
					return false;
				}
				else if(pwd.length <8 || pwd.length >20){
					alert("Invalid Username or Password!");
					document.getElementById("pwd").focus();
					return false;
				}
				document.loginform.submit();
			}
		
		
		
		function submit_feedback(){
			var email_pattern = /^\w+\@[a-zA-Z_.]+\.\w{2,5}$/;
			var name_pattern = /^(\w+\s)*\w+$/;
			var name = document.getElementById("name").value;
			var email = document.getElementById('email').value;
			var msg = document.getElementById('message').value;
			if(name==""){
				alert("Please enter your name");
				document.getElementById("name").focus();
				return false;
			}
			else if(name_pattern.test(name)==false){
				alert("Please enter valide name");
				document.getElementById("name").focus();
				return false;
			}
			if(email==""){
				alert("Please enter your email");
				document.getElementById("email").focus();
				return false;
			}
			else if(email_pattern.test(email)==false){
				alert("Please enter valid email");
				document.getElementById("email").focus();
				return false;
			}
			if(msg==""){
				alert("Please enter your message");
				document.getElementById("message").focus();
				return false;
			}
			
			document.feedback.submit();
			
			
		}
	
	
		Element.prototype.remove = function() {
			this.parentElement.removeChild(this);
		}
		
		
		NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
			for(var i = this.length - 1; i >= 0; i--) {
				if(this[i] && this[i].parentElement) {
					this[i].parentElement.removeChild(this[i]);
				}
			}
		}
		
		
		var tr,td,newdiv;
		var array = [];
		var product_type=[];
		function make_fields(){
			try{
				document.getElementById('second_div').remove();
				document.getElementById('hidden_second').style.display='none';
				product_type=[];
				//alert(array[0]);
				make_fields();
			}
			catch(err){
				var start=1;
				var count = document.getElementById('product_type').value;
				array.push(count);
				if (array[0] != count){remove_fields(array[0]);}
				newdiv=document.createElement('div');
				newdiv.setAttribute("id", "div_in");
				document.getElementById('type').appendChild(newdiv);
				while(start<=count){
					tr = document.createElement('tr');
					td = document.createElement('td');
					var x= 'product'+start;
					tr.setAttribute("id", "tr"+start);
					td.setAttribute('id', 'td'+start);
					td.innerHTML = x + "<input type='text' id="+x+" name="+x+" onfocusout='product_names("+start+");' required/>";
					document.getElementById('div_in').appendChild(tr);
					document.getElementById('tr'+start).appendChild(td);
					start++;
				}
			}
			
		}
		
		
		
		
		function remove_fields(number){
			delete array[0];
			document.getElementById('div_in').remove();
		}
		
		
		
		
		function form_reset(){
			try{
				document.getElementById('div_in').remove();
				product_type=[];
				array=[];
				document.builder.reset();
				document.getElementById('second_div').remove();
				document.getElementById('hidden_second').style.display='none';
				
			}
			catch(err){
				//do nothing
			}
		}
		
		
		function last_check(){
			count=array[0];
			var start=0;
			var pattern=/^[A-Za-z0-9']+(\s{0,1}[A-Za-z0-9'])*$/;
			var shopname = document.getElementById('shopname').value;
			start=0;
			if(shopname==''){
				alert("Please Enter Shop Name");
				document.getElementById("shopname").focus();
				return false;
			}
			else if(pattern.test(shopname)==false){
				alert("Shop Name should only contain alphabets");
				document.getElementById("shopname").value='';
				document.getElementById("shopname").focus();
				return false;
			}
			else if(shopname.length<2 || shopname.length > 50){
				alert("Shop Name should have no of characters between 2 to 50!");
				document.getElementById("shopname").value='';
				document.getElementById("shopname").focus();
				return false;
			}
			if(document.getElementById('product_type').value==''){
				alert("Please Select Product Type!");
				document.getElementById("product_type").focus();
				return false;
			}
			while(start<count){
					var x=product_type[start];
					if(x==''){
						alert("Please Enter Product"+(start+1)+" Name");
						document.getElementById("product"+(start+1)).focus();
						return false;
					}
					else if(pattern.test(x)==false){
						alert("Product"+(start+1)+" should have no of characters between 2 to 10!");
						document.getElementById("product"+(start+1)).focus();
						return false;
					}
					else if(x.length < 2 || x.length > 10){
						alert("Product"+(start+1)+" should have no of characters between 2 to 10!");
						document.getElementById("product"+(start+1)).focus();
						return false;
					}
					start++;
				}
		}
		
		
		function check_data_shop(){
			var pattern=/^[A-Za-z0-9']+(\s{0,1}[A-Za-z0-9'])*$/;
			var shopname = document.getElementById('shopname').value;
			start=0;
			if(shopname==''){
				alert("Please Enter Shop Name");
				document.getElementById("shopname").focus();
				return false;
			}
			else if(pattern.test(shopname)==false){
				alert("Shop Name should only contain alphabets, numbers and special characters(-')");
				document.getElementById("shopname").value='';
				document.getElementById("shopname").focus();
				return false;
			}
			else if(shopname.length<2 || shopname.length > 50){
				alert("Shop Name should have no of characters between 2 to 10!");
				document.getElementById("shopname").value='';
				document.getElementById("shopname").focus();
				return false;
			}
		}
		
		
		
		function product_names(n){
			if(n==1){
				if(document.getElementById('shopname').value==document.getElementById('product1').value){
					alert("Products and shop must have different names");
					document.getElementById('product1').value='';
					document.getElementById("product"+(n)).focus();
					return false;
				}
			}
			else if(n==2){
				if((document.getElementById('product2').value==document.getElementById('product1').value) || (document.getElementById('shopname').value==document.getElementById('product2').value)){
					alert("Products and shop must have different names");
					document.getElementById('product2').value='';
					document.getElementById("product"+(n)).focus();
					return false;
				}
			}
			else if(n==3){
				if((document.getElementById('product3').value==document.getElementById('product2').value) || (document.getElementById('product3').value==document.getElementById('product1').value) || (document.getElementById('shopname').value==document.getElementById('product3').value)){
					alert("Products must have different names");
					document.getElementById('product3').value='';
					document.getElementById("product"+(n)).focus();
					return false;
				}
			}
			else if(n==4){
				if((document.getElementById('product4').value==document.getElementById('product3').value) || (document.getElementById('product4').value==document.getElementById('product2').value) || (document.getElementById('product4').value==document.getElementById('product1').value) || (document.getElementById('shopname').value==document.getElementById('product4').value)){
					alert("Products must have different names");
					document.getElementById('product4').value='';
					document.getElementById("product"+(n)).focus();
					return false;
				}
			}
			else if(n==5){
				if((document.getElementById('product5').value==document.getElementById('product4').value) || (document.getElementById('product5').value==document.getElementById('product3').value) || (document.getElementById('product5').value==document.getElementById('product2').value) || (document.getElementById('product5').value==document.getElementById('product1').value) || (document.getElementById('shopname').value==document.getElementById('product5').value)){
					alert("Products must have different names");
					document.getElementById('product5').value='';
					document.getElementById("product"+(n)).focus();
					return false;
				}
			}
			if(n==document.getElementById('product_type').value){
				start=0;
				while(start<n){
					product_type[start]=document.getElementById('product'+(start+1)).value;
					start++;
				}
				make_product_div(n);
			}
			
		}
		
		
		
		function make_product_div(n){
			start=1;
			var second_div=document.createElement('div');
			second_div.setAttribute('id','second_div');
			second_div.style.display='none';
			document.getElementById('hidden_second').style.display='block';
			document.getElementById('hidden_second').appendChild(second_div);
			var header_second_div=document.createElement('header');
			header_second_div.setAttribute('id','header_second_div');
			second_div.appendChild(header_second_div);
			header_second_div.innerHTML='<h3>Step 2</h3>';
			var header,p,newdiv1,table,tr,td1,td2,newdiv2;
			var in_second_div = document.createElement('div');
			in_second_div.setAttribute('id','in_second_div');
			second_div.appendChild(in_second_div);
			while(start<=n){
				header=document.createElement('header');
				header.setAttribute('id','header'+(start));
				in_second_div.appendChild(header);
				p=document.createElement('p');
				p.setAttribute('id','p'+(start));
				header.appendChild(p);
				document.getElementById('p'+(start)).innerHTML='Product Type -> '+product_type[start-1];
				document.getElementById('header'+(start)).appendChild(p);
				newdiv1=document.createElement('div');
				newdiv1.setAttribute('id','in_in_second_div'+(start));
				newdiv1.setAttribute('class','12u 12u$(4)');
				in_second_div.appendChild(newdiv1);
				table=document.createElement('table');
				table.setAttribute('id','table'+(start));
				newdiv1.appendChild(table);
				tr=document.createElement('tr');
				tr.setAttribute('id','table'+start+'tr');
				table.appendChild(tr);
				td1=document.createElement('td');
				td1.setAttribute('id','table'+start+'td1');
				tr.appendChild(td1);
				document.getElementById('table'+start+'td1').innerHTML='Choose Fields to Represent Product : ' +product_type[start-1];
				td2=document.createElement('td');
				td2.setAttribute('id','table'+start+'td2');
				tr.appendChild(td2);
				newdiv2=document.createElement('div');
				newdiv2.setAttribute('id','in_in_in_second_div'+(start));
				newdiv2.setAttribute('class','9u 12u$(3)');
				newdiv2.innerHTML='<input type="checkbox" id="p'+start+'_id" name="p'+start+'_id"><label for="p'+start+'_id">Product Id</label><input type="checkbox" id="p'+start+'_name" name="p'+start+'_name"><label for="p'+start+'_name">Product Name</label><input type="checkbox" id="p'+start+'_brand" name="p'+start+'_brand"><label for="p'+start+'_brand">Product Brand</label><input type="checkbox" id="p'+start+'_img" name="p'+start+'_img"><label for="p'+start+'_img">Product Image</label><input type="checkbox" id="p'+start+'_description" name="p'+start+'_description"><label for="p'+start+'_description">Product Description</label><input type="checkbox" id="p'+start+'_reviews" name="p'+start+'_reviews"><label for="p'+start+'_reviews">Product Reviews</label><input type="checkbox" id="p'+start+'_rating" name="p'+start+'_rating"><label for="p'+start+'_rating">Product Ratings</label><input type="checkbox" id="p'+start+'_size" name="p'+start+'_size"><label for="p'+start+'_size">Product Size</label><input type="checkbox" id="p'+start+'_sex" name="p'+start+'_sex"><label for="p'+start+'_sex">Product Gender</label><input type="checkbox" id="p'+start+'_price" name="p'+start+'_price"><label for="p'+start+'_price">Product Price</label><input type="checkbox" id="p'+start+'_offer_price" name="p'+start+'_offer_price"><label for="p'+start+'_offer_price">Product Offer_Price</label><input type="checkbox" id="p'+start+'_color" name="p'+start+'_color"><label for="p'+start+'_color">Product Color</label><input type="checkbox" id="p'+start+'_percent_offer" name="p'+start+'_percent_offer"><label for="p'+start+'_percent_offer">Product Offer(%)</label>';
				td2.appendChild(newdiv2);
				start++;
				
			}
			document.getElementById('second_div').style.display='block';
		}