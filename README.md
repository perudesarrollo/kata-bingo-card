# kata bingo card
Test Mocha - Chai - Express

```
npm i
npm start
```
{
  cartillas: {
    uno: [
      "B10",
      "B4",
      "B7",
      "B1",
      "B8",
      "I27",
      "I17",
      "I22",
      "I24",
      "I23",
      "N41",
      "N33",
      "N39",
      "N42",
      "G56",
      "G53",
      "G54",
      "G46",
      "G49",
      "O67",
      "O70",
      "O68",
      "O62",
      "O63"
    ],
  }
}

```
npm runt test
```

> mocha test/test-pages.js

  Bingo
    ✓ Has 24 numbers
    ✓ Each number is unique
    ✓ Contains a column B that has 5 items
    ✓ Contains a column I that has 5 items
    ✓ Contains a column N that has 4 items
    ✓ Contains a column G that has 5 items
    ✓ Contains a column O that has 5 items
    ✓ Numbers within a column are in random order
    ✓ Numbers in column B are all in range 1-15
    ✓ Numbers in column I are all in range 16-30
    ✓ Numbers in column N are all in range 31-45
    ✓ Numbers in column G are all in range 46-60
    ✓ Numbers in column O are all in range 61-75

  13 passing (11ms)
