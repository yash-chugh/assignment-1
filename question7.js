var gcd = function(a,b)
{
    if(!b)
    return a;
    else
    return gcd(b,a%b);
}
console.log(gcd(48,18))