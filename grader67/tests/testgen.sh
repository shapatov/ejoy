#!/bin/bash

# 1-6: just number +1
for i in {1..6}; do
    echo $((i+1)) > "$i.in"
    : > "$i.out"
done

# 7-22: random number 2-30
for i in {7..22}; do
    echo $(shuf -i 2-30 -n 1) > "$i.in"
    : > "$i.out"
done

# 23-53: random number 2-100
for i in {23..53}; do
    echo $(shuf -i 2-100 -n 1) > "$i.in"
    : > "$i.out"
done

# 54-67: random number 2-1067
for i in {54..67}; do
    echo $(shuf -i 2-1067 -n 1) > "$i.in"
    : > "$i.out"
done

# 68-167: random number 2-(1e5+67)
for i in {68..167}; do
    echo $(shuf -i 2-100067 -n 1) > "$i.in"
    : > "$i.out"
done
