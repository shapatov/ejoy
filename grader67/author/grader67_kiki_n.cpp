    #include<bits/stdc++.h>
    #include "grader67.h"
    using namespace std;

    int main() {
        int n;
        cin>>n;
          int mini=INT_MAX;
       int maxi=INT_MIN;
       int sum=0;
    double  ans=0;
    int now=-1;
    int cnt=0;
       vector<int>a=solve(n);

       for(auto x:a) {
            if(now!=x) {
                  now=x;
                  cnt++;
            }
          sum+=x;
          mini=min(mini,x);
          maxi=max(maxi,x);
       }

      if(maxi-mini==2) ans+=0.60;
      if(sum%n==0) ans+=0.25;
      if(cnt>=2) ans+=0.15;
      cout<<fixed<<setprecision(2)<<ans<<endl;
      }
