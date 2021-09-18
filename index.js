$(document).ready(function(){
        alert($message);
        $("#submit-btn").click(function(){
            alert("button clicked");
        var key = $KEY;
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
