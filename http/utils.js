function getRequestData(request) {
    let value='';
    request.on('data',(chunk) => {
        value+=chunk.toString();
    });
    request.on("end",() => {
        console.log(value)
        return value;
    });
}
module.exports=getRequestData;