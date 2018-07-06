
function maxi(arr)
{   max=arr[0]
    for(var i=1;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i];
        }
    }
    return max;
}
console.log(maxi([11,22,55,44]));