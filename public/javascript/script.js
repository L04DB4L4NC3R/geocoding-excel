var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 2
  });
}

$("#btn").on("click",()=>{
    var valu = $("#address").val();
    var v="";

    for(var i in valu){
        if(valu[i]!==" ")
            v+=valu[i];
        else if(valu[i]===" ")
            v+="+";
    }

    var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+v+"&key="+"AIzaSyDYgWgepoCOXHvxoGW9n0z30nCRC9tHHvc";
    $.get(url,(data)=>{
        if(data.results[0].length<1)
            alert("No results");
        var res = data.results[0].geometry.location;
        console.log(res);

        var marker = new google.maps.Marker({
          position: res,
          map: map,
          title: 'Hello World!',

        });


    });
});





function goget(data){

    for(v in data.arr){
        var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+data.arr[v].Address+"&key="+"AIzaSyDYgWgepoCOXHvxoGW9n0z30nCRC9tHHvc";
        $.get(url,(ata)=>{
            var res = ata.results[0].geometry.location;
            alert(JSON.stringify(data.arr[v]) )
            if(data.arr[v].OEM === "Siemens"){
              var marker = new google.maps.Marker({
                position: res,
                map: map,
                title: 'Hello World!',
                data:data.arr[v]
              });


            }

            else{
              var marker = new google.maps.Marker({
                position: res,
                map: map,
                icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                title: 'Hello World!',
                data:data.arr[v]
              });

            }
            marker.addListener('click', function() {
              map.setZoom(8);
              map.setCenter(marker.getPosition());
              $("#desc").html("Equipment ID: "+data.arr[v].Equipment+", Serial no: "+data.arr[v].Serial+", Account: "+data.arr[v].Account+", Mode: "+data.arr[v].Mode+", Address: "+data.arr[v].Address+", MW: "+data.arr[v].MW)
            });

        });
    }
}




$("#file_btn").on("click",(e)=>{
    e.preventDefault();
    var form = $("#file_upload_form")[0];
    var data = new FormData(form);

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        processData: false,  // Important!
        contentType: false,
        cache: false,
        url:"/upload",
        data:data,
        success:(data)=>{

            goget(data);
        }
    });

});
