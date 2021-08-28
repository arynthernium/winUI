# winUI

I'm making a Windows 11 style "desktop" in HTML+CSS+JS because I've seen a lot of hate on how inconsistent it's turning out to be. Namely [this post](https://www.reddit.com/r/Windows11/comments/pcmkc0/dear_microsoft_if_youre_touting_your_interface_to/) from earlier today on the [r/windows11](https://www.reddit.com/r/Windows11) subreddit.

[This video](https://www.youtube.com/watch?v=yKXdemH8z04) shows off some of the changes between Windows 10 and the Windows 11 Insider previews.

The idea is to have as consistent flow as I can while maintaining a desktop-like functionality. Maybe I'll even throw this in Wallpaper Engine and use it for something useful.

For now, it's just the one WindowElement class, but I'll be expanding that as much as I can. The simplest way to add one right now is by running this in the console:
```js
document.body.appendChild(new  WindowElement().node)
```

A hosted version is available here: https://aryn.dev/winui