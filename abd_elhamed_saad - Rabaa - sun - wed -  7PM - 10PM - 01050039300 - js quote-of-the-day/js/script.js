const Quotes = [
    {'author': 'Albert Einstein', 
     'quote': 'Life is like riding a bicycle. To keep your balance, you must keep moving.'
    },
    {'author': 'Mark Twain', 
     'quote': 'The secret of getting ahead is getting started.'
    },
    {'author': 'Eleanor Roosevelt', 
     'quote': 'The future belongs to those who believe in the beauty of their dreams.'
    },
    {'author': 'Steve Jobs', 
     'quote': 'Your time is limited, so don’t waste it living someone else’s life.'
    },
    {'author': 'Maya Angelou', 
     'quote': 'You will face many defeats in life, but never let yourself be defeated.'
    },
    {'author': 'Oscar Wilde', 
     'quote': 'Be yourself; everyone else is already taken.'
    },
    {'author': 'Dalai Lama', 
     'quote': 'Happiness is not something ready made. It comes from your own actions.'
    },
    {'author': 'Confucius', 
     'quote': 'It does not matter how slowly you go as long as you do not stop.'
    },
    {'author': 'Theodore Roosevelt', 
     'quote': 'Believe you can and you’re halfway there.'
    },
    {'author': 'Dr. Seuss', 
     'quote': 'Don’t cry because it’s over, smile because it happened.'
    },
    {'author': 'Benjamin Franklin', 
     'quote': 'An investment in knowledge pays the best interest.'
    },
    {'author': 'Babe Ruth', 
     'quote': 'Never let the fear of striking out keep you from playing the game.'
    },
    {'author': 'Winston Churchill', 
     'quote': 'Success is not final, failure is not fatal: It is the courage to continue that counts.'
    },
    {'author': 'Socrates', 
     'quote': 'The unexamined life is not worth living.'
    },
    {'author': 'Anne Frank', 
     'quote': 'How wonderful it is that nobody need wait a single moment before starting to improve the world.'
    },
    {'author': 'Helen Keller', 
     'quote': 'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.'
    },
    {'author': 'John Wooden', 
     'quote': 'Do not let what you cannot do interfere with what you can do.'
    },
    {'author': 'Ralph Waldo Emerson', 
     'quote': 'What lies behind us and what lies before us are tiny matters compared to what lies within us.'
    },
    {'author': 'Vince Lombardi', 
     'quote': 'Perfection is not attainable, but if we chase perfection we can catch excellence.'
    },
    {'author': 'Confucius', 
     'quote': 'Our greatest glory is not in never falling, but in rising every time we fall.'
    },
];


function printQuote(){
    const random = Number.parseInt(Math.random()*Quotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${Quotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${Quotes[random].author}`;
    
}
