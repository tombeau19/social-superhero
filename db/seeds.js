require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
mongoose.Promise = global.Promise

const { User, Setting, Situation } = require('./schema')

//SITUATIONS SITUATIONS SITUATIONS SCHOOL SCHOOL SCHOOL
const loseAGame = new Situation({
    title: `You Lose A Game`,
    description: 'It’s ok to be upset or frustrated. It’s not ok to make others feel bad or uncomfortable. Showing that you are upset by screaming, yelling, breaking things, or hurting others is not ok.',
    response: [`Take a deep breath and count to 5`, `Go to the winning team, and say “good game”`, `You can challenge them to another game. If they don’t want to play again, you need to respect their answer and let it go. You can play again another day.`],
    comment: ''
})

const playAGameYouDontWantToPlay = new Situation({
    title: `Your Friend Wants to Play a Game You Don’t Want to Play`,
    description: `Part of being a good friend is sometimes doing things your friend wants to do. You and your friend can take turns picking a game to play`,
    response: [`You can say, “Ok. I pick next.”`, `Even if you are not interested in the game, follow all the rules and try your hardest to play.`, `Even if you think you won’t like a game, you should still fully participate. You may be surprised when you start having fun.`],
    comment: ''
})

const dontKnowWhereToSit = new Situation({
    title: `You Don't Know Where to Sit in the Cafeteria`,
    description: `Walking into the cafeteria can be stressful. It is loud, busy, and there is a lot going on.`,
    response: [`Before making a decision, take a deep breath and count to 5`, `It’s ok to take your time picking out where you want to sit. Start by looking at the table closest to you. Look for a seat that is open. Then look at each table one by one`, `Look at the kids next to the open seat and ask yourself some questions. “Do you recognize them?” “Do you want to sit next to those kids?”`, `Once you see a seat you want to sit in, walk up to the seat. Ask one of the kids sitting near the seat “is anyone sitting here?”`, `If the seat is free, you can sit down. You can use some of your conversation starters to talk with other kids.`, `If they say someone is sitting there, its ok. They are just being a good friend.`, `You can say, “ok no problem” and then look for another open seat`],
    comment: ''
})

//HOME SITUATIONS HOME SITUATIONS HOME SITUATIONS HOME SITUATIONS HOME SITUATIONS HOME SITUATIONS
const siblingWatchingShowYouDontLike = new Situation({
    title: `Your Brother/Sister is Watching a A TV Show You Don't Like`,
    description: `Just like with friends, its important to sometimes do what your brother or sister likes to do`,
    response: [`You can say, “I pick the next show”`, `While the Show is on, you can find something else to do, or you can play on a tablet or phone.`, `Keep the volume down or use headphones so you brother/ sister can watch the TV show`],
    comment: ''
})

const guestStayingAtHouse = new Situation({
    title: `You Have Guests Staying At Your House`,
    description: `Sometimes family and family friends come to stay at your house. Changes like this can be hard. It’s ok to feel upset or nervous.`,
    response: [`Taking breaks in your room, the bathroom, or a quiet place can help you make others feel comfortable.`, `It’s important to take breaks before you get really upset.`, `On a break you can listen to music, watch a funny video, a shower, or exercise. You can pick what helps you stay calm.`, `After about 10 minutes, you should feel calm again. When you are calm, you can rejoin your family or friends.`],
    comment: ''
})

const friendOverHouse = new Situation({
    title: `You Have a Friend Over Your House`,
    description: `When friends come over, part of being a good friend is making them feel comfortable in your house`,
    response: [`You can offer them something to drink or eat, “are you hungy?”`, `You can show them some of your favorite things to do or favorite games`, `You can ask them what they want to do first. Remember, its important to take turns picking what you want to play or do.`, `When it is time for them to go, walk them to the door and say goodbye.`],
    comment: ''
})

//COMMUNITY SITUATIONS COMMUNITY SITUATIONS COMMUNITY SITUATIONS COMMUNITY SITUATIONS COMMUNITY SITUATIONS COMMUNITY SITUATIONS
const eatingAtRestaurant = new Situation({
    title: `You're Eating at a Restaurant`,
    description: `Eating in a restaurant can be a fun thing to do. Its important to remember that the other people in the restaurant want to have a fun time too.`,
    response: [`This means using an inside voice. Use a voice that the people at your table can hear, but the people at other tables can’t hear.`, `Look at the menu and pick what you want to eat.`, `When the waitress asks the table to order, wait until she looks directly at you. That means it is your turn to order.`, `If your food comes before everyone else’s food, it is polite to wait to eat until everyone’s food has arrived. If someone says you should go ahead and start eating, it is ok to start eating your food.`, `Remember to keep your mouth closed when you are chewing your food.`, `You can use your conversation starters to talk with the people at your table.`],
    comment: ''
})

