function isPowerOfTwoo(num)
{
    if (num==0)
    console.log('not valid case');
    while(num%2==0)
    {
        num=num/2;
    }
    if(num>1)
    {
        console.log('not power of two')
    }
    else
    console.log('is power of two')
}
isPowerOfTwoo(64)