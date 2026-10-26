---
layout: post
title: What Moving Between Industry and Academia Made Me Unlearn
date: 2026-10-26 00:00:00
description: The career moves that mattered most were the lessons I had to unlearn, not the skills I picked up.
tags: [career, robotics, research]
categories: robotics
---

I have spent the last several years moving between two worlds that each like to explain the other one to themselves. I did a PhD on legged robots in Seoul, then went to Tokyo to build warehouse robots, and now I am back in Ho Chi Minh City working on manipulation. When people ask about those moves, they usually ask about the hardware, as if the interesting part were the actuators. It was not. The interesting part was what each move forced me to unlearn.

## A data problem wearing a robot costume

Seoul is where I went the other way: into research, for a PhD on how legged machines walk. I went in expecting a controls problem. I came out convinced it was mostly something else.

For years the field had treated locomotion as a matter of better models and tighter controllers, and there was real, hard-won progress in that direction. But the honest conclusion, after spending that time inside it, was that we did not yet have the compute or the data to make general locomotion cheap. What looked like a robotics problem was, underneath, a data problem wearing a robot costume.

That is a harder thing to unlearn than it sounds, because it changes what the word _progress_ means. If the bottleneck is data, then a demo that works on one robot, in one lab, under one carefully held set of conditions is not a preview of the future. It is a sample of one. And a sample of one does not generalize, no matter how cleanly the video cuts. The habit I had to break was treating an impressive single result as evidence about a general capability, when the actual constraint was sitting one layer below the thing everyone was celebrating.

## The last mile is the product

Tokyo was my first real job in industry, and it taught me a lesson I was not ready for. A robot that works in the lab and dies on a customer's floor is not ninety percent done. It is zero percent done.

In the lab, the environment cooperates. The floor is level, the lighting is the lighting you set, and the person operating the machine is the same person who wrote the code. On a customer's site, none of that holds. The floor has a slope nobody mentioned in the spec. The operator does something you never simulated, because it was the obvious thing to do and no one thought it needed simulating. The robot that looked finished in the demo video spends its first week on site discovering an entire category of failure that did not exist in your test suite.

I had been taught to think of deployment as the final step in a long sequence, the thing you get to once everything else is done. Tokyo taught me it is the product. The integration, the failure modes, the operator who finds the gap in your assumptions and does not care that the assumption was reasonable — that is the thing you are actually selling. The robot is just the part you could already build in the lab. What separates a company from a lab is everything that happens after the lab stops being involved.

## The unlearning is the skill

Looking back, the through-line between Seoul and Tokyo was not any piece of hardware. It was the same realization arriving from two directions: some problems you cannot skip.

Seoul said you cannot skip the data, no matter how elegant the model sitting on top of it. Tokyo said you cannot skip the last mile, no matter how much of the rest you have already finished. Both are versions of the same mistake, which is mistaking the part you enjoy for the part that matters.

This is, I think, the most underrated skill a person can build across a career that crosses research and industry: the ability to notice which problems are being skipped, and to say so before the schedule runs out. It is not a technical skill, and it cannot be taught in a lecture. It is only acquired by being in the room when the skip happens and watching what it costs. Both transitions cost me a version of that lesson, and it was worth more than everything technical I picked up along the way.

## Coming back, and staying honest

Now I am back in Ho Chi Minh City, working on manipulation, and I teach Smart Vehicle OS at NTT University on the side. The teaching is not a side project in the way people assume. It is the thing that keeps me honest.

A classroom does not let you get away with the kind of confidence a demo video does. Students ask the question you were hoping nobody would ask, because they do not yet know which assumptions are supposed to be sacred. They will find the one you buried, and they will do it in front of the rest of the class. Every term I have to say out loud what is actually generalizable and what is just a demo that got lucky. Saying it out loud is how I check that I actually believe it, and it is the reason I have not stopped teaching even when the work gets busy.

The question that follows me into the work now is no longer _can we build it_. It is _can we train it, and will it survive contact_. That shift in the question is the real product of the last few years. The hardware was never the hard part; it was always the part you could point at.

## A question instead of a conclusion

If you have moved between research and industry, I would like to know the one thing the transition forced you to unlearn. Not the thing you learned — those are easy to list on a resume. The thing you had to let go of: the belief that turned out to be wrong, the confidence that turned out to be unearned.

I suspect those unlearned things are where the actual expertise lives, and that we talk about them far less than we should. We report the skills and stay quiet about the beliefs that had to die to make room for them, which is a strange way to describe a career, and probably the wrong one.
