---
layout: post
title: A Working Demo Is Not a Working System
date: 2026-10-18 09:00:00
description: Why a robotics course should start from failure, not from architecture diagrams.
tags: [robotics, education, systems-engineering]
categories: robotics
---

I teach Smart Vehicle OS at NTT University, and the hardest part of the course is not the syllabus. It is convincing students that a working demo and a working system are two different species.

By mid-semester most of them can train a model, run a motion planner in simulation, and show a clean trajectory on a clean map. The demo works. Then the code meets the vehicle, and the vehicle does not care about the demo.

A sensor drops out for 200 ms. A timestamp drifts. An edge case nobody labelled appears in the middle of the frame. The planner that looked correct on a laptop now steers into a wall while the logs insist everything is fine. Nothing in the previous twelve weeks prepares a student for that moment, because nothing in the previous twelve weeks was allowed to fail.

## The gap is not knowledge, it is diagnosis

The students who struggle are rarely the ones who do not understand the theory. They understand it better than I did at their age. What they lack is the habit of asking _which assumption just broke_, and the tools to answer it.

A demo is built on assumptions that are never written down: the clock is shared, the bus is not saturated, the sensor is calibrated, the map is current, the compute is not thermally throttled. A system is what remains when you remove those assumptions one at a time and the behaviour stays within bounds.

That distinction is easy to state and hard to teach, because the failure modes live in the seams between subsystems. A timestamp drift is not a perception bug or a control bug. It is a systems bug that presents as both.

## Teaching it backwards

This year I rebuilt the course around failure. Every module opens with a real malfunction taken from a deployed system, and the students work backwards to a root cause before they are allowed to build anything.

The malfunctions are deliberately unglamorous:

- Two nodes disagree about time by 40 ms, and the fusion output starts oscillating while every individual component reports healthy.
- A CAN bus saturates under logging load, frames drop silently, and the controller sees stale commands rather than errors.
- A motor controller heats up over a long run, its torque constant shifts, and a controller tuned in the first ten minutes starts overshooting in the fortieth.
- A camera pipeline drops frames under CPU contention, and the perception stack interpolates across the gap as if nothing happened.

None of these would appear in an architecture diagram. All of them would end a deployment.

Working backwards from a failure changes what students pay attention to. They stop asking "does my module work?" and start asking "what does my module assume about the modules around it?" That is the question that separates an engineer who can integrate a system from one who can only assemble it.

## The uncomfortable part

This approach is slower. You cover less material. A student who spends a week chasing a clock skew does not spend that week learning a new planner. On a syllabus measured in topics covered, failure-first teaching looks like a regression.

I think that measurement is wrong, and the industry feedback agrees with me. The expensive mistakes in robotics are not algorithm choices. They are integration failures discovered late, when the schedule has no room left to discover anything.

## What cannot be imported

There is a broader argument here about where robotics capability actually comes from.

Vietnam's robotics sector is growing, and most of the core stack is still imported: reducers, controllers, sensors, drive electronics. That is a normal stage of development, and importing hardware is not the problem. Hardware can be ordered, and it arrives with a datasheet.

What cannot be ordered is a generation of engineers who can take that hardware, integrate it into a system, and diagnose it when the system misbehaves in a way no datasheet predicted. Countries that built durable robotics industries did it on unglamorous systems courses, long before their robots looked impressive in public.

If our programmes stop at demos, we will keep importing the part that matters most: the people who can close the gap between a component that works on a bench and a machine that works in the world.

## A question for the people on the other side

If you teach engineering in Vietnam, I would like to know the one thing you wish industry understood about your students.

And if you hire robotics engineers, I would like to know the opposite: what is the first thing a new graduate gets wrong on a real system, the thing no transcript predicted?

I suspect the answers overlap more than either side expects.

---

_Smart Vehicle OS is taught at NTT University. The failure catalogue above is drawn from deployed systems; the course structure is an ongoing experiment and I will write about what worked and what did not at the end of the semester._
