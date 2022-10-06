n=5;
m=n-1;
String = "";
for (i = 1; i <= n; i++) 
{
    num = i;
    for (j = 1; j <= m; j++)
        String += " ";
    m--;
    for (j = 1; j <= i; j++) {
        String += num;
        num++;
    }
    num--;
    num--;
    for (j = 1; j < i; j++) 
    {
        String += num;
        num--;
    }
    console.log(String);
    String = "";
}
