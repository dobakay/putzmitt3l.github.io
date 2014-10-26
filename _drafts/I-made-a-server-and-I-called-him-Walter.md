---
layout: post
title: I made a server and I called him Walter
---

## Introduction and motivation
------------------------------


This month I started a course @ HackBulgaria... a NodeJS course.
A bit background on HackBulgaria... brace yourselves here come advertisements:

* Fairly new organisation created by @RadoRado ( Founder of HackFMI, which is another initiative that you need to atleast google before you continue reading)

* Provides free courses in the opensource mistique fields

* Practices the "reverse classroom teaching"

<!-- TODO: add HB pic -->

For those interested here's a link to the site: www.hackbulgaria.com .... end of advertising.

Now continuing... so it wasn't long after (actually on the second lecture) that I got to create something cool. "What was it?" you ask. Well a routing engine... A freakin' routing engine in Node. More on that in Wiki(add description link). But what posest me to call it Walter? Well simple train of thought:
Routing engines cary-out ___"requests"___ for certain page Urls and ___"serve"___ them in an orderly fashion to each ___"client"___. Who does that in real life.
Well ... waiters. But my waiter shouldn't be so generic, after all I care for the things I create so I thought of giving it a name. But there's already a utility
out there called "Jenkins".<!-- (TODO: add link to jenkins) --> So that's taken. Well why not Walter, your "average Joe waiter". Yes... that's him. Spot on name for
a waiter. Meet Walter!

<!-- TODO: add walter pic -->

Moving on from this jibber-jabber to the good stuff. That is, theory and implementation

###What is "routing"
--------------------
"URL" short description in Wikipedia:

>A uniform resource locator (abbreviated URL; also known as a web address,
>particularly when used with HTTP) is a specific character string that constitutes a reference to a resource.


_The syntax of a URL_:

```scheme://domain:port/path?query_string```

* The ```scheme``` is the protocol on which the resource (webpage) will be obtained. The standard ones are ```http``` & ```https```.

* The ```domain``` is the "human-readable" text (Example: www.hackbulgaria.com) that is matched to a web IP address (Example: 173.194.34.5 or db8:0cec::99:123a), which is obviously not very easy to remember. The domain is ___case-insensitive___.

* Next comes the ```port```. The purpose of ports is to uniquely identify different applications or processes running on a single computer and thereby enable them to share a single physical connection. If it's not present in the URL, the default port for the computer is used.

* Finally, the part that conserns us most. The ```path``` provides a mechanism for requesting specific resources and services from a website. For example if we can request from a site our "user profile" page with a path "/user.profile" we get "www.ourawesomesite.com/user.profile" or some news feed( "/news" ) - we get "www.ourawesomesite.com/news".

* The ```query_string``` is present if we are passing some arguments to our http request. Example: "?first_name=John&last_name=Doe"

The job of a routing engine, framework etc. is to process each made request to the server with the given parameters to it AND return correct the response.
It doesn't consern itself with how the passed data is handled and what kind of response is generated. That's the job of other BackEnd modules.

###HTTP Methods
---------------
For each request made to the server, we have a method that indicates what we want to do with the resouce served to us (roughly speaking).
