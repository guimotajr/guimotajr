#!/usr/bin/env mode
var fs = require('fs');

function listPrime(max) {
	var prime =[];
	var sieve = new Array (max);
	for (var i=0; i<max; i++){
		sieve[i] = true;
	}
	for (var p=2; p<max; p++) {
		if (sieve[p]) {
			prime.push(p);
			for (var t=p*2; t<max; t+=p) {
				sieve[t]=false
			}
		}
	}
	return prime;
}
var k = 100;
console.log("List Primes("+ k +"):" + listPrime(k));
fs.writeFileSync("primes.txt", listPrime(100));
