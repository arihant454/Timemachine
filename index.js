var key = "A9C4light"
$(document).ready(function(){
    $("#submit-btn").click(function(){
        var nameInput = $("#name").val();
        var keyInput = $("#password").val();
        if (nameInput == "Arihant" && keyInput == key) {
            alert("welcome");
            window.location.replace("./machine.html")

        }else{
            alert("Wrong User");
            
        }
});
});
