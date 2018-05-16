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
          title: 'Hello World!'
        });


    });
});





function goget(data){
    for(v in data.arr){
        var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+data.arr[v].Address+"&key="+"AIzaSyDYgWgepoCOXHvxoGW9n0z30nCRC9tHHvc";
        $.get(url,(ata)=>{
            var res = ata.results[0].geometry.location;
            if(data.arr[v].OEM === "Siemens"){
              var marker = new google.maps.Marker({
                position: res,
                map: map,
                // icon: {
                //         url: '../../images/Stag.jpg',
                //         // This marker is 20 pixels wide by 32 pixels high.
                //         size: new google.maps.Size(20, 32),
                //         // The origin for this image is (0, 0).
                //         origin: new google.maps.Point(0, 0),
                //         // The anchor for this image is the base of the flagpole at (0, 32).
                //         anchor: new google.maps.Point(0, 32)
                //       },
                title: 'Hello World!'
              });
            }

            else{
              var marker = new google.maps.Marker({
                position: res,
                map: map,
                // icon:{
                //         url: '../../images/NSTag.jpg',
                //         // This marker is 20 pixels wide by 32 pixels high.
                //         size: new google.maps.Size(20, 32),
                //         // The origin for this image is (0, 0).
                //         origin: new google.maps.Point(0, 0),
                //         // The anchor for this image is the base of the flagpole at (0, 32).
                //         anchor: new google.maps.Point(0, 32)
                //       },
                title: 'Hello World!'
              });
            }

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
