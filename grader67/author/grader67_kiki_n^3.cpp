#include "grader67.h"
#include <bits/stdc++.h>
using namespace std;
const int MAXN = 1e3+69;

pair<int,int> dp[MAXN][MAXN][2];
int previ[MAXN][MAXN][2], prevj[MAXN][MAXN][2], prevf[MAXN][MAXN][2], choice[MAXN][MAXN][2];

int main() {
    int n;
    cin >> n;


    for (int i = 0; i <= n; i++) {
        for (int j = 0; j < n; j++) {
            for (int f = 0; f < 2; f++) {
                dp[i][j][f] = {INT_MAX, INT_MAX};
                previ[i][j][f] = prevj[i][j][f] = prevf[i][j][f] = -1;
                choice[i][j][f] = -1;
            }
        }
    }

    dp[0][0][0] = {0, INT_MAX};


    for (int i = 1; i <= n; i++) {
        for (int j = 0; j < n; j++) {
            for (int f = 0; f < 2; f++) {
                if (dp[i-1][j][f].first == INT_MAX) continue;

                for (int x = 1; x <= n; x++) {
                    int aa = max(dp[i-1][j][f].first, x);
                    int bb = min(dp[i-1][j][f].second, x);
                    int nj = (j + x) % n;

                    int nf = f;
                    if (aa != bb) nf = 1;

                    auto cur = dp[i][nj][nf];
                    if (cur.first == INT_MAX || aa - bb < cur.first - cur.second) {
                        dp[i][nj][nf] = {aa, bb};
                        previ[i][nj][nf] = i-1;
                        prevj[i][nj][nf] = j;
                        prevf[i][nj][nf] = f;
                        choice[i][nj][nf] = x;
                    }
                }
            }
        }
    }


    vector<int> seq;
    int ci = n, cj = 0, cf = 1;
    while (ci > 0) {
        int x = choice[ci][cj][cf];
        seq.push_back(x);
        int pi = previ[ci][cj][cf];
        int pj = prevj[ci][cj][cf];
        int pf = prevf[ci][cj][cf];
        ci = pi; cj = pj; cf = pf;
    }

    reverse(seq.begin(), seq.end());
    int diff = *max_element(seq.begin(), seq.end())-*min_element(seq.begin(), seq.end());
    vector<int> author = solve(n);
    int diffauthor = *max_element(author.begin(), author.end())-*min_element(author.begin(), author.end());
    double result = 0.0;
    if(diffauthor==diff) result += 0.60;
    if(accumulate(author.begin(), author.end(), 0)%n==0) result += 0.25;
    bool different = 0;
    for(int i = 1; i < n; i++) different |= author[i]!=author[0];
    if(different) result += 0.15;
    cout << fixed << setprecision(2) << result << endl;
}