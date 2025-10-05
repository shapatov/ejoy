#include "grader67.h"
#include <bits/stdc++.h>
using namespace std;
int main() {
    int n; cin >> n;
    vector<int> ans = solve(n);
    vector<int> a(n);

    int k = 1;
    int lowCount = n / 2;
    int highCount = n - lowCount;

    for (int i = 0; i < lowCount; i++) a[i] = k;
    for (int i = lowCount; i < n; i++) a[i] = k + 1;

    long long sum = accumulate(a.begin(), a.end(), 0);
    int rem = sum % n;
    if (rem != 0) {
        a[0] += (n- rem);
    }
    double result = 0;
    sort(ans.begin(), ans.end());
    sort(a.begin(), a.end());
    int diff = *max_element(a.begin(), a.end())-*min_element(a.begin(), a.end());
    int diffans = *max_element(ans.begin(), ans.end())-*min_element(ans.begin(), ans.end());
    if(diff==diffans) result+=0.60;
    if(accumulate(ans.begin(), ans.end(), 0)%n==0) result+=0.25;
    
    bool distinct = 0;
    for(int i = 1; i < n; i++) distinct |= ans[i]!=ans[0];
    if(distinct) result+=0.15;
    cout << fixed << setprecision(2) << result << endl;
}
