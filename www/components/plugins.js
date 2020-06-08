// This is a JavaScript file

$(document).on("click","#alerta",function(){
navigator.notification.alert("Minha Mensagem",null,"Aviso!","Aceito");
});


$(document).on("click","#confirm",function(){
  function confirma(buttonidex){
    if(buttonidex == 1){
    navigator.notification.alert("Escolheu a opção A")
    }else{
      navigator.notification.alert("Escolheu a opção B")
    }
  }
navigator.notification.confirm("Escolha A ou B",confirma,"Escolha:",['A','B']);
});
$(document).on("click","#beep",function(){
navigator.notification.bepp(3);
});
$(document).on("click","#vibrar",function(){
navigator.vibrate(3000);
});
function mostraMapa(lat, long){
        L.mapquest.key = 'FC2AhDf9h9qUIRaDINyK3CCVr5d2aATx';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 15
        });

        map.addControl(L.mapquest.control());
}

$(document).on("click","#local",function(){
var onSuccess = function(position) {
        mostraMapa(position.coords.latitude, position,coords.longitude)       
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});

