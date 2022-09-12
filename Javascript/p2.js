n=5;
      for(i=0;i<n;i++)
      {
        String=" "
         for(j=n;j>i;j--)
         {
            String+= " "
         }
         num=1;
         for(k=0; k<=i; k++)
         {
            String+=num+" "
            num = num*(i-k)/(k+1);
         }
         console.log(String)
         String= " "
      }