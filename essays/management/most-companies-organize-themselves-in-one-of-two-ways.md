Functional and cross-functional teams- both of these organization styles have their benefits and drawbacks. Lets explore some of the attributes of these organizations and see what we can take from each style. The goal is to create something well suited to a fast growing product and engineering organization that already has a solid technical foundation to build upon.

## Functional Teams

In this kind of organization, teams form around the function performed by the members of that team. A typical product development company who organizes themselves this way might have a front end team, a back end team, an infrastructure team, a product management team, and a design team. This system works well for keeping the best practices of each function aligned, but it doesn't work for keeping different functions aligned.

Eventually, each functional group will aim for slightly different targets and they'll end up fighting each other to solve the same problems or end up disagreeing on what the problem is in the first place. This kind of organization favors waterfall style development cycles, and so generally has longer development cycles than cross-functional organizations. Functional product engineering organizations put functional excellence above iteration speed.

## Cross-Functional Teams

In this kind of organization, teams form around business goals. As an example, a ride-share company might have a driver team, a maps team, a payments team, a growth team, and a compliance team. Each of these teams would have members who perform the various functions required. The maps team might have front end engineers, designers, product managers, QA engineers, and data scientists. This system works well for iterating on business goals, but can leave a product feeling disjointed and stitched together.

This kind of organization tends to favor code ownership, so they generally suffer from the [bus factor](https://en.wikipedia.org/wiki/Bus_factor) more acutely than other organizations. While each team can move quickly, the interplay between the teams can be problematic; the goals of each team start to compete with each other as the priority of the business shifts, leaving each team wondering how they’re contributing to the company’s current goal. Cross-functional product engineering organizations put iteration speed above functional excellence.

## Functional Groups with Short-Lived Cross-Functional Project Teams

By combining the systems above we can create a system with all the benefits and fewer drawbacks. There are two kinds of teams in this system: functional groups, and project teams. An organization like this would have teams that focus on specific functions (back-end engineering, design, mobile, QA, etc.), but those groups wouldn't tackle the work independently. These teams guide the process, quality, and usability of their chosen function.

While the functional groups define the environment in which the work gets done, the project teams actually do the work. Once projects are prioritized for the organization, team members from each functional team are chosen to take part in project teams. These teams are short lived and only exist for the duration of the project. Each project team contains just enough expertise from each functional team to complete the project without pulling in outside resources. This allows communication to flow without having too many cooks in the kitchen. Once the project completes, the team disbands and the members rotate onto new teams for new projects.

Organizing teams this way allows your organization to focus on what is important regardless of your functional team structure, allows your team members flexibility in the work that they do, and allows for getting many projects done in parallel.

### A Few Drawbacks

Because projects need to be prioritized in advance, _it can be easy to fall into mini-waterfall with this style_. Product plans a project, hands it to a designer to make the designs, then they collaborate with engineers to get it shipped. To combat this, build in time between projects to allow the engineers to collaborate with the product people on project planning. Better yet, build a planning phase into your projects themselves and when you're prioritizing, only define the goal, not how you'll get there.

_Not all work is project based_. There will be times when you just need part of the team to focus on bugs or a quick improvement. The process of spinning up a new project team for these things is likely too much. Build in a traditional sprint-like process for people to use between projects to tackle these tasks. If you find that isn't enough to get through your backlog, consider committing to a permanent team (who's members rotate in and out) to this cause.

_It can be difficult for project team members to build up business context_. Without business context engineers won't always make the right tradeoffs, but getting that context for ephemeral projects can be tough. Product Managers should take extra care to make sure that the team understands why this project is important for the business and that each project team member understands how they're contributing to that business goal.

### Some Practical Guidelines

_Scope your projects down to what the team can complete in 2 - 12 weeks_. Anything shorter than that is likely best done by a single engineer between projects. Attempt something longer than that and what you end up with is less likely to be what you need.

_Don’t keep team members in the same part of the product_. The benefit here is that you get to spread your team’s knowledge across the entire team instead of hoarding your knowledge in a select few experts. Lower your [bus factor](https://en.wikipedia.org/wiki/Bus_factor).

_Don’t use the same set of people twice_. You want your culture and your process to evolve as organically as possible. By rotating people through many different teams each person gets to bring the things they like from one team to the next. If something worked well on their last project, they’ll bring it to the next.

_Pair new hires with someone in their function_. Ramping up new employees can be challenging in traditional organizations. There is a lot of context to learn, culture to integrate with, and team practices to master. Put them in a project team with someone they can learn these things from.

_Rotate people into the Tech Lead role_. Give every team member a chance to show you their technical leadership and people management skills. Any fast growing team is going to need more leaders soon. This is how you can build your leadership bench.

---

I’ve seen this scale from an organization with 30 people in it to an organization with 500 people in it, and it’s the best system I’ve seen for staying agile and moving fast while maintaining quality. How might this system help your organization operate at scale?
