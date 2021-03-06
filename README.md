Link to deployed password generator: https://anidino.github.io/random-password-generator/

For this assignment, I created a password generator using my knowledge of JavaScript fundamentals and a starter code that we were given to work from. When the user selects "Generate Password," they are given a prompt that asks for their preferred amount of characters. If the user selects a valid response, the generator then displays four "confirm" messages. Each message tells the user to "press OK" if they would like to include the presented option in their password. 

After much trial and error (this assignment was a learning experience), I used functions with multiple "if" statements. Instead of using "if/else" statements, I simply added an "if" for each possible false statement. This let the password generator know to not include any characters from the array that corresponds to the "confirm" messages, if the user selected "Cancel" instead of "Ok." 

After the user selects all their preferred options, a random password between 8 and 128 is generated and displayed inside of the password generator box. ![password-generator](https://user-images.githubusercontent.com/84213096/120931340-18ad5d00-c6bf-11eb-88ed-1ae5e33e3a25.jpg)

