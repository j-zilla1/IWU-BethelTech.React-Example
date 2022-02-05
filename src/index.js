import React from 'react';
import ReactDOM from 'react-dom';



const black = React.createElement('li', {}, 'Black'
);
const white = React.createElement('li', {}, 'white'
);
const pink =  React.createElement('li',{}, 'Pink'
);

const steveLacy = React.createElement('li', {}, 'Steve Lacy'
);
const marionHill = React.createElement('li', {},'Marion Hill'
);
const LinManuelMiranda = React.createElement('li', {}, 'Lin Manuel-Miranda'
);
const sushi = React.createElement('li', {}, 'Sushi'
);
const bbq = React.createElement('li', {}, 'Barbeque'
);
const coffee = React.createElement('li', {}, 'Coffee'
);
const tikTok = React.createElement('a', {href: "http://www.tiktok.com"},'www.tiktok.com',
);
const gmail = React.createElement('a', {href: "http://www.gmail.com"}, 'www.gmail.com',
);
const linkedIn = React.createElement('a', {href: "http://www.linkedin.com"},'www.linkedin.com',
);
// ReactDOM.render(  
// document.getElementById('root')
// );
ReactDOM.render(
React.createElement( //created Header tag
    'header',
    {}, 
    React.createElement( //created nested h1 tag
        'h1',
    {},
    'My Favorite Things',
    ),
      React.createElement(
        'ul',
        {},
       
       
        React.createElement('li', {}, 'Favorite Colors',
        React.createElement(
            'ol',
            {},
            black,
            white,
            pink,
          ),
          React.createElement('li',{},'Favorite Music',
          React.createElement(
              'ol',
              {},
              steveLacy,
              marionHill,
              LinManuelMiranda,

              ),
          ),
          React.createElement('li',{},'Favorite Food',
          React.createElement(
              'ol',
              {},
              sushi,
              bbq,
              coffee,

              ),
          ),
          React.createElement('li',{},'Favorite Websites',
          React.createElement(
              'ol',
              {},
             React.createElement('li',{}, tikTok),
             React.createElement('li',{},gmail),
             React.createElement('li',{},linkedIn),

              ),
          )
          
          
          
    ),
  )
    
),
    document.getElementById('root')
);




