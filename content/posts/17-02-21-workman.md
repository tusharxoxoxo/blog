+++
title = "Workman"
description = ""
date = 2021-02-17T14:04:12+02:00
type = ["posts","post"]
toc = true
tags = ["lifestyle", "workman", "workspace"
]
categories = [
]
[ author ]
  name = "Jakub Duchniewicz"
+++

## Introduction
### Update 28.02
I am already writing with almost 70 wpm constant. So this is quite productive layout all in all.

This entry is a special one! It is dedicated to people brave or crazy enough to do a keyboard layout switch. I won't go into details on why you should consider a different layout if you are like me, spending rather big part of your life going clack-clack and pretending you are working and not browsing reddit and social media. I curated some materials you may want to study in order to make up your mind:

* [original] - The official Workman layout
* [icyphox] - an opinionated blog describing similar experience to mine
* [Keyboard Layout Analyzer] - website that analyzes the text you input and spews out the most optimal layout for it
* [carpalx] - two layouts in one, a popular alternative to Workman and Colemak
* [keyboard-design] - a good source of info from a person experimenting a lot with kb layouts

There seem to be a shortage of relevant study on this topic, which was surprising to me, as nowadays we all use keyboards daily (especially these awful laptop ones). If you, dear reader are a specialist, please consider doing such research and help us all find the perfect layout. My hope is that we will be soon having personalized layouts so that our hands do not strain so much.

I decided to switch layouts because I started to feel fatigue after prolonged sessions of writing journals or even ordinary code. Foreseeing future and being fond of my hands I knew something had to be done!

## Enter Workman
My interest was piqued by several layouts, namely Colemak, Colemak-DH and classic and well-known Dvorak. However, I was sold on Workman as the upgraded Colemak (which is also repaired by the DH mod). I may try the DH mod in some time and decide it is superior to Workman but this is unlikely. Having spent just 12 hours practicing I am able to type with 50 WPM and found most keys easy to learn and replace.

{{< image src="/workman/workman.png" alt="Workman layout" position="center" style="border-radius: 8px;" >}}

As for the practice website, I can highly recommend [keybr], which guides you quite well through all keys in a reasonable order, gives you neat graphs and even some competition! Additionally if you want to have some fun while you are at it, try [ztype] - a small typing space shooter game.

## Installation (X11 setup)
As for the X11 (main system) keyboard setup and for other systems, in the basic form it requires only installation of the layout from official [workman] repo - system specific instructions are provided there. In my case I wanted to have both German and Polish special signs and followed this great [tutorial] by Michał and ended up with [such] a configuration.

Remember to create a fresh file, otherwise you won't be able to turn the layout on with the command:
```shell
setxkbmap -v workman_pl_de && xset r 66
```
Where `xset` part takes care of proper autorepeat rate of keys.

## Setup Vim
### Vanilla
Assuming you need a text editor, you probably do not want to alter your muscle memory and relearn where each special key is after the switch. Thankfully, vim provides users with a method `langmap` which allows for easy remapping of all key combinations to a new layout leaving your muscle memory intact.

I found this to be quite tempting but soon fell into the habit of striking the Workman keys more and more and turned it off. Here is the relevant [plugin], but it is in my opinion not that developed (shortcuts like `Ctrl-WW` are missing).

In order to make my life with `hjkl` bearable (too much muscle memory) I remapped them to`Alt-[yneo]` so they are in the same place as before with just the modifier key added. Hopefully, in time I will become true vim ninja not needing these puny keys and relying only on motions and commands, but today I am still too used to corrections and off-by-one movements.
The bindings can be seen here (the funny `^[` sign is the escape sign for the `Alt` key and you obtain it by pressing `Ctrl-V` in insert mode and pressing the key you want to input).
```vimrc
""" Workman
" Map to Alt-yneo instead of hjkl
nnoremap ^[y h
nnoremap ^[n j
nnoremap ^[e k
nnoremap ^[o l

vnoremap ^[y h
vnoremap ^[n j
vnoremap ^[e k
vnoremap ^[o l
```

In case you are not familiar with vim remappings, `nnoremap` is for the normal mode and `vnoremap` is for the visual. This way I can use my long-learned habits of `hjkl` with only a slight complication.
 Of course now we come to the topic of plugins but this is only slightly more convolved.

### Plugins
This post is not dedicated to advocating any particular plugins, but if you are curious which I am using, take a look at my [vimrc].
Because my muscle memory was not that tied to particular keys and instead remembered the combination by name, I did not change anything here. You, however might want to do some jumping around here, depending on your usage of non-vanilla vim.

## Setup Fish
This setting applies to every shell there is and I will focus on the fish shell (which you should try out if you never did!). Most probably you already know about going forwards and backward through the shell history commands (`Ctrl-p` and `Ctrl-n` - previous and next) and if you didn't they try it out and don't thank me :) These keys are actually in quite handy place on the keyboard so no need to change them for me, even more, they are now handier to use in my opinion!

The keys I am having most trouble with are `Ctrl-c` and `Ctrl-v` which are shifted one column to the right. Also, moving around the command parts in the shell prompt is non-intuitive and I might remap this later via [fish-bind].

