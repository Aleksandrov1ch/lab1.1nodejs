Usage example:
CLI tool accept 4 options (short alias and full name):

-s, --shift: a shift
-i, --input: an input file
-o, --output: an output file
-a, --action: an action encode/decode
Encode input.txt to output.txt with shift 7:

$ node caesar.js -s 7 -i "./input.txt" -o "./output.txt" -a encode
Decode input.txt to output.txt with shift 7:

$ node caesar.js  --shift 7 --input input.txt --output output.txt --action decode
Decode stdin to stdout with shift 7:

$ node caesar.js --action decode --shift 7
