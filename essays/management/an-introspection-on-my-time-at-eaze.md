My time at Eaze has been chaotic, action packed, stressful, challenging, and extremely rewarding. I grew the engineering team from an initial four generalists to a team fifty people strong. We went from delivering cannabis to medical users, mostly only in San Francisco, to delivering cannabis to 85% of California and all of Portland, Oregon as well as shipping CBD products to almost the entire US. We took a rough technical foundation and pushed it to its limits while pushing our product and our business forward. We built (and rebuilt) some cool shit.

I also learned a lot about what it takes to lead, grow, and maintain an engineering team in a fast moving, chaotic environment. This essay is an attempt at documenting everything I've learned over the last three and a half years. It may or may not be published. If you're reading it now, that means that you're either future me or someone that I trust to check my logic and tell me where my thinking needs improvement. Please don't hold back in your feedback.

With that said, let's do this. I'll start with my mistakes and what I learned from them before moving on to what I did well and what I learned from *those* experiences.

### I didn't move fast enough to remove people from the team who were providing drag for the rest of us.

This applies both to people who were on the existing team when I arrived (who through no fault of their own were already very distrustful of company leadership) and to people who I brought in later. Even the best hiring managers make the wrong hires sometimes, the great ones recognize this and move quickly to course correct when it happens. In many instances I wasn't fast enough at Eaze.

### I didn't get or make an assessment that I could trust on the state of the code in the platform.

Early on it was difficult for me to discern the state of the platform at Eaze. I didn't have much experience with .NET or C# so it was tough for me to tell what was just normal .NET/C# and what was bad architecture (or lack of architecture). I should have done two things:

1. Dig into the codebase more myself. Add observability right away so that we know what is going on in our code. Make my own assessment of the quality of the codebase after observing the system perform for a while.
2. Hire someone I trust deeply with the sole goal of exploring the current platform, finding its flaws, and navigating a path forward. It took me almost three years to make this hire, that was far too long.

### I didn't focus on tools to enable developer velocity.

While I made a lot of progress finding a process for engineering to operate within, I failed to encode this process into tools that make it easy to do the right thing and hard to do the wrong thing. We didn't focus enough on deployment systems, our base infrastructure, or our development environments.

### I failed to build project management skills into my team.

First, I attempted to do this through the Tech Lead role. I'm still not clear why this didn't work, but I suspect that it was because I didn't go into enough detail about my expectations. In hindsight I should have been much more specific with the expectations of that role, perhaps even down to telling them *how* to project manage, what tools to use, and the format for each artifact.

When this failed, I didn't transfer these responsibilities to my management team fast enough. The managers on my team were all newly promoted to the role- they'd never done this before and it was my responsibility to take their raw talent and turn them into great managers. In a lot of ways they emulated me: they got good at the hiring funnel and recruiting, good at regularly checking in with the individuals on the team, and good at keeping tabs on project progress.

They weren't, however, particularly good at the project management side of the job. That was a skill we needed to teach them, and it took me too long to realize that.

### I struggled to create connections and alignment on the exec team.

If I'm being honest with myself, this was due to my introverted nature, as well as the calibre of individuals on the exec team. I was intimidated and I didn't realize it until late in my tenure there. And honestly there's a toxically masculine part of me that is embarrassed that this was the case.

I should have pushed through my fear and opened up about the challenges on the Engineering team sooner. We were too siloed, so adding in a structured system to export and import information to and from the Engineering team to the rest of the departments was necessary and I didn't see that until it was too late. Our habits were already built.

### To summarize what I should have done

- When someone is not the right fit on the team, identify this quickly and act on it.
- Gain a truthful understanding of the quality of the codebase that the team is working on through observability, trusted experts, and self assessment.
- Maintain a maniacal focus on developer tooling. Make it east to develop, deploy, roll back, and understand the impact each change has on performance, scalability, and business metrics.
- Define in detail the process that teams will use to manage their projects. Don't expect them to find their own from scratch (but let them deviate if they have a good reason to).
- Talk about the team's struggles, plans, and triumphs with my fellow execs. Make sure they're intimately aware of what is happening on the Engineering team and make sure they understand how we operate. Make sure that the Engineering team knows how all of the other teams operate too.

### I built a great recruiting engine that we never stopped improving

### I hired an amazingly kind and brilliant team

### I helped the company through important milestones

### I made *some* good prioritization calls