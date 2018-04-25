# Cryptopals Challenge

Contains the source code and unit tests for the cryptopals challenges
as found on [Cryptopals website](https://cryptopals.com).

## What is this For?

Cryptopals contains some cryptography challenges that appear fun.
This repository contains the source code and unit tests for those
challenges.

## Setting up the Project

Before running the unit tests, you will need to make sure you install
`jasmine` following the install instructions [here](https://jasmine.github.io/2.0/node.html).

To save time, you can follow these basic instructions.

```shell
npm i -D jasmine
npm i -g jasmine
```

That will be all you need to run the tests.

## Running the Tests

There is an `npm` script that you can run to run the unit tests.
From the command line, simply run `npm test` to execute the unit
tests for the project.

## Basis for the Tests

The test input and output is derived from the challenges on the site.
All of the assertions that are in the unit tests are from the actual
challenges on the site.