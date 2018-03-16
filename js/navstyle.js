function setnav(str) {
    var erji=$(str)
    for(var i=0;i<erji.length;i++)
    {
        var pwidth=erji.eq(i).parent().innerWidth()
        var erkowidth=erji.eq(i).innerWidth();
        erji.eq(i).css("left",-(parseInt(erkowidth)-parseInt(pwidth))/2)
    }
}

