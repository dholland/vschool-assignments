# RPG Game Architet

## Character Class

- playerName
- health = 100 + defensive items
- basePower = 10
- attackPower = base + weapon
- weapon = Arry
- items = Arry
  - weapons = Arry
  - armor = Arry
  - potions = Arry
- battleCount = number
- runCount =
- killCount
- timePlayed

## Enemy Extends Character

- Health = [1-100]
- Type = [troll, ogor, dragon, bear]
- basePower = [1 - 10]
- items =
  - weapons = Arry
  - armor = Arry
  - potions = Arry

## Inventory Items

- **Weapons**

  - fists = +5
  - Battle Ax +15
  - Sword +50
  - Bow +30 (shoot options presented along with fight or run)
  - Shovel +100
  - knife +2.5

- **Defensive**

  - Shield = +10
  - Chest Plate = +25
  - Fist Cuffs = +5

- **Regenerate Health**

  - Bandage = +10 Health
  - Health Pack = +50 Health

## Functions

**Walk**
// enemy appear if number is 1 out of 3

- get random enemy 1/3 chance
  - `return Math.floor(Math.random() * Math.floor(max))`
- Present Player with choices

**Run**

- Add to run count
- can not run if run count is above 5
- Run count goes down after winning a battle

**Check Inventory**

- List items
  Display array with number options
  Equip item = changes attackPower level
  Use Poition = adds to health & removes item from inventory

**Fight**

- generate random number and assign it to hero
- generate random number and assign it to enemy

- **Winner algo**

  - Winner deals damage based on attackPower
  - Damage is then removed from enemy or hero's health
  - Winner based on dice roll 1 - 6
  - if same number fight again without and damage lost

  if enemy health < winner = hero

- Present Player with choices after each successful fight

  - fight to the dealth
    - Fights until health of enemy or hero is at zero
  - fight once
    - Show health of each figher and options
  - fight three times
    - Show health of each figher and options

- keep fighting or run or inventory

[Change Objects](https://stackoverflow.com/questions/4689856/how-to-change-value-of-object-which-is-inside-an-array-using-javascript-or-jquer)