The last of inconveniences are related to a plugin I am using systemwise ([fzf] - smart searching and directory changing). This plugin is a lifesaver but getting used to misplaced `r`, `t` and `c` is annoying. Of course it can be remapped, but not worth it anymore.

Lastly, browsing diffs, manpages and all other utilities basing on the emacs/vim bindings is a stretch, but as possible one and even as I was browsing manpages today, I did not have as much trouble as I thought.

## Setup Tmux
Setting up tmux is fairly easy, as since several versions it has become highly customizable. Below you may find the most important settings along their QWERTY counterparts.
```vimrc
### QWERTY ###
# Use vim type keys for navigating between windows
#bind h select-pane -L
#bind l select-pane -R
#bind k select-pane -U
#bind j select-pane -D

# Use vim type keys for re-sizing panes
bind -r < resize-pane -L 1
bind -r > resize-pane -R 1
bind -r - resize-pane -D 1
bind -r + resize-pane -U 1

# Copying with vim shortcuts
#bind-key -T copy-mode-vi v send-keys -X begin-selection
#bind-key -T copy-mode-vi y send-keys -X copy-selection
#bind-key -T copy-mode-vi r send-keys -X rectangle-toggle
#bind P paste-buffer
#set-option -s set-clipboard off
#
## copy to the xclip
#bind-key -T copy-mode-vi Enter send-keys -X copy-pipe-and-cancel "xclip -sel clip -i"
#bind-key -T copy-mode-vi MouseDragEnd1Pane send-keys -X copy-pipe-and-cancel "xclip -sel clip -i"
#
#bind c source-file ~/.tmux/dev

### Workman ####
bind y select-pane -L
bind i select-pane -R
bind e select-pane -U
bind n select-pane -D

bind-key -T copy-mode-vi m send-keys -X begin-selection
bind-key -T copy-mode-vi j send-keys -X copy-selection
bind-key -T copy-mode-vi r send-keys -X rectangle-toggle
bind P paste-buffer
set-option -s set-clipboard off

# copy to the xclip
bind-key -T copy-mode-vi Enter send-keys -X copy-pipe-and-cancel "xclip -sel clip -i"
bind-key -T copy-mode-vi MouseDragEnd1Pane send-keys -X copy-pipe-and-cancel "xclip -sel clip -i"

bind m source-file ~/.tmux/dev

```
With these binding handy, I can do most tasks as before. The only problems being the vim mode bindings which seem to be hardcoded in the tmux source code. After using them for a while I can say it that they are mostly comfortable and I do not plan to change them.

## Browser
Like most modern people, I am using a GUI browser (Firefox) and sometime don't want to get distracted by removing my hands from the keyboard. I tried using some plugins to automate that, starting from saka key, to finish on Vimium.It allows for key rebinding, so my precious `hjkl` is safe. Because I am terrible at keeping it clean, my tabbar has over 350! tabs (don't ask) - thus last year I decided to write a small plugin which would automate my switching to them and searching in different windows only - [find-tab]. Now, with Vimium I got most of its functionality already there, but Vimium is slightly over-dumbing it and I prefer using my plugin.

## Conclusions
While the transition to the new layout is not smooth and without its hindrances, I am glad I could rebind almost everything as wanted and achieve a portable layout without any system hacking and rebinding keys in the Xorg configs. Typing with some speed this soon after switching is a pleasure for my ego (I improved 5 WPM since starting to write this post - of course with some training in between :)

I am keyed up (no pun intended) with the speeds and pleasure I will have from mastering this layout soon. I also hope I will be able to switch to QWERTY from time to time and not be totally baffled by it (reddit users claim this is not a big deal after some time so I remain positive).

I hope this post will help you with choosing the proper layout, and if it is workman, then transitioning to it as well. We should take great care of our bodies and especially hands, since most of us are earning their lives with their help. Thank you for reading and stay safe! Please comment below and help me make this blog a better place.

Btw. I changed the comment engine to [  utterances ] as it is more responsible in terms of privacy than disqus.

Considering that you like what I'm doing and you would like to see more of it - consider buying me a [coffee] :coffee:
[coffee]: https://www.buymeacoffee.com/jduchniewicz



[original]: https://workmanlayout.org/
[ztype]: https://zty.pe/
[icyphox]: https://icyphox.sh/blog/workman/
[Keyboard Layout Analyzer]: http://patorjk.com/keyboard-layout-analyzer/#/main
[carpalx]: http://mkweb.bcgsc.ca/carpalx/
[keyboard-design]: https://keyboard-design.com/best-layouts.html
[keybr]: https://www.keybr.com/
[workman]: https://github.com/workman-layout/Workman/
[tutorial]: https://michal.kosmulski.org/computing/articles/custom-keyboard-layouts-xkb.html
[such]: https://gist.github.com/JDuchniewicz/eb1346f8759340a1ffeed81ed1022877
[plugin]: https://github.com/nicwest/vim-workman
[fish-bind]: https://fishshell.com/docs/current/cmds/bind.html
[fzf]: https://github.com/junegunn/fzf
[find-tab]: https://addons.mozilla.org/en-US/firefox/addon/find-tab/
[vimrc]: https://github.com/JDuchniewicz/dotfiles/blob/master/.vimrc
[utterances]: https://utteranc.es/
