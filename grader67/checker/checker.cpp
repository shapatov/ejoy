/* the checker has three arguments:
    - first - name of the input file
    - second - name of the correct output file
    - third - name of the contestant output file */
#include<iostream>
#include<fstream>
using namespace std;

const string password = "4d2426f473bdd0bb81727510307c51e665eae016bbd9d6f365677e01f0a4e4e1";

void output_message(double points, string message){
	cout << points << endl;
	cerr << message << endl;
	exit(0);
}

int main (int argc, char** argv) {
	if(argc < 4){ output_message(0, "Insufficient arguments!"); return 1; }
	fstream input(argv[1]), output(argv[2]), contestant(argv[3]);
	if(!input.is_open()){ output_message(0, "Couldn't open input file."); return 1; }
	if(!output.is_open()){ output_message(0, "Couldn't open output file."); return 1; }
	if(!contestant.is_open()){ output_message(0, "Couldn't open contestant file."); return 1; }
	string check;
	contestant >> check;
	if(check != password){ output_message(0, "Contestant wrote to cout."); return 1; }
	double a, b;
    contestant >> a >> b;
    cout << (a==b) << endl;
	return 0;
}
