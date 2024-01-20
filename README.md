# TFT Tooltips Twitch Extension

This document is just a quick summary about how the extension works, and also a bit about its design and architecture. I’m gonna try to cover most of the extension but this is a work in progress, so if anything gets left out, feel free to reach out and I can help answer any questions.

So what even is a Twitch extension? [From the Twitch docs:](https://dev.twitch.tv/docs/extensions/) a Twitch extension is a webpage that sits in a specially sandboxed iframe inside Twitch.

Basically my extension is just an invisible webpage that acts as an overlay on top of the Twitch video player. It’s able to detect your mouse movements just like a normal webpage can, and depending on where you hover or click, it uses the streamer’s gamestate data to decide if it should display a tooltip for the traits, shop, or a unit.

## Architecture Overview

The extension is a vanilla React application written in Typescript, with CSS Modules for styling.

-   I chose React because the “Get started” example from Twitch was in React and I have some familiarity with React from previous projects.
    
-   It is written in Typescript to help with error catching and intellisense
    
-   I used CSS Modules over something like styled components or Tailwind because I used it recently in my Capstone project and wanted to try it out again. Though now that the project is done, I think styled components might’ve been better, but I don’t think it really matters too much.
    

As you can tell, the tech choices for the project were mainly based on personal preference. I just used technologies I used before since I wanted to create a working demo as soon as possible.

----------

The majority of the logic for the extension is found in the App component. The Twitch helper callbacks, state for the gamestate data, what trait to display, what shop unit to display, what unit to display, etc, all of that is found in App. App receives the gamestate data from the companion app and depending on the user input (hover, click), it will dictate which infobox gets displayed.

All the various infobox components (Trait, Shop, Unit, Ability, Stat) are all children of App, and they take as props the relevant info to display (TraitInfoBox takes a TraitInfo, Unit takes a UnitInfo, etc).

Here is a list of how the data flows depending on the user's actions

1.  Hovering a trait on the left will pass the box index that was hovered to App, which will use this to index into the traits gamestate data, and create a new traitToDisplay and pass that to TraitInfoBox to get rendered.
    
2.  Hovering a shop unit will pass the box index back to App, which will use this to index into the shop units gamestate data, and create a new shopUnitToDisplay based on that trait, and pass that to ShopUnitInfoBox to get rendered.
    
3.  Clicking on the screen will iterate through the units in the gamestate data, and check if the click coordinates were inside any of those units' bounding box. If it is, then it will set the unitToDisplay, abilityToDisplay, and statsToDisplay, and then pass unitToDisplay to UnitInfoBox to get rendered.
    
4.  When UnitInfoBox is open and the ability icon gets hovered, render AbilityInfoBox with abilityToDisplay
5.  When UnitInfoBox is open and a stat gets hovered, render StatInfoBox with statsToDisplay
    

Looking back, it might’ve been better o use React Context so that I wouldn’t have all this state concentrated in the App component, but when I started the project, I didn’t think the extension would end up having this much state, so I thought it was acceptable to just have everything in App. That said, the child components don’t pass data between each other, so the one-level data passing works fine for now. 

## Detecting trait and shop hovers

So I mentioned before that streamers must be playing in 1920x1080 resolution for this extension to work, and the reason for that is because the trait and shop hover areas would not be the right size if they used a different resolution, since I only did measurements for a 1920x1080 TFT game.

That’s because [this is what the extension looks like if I made the trait and shop areas visible](https://i.imgur.com/5XuEygP.png).  Since the traits list and shop on the TFT HUD are always in the same spots, I can make a responsive area that is the roughly the same size (proportional to the 1920x1080 resolution) as the traits and shop in the TFT HUD. On hover, these areas send back the index that was hovered, which are used to index into the traits and shop arrays received from the Twitch Pubsub.

## Detecting whether a mouse click was on a unit

How does the extension know whether a unit on the screen was clicked? So in the gamestate data sent from the companion app, every unit has a bounding box, [like so](https://i.imgur.com/P0cZCSi.png) . When a viewer clicks on a unit, the extension checks if the mouse is inside any of the bounding boxes. The bounding box coordinates only describe the box on a 1920x1080 screen so to check if a mouse click was inside the box, the extensionf first converts the mouse coordinates from whatever screen size it originally was to a 1920x1080 screen coordinate, and then it compares with the boxes.

## Live gamestate data and “static” data

The extension can tell what traits, shop units, and units are on the screen because the streamer is sending their gamestate data to the extension using Twitch Pubsub. The extension uses the Twitch helper library’s “listen” function to subscribe to the “broadcast” topic, which is where the gamestate data is being sent.

When the listen callback fires, the extension first has to uncompress the gamestate data string into it’s minified representation, and then unminify it. The minifying and compressing was needed to stay under the 5KB payload limit set by Twitch Pubsub. [Here is an example of the minified and expanded gamestate on pastebin](https://pastebin.com/N5P5viv3).

The gamestate data is mostly “live” data that the extension needs to work. “Live” data means data you can only get from the streamer’s current game, so things like a unit’s current health, the current traits on screen, units in shop, etc.

On the other hand, there is “static” data, which is data that is always known. So stuff like unit ability text, and trait descriptions and interval effects. These things aren’t included in the gamestate data because they don’t depend on a live game and are already known before the game starts, so the data for traits and abilities is just hosted on [a Github repo](https://github.com/conradftw/TFT_Data) . I didn’t bundle it with the twitch extension because this data can change from patch to patch, and from what I’ve read, updating twitch extensions can take a while since they require another review, so I put the data on Github and just fetch it on load.

Also, this “static” data (as well as the assets used in the project like ability icons, champion icons, etc) is taken from the [CommunityDragon project ](https://communitydragon.org/). This is an amazing resource, if you are creating a project for League or TFT, this is the goto for assets and static data. The devs behind the project are also super helpful and responsive on discord, if you're ever stuck with something (try searching first tho).

## Natural Stream Delay

So even if a streamer does not have delay enabled, there still exists a normal amount of stream delay since the streamer still has to send their video to Twitch for processing before Twitch sends that video to viewers. Thankfully, inside the Helper library provided by Twitch, there is an onContext callback, which I can use to determine the amount of natural delay (called the hlsLatencyBroadcaster). Using this delay value and setTimeout, I delay updating my gamestate state by the delay amount, which roughly syncs up the gamestate with the stream footage.

## Links and References
