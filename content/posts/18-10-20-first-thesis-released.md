+++
title = "First Thesis Released!"
description = ""
date = 2020-10-18T17:00:18+02:00
type = ["posts","post"]
toc = true
tags = ["personal", "series", "general"
]
categories = [
]
[ author ]
  name = "Jakub Duchniewicz"
+++

## Introduction
I am bursting with excitement as I am writing this - I can finally share with the world something I have been working very hard for the first half of this overly eventful year!

Today I have uploaded my Bachelor's thesis for open access - it can be viewed at [this link]. If this was something not worth your time or digital space ([already polluted]), I would not blog about it :)

This project was probably the most ambitious one in my whole life, and what is most important - successful. Back in my previous job, my colleagues who have already graduated presented me with their theses, one of which utilized an FPGA for megahertz signal synthesis. Much as I like tackling challenges, [black magic] was not something I was eager to dab in. However, my curiosity on the subject of FPGAs was born, and soon I begun development of my thesis.

In case you are a busy person and don't want to dig into the thesis too much, here is the link to my [about] subpage containing the abstract of the paper, and here are some sounds generated on the FPGA and recorded on the Linux side of the SoC.
#### Sine wave
<audio src="/69sine.mp3" controls preload></audio>

#### Square wave
<audio src="/69square.mp3" controls preload></audio>

#### Sawtooth wave
<audio src="/69sawtooth.mp3" controls preload></audio>

#### Triangle wave
<audio src="/69triangle.mp3" controls preload></audio>

#### Polyphonic capabilities
<audio src="/polyphony.mp3" controls preload></audio>

#### Beatles - Let it be intro (tragic cover by me…)
<audio src="/letitbe.mp3" controls preload></audio>

#### Favourite song of Pope JP II - Barka
<audio src="/barka.mp3" controls preload></audio>

## Line-up

Barring some digital circuits courses at WUT, I was on uncharted waters and had to quickly get a grasp on the subject. In this series of posts I wish to give you brief introduction to the subject of FPGAs and sound synthesis, along with some tips I wish somebody told me when I started learning it. The listing below may be changed in future, so do not take it for granted, additional topics may yet arise.

### Agenda
* FPGAs for software engineers
* Digital Synthesis basics and tips
* Digital Filtering basics and State Variable Filter Overview
* FPGAs and Linux
* Linux Device Drivers basics
* Linux ALSA and DMA Drivers

## Update 02.2021
I did not write these blog entries yet as the end of the year time was rife with other project (Envidrawer, Robotics) and I will be coming back to the topic pretty soon from a different angle (I hope so!). If somebody cannot wait that long, please message me and I will be glad to share my experience.

The code (with detailed guides etc.) will be available on GitHub soon (although astute readers will find almost all necessities in the paper already).

## Other updates
I recently got chosen to participate in a project on element14 - a sustainable closed-space smart gardening solution utilizing less than 1m<sup>3</sup> of space [Envidrawer]. I will probably post some more updates regarding this once the project is worth showing off :)

I am gradually falling in love with Rust and will be trying some embedded solutions, probably mixing some freshly learned Machine Learning tricks to spice it up. Meanwhile, stay tuned for first post of FPGA series, coming this month!

Thanks for reading!

If you like what I'm doing and you would like to see more of it - consider buying me a [coffee] :coffee:
[coffee]: https://www.buymeacoffee.com/jduchniewicz

[this link]: https://jduchniewicz.com/FPGA-synth.pdf
[already polluted]: https://www.visualcapitalist.com/wp-content/uploads/2019/04/data-generated-each-day-wide.html
[black magic]: https://www.amazon.com/High-Speed-Digital-Design-Handbook/dp/0133957241
[about]: https://jduchniewicz.com/about/
[Envidrawer]: https://www.element14.com/community/roadTestApps/39149/l/1-meter-of-pi-envidrawer
