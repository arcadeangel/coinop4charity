# Coin-Op 4 Charity — Dev Journal

## 

08.22.26 12:12 Site update — TERMINAL v2.9.7

Shipped a public-facing site pass focused on clarity and social proof, not feature bloat.

{What went live}
- BSP-Y02 / generic gamepad support on all terminal games (keyboard + touch still work). Arcade-stick badge on connect.
- Live placements map under ACTIVE PLACEMENTS. Pins resolve from optional lat/lng on placements.json, or from location title keywords (James Club, Southern Highlands, etc.). Auto-groups machines by site and auto-fits the map bounds.
- ACTIVE PLACEMENTS opens by default with a stats line (machine count · site count · free play for kids).
•  Trust strip: Nevada nonprofit · new and restored arcade games placed free · no cost to youth centers · kids play free.
•  Primary CTA: HOST A MACHINE — opens the contact form and preselects hosting.
•  Contact form tucked under a “Get involved” details block so the page leads with action and proof.
•  Small UPDATES panel (hardcoded fallback + optional updates.json).
•  Footer cleaned to: open source · restoration guides · field notes (links journal.md).
•  Replaced the canvas “dot map” under ACTIVE PLACEMENTS with a real Leaflet map (Carto dark / OSM tiles, no API key). Pins still resolve from lat/lng or location titles; popups list machines per site.
•  Arcade-stick menu nav: stick moves highlight on terminal games / HOST CTA; A or Start launches; B exits a game back to the menu.
•  Attract mode wakes on any stick input and lands focus on the game list (badge text notes stick / touch / key).
•  Kiosk shell: ?kiosk=1 (or arcade=1 / #kiosk) strips form & admin chrome for tablet + BSP-Y02 cabinets; same games and scores.
•  Gamepad poll loop stays alive on the menu (not only in-game). 
•  Hardened BSP-Y02 input (v2.9.7): A = fire/confirm, B = secondary only (no longer exits games), Select = back, hold Start ~0.5s = exit.
•  Stick axes use hysteresis + menu debounce so drift/turbo doesn’t spam focus or double-launch.
•  Attract still wakes on any stick edge; in-game exit is intentional (Select or hold Start), not an accident on B. Site stamp TERMINAL v2.9.7.
•  Added DIY station docs for youth centers: Tablet + Arcade Stick Station setup guide (STEM intro, power without obscure combos, kiosk boot to ?kiosk=1, daily staff routine, table card).
•  Added BSP-Y02 Web Arcade Controller guide (pairing, clean A/B/Select/Start roles, deadzones, testing checklist) in the same restoration-guide PDF format.
•  Restoration README DIY section updated to list both guides beside the vintage machine PDFs.
•  Field practice locked in: stick = charge + HOME wake after one-time HID pair; tablet = Fully Kiosk (or pinned home icon) opening coinop4charity.org/?kiosk=1 on boot.
{Why}
Partners and youth centers need to see machines on the floor and a clear next step in under ten seconds. Games stay as attract / brand; placements and hosting are the main mission.

{Next}
EIN when the filing lands. More sites on the map as placements expand (Reno / Eddy House still in motion). Optional updates.json edits for public notes without touching HTML. Still hunting local Reno help for light maintenance if the Eddy House fleet moves.

I will be creating a user friendly file under restoration/docs with a template on how to easily implement low cost $9-$17 dollar joysticks with your own builds so you can turn your mobile game into an arcade game.

Thank you to everyone moving cabinets, taking the calls, and treating free play for kids like it matters — because it does.

08.21.26 13:47 More placements live + more meetings + more fleet additions. Expanding to Reno. Special thanks.

It's been a busy couple of days we have added 6 new games to the fleet, visited with numerous Boys and Girls Clubs locations
in Southern Nevada and are now speaking with the Eddy House in Reno, a very well known organization with some wonderful history and work in the community. They provide a safe space for young people in need. 
One of the best things about this journey has been the new friendships with different youth organizers and social engineers. Like I mentioned before their focus, time commitment and just overall dedication to the communities they serve is unparalleled.
We are hoping to work with similar organizations, until every youth center is full of arcade games. We will be traveling to Reno with a fleet of arcade games for the Eddy House that they will be selecting from our inventory. 
Pretty exciting, in the interim I will be searching for volunteers with some technical experience to assist us with maintenance on-site who live locally in Reno; though I am committed to doing it myself if needed. The kind of maintenance needed with the newer games is dismal maybe a joystick or button swap  that costs a few bucks. We got this.
Thank you John, Jerry for your service to our country and helping out with getting some of your games out there to our community for next to nothing. You guys are awesome on so many levels. Jerry helped move a cabinet he took a loss on for the kids this week and John was telling me today he wanted to tag along on the next road trip and help out, he didn't even realize this was a charity until today and he's already very active in the community. Both builders and nice guys one works on arcade games for fun the other builds crazy mechanical stuff and cool 3d models and seems like a very technical guy. Jerry has been offering some good strategic advice as well regarding placement. Thank you Franklin from Franklin Moving Help for helping out for also next to nothing and driving almost 600 miles with his own truck a total of 12 hours in one single day just to pick up a Fast N Furious Superbike (that thing is a beast) and Spin-N-Win that didn't fit in the 29 foot truck on the initial load. That's nothing compared to how much work this man has put in for us. He is like our very own Santa Clause except year round he is racing to pick up and drop off arcade games often several days a week. Franklin is such a wonderful person he has literally brought more than half of (if not more) than our entire fleet around with a sprained knee (he is doing much better now) but there is no stopping him he has some intense level of energy when he locks in on something-- always pushing for us and also even going as far as calling out people like this one guy who was a bad actor and told us he could volunteer to help fix jukeboxes (we're busy fixing arcade and could use all the help we can get... just glance at the fleet's project queue). Anyways this joker lied to us then tried to take the jukeboxes (a pair of Wurlitzer 1100s) hostage for himself and refused to give them back. Raising his voice and acting belligerently when told he couldn't have them. He didn't want to give them up until Franklin showed up he was the one who got the jukeboxes back. Franklin was not having it, I wanted to give up at one point and he was like "no way is this really happening right now, this is not fair, enough is enough". Pulled up with his truck and immediately talked the guy down very calmly. He isn't just helping move things he's making moves for us. He steps up when no one else does on the behind the scenes stuff that people constantly bail out on doing and he is like our unsung hero and Batman saving the day a solid handful of times every week. The voice of reason as well. He is a loyal friend, an honest hardworking individual who I see truly believes in the cause and says things like "next time I'm here I want to see this one is out of storage and in a youth center" and he pushes us to do better. He sees the world and thinks about how he can contribute to it. I know he really believes in the big picture today we had just finished hooking up a bunch of games in a youth center and he went to his truck. I was wondering where did this guy disappear to until I saw him sitting inside the truck saw him tearing up a  bit right after we finished a drop off. It was the first time he saw the fruit of his labor with the project and result of several months of nonstop grind. I pretended I didn't notice but I'm glad I shared a good moment like that with him, since aside from that brief wholesome moment its been a wild ride, coin op is total war. He was in a deep thought when I finally approached him and he was just like "this was cool, you ready to go to our storage now?". Great reliable person and always there when you need him, structured and efficient when helping out. He treats people very kindly, respectfully even like that guy who was trying to work us over, Franklin is just so nice that you can't possibly win an argument with him and being a family man and father himself he is always looking out for people and someone who I have a lot of respect for and look up to, and noticed that he is always helping others. Even when mediating problems with irrational people, treats everyone respectfully and calmly holds fairness as a top virtue all around him. He epitomizes the ethos of an entire organization like this one. It's built on the mentality of guys like Franklin who show up when nobody else will. He is a great guy and his employees all love him and stick around, which says a lot, they're loyal to one another and I only see them laughing and having fun all day long when they are together forming a Voltron. Together you would think they're a family or cousins or something, because they seem so happy to be together and don't give you co-worker vibes because of the environment and work culture he leads over there. Rare thing to see these days.  Franklin is a rare one he has employees and a great company, a family and kids he's raising-- but somehow he still makes time for his buddy's passion project and now our real world partners who are operating big and impactful initiatives in the community. And I know he has taken a loss, a great many times for this, I mean I have seen him missing out on high paying jobs, spending money on gas and more in the past more than anyone else behind the scenes... all to help with something he believes in and because he's a genuinely great guy. Also worth noting he has never even scratched a surface on anything he is very careful and diligent each time; you would think he's moving the Mona Lisa not a Ms. Pacman cabinet. Ultra patient, OCD level of detail oriented and the most careful person when he is on the grind even unloading an entire 30 foot truck its all in the details. I have found myself saying  to him a few times now "relax, this one is already broken we can chill". 
Thanks to all the organizers from the Boys and Girls Clubs in Southern Nevada Lisa and AC at the James Club, Gabriella and her entire staff at Southern Highlands, and Danielle from the Children's Cabinet for basically saying something along the lines of "I'm not sure if my office would be the best place for these games as much as I love them
and they give me nostalgia, lets get them infront of the kids who will make some new memories with them instead like the Boys and Girls Club" and thats exactly what she proceeded to do by making all these connections and going to bat for us connecting us to different amazing youth organizations and their staff. She was so awesome throughout this entire process and deserves a big thank you.
Thanks to Juletta for taking the time to show me around NPHY and showing me all the resources you are offering the youth and Neosha at YAP for your kindness, work in our community, and encouragement. I look forward to meeting with you again and hope to work with both of your organizations.
Thank you to the best father and son team I have ever met in the coin-op scene Sharp Image Repair for all their time and help with a number of CRT challenges that we were about to give up on. Enrique and Elvis are celebrities in the arcade and coin-op world, expert CRT technicians keeping alive classic American traditions. A number of people have asked me if I know them and suggested to reach out to them, far and wide, even in different states I've had people mention them. The other month we were picking up some stuff in California, a CRT screen was out and the guy at the warehouse was like you better call Enrique and Elvis at Sharp Image Repair and I was like "already do!", they've helped perfect a 1981 Sega Turbo make it look good as new, fixed a 2005 Golden Tee and helped out with all sorts of other CRT games and even other things to help ease our project queue and get more machines around in youth centers faster. They have been very supportive and committed to our cause and both of them are incredibly passionate about retro arcade games. You can sense their excitement and love for the games and history. They've seen it all.
Speaking of family, on a personal note, a big long overdue thank you to my uncle, who hosted my first website a very long time ago. He has been encouraging and supportive of some wild, crazy and never done before projects for a very long time. He loves new projects and ideas. He's both compassionate, and the ultimate protector, all at the same time. I remember being an 11 year old kid and accidentally uploading music videos to this fan site I conjured up for fun and I went way over the monthly upload limit;  left him with a hefty bill of a few hundred dollars by accident. This was back in like the early 2000's, it was like thousands in todays money. He was not very happy about it, but still covered it for me back in the day, and he did not pull the site on me, he did not make it awkward. He was just a super cool guy even though I could tell he was hiding the fact that he was very annoyed by the stupidity of the entire thing (he'd never admit it because he's way too nice and loving). Around the same time, I was getting bombarded with take down notices and all sorts of stuff ontop of this stupidity, and he never held it over my head or made things weird, but he did correct me here and there and teach me a lot of things during the journey. He just sat me down and offered some straightforward logic on why we do things the way we do them and respect copyright laws. Made a lot of sense, pretty chill dude. Having multiple people like that around as a kid, who were all special in their own ways, and loving. You never forget their love and you really feel the need to pay it forward. Thank you for sticking with me through the ups and downs. You didn't have to do all of that, and I haven't forgotten about it. We all need fearless friends and family to idolize, those who encourage us to keep pushing, do good and dream big.

Heading to Reno will try to set up a few more meetings while in town. If you know any organizers helping create safe spaces for kids who could use some extra arcade games refer them
to the contact form or give them my direct line.

08.19.26 21:21 First placements live + terminal updates

{Terminal / site updates}

• Added ACTIVE PLACEMENTS panel under the fleet list so the public can see machines that are already out in the community (name + location only).
• New placements.json data file — same simple format as fleet.json, easy to keep current.
• Attract mode (static loading sequence) now waits until the home-page typewriter finishes before it can start. Feels cleaner on first load.
• Version and supporting code updated accordingly.

{New placements / new friends}

Still early days, but the first machines are already in youth spaces, with more to be placed soon.
Barely three weeks since we launched and we already have several of our first machine placements out in the field this week. That still feels a little unreal. The whole point of this project was never just collecting and restoring cabinets — it was getting them in the hands of the kids and their advocates who I have witnessed striving and trying to always do more and more to make those spaces  feel like something special. We’re already working with some of the best youth organizers and centers in the state of Nevada, and the early response has been better than I initially expected.
In the past week I have traveled around Nevada and met with so many people that exhibit an unparalleled commitment to the families, young people and communities they serve.
I've seen these passionate and dedicated individuals working late nights, early mornings, 7 days a week; all because they share one common idea that is their vested interest in the success, safety and well-being of our future. The amount of passion and dedication I have seen in these organizers cannot be measured and is (exponentially) far beyond any of the time it takes fixing arcade cabinets. The level of focus and dedication I have seen out of the youth organizers in our community is totally unparalleled, they waste no time in taking action when it counts. Speaking with them and seeing the programs and resources they offer kids in our community was actually a super refreshing thing to see and experience firsthand. 
We will be drafting another journal entry later this week to properly thank everyone, including people who just simply refused to give up on us (despite my silly nagging at times and eccentric rants about fighting games upping cortisol levels) and for sticking with us through it all regardless of anything other than the mission; pushing for us, making the introductions to some really amazing local youth center organizers, and just being superstars at what they do, amazing individuals who must barely get any rest I see you out there 7 days a week and no burn out; continuing to make amazings things happen. It definitely doesn't go unnoticed you guys are the real life superheros who just grind no credit behind the scenes. I know you guys sacrifice a lot to follow your hearts and mold the world into the way you see it working best. 
A lot of people talk, but few people go out there and use their time and energy to make a difference. Much love to all you optimists, idealists, the overthinkers, the sensitive/sensible, and all you dream makers who are the real pulse of this city; actively working without the recognition. I was missing more people like you in my life I forgot how great of friends you make when serving your community. The world needs way more of you magnificent and courageous souls. 

A lot of the doors that opened this week trace back to a handful of individuals that just went all out as usual with their hearts and never stopped pushing for the communities they proudly serve! Will be issuing a proper thank you later this week to everyone out there who made it possible. Today after dropping off some arcade games at youth centers, "Unforgettable" came on in the car during the ride home, the original Nat King Cole version. Right as I was mulling over the past few weeks, thinking of how you guys putting it together. Had to crank the volume a few decibels. All of the new people I met and spoke to over the past couple weeks have been the most selfless and amazing people. You can't even beat some of them to holding a door open first lol its like physically impossible and I have tried pretty hard. 
Good to know there are courteous and classy individuals out there looking out for our youth. I see you striving to make these youth enrichment programs and experiences exactly that... unforgettable, in every way. I think the whole thesis that these things belong amongst the kids, and their youth centers for free play, instead of a dark storage unit or some winning bidder's house or movie theater lobby, makes plenty of sense especially after seeing it in action. Being there brought back some good memories. I am excited to hear the updates from the sites.


08.16.26 21:12 First CoinOp4Charity Terminal Games Prototype.

It's alive! The CoinOp4Charity terminal is now available on a physical arcade cabinet for our youth center partners.
Purely accidental, Frankensteined the thing tonight in the shop to display and run the coinop4charity terminal games.
I was working on the Hanaho Multicade (the ArcadePC). The screen is fine but its like a 2001 PC running on Windows 98 that was in dire need of upgrading.
Would've had some angry kids had it not been. When installing a raspberry pi and contemplating Hanaho's liscensing terms I spontaneously figured it would just be less of a headache mirroring the CoinOp4Charity game terminal for now.
Later on we can let the new owners decide if they want to run a old Hanaho drive on it. Kept the PC incase they do so we can copy it to the Pi to reboot directly to the games, but I think its nice with our own terminal games, too. I personally like it and think there is potential.
My vision for terminal games here has always been a collective effort and a democracy of community code. I hope that we are building more terminal games with some of the youth communities we serve by offering free STEM workshops and making terminal a team/community effort. Wouldn't that be nice?
We can do it.

08.16.26 12:36 v2.7 New game ---> v2.8 Overhaul bugs. Dedication high score update with my personal dedication

{New Game, Updates}
v2.7 Neon Kaiju felt stiff and unfinished: long intro, weak movement, sparse world, clunky riding/combat, short timer.
**Changes**
- Intro cut hard (skip after ~10 frames, max ~90). Site CRT boot also shortened.
- Real jump (↑ grounded), climb improvements, hard-landing **stomp** damage + shake.
- Wider punches, easier dragon/heli mounting, more aggressive flyers.
- Denser keeps, more ground units that panic and flee, extra dragons/helis at start.
- Timer raised to 150s so a full run is realistic.
- Control hints + version string updated to **TERMINAL v2.9**.
**Result**  
Kaiju is now jump-stomp-ride-smash instead of a slow walk-and-tap. Ready for playtesting.

{Google Verification}
Set up Google nonprofit page and uploaded sitemap.xml to Google to ensure visibility.
Ran other integral SEO optimization backend services to ensure visibility. 

{High Score Improvements}
Added Kaiju to worker log with high scores, created dedication feature for high scorers. 
You can now run a note with your high score, ran the first dedication who introduced me to video games with my 
earliest memories being Asteroids, Galaga, and all the others which I remember playing for the first time with him thoroughly.
As the years went on he stuck around for the improvements up until recently when he passed away. He would always be in awe over graphic development. We both would be.
Even Nintendo 64 was unbelievable compared to old terminal games like Asteroids. It was very nice having him around and I am grateful that he was fun and onboarded me to the experience.
From Asteroids at home, to the Nintendo upgrades, the visits to Airport video and the local arcades. He is missed dearly and is a great part of the inspiration for this project. If I can make
even a couple kids happy the way my father made these memories for me its worth every minute of my time and every penny. My parents worked their asses off and sacrificed everything for their children.
Anyways the first high score dedication feature after locking it I dedicated in the loving memory of my father. Without him, my mother, my uncles and other loving family members I don't think I would've
learned half if not any of the things that make this organization possible. 

08.15.26 17:38
Hey what's up? Hello Terminal v2.7 + weekly fleet acquisitions

{Website / terminal updates}
Shipped Index.html as TERMINAL v2.7.
•  Happy Fishing is no longer endless — 90-second timed sessions so high-score name entry works correctly (no more score spam without a proper end).
•  Vortex Starship rebuilt for optics (denser tunnel, stronger ship silhouette, thruster, bloom).
•  Circuit Runner: denser rain, brighter neon windows/edges, stronger player glow.
•  Boot/load screen now draws COIN-OP FOR CHARITY in legible ASCII art (mobile + desktop variants).
•  Light Cycles trail and Saucer Beam glow tightened; version stamp in boot text and footer.
Global hi-score system and fleet panel left intact. Site is demo-ready for state / local org visibility.

{Fleet / acquisitions}
Picked up a Hanaho ArcadePC multicade (needs work), large 26 inch working Galaga countercade running on Dell PC and Super Pacman countercade.
Weekly acquisition total now sits at 9 machines.

08.15.26 17:28
Childhood experiences and why the spaces matter
Doubling down on a simple point: kids need to feel like kids.
If more kids got real chances to just be kids, and enjoyed their time growing up, fewer would rush to copy the worst “adult” patterns around them.
We all remember riding bikes with friends. Every kid deserves that kind of ordinary freedom. The same idea applies to supervised recreational spaces: arcades, game rooms, places that feel special the way you may remember leaving the skating rink, or bowling alley. When unhoused and highly stressed youth only get barren rooms, society is shortchanging them. As long as those centers don’t feel closer to somewhere a kid actually wants to be, our mission still has a lot of work to do.
Classic skill-based games and supervised group play give short cycles of challenge, focus, recovery, and improvement. That is different from pure shutdown or endless scroll. It will not replace the adults who show up every day — those people are the ones who make the spaces work — but the tools should support them, not leave the rooms looking like an afterthought.
We live in a different world than the one many of us grew up in. That does not mean the useful parts of childhood have to be written off. The adults can still build the rooms, the machines, and the time where kids get to practice being kids.

08.14.26 00:33
Built out the public restoration library and shipped a site update (v2.6).

{Restoration documentation}
Created and finalized a full set of public-facing restoration / service guides for the docs/restoration/ folder:
•  Sega Arcade Light Gun (no PCB)
•  Golden Tee 2005 (green hue + complete restoration)
•  Sega Jet Rocket (1970)
•  Pac-Man (1980)
•  Space Invaders (1978)
•  Sega Turbo (1981)
•  Donkey Kong (1981)
•  S.T.U.N. Runner (1989)
•  CGC Ultimate Arcade 2 Multicade
•  Deer Hunting USA (Sammy)
•  Primal Rage (1994)
•  Stacker Prize Redemption
•  Cyclone Ticket Redemption (includes step-by-step free-play conversion)
All guides follow the same clean format for youth-center / nonprofit use: safety, cabinet, controls, power, monitor notes, testing checklist, and host-site notes.
Updated docs/restoration/README.md with a full table of every guide currently in the folder.

{Website updates} (Index.html → v2.6)
•  Version string bumped from v2.5 → v2.6
•  Added restoration guides link under the open-source line (points to GitHub docs/restoration/)
•  Form interest option changed from “Donating a machine” → “Giving away a machine”
•  Added short mission support line: machines restored · placed free · kids play
•  High-score system now prompts for initials (max 6 characters) only when a global high score is beaten
•  Added youth-safe name filter (blocklist for profanity, slurs, and words like “poop”) — blocked or blank names fall back to ANON
•  Fleet list left unchanged (name + status only: ready / in progress)
All changes tested and verified before handoff.
Restoration library is now public-ready and linked from the homepage. High-score names are cleaner and safer for a youth-facing site. Site version is current at v2.6.

08.13.26 22:33
Application approved: active nonprofit

En route from picking up a large sized Pacman countercade and Ms. Pacman 1Up (added to fleet this afternoon), just noticed active nonprofit status on SilverFlume.
Excited to make this announcement and look forward to helping youth leaders and organizers on the front lines build many arcades in the years to come! 
Thanks to everyone who is getting the word out on our organization! 
Special thanks to all of the people who have been helping out and also volunteering their time.

08.13.26 12:17
Global high scores finally registering

Validated global high-score system and KV backend. GET/POST working correctly — only higher scores update, name + timestamp persist, durable across edge. 
Confirmed live board updates immediately and consistently.
Meeting with Sharp Image for Sega Turbo CRT cleanup and TLC (tube clean, focus/geometry, presentation-ready service). Sega Turbo is now ready with the exception of a vinyl decal replacement.
Available fleet front-end updates.

08.13.26 11:37
Scores backend back online

Worker code was returning 1101 (dead).
Replaced with minimal CORS-enabled handler. GET/POST /scores now 200.
Already pointed at the same URL — no index change required for basic operation.

In-memory store works for live testing but does not persist across isolates.
Next steps: binding free KV namespace so high scores survive cold starts and redeploys.

08.12.26 22:33
Top scores on server, no longer terminal local

Using GitHub's API terminal games high scores are now hosted on the server and no longer local meaning your grind and bragging rights are there to stay. Took a couple tries and days.
Picked up a cool Multicade earlier with volunteer. Designed by Chicago Games, lots of good games on it, super clean. Screen needed to be centered and needed a new power cord fixed and ready now in the warehouse storage space.

08.12.26 14:56
Not just a bad speaker (Final Fight).

Received joystick replacement part today along with two spare speaker parts I landed for 9.95 each on eBay with free shipping.
These were arcade1up speakers that came from the exact same game and manufacturer. I tested the last speaker with a multimeter and the reading was all over
the place so I was convinced that was the issue but it appears as if the volume control itself is actually damaged. The speaker itself needed to be replaced anyway 
and did not make any pop or sound when placed against a battery. Some real arcade tech OGs even prefer fixing
older machines to these 1Ups because they feel like the classics are easier to fix. Still no sound, looking for low cost volume control replacement next. 


08.12.26 00:53 
Are Fighting Games Entirely Bad?

 First journal entry, how do we break the ice? What better way than posting an unpopular and (mostly) unsaid opinion: 
Frogger, Cruisin USA, Pacman and other runner games offer temporary 
distractions and escapisms that may not be sufficient when presented alone 
in a youth center arcade, and when lacking other options, may create a sinkhole psychological effect by itself. 
An E rated, all ages, game where you are being chased nonstop is as stress inducing for one mind as its fun or nostalgic for another, and it may not have the same
physiological effects like a one size fits all hat on a young developing mind. There are high IQ parents with the best of intentions who load their kids gameroom full of just this genre of game.

While many of our parents (understandably) raised us with a bias and often disdain for our fighting games...
there are studies that show some interesting data with potential benefits and other possible upsides that they may have not been taking into consideration before.

There is this argument that skill-based, high-engagement games like Marvel vs Capcom or the classic Street Fighter (and similar fighting/action titles) 
offer something different: agency, resilience practice, emotional regulation under pressure, and a long lasting social connection thats highly memorable.

There is an unpopular but (personally relatable) idea that fighting/action games create controlled stress + recovery cycles, that are beneficial to developing minds. 
Studies show that players also experience arousal (heart rate, focus) but often show physiological recovery markers (higher heart-rate variability, lower cortisol) afterward, plus higher positive emotion.

Trauma-informed game-based social-emotional learning programs that emphasize regulation, coping, and perseverance show gains in emotional control and resilience among youth exposed to adversity. 

Games that require reading opponents, executing timing, and improving through deliberate practice restore a sense of competence and personal responsibility for outcomes. 

Strategy and skill-based games (as opposed to pure chance) align with better developmental patterns. Circuit Runner from our own game terminal is a good example of a runner game with some strategy elements (for example: avoiding the green "boosts" to maintain low speed and control over the Circuit Runner)
but the optics/theatrics and feel good vibe on that is nowhere near as memorable or adrenaline pumping as going from a combo special move to seeing Sub Zero turn your opponent into an ice sculpture. Everyone deserves that level of fun, and it really shouldn't be just if you have the money to spend on the machine or can afford to privately purchase it.
I think if less kids had to choose between lunch money and a round of Mortal Kombat the world would be a much easier place. As the years pass it seems more like a great majority of those machines are on private residences, accessible only to a handful of the same people.

That's a shame when you think about local, in person/face-to-face multiplayer fighting games and your own experiences. They force real life face-to-face interaction, turn-taking, trash-talk that stays in the game, and shared wins/losses. This is very different from the increasingly statistically growing isolated mobile/console play. 
Supervised recreational spaces can help assist us with preserving this tradition while keeping youth engaged and off the street.  Studies associate areas that have these sort of youth centers engaging the community with lower juvenile offending and I believe arcade resources will only help complement their efforts. 
Structured group activities that build competence and social connection are key ingredients in successful programs for  youth.

Casual/“shut off” or "running" games excel at short-term mood repair and distraction (which is useful in medical settings or acute stress). For chronic adversity, repeated pure escapism is less adaptive. 
Reviews of commercial games for youth mental health find benefits across genres, but the deeper developmental gains (regulation, resilience, social skills) come more reliably from games that demand attention control, challenge, and recovery from failure. 

Homeless and highly stressed youth need more than temporary shutdown; they need practice recovering from setbacks and experiencing competence. Classic fighting games create safe, repeatable cycles of pressure → focus → recovery → improvement.

Research links structured, skill-based play and supervised recreation to better emotional regulation, resilience, and reduced problem behavior pathways. Additionally local arcade multiplayer adds social connection and adult supervision that pure solitary mobile/console play lacks.

Pac-Man-style games are fine as occasional breaks; they should not be the primary offering if the goal is growth rather than temporary escape. That being said obviously not every youth will prefer or benefit from fighting games — and these games are a tool, not therapy in and of itself.

These are tools to help the real individuals nurture more real authentic relationships and offer better support to those who are seeking assistance. Without the supervision and care from those individuals who show up everyday on the front lines to help others, you can't expect the same natural bloom. 

The people who administer these locations and youth centers, are ultimately the ones who bring people together, and make the magic happen. Not only that, but they do it every day with love. These locations are truly like flowers the more you water and nurture them the longer the fruit will stay in bloom.

We see you and all your time involved and efforts, both the people who attend these centers and those who administer them and try to make them special. 

We want to help your movement whether its planting a new seed or supplying the water; just to be there and offer the difference makers more tools.

We love you all.