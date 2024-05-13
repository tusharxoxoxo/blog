+++
title = "What is the purpose to import C library into Zig?"
description = ""
date = 2021-02-17T14:04:12+02:00
type = ["posts","post"]
toc = true
tags = ["zig", "c"
]
categories = [
]
[ author ]
  name = "Tushar Dahiya"
+++

## Introduction
### Update 28.02

So, Zig is a language and also a compiler/build system.

Here is what that means for what you are asking. You can use the Zig compiler and Zig build system to compile your C and even your C++ code/libraries/programs. You would only be writing Zig code in the build bile then.

You can use the Zig compiler to write just Zig code and it will build that for you as well.

It will let you import your current or future C project directly into your Zig code and compile both together.

This gives you options to use lots of existing stuff, or just drop Zig into your current build system and don't touch it again.

Why might you want to do that? When Zig is compiling C code, it activates a lot of checks that are not commonly used currently in the C world everywhere. Most of these are about warnings and this can allow you to tighten the quality of your current code.

It helps you make your current code safer by doing so. It also has some nice tooling features you can take advantage of while you are doing it, such as cross-compiling for Linux, Mac, or Windows, for Arm/64 or x86-64 or other supported targets. Without having to bring in other toolchains or anything else, it all comes when you install the Zig compiler.

Now, if you use Zig language for your program, the compiler is going to give you safer code in the form of you being better equipped to know exactly what your code is doing. With almost no hidden state in the language, your program should be easier to not just make safe, but also fast.

So Zig has the opportunity to make your code faster when using the Zig language because you can better tell the compiler what you want the program to do, and the compiler has more information.

Zig also gives you better control over the types of binaries you produce. You can set Zig build up to allow you to produce code that is mostly release-ready with certain parts set up to guarantee certain portions of your code never have overflow errors. You can do this at granular levels, so you could set up all networking code to get those extra checks, but the code that reads the input from the user doesn't need that level of scrutiny if your use case needs it.

