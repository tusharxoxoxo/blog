+++
title = "GitHub Actions"
description = ""
date = 2020-05-08T20:47:48+02:00
type = ["posts","post"]
toc = true
tags = ["github", "CI", "CD"
]
categories = [
]
[ author ]
  name = "Jakub Duchniewicz"
+++


## Introduction
This post will make you familiar with some basic features of GitHub Actions featuring code for cross-platform Continous Integration. This is my first post so any feedback is appreciated :)

## Why?
Until a few years ago, managing continuous integration and deployment of a software product was quite sophisticated and required much toilsome work. 
I do not claim it is easy now, but it is certainly much easier thanks to tools like GitHub Actions. While [PolyEngine] had pretty good CI and CD already running it was divided between Travis(Linux and macOS) and Appveyor(Windows). Thankfully GitHub Actions try to make developer's life as easy as possible and allow for builds for all 3 platforms in one place. I decided to give it a go while doing our side project [PolyDock] which is a standalone plugin for managing windows in a Firefox/Chrome-like manner.

## The basics
The language in which it is written is YAML, which is a recursive acronym for "YAML Ain't Markup Language", the language itself is quite punishing and required usage of spaces instead of tabs(no bias here at all). However, when editing it in GitHub IDE you get nice suggestions and autocompletion - it would still benefit much from interpreting it on-the-go. The painful truth you have to accept is that your commit count will bloat once you start configuring GH Actions. There is a tool([Act]) which allows for testing them offline, but only Linux builds are supported :/

This said, it is time to show some code:

```yaml
# You start with the workflow name
name: CI

# This workflow is triggered on pushes and PR's to the repository
on: [push, pull_request]

# And you specify jobs it has to run
jobs:
  ci: # in this case CI
```
Every job is composed of steps, which specify what will happen sequentially when it is run - take this into account when writing your own workflows! You have to specify a name and the commands it should run. **Something I struggled to find is - how to run given step conditionally.** Well, nothing simpler! Just bash an `if` statement at the end of particular step and v'oila - it triggers only on particular conditions.

```yaml
  steps:
  - name: Install Dependencies (Linux) # notice that each step begins with '-' followed by a space
    run: | # pipe operator allows you to chain commands in several lines
        sudo apt-get update
        sudo apt-get install -y -qq cmake # qq for limiting verbosity
    if: matrix.os == 'ubuntu-latest' # for now ignore the 'matrix' part
  - name: Echo Something
    run: echo "Hey!"
```

Remember not to include new-lines between entries in jobs, otherwise GH Actions will complain about YAML issues and refuse to run your job - prepare a next commit...

## Going cross-platform
Now for the `matrix` part:

```yaml
jobs:
  ci:
   runs-on: ${{ matrix.os }}
   
   strategy:
    matrix:
        os: [ubuntu-latest, macOS-latest, windows-latest]
```

Matrix is the specified configuration you would like to run the job on. Apart from specifying the OS, you can also set desired package versions (but keep in mind that some packages may be not present in pre-built OS images), and customize settings for any of the operating systems of choice by `include` or `exclude` keywords. It is worth noting that if you are running several jobs in parallel(multiple OS compilation), if one fails, all will fail too. If you wish to run all the jobs till the end even if one fails specify `fail-fast: false` in the `strategy` settings.

## Additional commands
If you wish to use external actions - no problem! Just specify a `uses` clause and add the path of the action you want to use:

```yaml
  - name: Install Qt
    uses: jurplel/install-qt-action@v2 # specify the user and repository along with the version of this action
```

If you want to run a series of commands and do not want to specify a directory each time (or directory structures vary between systems) - use `working-directory`:

```yaml
   - name: Setup CMake
     run: |
        mkdir "${{ runner.workspace }}/PolyDock/Build" # runner.workspace is the variable of the current runner 
        cd "${{ runner.workspace }}/PolyDock/Build" 
        cmake ../PolyDock
```

Probably the most used action is the `checkout` action which checks out your repository on the runner, basically performing a `git pull`. However be careful when you have submodules! It won't initialize them automatically, so you have to specify it by hand like so:

```yaml
   - name: Get Sources
     uses: actions/checkout@v2
     with:
       submodules: 'true'    
```
## Conclusion
While I covered some basic features, and some that I simply needed, your configuration will be probably much more complex. Thus, I recommend consulting the official docs (they present the basics pretty well, but obscure some details like `if` statements in steps) and/or this excellent [post series] by Edward Thomson, which dig deeper into this subject. I hope that now you have some knowledge about the amazing world of GitHub Actions and will automate your own repositories :)

On closing words, if you like what I'm doing and you would like to see more of it - consider buying me a [coffee] :coffee:
[coffee]: https://www.buymeacoffee.com/jduchniewicz
[PolyEngine]: https://github.com/PolyEngineTeam/PolyEngine/
[PolyDock]: https://github.com/PolyEngineTeam/PolyDock/
[Act]: https://github.com/nektos/act
[post series]: https://www.edwardthomson.com/blog/github_actions_advent_calendar.html