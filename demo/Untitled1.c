#include <stdio.h>
int main(void) {
int t;
long int i=0,cnt;
char s[100000];
scanf("%d",&t);
 while(t>0)
{
   cnt=0;
   scanf("%d",s);
  if(s[i]=='0'){
    for(i=0;s[i]!='\0';i++)
    {
       if(s[i+1]=='1'&&s[i]=='0')
           {
           cnt++;
           }
    }
   printf("##%ld",cnt);
  }
   else
  {
     for(i=0;s[i]!='\0';i++)
     {
           if(s[i+1]=='1'&&s[i]=='0')
           {
            cnt++;
           }
     }
    printf("%ld",cnt+1);
  }
  t--;
}
  return 0;
}
