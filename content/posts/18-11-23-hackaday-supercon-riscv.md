+++
title = "Hackaday Supercon 2023 / RISC-V Summit NA"
description = ""
date = 2023-11-25T12:11:29+01:00
type = ["posts","post"]
toc = true
tags = [
"riscv", "embedded", "electronics", "conferences", "lifestyle", "hacking"
]
categories = [
]
[ author ]
  name = "Jakub Duchniewicz"
+++

Who would have thought that after the ACL injury that I suffered skiing in February I would be able to go (twice!) all the way to California to surf and attend/speak at several conferences there. As usual, my partner in crime is **[Szymon]** who, despite being in the final year of his master's degree at UCL was able to keep me company. *(For anyone interested, I was at the [Game Developers Conference] in San Francisco in March)*

In this blog post you will get a glimpse of what all the conferences were about and what are latest market trends and concerns related to today's geopolitical and economic situation.

Also, I will talk a tiny bit about surfing :grin:

{{< image src="/caliv2/encinitassunset.jpg" alt="Sunset at Moonlight Beach" position="center" style="border-radius: 8px;" >}}

## Monterey

The first step on our journey was Monterey, CA where we both attended the **[Linux Foundation Member Summit 2023]** which was a first for us. Summit was mostly community and business oriented where major topics such as **[Open Source Project Office]** or Open Source community building and management or Open Source project lifecycles were discussed.

My interest was piqued by the talk about *Kernel Maintaining* by **Johnatan Corbet** from **[LWN.net]**. There, he presented the broad ecosystem that the Linux Kernel is and he pointed out some major challenges that its maintainers are currently facing. Namely there are some boxes in the dark cellar that have been mostly lying dormant and not receiving that much attention as, for example, device drivers or features that majority of users needs. These areas include documentation, build system being old *KConfig* and *Makefile* based (looking at you sweet and shiny **[meson]**) and some core kernel areas and drivers that are in a **[dire need of a maintainer]** (this article is slightly older, so you may refer to **[the actual talk]**).

There was a lot of discussion on open **Artificial Intelligence** models and how to properly and safely develop them so that they do not become evil rogues with intent of murdering all of humanity. Lastly, there was a talk about licensing and I finally understood how many flavors of *GPL* there exist(hint - 6) and about **SPDX (Software Package Data Exchange)** - a standard introduced to make licensing code less convolved. Check it out if you still don't know what *GPL* or *MIT* stand for (ok the latter was quite easy).

<div class="image-container">
  {{< image src="/caliv2/usmonterey.jpg" alt="Us at Pebble Beach" position="center" style="border-radius: 8px;" >}}
  {{< image src="/caliv2/szymonmonterey.jpg" alt="Szymon at Linux Foundation Member Summit" position="center" style="border-radius: 8px;" >}}
  {{< image src="/caliv2/pubmonterey.jpg" alt="Irish Pub in Monterey" position="center" style="border-radius: 8px;" >}}
</div>

## Hackaday Supercon 2023

After our brief respite in Encinitas, CA, (Tony Hawk lives there :grin:) where we surfed and rested a little-bit we hit the road and arrived in beautiful Pasadena, CA. Apart from being greeted by a gigantic traffic, we were also greeted by the most diverse and welcoming crowd of people **I ever met in my life**. I cannot speak any bad word about this conference and community because the passion for hacking and tinkering was literally seeping from these people.

