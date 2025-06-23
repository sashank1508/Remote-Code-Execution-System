const def_code = {
  C: `#include <bits/stdc++.h>
using namespace std;
int main() {
    cout<<"Hello world"<<endl;
    return 0;
}`,
  Python: `print("Hello World")`,
  Javascript: `console.log("Hello World");`,
  Java: `class Main {
    public static void main(String[] args) {
      System.out.println("Hello World");
    }
  }`,
};

export function returncode(x) {
  if (x === 1) {
    return def_code.C;
  } else if (x === 2) {
    return def_code.Python;
  } else if (x === 3) {
    return def_code.Javascript;
  } else if (x === 4) {
    return def_code.Java;
  }
}