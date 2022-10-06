arr= [10, 3,5, 12, 5, 3, 9, 1];
count=1;
b=[];
b=arr.sort();
for(i=0;i<arr.length;i=i+count)
{
    count=1;
    for(j=i+1;j<arr.length;j++)
    {
        if(arr[i]==arr[j]){
            count++;
        }
    }
    console.log(arr[i]+"-"+count);
}