import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import configureStore from '../../configureStore';
import { Provider } from 'react-redux';
import RecipeListContainer from './recipe-list-container';

describe('Components', () => {
  describe('<RecipeListContainer />', () => {
    
    //@TODO: Work out some  was of managing fixtures. Not worth doing until I finalise the structure
    const data = {
      recipes: {
        entries: [{
          "_id": "583d9d6f76ad06368d000001",
          "__v": 0,
          "created": "2016-11-29T15:23:27.221Z",
          "body": "",
          "steps": ["Boil the kettle, then measure 300ml boiling water into a jug and add the melted butter and vanilla extract. Sift the flour and baking powder into a large mixing bowl with a generous pinch of salt. Make a well in the centre, then pour in the contents of the jug and very quickly beat into the flour with a wooden spoon until lump-free.",
            "Cut out 6 10cm x 10cm squares of baking parchment and grease them well with oil. Transfer the churro batter to a piping bag fitted with a large star nozzle, and pipe spiraled circles of batter onto the parchment. This is easiest if you start from the centre, and swirl the nozzle round and round until you reach the edge of the paper, avoiding any gaps. Chill for 45 mins, or up to 2 hrs, until the batter feels firm to the touch.",
            "Fill a large deep saucepan one-third full of oil. Heat until a cube of bread browns in 45 seconds – 1 min (about 180C). Cover a tray with kitchen paper and mix the caster sugar and cinnamon together.",
            "Remove the churros from the fridge and drop 2 or 3 directly into the pan, discarding the parchment. Fry until golden brown and crisp, then remove with a slotted spoon and drain on the kitchen paper-lined tray. Carry on cooking the rest of the dough in batches, sprinkling the cooked churros with some cinnamon sugar as you go. Once you’ve cooked all the churros, toss with any remaining cinnamon sugar and sandwich with balls of your favourite ice cream."
          ],
          "description": "Try a crispy Spanish-style doughnut coated in cinnamon sugar filled with dulce de leche or chocolate ice cream  - not your average ice cream sandwich!",
          "ingredients": ["50g butter, melted",
            "1/2 tsp vanilla extract",
            "250g plain flour",
            "1 tsp baking powder",
            "about 1 litre sunflower oil",
            "a few chunks of bread",
            "ice cream, to serve, chocolate or dulce de leche work well"
          ],
          "title": "Churro ice cream sandwich"
        }, {
          "_id": "583d9df576ad06368d000002",
          "__v": 0,
          "created": "2016-11-29T15:25:41.549Z",
          "body": "",
          "steps": ["With wet hands divide and shape the paella into 12 balls. If the paella is too loose, mix in a few tbsp breadcrumbs until it’s thick enough to roll.",
            "Roll each ball in flour, dust off the excess, then dip in egg. Mix the breadcrumbs with the paprika and roll the balls in the crumbs, until well coated. Chill until you’re ready to fry and serve, or for at least 30 mins to allow the rice balls to firm up.",
            "Fill a deep saucepan 3/4 full with oil. Bring up to 180C, or hot enough to brown a chunk of bread in 40 secs. Use a slotted spoon to carefully lower the arancini into the hot oil and cook for 3-4 mins until golden brown, then drain on kitchen paper. Don’t overcrowd the pan or the temperature of the oil will drop.",
            "To serve, skewer each arancini with a folded slice of chorizo and an olive."
          ],
          "description": "These crispy paella bites make the perfect canapé for a Spanish-style party. We predict they’re the new deep-fried mac 'n' cheese, watch this space...",
          "ingredients": ["500g cold leftover paella or shop-bought",
            "50g plain flour",
            "2 eggs, beaten",
            "75g dried breadcrumbs",
            "1 tsp smoked paprika",
            "vegetable oil or sunflower oil, for deep frying",
            "12 thin slices chorizo",
            "12 green Spanish olives"
          ],
          "title": "Paella arancini bites"
        }, {
          "_id": "583d9e3b76ad06368d000003",
          "__v": 0,
          "created": "2016-11-29¬T15:26:51.496Z",
          "body": "",
          "steps": ["Wash and peel the baby carrots, keeping the green tops intact. Put them in a medium saucepan and half-fill with salted water. Bring to the boil and cook for 4 mins or until just tender. Drain, then transfer to a serving dish, season and stir in the butter."],
          "description": "There's nothing better than soft, buttery carrots to go along with your favourite roast. You can keep this side simple or tweak it with our delicious twists",
          "ingredients": ["500g baby carrots", "1 tbsp butter"],
          "title": "Buttered baby carrots"
        }
        ]
      }
    };
    const storeData = configureStore(data);
    
    it('should get data from the store and make it available to display components', () => {
      const wrapper = mount(
        <Provider store={storeData}>
          <RecipeListContainer />
        </Provider>);
      
      expect(wrapper.find('li').length).to.equal(data.recipes.entries.length);
    });
  });
});
