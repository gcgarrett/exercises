# primes

Simple exercise to print a table of the first 500 primes. Uses **Algorithm P** from "The Art of Computer Programming", Vol. 1, chapter 1.3.2. I wanted to attempt this in Python first to understand how it works before attempting it in 6502 assembly. The number of primes in the table is configurable using the `-n` or `--number` command line option.

## usage

* Run `python3 primes/primes.py`
* Include `-n <integer>` or `--number <integer>` to configure the number of primes to print (defaults to 500)

## output

Sample output after running `python3 primes/primes.py -n 30`

```
FIRST 30 PRIMES
     0002 0003 0005 0007 0011 0013 0017 0019 0023 0029
     0031 0037 0041 0043 0047 0053 0059 0061 0067 0071
     0073 0079 0083 0089 0097 0101 0103 0107 0109 0113
```
