function min(arr)
{
    var min=arr[0]
    for(var i=1;i<=arr.length-1;i++)
    {
        if(arr[i]<min)
        {
            min=arr[i];
        }
    }
    return min;
}
console.log(min([2,5,99,45]))
