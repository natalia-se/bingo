# Bingo

You're already almost 1.5km (almost a mile) below the surface of the ocean, already so deep that you can't see any sunlight. What you can see, however, is a giant squid that has attached itself to the outside of your submarine.
Maybe it wants to play bingo?
Bingo is played on a set of boards each consisting of a 5×5 grid of numbers. Numbers are chosen at random, and the chosen number is marked on all boards on which it appears. (Numbers may not appear on all boards.) If all numbers in any row or any column of a board are marked, that board wins. (Diagonals don't count.)
The submarine has a bingo subsystem to help passengers (currently, you and the giant squid) pass the time. It automatically generates a random order in which to draw numbers and a random set of boards (your puzzle input).
The actual challange: You want to try a friendly strategy and let the giant squid win.
You aren't sure how many bingo boards a giant squid could play at once, so rather than waste time counting its arms, the safe thing to do is to figure out which board will win last and choose that one. That way, no matter which boards it picks, it will win for sure.
Figure out which board will win last. Once it wins, what would its final score be?

## Getting Started

To use this code, follow these steps:

1. Clone the repository

```bash
git clone git@github.com:natalia-se/bingo.git
cd bingo
```

2. Run the command

```bash
docker build -t bingo .
docker run bingo
```
