---
layout: post
title: I made a server and I called him Walter
---

## Introduction and motivation
------------------------------


This month I started a course @ HackBulgaria... a NodeJS course.
Now a bit background on HackBulgaria... brace yourselves here come advertisements:

* Fairly new organisation created by @RadoRado ( Founder of HackFMI, which is another initiative that you need to atleast google before you continue reading)

* Provides free courses in the opensource mistique fields

* Practices the "reverse classroom teaching"

<!-- TODO: add HB pic -->

For those interested here's a link to the site: www.hackbulgaria.com .... end of advertising.

Now continuing... so it wasn't long after (actually on the second lecture) that I got to create something cool. "What was it?" you ask. Well a routing engine... A freakin' routing engine in Node. More on that in Wiki(add description link).

###What is "routing"
--------------------
"URL" short description in Wikipedia:

>A uniform resource locator (abbreviated URL; also known as a web address,
>particularly when used with HTTP) is a specific character string that constitutes a reference to a resource.


_The syntax of a URL_:

```scheme://domain:port/path?query_string```

* The ```scheme``` is the protocol on which the resource (webpage) will be obtained. The standard ones are ```http``` & ```https```.

* The ```domain``` is the "human-readable" text (Example: www.hackbulgaria.com) that is matched to a web IP address (Example: 173.194.34.5 or db8:0cec::99:123a), which is obviously not very user-friendly to use. The domain is case-insensitive

* Next comes the ```port```. The purpose of ports is to uniquely identify different applications or processes running on a single computer and thereby enable them to share a single physical connection. If it's not present in the URL, the default port for the computer is used.

* Finally, the part that conserns us most. The ```path``` provides a mechanism for requesting specific resources and services from a website. For example if we can request from a site our "user profile" page that has a path "/user.profile" -> "www.ourawesomesite.com/user.profile" or some news feed "/news" -> "www.ourawesomesite.com/news".

* The ```query_string``` is present if we are passing some arguments to our http request. Example: "?first_name=John&last_name=Doe"

The job of a routing engine, framework etc. is to process each made request to the server with the given parameters to it AND return correct the response.

###HTTP Methods
---------------
For each request made to the server, we have a method that indicates what we want to do with the resouce served to us (roughly speaking).
