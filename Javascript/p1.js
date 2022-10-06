
for (i=0; i<=5; i++)
{
    for (j=0; j<=5-i; j++)
    {
        String+= ' '
    }
    for (k=0;k<2*i-1;k++) 
    {
        String+='1'
    } 
    console.log(String);
    String=" "
}