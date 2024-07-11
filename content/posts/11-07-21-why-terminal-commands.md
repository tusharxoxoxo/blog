+++
title = "U never knew this mac terminal cli trick"
description = ""
date = 2021-07-11T14:04:12+02:00
type = ["posts","post"]
toc = true
tags = ["terminal", "cli", "commands"
]
categories = [
]
[ author ]
  name = "Tushar Dahiya"
+++

## Introduction
### Update 11.07

1. `say then whatever u want ur mac to say`, Siri will say whatever u want her/him to say, but don't know why it's always a male voice i tried to change it but was unable to, If someone knows how to make a female voice say in terminal
2. `security find-generic-password -wa "whatever is ur wifi name"` this will show the password of the wifi stored in ur mac
3. `some command | pbcopy` whatever is the output of the command will be copied to the clipboard
4. `shift command option v` to copy without formatting, It's really a godsend if try to copy something from notes to Google Docs or majorly anything to Google Docs
5. `caffeinate` type thing in the terminal and your Mac won't sleep till u end this command, perfect for a coffee break
6. `command control shift 4` like normally u take screenshots by pressing `shift command 3` or for a specific area `shift comand 4` but by doing so the screenshot will get saved on the desktop and then u have to go to the desktop and from there u need to copy and then paste it somewhere but with this command, u can take a screenshot of a particular place and copy it to clipboard.. really amazing one
A couple of terminal commands to make changes around your screenshot
7. `defaults write com.apple.screencapture name` -> Set a default name to your screenshots
8. `defaults write com.apple.screencapture type` -> u can set your screenshot file format to jpg, png, etc
9. `default write com.apple.screencapture location ~/Desktop/screenshots` Currently the default saving location for your screenshots is your desktop, u can change it with this command
10. `passwd` to change your password
11. `whoami` will tell u ur user name
12. `ditto` there r two commands on Mac to copy and paste via your terminal, `cp` and `ditto`, don't know sure, but a Mac expert said to me that `ditto` is better than `cp`
13. `df -h` will tell u how much space u have in your Mac, its full form displays free disk space
14. `man` to open the manual or if u want a manual of something, like say `cp` command u can type, `man cp`
15. `open` to just open things like `open .` will open finder, or `open myprofilepic.png`
16. `ping` to check whether a website is up or not, like `ping google.com`
17. `ifconfig` configures network interface parameters, u can use it with different variations and combinations as such, `ifconfig en0`, `ifconfig en0 | grep inet`, `ifconfig en0 | grep inet | awk 'carry regular expressions'`
18. `traceroute website.com` to see the path u r taking to get to a certain website, great for troubleshooting
19. `dig websitename.com` If u want to dig into DNS of a website, u can get all the DNS goodness
20. `ps` to see all the processes on your computer
21. `ps -ax` to see more, like a lot more
22. `top` u can see which processes are using the most CPU in real-time
23. `top -o rsize` can see processes by memory
24. `kill -9 processid` will kill a running process, cooler combination for this is, `ps -ax | grep processname`
25.  `which $SHELL` to see which shell we r using
26.  `bash` to switch to bash shell
27.  `zsh` to switch back to zsh shell
28.  `uptime` to find how long have your mac been up
29.  `qlmanage  -p thefileNameThatUWantToPreview` to preview any file
30.  `diff file1 file2` to compare two files
31.  `curl theLink < where u want to store` to download
32.  `leave 1245` will set an alarm in the terminal, and will tell u to leave at that time
33.  `history` to see the history of all the commands u have been typing in your terminal
34.  `python3 -m http.server` This will create a web server of your hard disk and anyone can go to the ip address and see your files
35.  `shutdown -h now` to shutdown immediately
36.  `shutdown -r now` to restart immediately
