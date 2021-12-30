## This project has been discontinued. I decided to restart. The new project will be available at [arynthernium/win11](https://github.com/arynthernium/win11).

# winUI

I'm making a Windows 11 style "desktop" in HTML+CSS+JS because I've seen a lot of hate on how inconsistent it's turning out to be. Namely [this post](https://www.reddit.com/r/Windows11/comments/pcmkc0/dear_microsoft_if_youre_touting_your_interface_to/) from earlier today on the [r/windows11](https://www.reddit.com/r/Windows11) subreddit.

[This video](https://www.youtube.com/watch?v=yKXdemH8z04) shows off some of the changes between Windows 10 and the Windows 11 Insider previews.

The idea is to have as consistent flow as I can while maintaining a desktop-like functionality. Maybe I'll even throw this in Wallpaper Engine and use it for something useful.

I've placed buttons on the taskbar (the bottom bar) that open a new window (left button) and change the background, and eventually the theme, to dark (right button). 

I made a fairly okay version of the Mica material from Microsoft's material stuff using CSS `backdrop-blur`, `background-color`, and transparency. It's under the `mica` class name, which can be applied to any node (but it works best on nodes which have the `windowcontent` class already). I'll be improving this in the future, probably.

A hosted version is available here: https://aryn.dev/winui