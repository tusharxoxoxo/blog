+++
title = "ALSA Adventures"
description = "Shallow dive into ALSA"
date = 2020-09-29T18:51:47+02:00
type = ["posts","post"]
toc = true
tags = [
"ALSA", "Linux", "sound",  "DSP", "system", "configuration"
]
categories = [
]
[ author ]
  name = "Jakub Duchniewicz"
+++

## A few words of explanation
This is my second post, glaringly differing from the previous one in terms of topics presented. Right now I am working on a visualizer-equalizer project in Rust language (for hands-on learning experience!). 
As the name implies, it concerns Linux Audio and specifically Advanced Linux Audio System, which is one of more popular low-level frameworks on this OS. Since Rust audio frameworks are mostly in their infancy at the time of writing this, I decided to use [cpal] library which interfaces several other backends for portability of the application.

Right now the application is utilizing GTK for the GUI part and is not yet ready for show-off (unfortunately), but it will be soon!

## Goal
Because in principle I want to display frequency components of the audio signal being played in my headphones, I need to split the sound source for recording. This will be achieved by modifying ALSA's `.asoundrc` file, or any other configuration file found in `/etc/alsa/conf.d/` (note that ones with higher index will overwrite variables set in these with lower). 
Once, the configuration is proper, I want to see the device listed with either `aplay -L` or `arecord -L` and make sure I can use it as desired. Astute readers may notice that I use *device* for something not residing in `/dev/`, which is because ALSA allows for virtual devices that do not have 1 to 1 mapping with these from `/dev/`.

## Small ALSA introduction
I have mentioned ALSA too many times before without explaining why does one even need to use it in the first place. In the days of yore, there was the Open Sound System, which was the go-to audio backend for Unices. Once we entered more modern days, something more robust and thread-safe was required, and thus ALSA was born. Inside Linux kernel, all audio devices are served via the ALSA API (which is not the most pleasant API to work with).

Whenever any audio-related functionality is performed on Linux, it goes through ALSA eventually (or OSS if it is a dinosaur kernel). Other sound servers such as JACK or PulseAudio are a kind of *extension* of ALSA's functionality and they are two most popular audio servers. JACK is favoured by people enamored with good audio quality and low latency, whereas PulseAudio is distributed with most major Linux distros, such as Ubuntu or Fedora. Therefore, getting a grasp on basics of ALSA is often useful when you would like to modify audio related settings in your system.

## ALSA config
The [minimal configuration file] that satisfied my needs took me a while to find. After understanding the syntax of the config files (which is explained nicely [here]), I was able to understand and tweak the `.asoundrc` but still no device would show up when queried. After hours of searching to and fro, I decided to dig into `cpal`'s code and then into Rust's ALSA bindings. It turns out that ALSA devices can have *hints* which are used to describe it more verbosely and as it turned out: **virtual devices need hints**. Below you may see what does the proper config file look like to allow for simultaneous sound playback and recording.

```conf
defaults.pcm.dmix.!rate 48000
defaults.pcm.dmix.!format S32_LE
pcm.multi {
    type multi
    slaves.a.pcm "dmix:PCH"
    slaves.a.channels 2
    slaves.b.pcm "dmix:Loopback"
    slaves.b.channels 2
    bindings.0 { slave a; channel 0; } # bind channels to slave devices
    bindings.1 { slave a; channel 1; }
    bindings.2 { slave b; channel 0; }
    bindings.3 { slave b; channel 1; }
}
pcm.both { # duplicates channels for 'multi' module 
    type route
    slave.pcm "multi"
    ttable.0.0 1
    ttable.1.1 1
    ttable.0.2 1
    ttable.1.3 1
}
pcm.!default { # override default PCM
    type asym # type asymmetrical
    playback.pcm "plug:both"
    capture.pcm "plug:dsnoop:PCH"
    # Need a hint, else aplay -L won't show this device
    hint.description "Default output device forwarding captured data to Loopback loop" # THIS IS THE OFFENDER (rather lack of it)
}

#pcm.loop "plug:\"dsnoop:Loopback,1\"" # this is the same as below - just compact
pcm.loop {
    type plug
    slave.pcm "dsnoop:Loopback,1"
    hint.description "Loopback device which captures from default PCM"
}
```

Brief explanation, this config overrides default sampling rate and format for this devices streams. It defines several PCM modules (kind of ALSA's processing entities), and connects them, multiplexing the playback to both a Loopback device and audio device down the chain. This SO [anwser] goes into much detail about it if you wish to understand more about it.

## PulseAudio config
As most users won't need to dabble in ALSA, instead relying on PA or JACK, I will present below another `.asoundrc` which captures the monitors(duplicates) of desired PulseAudio devices (sorry, no JACK config - I am not familiar with it yet). 

```conf
pcm.steelseries_game {
    type pulse
    device "alsa_output.usb-SteelSeries_SteelSeries_Arctis_5_00000000-00.analog-game.monitor"
    hint.description "PulseAudio Game Monitor"
}

pcm.steelseries_chat {
    type pulse
    device "alsa_output.usb-SteelSeries_SteelSeries_Arctis_5_00000000-00.analog-chat.monitor"
    hint.description "PulseAudio Chat Monitor"
}
```
Again, without the `hint.description` tag, they won't show up in the `aplay`'s listings.

## Conclusions
Having read this post you will be able to create your own ALSA configuration for simultaenous capture and playback for both ALSA and PulseAudio. This is not the end of my ALSA adventures, but the next time I will write about it will be from the device driver perspective, so we will be looking at some kernel topics, such as DMA and timers. I hope you will find this post useful and educating :) I also hope to be posting some more in the upcoming weeks, as currently I have some free time due to current world situation. So stay productive and stay safe.

As always, if you like what I'm doing and you would like to see more of it - consider buying me a [coffee] :coffee:
[coffee]: https://www.buymeacoffee.com/jduchniewicz
[cpal]: https://docs.rs/cpal/0.12.1/cpal/index.html
[here]: https://wiki.archlinux.org/index.php/Advanced_Linux_Sound_Architecture#Configuration
[minimal configuration file]: https://ristovski.github.io/posts/master-alsa-config/
[anwser]: https://stackoverflow.com/a/44217925/7092926

