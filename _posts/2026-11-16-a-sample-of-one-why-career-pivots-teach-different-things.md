---
layout: post
title: A sample of one - what career pivots actually teach
date: 2026-11-16 09:00:00
description: Three robotics career moves, and the one habit that made them compound instead of reset.
tags: [career, robotics, physical-ai]
categories: robotics
---

There is a piece of career advice that gets repeated so often it has stopped sounding like advice: pick a lane and stay in it. In robotics the lanes look especially well marked. Legs, arms, wheels, perception, planning, hardware, software. A specialist in one lane is legible to employers, easy to evaluate, and quick to become excellent. I have mostly ignored that advice, and this post is my attempt to work out whether that was a mistake or the best decision I made.

I did a PhD on how legged machines walk, in Seoul. I then moved to Tokyo and spent years on industrial mobile robots in warehouses. I am now back in Ho Chi Minh City, working on humanoid manipulation. Three moves, three countries, and on paper almost nothing transfers between them. Different morphologies, different industries, different cultures of engineering. In practice, one habit transferred everywhere, and it is not a skill anyone can hire for directly. It is the discipline of asking, about any impressive result including my own: _is this a sample of one?_

## Sample of one

The question sounds academic. It is not. It decides what you are allowed to conclude from a demo.

The context that made this concrete for me was locomotion. For years the field treated walking as a controls problem, and there was real progress in that framing. But the honest conclusion after spending a PhD inside it was that we did not yet have the compute or the data to make general locomotion cheap. What looked like a robotics problem was a data problem wearing a robot costume. That reframing changes what counts as evidence. If the bottleneck is data, then a system that walks well in one lab, on one floor, under one carefully held set of conditions is not a preview of the future. It is a single draw from a distribution nobody has characterized.

And here is the part I had to learn twice, in two different countries: the same trap exists on the industry side, and the industry version costs more. A warehouse robot that runs for a week on one site has not proven anything about the next site, because the next site has a different slope in the floor, a different lighting regime, a different operator who does something you never simulated because it was the obvious thing to do. Lab demo to deployment is not a handoff. It is a change of distribution, and nobody warns you about the magnitude of the shift.

## Two separate curves, zero shared coordinates

What nobody tells you about moving countries mid-career is that you are actually moving two curves at once, and they move at different speeds.

The technical curve moves with you. Controllers are controllers. State estimation, kinematics, contact modeling - the mathematics ships in your head, and the software idioms are close enough that a senior engineer is productive in a new country in weeks.

The contextual curve resets to zero. Not the language, or not only the language. The written and unwritten things around the technology: which safety standards bind, which regulations bite, which supplier relationships are load-bearing, which corners are culturally acceptable to cut and which will end a career. Those are not in any documentation. Every one of them has to be re-earned locally, from scratch, and re-earned in a second language.

So for a stretch after every move you are simultaneously a senior engineer and a junior hire. That stretch is genuinely unpleasant. It is also the point. You feel exactly where the general knowledge ends and the local context begins, because you are living on the boundary. A person who never moves never finds that line precisely, and without the line you cannot tell which of your hard-won skills are portable and which were location-specific the whole time.

## Do not write it all down

There is an easy version of this essay where I say: so I built a rigorous personal knowledge base, and that is what made the moves survivable. I did not. I want to be precise about this, because the honest version of the habit is less flattering and more useful.

I generally do not write things down. Not because I am undisciplined, but because I have watched the alternative fail. The failure mode looks like this. You write everything into a beautifully organized system. Six months later the work has moved - new robot, new stack, new country - and the notes still describe the world you left. Worse, they describe it with such authority that you re-read them as truth. A technical lesson that was valid at one point in one context arrives wearing the authority of a document, and it is now wrong. The more disciplined and organized the system, the more convincingly it lies to you after the world has moved on.

So my actual practice is less admirable and more deliberate. I keep a deliberate mental model, updated continuously, of what transfers. I do not mean memorization. I mean I actively maintain a map with three zones:

- Universal: the physics, the math, the estimation theory. This zone is small, stable, and worth maintaining carefully precisely because it is small.
- Portable-with-care: methods and patterns that transfer only with a known list of caveats. Most of engineering lives here, and every caveat is a liability until it is re-checked in the new context.
- Local: everything else. Assumed to be wrong until verified, no matter how confident I was in the previous country.

The system is a map I keep in my head and refresh by deliberately re-deriving things, and it decays without deliberate maintenance. I accept that cost. An archive that confidently preserves stale conclusions is worth less than a current model that at least knows it might be wrong.

## What a robot costume hides

This habit also reframes the field-level story I am watching now. Humanoid robots are in a hype moment, and the announcements are about funding, form factors, and demo videos. The reasoning I trust most treats these systems as a stack, and asks which layer is actually the constraint. On that reading, the hard part is rarely the actuator or the chassis. It is the data layer: whether you can generate human motion data, retarget it onto your own morphology, and get a policy that survives contact with the world. The question has quietly shifted from _can we build it_ to _can we train it_.

Sample-of-one thinking is what keeps that assessment honest. A humanoid folding a shirt in one kitchen, under one lighting setup, with one operator in the loop, is a sample of one. An impressive sample, and a real result, and still not evidence of a general capability. The people making the best calls in this wave are not the ones with the best demos. They are the ones who know exactly which single draw their demo represents, and price it accordingly.

The habit generalizes past robotics. Any career pivot hands you the same test. The offer of a fresh start is real, and so is the bill: everything contextual is re-earned, nothing general gets a discount, and the line between them is something you have to walk yourself. You will not find it written down. I have come to think that is the actual skill: not the pivots themselves, but knowing, at every point, which of your knowledge is a sample of one.

---

_This essay started as a shorter LinkedIn post about career transitions; this version is my own working-out of the idea at full length. I teach Smart Vehicle OS at NTT University, which keeps the sample-of-one question impossible to avoid: every student demo is a draw from a distribution nobody has characterized yet._