const goingToAirport = new Situation({
    title: `Going to the Airport`,
    description: `Flying on an airplane can be fun if you know what to expect. Here are the things that happen when you fly on an airplane`,
    response: [`You should plan to get to the airport at least 1.5 hours before your flight leaves.`, `It’s a good idea to bring books, a tablet, or something else fun to do during the flight.`, `You get to the airport and make sure everyone has their tickets to get on the plane. Sometimes the tickets are on a phone.`, `If your parents want to check their bags, you will wait in line to give them to airport employees. If you do not check your bags, you can go to step 3.`, `You wait in the security line. There a lots of rules for going through the security line. They are usually posted on a sign when you are waiting in line. If not, you can ask the people you are traveling with what the rules are. If you are traveling alone, you can ask an employee.`, `You put your bag on the conveyer belt and put some of your items in a bin on the conveyer belt. You usually put your lap top, shoes, and coats in the bin.`, `Then you wait to walk through the body scanner. The employees will tell you what to do.`, `After you go through you can find the gate your plane is at. It is always a good idea to check the computer monitors with the “departures sign” above them for your flight. Sometimes your gate will change. Sometimes you need to ride a train to get to that gate.`, `When you get to the gate, you can wait for the plane to board. If you have time before the plane starts boarding (boarding time will be on your ticket), you can go use the bathroom or buy some water or snacks for the flight.`, `The gate employees will announce on a loudspeaker when it is time to board. Be sure to listen for this information. They will call out zones that can board. Do not try to board until the zone on your ticket is called.`, `Sometimes the employees will want to check your bag because there is not enough room. It is ok if they do this- they will tell you where you can pick up your bag after you land.`, `When you get on the plane, look for the seat that matches your ticket. You can put your bags in the overhead compartment above your seat.`],
    comment: ''
})

const lostInAStore = new Situation({
    title: `You Get Lost in the Store`,
    description: `Families have different plans for what to do. Ask you mom or dad what your plan should be. When you have a plan, it is easier to stay calm. Here are some ideas.`,
    response: [`Pick a meeting place, like the front of the store or the bathrooms.`, `Go to the customer service desk.`, `If you have a phone, call or text your mom or dad.`],
    comment: ''
})

//SETTINGS SETTINGS SETTINGS SETTINGS SETTINGS

const school = new Setting({
    location: 'School',
    situations: [loseAGame, playAGameYouDontWantToPlay, dontKnowWhereToSit]
})

const home = new Setting({
    location: 'Home',
    situations: [siblingWatchingShowYouDontLike, guestStayingAtHouse, friendOverHouse]
})

const community = new Setting({
    location: 'Community',
    situations: [eatingAtRestaurant, goingToAirport, lostInAStore]
})

//USER USER USER USER USER USER USER
const tim = new User({
    name: `Tim`,
    superHeroName: `TimmyTerrific`,
    password: `batman`,
    settings: [school, home, community],
    Score: 0
})

const sarah = new User({
    name: `Sarah`,
    superHeroName: `SuperSarah`,
    password: `wonderwoman`,
    settings: [school, home, community],
    Score: 0
})

const billy = new User({
    name: `Billy`,
    superHeroName: `BillyBoom`,
    password: `batman`,
    settings: [school, home, community],
    Score: 0
})

// Use promise to make sure it is removed and then save setting, user, etc.
User.remove({})
    .then(() => tim.save())
    .then(() => console.log(`${tim.superHeroName} saved`))
    .then(() => mongoose.connection.close())
    .catch((err) => console.log(err))

User.remove({})
    .then(() => sarah.save())
    .then(() => console.log(`${sarah.superHeroName} saved`))
    .then(() => mongoose.connection.close())
    .catch((err) => console.log(err))

User.remove({})
    .then(() => billy.save())
    .then(() => console.log(`${billy.superHeroName} saved`))
    .then(() => mongoose.connection.close())
    .catch((err) => console.log(err))