It was also my first conference with a non-conventional badge, which instead of being a paper or plastic rectangle was a full-blown **[Vectorscope]**! My amazement had no boundaries when I learned that during the 3-day conference we could hack and tinker with it and we finally presented it at the **[closing gala]** where we almost won in our category (losing only to Pluto which apparently regained its status of a planet :zany_face:

Even though the badge was initially slightly unstable (both the software and hardware had been made by the folks at **[Hackaday]**!), people created **AMAZING** **[creations using it]**, think **DOOM on Vectroscope**, **[MPEG-1 video player]** and others!

**[Our game]** was quite simple yet fun to hack around and tinker with in the corridors and workbenches of the conference. We added a parallax background (scrolling behind the main scene), some simple controls and game loop. Oh and we also managed to play some audio :smile: In fact, this reminded me that I need to resurrect my GameBoy game porting and design side project!

<div class="image-container">
  {{< image src="/caliv2/badges.jpg" alt="Our Supercon Badges!" position="center" style="border-radius: 8px;" >}}
  {{< image src="/caliv2/jakubsoldering.jpeg" alt="Me soldering" position="center" style="border-radius: 8px;" >}}
  {{< image src="/caliv2/superconszymek.jpg" alt="Szymon at Supercon Hacking Emporeum" position="center" style="border-radius: 8px;" >}}
</div>


## RISC-V Summit

Right after the closing gala we hit the road and travelled over 400 miles to Santa Clara, where the next conference would start the next morning. While writing this I just remembered that the time change occurred in the US so we lost an hour of sleeping which might explain why we were so tired after Supercon in the first place.

The **[RISC-V Summit]** was much more business-oriented and was a stark contrast to the geeky and casual Supercon. In fact, I felt slightly underdressed without a tuxedo and in my Vans :grin: Nonetheless, the conference was mostly focusing at current challenges that the chip industry is trying to solve and how RISC-V is a good answer to them. What bothers the industry the most is effective architecture for **LLMs (Large Language Models, think GPT-3)** or other **Generative AI** models like **Stable Diffusion**. RISC-V is a good answer to that, and **Meta** has used a fabric of 2 RISC-V cores comprising one processing-element (one core for processing and another for vector operations) in their **[MTIA]** accelerator.

Other topics included governing and growth of the **RISC-V foundation** that is in a stark contrast to chip architectures like **Intel** or **ARM**, where this architecture is created in an Open Source way instead of being proprietary and centrally governed. Imagine a world where it is **YOU** who can request a new feature to be added/improved in your everyday hardware, well, we might just as well be living it :smile:

We also reunited with some of our friends at **[beagleboard.org]** who recently released **[yet another RISC-V based board - BeagleV-Fire]**!

<div class="image-container">
  {{< image src="/caliv2/riscvus.jpg" alt="Me and Szymon at RISC-V Summit" position="center" style="border-radius: 8px;" >}}
  {{< image src="/caliv2/riscvboards.jpg" alt="" position="center" style="border-radius: 8px;" >}}
</div>

## Surfing

Probably your inner geek has already been satiated by this point so now let's discuss how's the surfing in California. Answer? **Can't get any better!** :ocean:

### SoCal surfing

Let's first clarify how big California really is. Sources do not agree, but its coast is of more-less 1200 miles long (that's around 2000 km) and we have 3 distinct regions: Southern California spanning from Mexican border to around Santa Maria. Then we have Central (wild) California where we now have more sharks and golfers than surfers but also breathtaking surfing vistas and waves. Lastly, we have Northern California starting at San Francisco up to Oregon. This last stretch of the Coastline is starkly different from its southern counterpart, but this time we had no pleasure surfing there.

The surf culture north of San Diego is pervasive, locals are more-less cultured and crowds are mostly only on weekends. **My personal favorite is Encinitas** but for concrete spot recommendations you would have to ask me personally :grin:

{{< image src="/caliv2/mesurf.jpeg" alt="Me at D Street" position="center" style="border-radius: 8px;" >}}

### Santa Cruz

Santa Cruz was a reality check for us, as we are not used to surfing in crowds and in such densely populated areas. Although the city itself is beautiful and the vistas are marvelous, you simply cannot surf near the weekends and after regular working hours. That's a shame because the legendary spot **Steamer Lane** provides great waves **DAILY!**. Here is a picture of it at its regular potential :laughing:

{{< image src="/caliv2/steamer.jpg" alt="Steamer Lane" position="center" style="border-radius: 8px;" >}}

Overall, Santa Cruz is a great place to live, albeit quite expensive one. Locals are friendly and the surfing vibe is magnetic (**wishing I did my studies at [UCSC]**).

## Summary

This is definitely not the last time we visited California, we still have some unfinished businesses both in the literal meaning of it and with the surfing spots!

Stay tuned for some goodies from **[Sticky Piston Studios]** and if you still have not followed us on [LinkedIn], then please do!


[Szymon]: https://www.linkedin.com/in/szymon-duch/
[Game Developers Conference]: https://www.linkedin.com/posts/jduchnie_ai-opensource-future-activity-7046277876450508800-KYoX?utm_source=share&utm_medium=member_desktop

[Linux Foundation Member Summit 2023]: https://events.linuxfoundation.org/lf-member-summit/
[Open Source Project Office]: https://www.linuxfoundation.org/research/the-evolution-of-the-open-source-program-office-ospo
[LWN.net]: https://lwn.net/
[meson]: https://mesonbuild.com/

[dire need of a maintainer]: https://lwn.net/Articles/842415/
[the actual talk]: https://www.youtube.com/watch?v=fu8ZNRDQsi8&t=6771s

[Vectorscope]: https://hackaday.com/2023/10/18/2023-hackaday-supercon-badge-welcome-to-the-vectorscope/
[closing gala]: https://www.youtube.com/watch?v=11Js0cOif4c
[Hackaday]: https://hackaday.com/
[creations using it]: https://hackaday.com/2023/11/15/a-look-at-all-the-badge-hacks-of-supercon-2023/
[Our game]: https://youtu.be/11Js0cOif4c?t=2540
[MPEG-1 video player]: https://github.com/unwiredben/vector-video

[RISC-V Summit]: https://events.linuxfoundation.org/riscv-summit/
[beagleboard.org]: https://www.beagleboard.org/
[yet another RISC-V based board - BeagleV-Fire]: https://www.beagleboard.org/boards/beaglev-fire
[MTIA]: https://ai.meta.com/blog/meta-training-inference-accelerator-AI-MTIA/

[UCSC]: https://www.ucsc.edu/

[Sticky Piston Studios]: https://stickypistonstudios.com
[LinkedIn]: https://www.linkedin.com/company/100697668/
