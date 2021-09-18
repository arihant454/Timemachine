var key = "$KEY";
$(document).ready(function(){
    $("#submit-btn").click(function(){
        var nameInput = $("#name").val();
        var keyInput = $("#password").val();
        if (nameInput == config.NAME_KEY && keyInput == key) {
            alert("welcome");
            window.location.replace("./machine.html")

        }else{
            alert("Wrong User");
            
        }
});
});
