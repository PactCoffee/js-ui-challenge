![puta](https://github.com/PactCoffee/js-ui-challenge/raw/master/puta.png)

Pact's front end challenge
==========================

The general idea
----------------

We have a sign up flow affectionately known as "The Funnel". It's primary use is to sign up customers to our service. They enter their information, it gets sent to the server. **The challenge is to build a very simple version of [our current funnel](http://pactcoffee.com/funnel/intro)**. Sounds easy enough, right?


But wait! There's more...
-------------------------

1. The funnel is separated into "stages". Each stage collects certain information from the user. For this challenge, those stages are:
  - Name & email address
  - Brew type selection
  - Delivery address
  - Confirmation of everything

1. The stages fill the viewport, and are laid out in a vertical-scrolling list

1. Data from each stage should be saved incrementally. If a user leaves the funnel and comes back, their data should still be there

1. We may want to do multivariate testing of the funnel in future. As such, the architecture of the funnel needs to be flexible enough to allow for the following:

  - The order of the stages being changed
  - Stages being added or removed
  - The flow between stages being changed (e.g. horizontal scroll instead of vertical)
  - Fields and controls being added or removed to stages

1. There's no need to do any async requests (unless you _really_ want to), just an indication of where you might do them is enough

1. At the end of the funnel, the data sent to the (pretend) API should follow this structure:
```js
{
  first_name: <string>,
  email: <string>,
  brew_type: <enum: 'cafetiere'|'aeropress'|'drip'|'stovetop'|'espresso'>,
  address: {
    full_name: <string>,
    company: <string>,
    address_line_1: <string>,
    address_line_2: <string>,
    city: <string>,
    postcode: <string>,
  }
}
```

Static designs
--------------

Here's some static designs to get you started:

![First](https://github.com/PactCoffee/js-ui-challenge/raw/master/1.png)
![Second](https://github.com/PactCoffee/js-ui-challenge/raw/master/2.png)

Technology
----------

We're using react and redux on our new (unreleased) funnel (along with babel, webpack etc.) — but feel free to use whatever stack you deem appropriate.


Notes
-----

Feel free to make use of our style guide & component library, [loggins](https://github.com/PactCoffee/loggins).

The purpose of this test is for us to get a look into how you approach the problem and what your process is to solve it. Be prepared to talk through your work. We also expect your commit history to give us an idea of how you approached the problem.

(This readme is sparse on information on purpose 💃)

**NB** This is not "spec work"; it's simply a test for us to understand your skills and process.
