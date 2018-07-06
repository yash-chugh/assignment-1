var protectemail= function(emailaddress)
{
    var split = emailaddress.split("@")
    a=split[0];
    b=a.length/1.5;
    a=a.substring(0,a.length-b);
    c=split[1]
    return a + '......@'  + c;
}
console.log(protectemail('yash.chugh0001@gmail.com'))
