function login() {
    var registerNo = ['1913032', '1913046', '1913078','19220150','27072023'];
    var password = ['jaga', 'rk', 'sk','rk','Aspire'];
    var userName = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;
    
    if ((registerNo.includes(userName)) && (password.includes(pass))) {
        swal("Good job!", "You Have Successfully logged in", "success"); 
        if(userName=='1913032'){
            swal(`Welcome JAGADEESHWARAN`, "Check The Alert to Access The Projects", "success");
        }else if(userName=='1913046'){
            swal(`Welcome KIRAN`, "Check The Alert to Access The Projects", "success");
        }else if(userName=='1913078'){
            swal(`Welcome SAKTHIVEL`, "Check The Alert to Access The Projects", "success");
        }else if(userName=='19220150'){
            swal(`Welcome ROHINI KIRAN`, "Check The Alert to Access The Projects", "success");
        }else{
            swal(`Welcome Aspire Systems`, "Check The Alert to Access The Projects THANK YOU!", "success");
        }     
        setTimeout(function(){
            if (window.confirm("Click OK to Access Projects")) {
                window.open("articleJokes.html");
            }
        },5000);
    }else {
        swal("Oh No!", "Username/Password incorrect", "error");
    }
}
