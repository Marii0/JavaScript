/*
"FizzBuzz" para numeros divisbles entre el 3 y el 5
"Fizz" para numeros divisbles por el 3
"Buzz" para numeros divisble por el 5
Imprimir los numeros si no cumplen ninguno de estos requisitos.
*/

for (let i = 1; i <= 100; i++) {
    if (i%3==0 && i%5==0) {
        console.log("FizzBuzz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else{
        console.log(i);
    }
}

/*for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}*/

/*
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz
31
32
Fizz
34
Buzz
Fizz
37
38
Fizz
Buzz
41
Fizz
43
44
FizzBuzz
46
47
Fizz
49
Buzz
Fizz
52
53
Fizz
Buzz
56
Fizz
58
59
FizzBuzz
61
62
Fizz
64
Buzz
Fizz
67
68
Fizz
Buzz
71
Fizz
73
74
FizzBuzz
76
77
Fizz
79
Buzz
Fizz
82
83
Fizz
Buzz
86
Fizz
88
89
FizzBuzz
91
92
Fizz
94
Buzz
Fizz
97
98
Fizz
Buzz
*/