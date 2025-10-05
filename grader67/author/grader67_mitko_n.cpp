#include "grader67.h"
#include <bits/stdc++.h>
using namespace std;
int main() {
    int n;
    cin>>n;
    int ans = 2000000000;
    vector<int> a(n, 1);
    a[0]=0, a[1]=2;
    ans = min(ans,*max_element(a.begin(), a.end())-*min_element(a.begin(), a.end()));
    vector<int> author = solve(n);
    set<int> s;
    for(auto x : author) s.insert(x);
    double result = 0;
    if(s.size() >= 2) result+=0.15;
    if(accumulate(author.begin(), author.end(), 0)%n==0) result+=0.25;
    if(*max_element(author.begin(), author.end())-*min_element(author.begin(), author.end())==ans) result+=0.60;
    cout << fixed << setprecision(2) << result << endl;
}
