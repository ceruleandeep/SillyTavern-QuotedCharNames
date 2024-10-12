# SillyTavern QuotedCharNames macro

Adds a macro to SillyTavern that expands to a list of all the characters (incl user), double-quoted, comma-separated.

Lets you do this:

```
["\n", ":", "\"", "*", {{quotedCharNames}}]
```

<img width="345" alt="qcn" src="https://github.com/user-attachments/assets/91879351-1844-493d-8d4b-db873a3f5e31">

You will get:
```
["\n", ":", "\"", "*", "Cato", "P. Vergilius Maro", "C. Valerius Catullus"]
```

## Features

Solves that one problem for that one person.

## Installation and Usage

### Installation

Use ST's inbuilt extension installer.

### Usage

Add `{{quotedCharNames}}` to DRY Sequence Breakers or wherever.

## Prerequisites

## Support and Contributions

haha nope

## License

AGPL-3.0
