function grd(mks)
{
    var grade='';
    if(mks>90)
    grade+='A';
    if(mks<90 && mks>80)
    grade+='B'
    if(mks<=80 && mks>70)
    grade+='C'
    if(mks<70 && mks>60)
    grade+='D'
    if(mks<60 )
    grade+='F'

    return grade;

}
console.log('david=',grd(80))
console.log('vinoth=',grd(77))
console.log('divya=',grd(88))
console.log('ishitha=',grd(95))
console.log('thomas=',grd(68))
