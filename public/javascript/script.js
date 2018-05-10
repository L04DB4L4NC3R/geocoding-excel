$("#btn").on("click",()=>{
    var valu = $("#address").val();
    var v="";

    for(var i in valu){
        if(valu[i]!==" ")
            v+=valu[i];
        else if(valu[i]===" ")
            v+="+";
    }

    var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+v+"&key="+"AIzaSyC4g5BpF0ntigP5d3LfulYDUUT0bxWvC54";
    $.get(url,(data)=>{
        var res = data.results[0].geometry.location;
        console.log(res);

    });
});
