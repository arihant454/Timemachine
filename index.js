$(document).ready(function(){
        alert("not sleep");
        var key = $KEY;
    $("#submit-btn").click(function(){
        var nameInput = $("#name").val();
        var keyInput = $("#password").val();
        if (nameInput == "Arihant" && keyInput == key) {
            alert("welcome");
            window.location.replace("https://timemachine3.netlify.app/machine.html")

        }else{
            alert("Wrong User");
            
        }
});
});
