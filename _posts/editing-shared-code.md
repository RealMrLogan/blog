---
title: "Editing Shared Code"
date: "Oct 3rd, 2020"
---

"Not-Me": You pushed code on Friday!

"Me": Yeah, my code shouldn't break anything.

Ha! Let me tell you a story... A long, long time ago (I think it was two weeks ago) I was given the task at work to update a piece of global code. Global, meaning the whole site uses it, not just one or two pages. Global, as in, if I mess up, someone will probably notice.

Well, as confident as I was that my code would not change any current functionality, Murphy's Law got a big smile. My changes consisted of:
1. Pulling in an additional library (basically there was a flag that said to pull in library 1 or 2, but not both.)
2. Calling a function on whichever library was loaded.

That's it... Well, aside from it being code that I had never seen before, it took me a little bit to get everything in a place where I was comfortable handing it off to the QA engineer on my team. After a few feedback loops, things seemed to be working fine and my PR got approved. Everything was primed and ready to go. This was on a Friday. So at about 11 in the morning, I merged to master.

I watched a few pages that got the update, and nothing seemed to be broken (In hindsight, I should have set up a test plan). So, I went about my day as normal, onto the next task. Fast forward to Monday and I get an email saying that my changes had taken down a feature on the site. I looked again and sure enough, what I thought was resolved on Friday, had never been put to bed. So I started working on it as soon as I could. Another email comes in, "I need this fixed ASAP!" So I work a little harder. A third email re-emphasizing the point, now I was starting to sweat.

> At this point in time, I was really stressed. And pretty sure I worked through lunch.

Hungry, stressed, and confused why I couldn't fix this problem, I started getting desperate. I pulled up a diff between my changes and the original version and started reverting pieces in my new update. A dozen or so pushes and deploys later, and it gets in a workng state. I merge at 9 at night on Monday.

The next day, I monitor a few pages that got the update and everything seems to be fine. I get a congrats from my team lead and a thank you from my contact on the project. All things seemed to be fine, but wait, there's more! Later that day, I noticed that I introduced a TypeError that was failing on some pages. So I got a fix all ready to go. My PR was approved, and it was at about 4 o'clock things were primed to merge. I learned my lesson from the previous day and decided to wait until the next day to merge it in.

> I would rather have all day for people to notify me of errors and fix them, then have to come back to the office late at night.

I was winding down for the day and getting ready to go to bed, or at least getting ready to get ready. And I happen to check my work email (which is something that I have never down outside of work hours). And guess what, more emails about something I broke. This time I didn't explicitly get an "ASAP" message, but I had guilt inside because I was causing grief for another team. Luckily this time, I didn't have to spend hours trying to get a fix. Casually, I merged in the update and notified everyone. This was at about 8 on Tuesday.

The next day, I followed up to make sure my changes worked (trying to be a little pro-active at this point). And as expected, things were fine. I could finally rest that night knowing that there had been a lot of eyes on my changes and no one was complaining. Jump to the next Tuesday and I had noticed that there were even more errors that went under my radar. This time, I caught them and wasn't notified (which was a nice change of pace).

I threw them on my TODO list and after a little planning, I started to go to work. At first I was stumped on how to fix them, but after taking a break and coming back to it, it was clear what I needed to do. One line of code changed and my PR is ready to merge. Turns out that wasn't the only error that needed my attention. One of the teams that used this piece of code only partially updated to the new version. So that was fun trying to fix.

{TODO: Finish that part of the story}

Now that that was done, I needed to make the same functionality change to a different part of the site (Oh, did I not mention that we have two stacks?) Fortunately I was a lot more comfortable in this stack than the previous one. So my changes had kind of been put on the back burner until I got the above problem figured out. Now it's time to rinse and repeat.

Learning from my many mistakes from the last week, I carefully tested and monitored my changes. And better yet, I didn't push on a Friday! This time I was confident my changes would work as expected, but just to be safe, I blocked out my entire day to handle any fallout from my merge.

{TODO: finish second part}

## Lessons Learned

1. Don't push on a Friday
2. It never hurts to do better tests
3. Teams can help a lot when you feel overwhelmed