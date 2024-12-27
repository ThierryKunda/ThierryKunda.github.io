---
title: Activity Log
layout: project
---
# Activity Log
{% include pub_date.html datetime="2024-12-26" date_month="December 27" year="2024" %}
## The story behind its appearance
Did I tell you I'm currently working in the data field? Huh? Well...this information is quite
important to understand how the idea was born.
As stated in my [About me](#) page — I hope you have already read it...right? — I'm an
apprentice in a banking company.
One of my missions is to produce and publish **BI reports** for other entities, based
on data from different types of sources, such as extraction files, database queries, REST APIs and
so on.
We are using **Microsoft Power BI** as the main tool.
Since I'm working in a team of Data Scientist and Engineers, we are also using Power BI to track and
compute the time spent on the subjects we are working on.

We use an Excel file to store all the information related to those subjects. However it becomes more
and more tiring to manually estimate the average time on specific and repetitive tasks,
as we have to update the file each time.
At some point, I told myself: _Everything could be simpler if there was a piece
of software that could resolve this issue_ —
and make coffee, but we all know the answer to this request unfortunately...
As I'm used to version my college and personal projects with **Git** — like
99.999999...% of software developers — I thought this system as one of the best when it is
about keeping track on stuff that has long lives in their usage and welcomes well collaboration and
nice self-documented project progress —
with commit messages, tags, merges, issues,...

At some point, I thought it would be interessing to pick some of the basic concepts of Git and bring
them into any software that needs it. That is how **Activity Log** was thought out in
the process:
tracking topics/subjects/projects and breaking them down into tasks completed as you go along.

_Need to switch to another subject? No problem! Hit the X command.
Need to register a new subject? Hit the Y command.
Want to see all the tasks you have done today? Hit that Z command. See? You are productive
today! Keep going!_

When I was sure building something new would solve a 'real-life' issue — and not some too specific or
imaginary problem —
I jumped right in this occasion to start a new personal project — among the other hundreds of dead
projects that keep calling me in dreams, or nigthmares...
Now let's see how the tool was built. Spoiler: it was not as smooth as I thought it would be. Would
not be interesting if everything was easy
from the get-go, don't you agree?


## The development process — yap session unlocked

### Choosing the technology — Rust? Seriously?
Before writing any piece of code, I had to choose (obviously) a programming language.
The first thing I told myself was:
_I want to be effective and productive, not processing a lot on the system design side of stuff
nor any architecture details._
The mantra was clear: _build fast, release fast, check fast, breakfast_ —
not sure about the last one though.
Therefore I picked at first...**Powershell**! Suprising? Well there are several reasons
for choosing this language:

- Having something close to your operating system — in a _close-to-native_ way of thinking —
reduces all the _toolbox_ effect you usually have in the compiling process —
e.g.: **Node.js** in the web development field with frontend and full-stack
frameworks.
- Along with this reason, the language is simple by conception. No OOP, no complex data structures
to handle.
You just define a CLI command right of the bat.
- I wanted a new challenge. As I have never built something with a pure scripting language — a
system language to be more precise —,
I could add something to my resume, even for a small side project. I don't loose anything by
doing that, just earning new knowledges and understanding
on software development. #MambaMentality

The thing is...one of my goals was to provide a tool to any platforms — primarly Windows, MacOS and
Linux.
But it turns out I would have to build two versions of the same tool as I will be using, for
Unix-based OS,
**Bash**.
I was quite hopeful on the developer experience of Bash as I experienced the way Powershell was
friendly in their easiness of use.

...It was the opposite. It was the first time I've had this opinion:
_Windows is beating the sh*t out of Linux in terms of DX_.
And it was quite frightening how true it was at the moment. Rust became my second option really
quick, because:

1. Rust is a compiled languages that can target different platforms.

2. It is a language I have used in sandbox coding, which led me to understand concepts like _ownership_,
_borrow-checking_ and other witchcraft done with _functional programming_
and a bit of _OOP_ (picking the best sides of it).
3. I wanted to create something with,
not knowing exactly _what_ I should do.
So I took the opportunity to make something concrete with this quite interesting language.

4. _But why don't you use Python?_
There are multiple reasons not to use Python in this case, but one that stands out well is the
absence of a typing and a
pattern matching systems that I could leverage to organize in a nice way my code and make it
comprehensible at first glance.

For those who do not know what kind of language Rust is, let me break it down to you:
it is a static typing compiled language that can be compared — to some extent — to other low-level
languages such as:

- C: it tends to be considered as the purest form of manual memory manipulation — also known as
_shoot on your foot if you feel confident_ language
- C++: it is basically the C language with OOP concepts, which adds more abstractions to the code
- **Golang** (or Go): it is nearly the same generation as Rust in the modern
languages era and has the common purpose
to bring new concepts to low-level development in order to lessen the burden of building
system-targeted software.

> Actually the project could have been thought through Golang, there is not really a better
    language in the context of creating
    a command line application.  
    The main difference relies on which concepts you favor in the building process and how much you
    are comfortable considering the DX.
    If there are any major differences in their way of designing and maintaining new stuff that I
could tell to a fellow sofware engineer, I would say the following:   
> _If you are the type that rushes their lunch meal because they feel like they are loosing the
    time they could have spend to advance on their tasks, you will likely
    enjoy Golang — boring language but trully effective and fast.   
    On the other hand, if you enjoy free time spending X time on stuff knowing it might not be
    useful later, just for the sake of it or for learning in the hard way,
    you will definitely appreciate Rust._


Rust brings **security** at the center of software development conception. Thanks to its
ownership system, it provides an alternative technique
to manual memory allocation (e.g.: C and C++) — giving nice performances but risky as it raises bugs
presence — and to garbage collection (e.g.: Python, Ruby, Go)
— more secure as it is automated by the language through another mini-program called the _garbage collector_, but slows down the code execution.

> NB : There is not a direct link between memory allocation, programming language level and typing
system. The mix between those three parameters is defined by what you expect
your language to be good at and limited on specific tasks.
> A last parameter that could be added to the list is the compilation/interpretation method:
_when_ — for each line? on the whole program? — your source code is
converted to binaries — bytecode or pure binaries? — and executed in the overall process,
and sometimes _what_ is it doing this stuff — bare metal? virtual
machine?...


I will not deep dive on the many memory allocation methods in the overall programming language
spectrum, but to make it simple:
the idea behind the creation of Rust was to push all error checking steps to the compilation side.
Therefore Rust became a safe language as it
does not allow any code to be compiled that could cause bugs. There are still bug sources that
happen to exist in the runtime process, but they tend be forcibly present
as it is not possible to suppress them by design.

Additionally, the development team of the language brought both **functional
programming** and **OOP** principles in the best way into the language.
Again I will not give details on why functional programming is cool — trust me, IT IS! — and how
they succeeding in not messing architecture and code maintainance by bringing the best
of OOP — with just interfaces (called _traits_) and a light approach on
inheritence and polymorphism.

### Features — great reminder to not build a swimming pool _in_ a spaceship

I'm someone who can be too much inventive when it is about creating features for a tool. But
it often leads me
to create some kind of _Frankenstein-ish_ product which does not focus on
the original solution thought to the problem I am trying to solve.
The challenge here is was the following:
_How can I create a software that can be interesting
enough for any user to enjoy using it day by day, and concise enough not to lose their interest?_
The plan to keep being consistant was not something grand.
I used iterations on my thought process with the following steps:

1. Telling myself: _What is missing?_ Or
_I want to have/do X thing but it's not (yet) available..._
2. _Is anyone else would feel the same about that?
    Am I tripping?_
3. To be sure, I'm asking to other potential user — on forums, social media, to my mom, siblings,
    even Santa Claus if needed — what are their thoughts on X stuff, and if they think like me about it.
4. Thus, I add the feature based on their feedbacks. It does not have to be _exactly_
the one I thought originally but a conception that matches everyone's overall expectation.

That is explaining — or mostly trying to explain — the title about the _swimming pool in a spaceship_:  
At first you think that being able to make it possible would be incredible for spacemen — can't they just chill sometimes, right? —,
but at second thought you realize it will jeopardize the essential purpose of a spaceship which is visiting 
and discover new _out-of-earth_ elements.

After yapping that much on my thought process — looking like some fellow guy with ADHD...
(not disrespecting ADHD people, You all are awesome!) —, I think you've got an idea on what is trully hard
in creating something, which may not be the technical part of it.


### Project structure and code organization — I love spaghettis! Not so much in my code...
This topic is kinda tough to broach. How will I start on this?...
First truth: you cannot predict at an early stage how your code is going to be organized.
Especially when the project life cycle is based on iterations like in the **Agile** approch.
Do not complicate things on trying to predict elements that you _might_ use
later — like adding a class or a method not implemented yet but 'certainly' useful in the future. Your
are not a fool, you know that the needs and requirements will change, and being flexible makes everything
easier than what you think.

In the other hand, not knowing the future design does not mean not knowing how
to design a _good enough_ codebase. Do not try reinviting the wheel and go learn
design patterns and architecture rules that will help you produce clean code.
Again, go by iteration:

1. Make sure the piece of code your are working on is comprehensible for external developers.
2. If it's not the case, break it into smaller pieces with logical relations.

3. Too much lines? Break it into different files. Do not overdo it ! Switching between files to understanding
    how things are related can be redundant and tiring.

4. If you are not sure about the decomposition process you are applying, add docstring to your code or create any kind
    of documentation — e.g. create **Confluence** pages or sections, add neat details to the PR messages,...
    — to explain why you are doing all of this. It can be quite effective as you could catch yourself writing
    some gibberish and tell yourself _Well...I'm not even convinced myself...Why someone else
        would be at this point!?_
5. If you really want to be sure at some point, just try building in your mind the same source code in a single file you
    wrote so far. If it looks horrendous, break it. Still looking ugly? Break it again...until
you tell yourself: _What I have done until now is not that bad!_

> Documentation is really important as it gives more contextual information on technical and business aspects of the project.
    Tools like **Confluence** are useless without collaborators contribution.
> Have you ever been in a situation
    where you do not have specific pieces of information that would help you unlock an issue? Searching through **StackOverflow** and
**Reddit** hoping to hit a comment about an author who faced a similar problem and provides clues, but not finding anything relevant? Think
about it next time and be the savior of your teammates!


### What about Git workflow? Testing?
TLDR: None of them were really used — at least not for the first version.
For single-developer team, there is no use to create a complete Git workflow, unless you want
provide contextual information on features or simply group them into branches.
For instance, it is common to create two branches, one for the releases called
_main_ or _master_ — which is created by default when
initializing a Git repository — and an other one called _dev_ for ongoing
modifications of the source code — e.g. new features, bug fixes, documentation, code refactoring, etc. 

Those two branches are sufficient until I add another developer to the project. Adding more branches
will turn really quick to something too _overkill_.

Additonally, developers tends to forget that testing is really time-consuming and has to be efficient to add any
value to the code. If not, it just adds complexity to the code.
That is why I preferred not to add testing cases to a source code that does not so much work that cannot
be checked manually.

> You must assume that **testing is really important** and will be present inevitably.
    It saves you from ridiculous situations that could appear at any time.

## The first release

### From **cargo** for the rustaceans
For developers that already have _cargo_ — the official package manager of Rust —, they
can hit the following command:

{: title="Tap to copy to the clipboard"}
```
cargo install activitylog
```
More information are available [here](https://crates.io/crates/activitylog). 
### Directly as binaries for the OGs
You can download the executable based on one of the specified platforms for version v0.1.0:
<div class="downloads">
    <a href="/softwares/al-windows.exe" download="activitylog-win.exe">Download for Windows</a>
    <a href="/softwares/al-linux-x86_64.exe" download="activitylog-linux_x86_64.exe">Download for Linux x86 — 64 bits</a>
    <a href="/softwares/al-linux-arm_64.exe" download="activitylog-linux_arm_64.exe">Download for Linux ARM — 64 bits</a>
    <a href="/softwares/al-linux-arm_32.exe" download="activitylog-linux_arm_32.exe">Download for Linux ARM — 32 bits</a>
</div>


NB : Unfortunately, there is no available version for MacOS executable distribution at the moment.
MacOS user must have _Rust_ and _cargo_ on their machine
to install the tool, using the _cargo install_ command. I will be working on it in a future release.