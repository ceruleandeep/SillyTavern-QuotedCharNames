# SillyTavern QuotedCharNames macro

Adds a macro to SillyTavern that expands to a list of all words in all the character names, including you, double-quoted, comma-separated.

If you're using the DRY sampler in SillyTavern, and you notice that your characters' names are slowly mutating because
the model is not permitted to repeat the same word... 

```
Seraphina, Seraphinah, bo Beraphina, banana-fana fo Feraphina, fee fi mo Meraphina
```

... try this. It adds all the active characters' names
to the DRY sequence breakers by just writing `{{quotedCharNames}}` in the sequence breaker list.

If you have this group chat:

<img width="359" alt="cato" src="https://github.com/user-attachments/assets/be032614-8cea-4b9a-9d5c-b2806bfc883c">

and you write:

```
["\n", ":", "\"", "*", {{quotedCharNames}}]
```

<img width="345" alt="qcn" src="https://github.com/user-attachments/assets/91879351-1844-493d-8d4b-db873a3f5e31">

you will get:

```
["\n", ":", "\"", "*", "Cato", "P.", "Vergilius", "Maro", "C.", "Valerius", "Catullus", "Saul", "Goodman", "esq"]
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
