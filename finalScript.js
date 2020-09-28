let proteins = {
  lemonpepperchickenbreast_100g: {
    price: 8.45,
    calories: 162,
    protein: 31,
    fat: 4,
    carbs: 2,
    ingredients: "chicken breast,lemon,pepper"
  },
  lemonpepperchickenbreast_200g: {
    price: 9.45,
    calories: 324,
    protein: 62,
    fat: 8,
    carbs: 4,
    ingredients: "chicken breast,lemon,pepper"
  },
  lemonpepperchickenbreast_300g: {
    price: 10.45,
    calories: 486,
    protein: 93,
    fat: 12,
    carbs: 6,
    ingredients: "chicken breast,lemon,pepper"
  },
  turkeymince_100g: {
    price: 8.45,
    calories: 172,
    protein: 23,
    fat: 7,
    carbs: 1,
    ingredients: "turkey mince, worcestershire sauce"
  },
  turkeymince_200g: {
    price: 9.45,
    calories: 344,
    protein: 46,
    fat: 14,
    carbs: 2,
    ingredients: "turkey mince, worcestershire sauce"
  },
  turkeymince_300g: {
    price: 10.45,
    calories: 516,
    protein: 69,
    fat: 21,
    carbs: 3,
    ingredients: "turkey mince, worcestershire sauce"
  },
  beefandquinoameatballs_100g: {
    price: 8.45,
    calories: 247,
    protein: 29,
    fat: 13,
    carbs: 4,
    ingredients: "beef mince, quinoa, worcestershire sauce "
  },
  beefandquinoameatballs_200g: {
    price: 9.45,
    calories: 494,
    protein: 58,
    fat: 26,
    carbs: 8,
    ingredients: "beef mince, quinoa, worcestershire sauce "
  },
  beefandquinoameatballs_300g: {
    price: 10.45,
    calories: 741,
    protein: 87,
    fat: 39,
    carbs: 12,
    ingredients: "beef mince, quinoa, worcestershire sauce "
  },
  grilledbarramundi_100g: {
    price: 9.45,
    calories: 105,
    protein: 22,
    fat: 2,
    carbs: 8,
    ingredients: "barrumundi fillets,lemon,lime,pepper,salt"
  },
  grilledbarramundi_200g: {
    price: 10.45,
    calories: 210,
    protein: 44,
    fat: 4,
    carbs: 16,
    ingredients: "barrumundi fillets,lemon,lime,pepper,salt"
  },
  grilledbarramundi_300g: {
    price: 11.45,
    calories: 315,
    protein: 66,
    fat: 6,
    carbs: 24,
    ingredients: "barrumundi fillets,lemon,lime,pepper,salt"
  },
  tofu_100g: {
    price: 8.45,
    calories: 227,
    protein: 19,
    fat: 13,
    carbs: 5,
    ingredients: "firm tofu, chickpea flour, coconut oil"
  },
  tofu_200g: {
    price: 9.45,
    calories: 454,
    protein: 38,
    fat: 26,
    carbs: 10,
    ingredients: "firm tofu, chickpea flour, coconut oil"
  },
  tofu_300g: {
    price: 10.45,
    calories: 681,
    protein: 57,
    fat: 39,
    carbs: 15,
    ingredients: "firm tofu, chickpea flour, coconut oil"
  },
  tempeh_100g: {
    price: 9.45,
    calories: 221,
    protein: 18,
    fat: 13,
    carbs: 8,
    ingredients: "tempeh, chilli,lime,coconut oil"
  },
  tempeh_200g: {
    price: 10.45,
    calories: 442,
    protein: 36,
    fat: 26,
    carbs: 16,
    ingredients: "tempeh, chilli,lime,coconut oil"
  },
  tempeh_300g: {
    price: 11.45,
    calories: 663,
    protein: 54,
    fat: 39,
    carbs: 24,
    ingredients: "tempeh, chilli,lime,coconut oil"
  },
};

const sidesOne = {
  sweetpotatomash_50g: {
    price: 1,
    calories: 45,
    protein: 1,
    fat: 0.1,
    carbs: 10.2,
    ingredients: "sweet potato"
  },
  sweetpotatomash_100g: {
    price: 1.50,
    calories: 90,
    protein: 2,
    fat: 0.2,
    carbs: 20.4,
    ingredients: "sweet potato"
  },
  sweetpotatomash_150g: {
    price: 2,
    calories: 135,
    protein: 3,
    fat: 0.3,
    carbs: 30.6,
    ingredients: "sweet potato"
  },
  brownriceandquinoa_50g: {
    price: 1,
    calories: 189,
    protein: 5.6,
    fat: 2.2,
    carbs: 35.6,
    ingredients: "brown rice, quinoa"
  },
  brownriceandquinoa_100g: {
    price: 1.50,
    calories: 378,
    protein: 11.2,
    fat: 4.4,
    carbs: 71.2,
    ingredients: "brown rice, quinoa"
  },
  brownriceandquinoa_150g: {
    price: 2,
    calories: 567,
    protein: 16.8,
    fat: 6.6,
    carbs: 106.8,
    ingredients: "brown rice, quinoa"
  },
  roastchatpotato_50g: {
    price: 1,
    calories: 54,
    protein: 1.2,
    fat: 1.1,
    carbs: 10.3,
    ingredients: "potato,paprika, salt, pepper"
  },
  roastchatpotato_100g: {
    price: 1.50,
    calories: 108,
    protein: 2.4,
    fat: 2.2,
    carbs: 20.6,
    ingredients: "potato,paprika, salt, pepper"
  },
  roastchatpotato_150g: {
    price: 2,
    calories: 162,
    protein: 3.6,
    fat: 3.3,
    carbs: 30.9,
    ingredients: "potato,paprika, salt, pepper"
  },
  basmatirice_50g: {
    price: 1,
    calories: 64,
    protein: 1.4,
    fat: 0.3,
    carbs: 13.5,
    ingredients: "basmati rice"
  },
  basmatirice_100g: {
    price: 1.50,
    calories: 128,
    protein: 2.8,
    fat: 0.6,
    carbs: 27,
    ingredients: "basmati rice"
  },
  basmatirice_150g: {
    price: 2,
    calories: 192,
    protein: 4.2,
    fat: 0.9,
    carbs: 40.5,
    ingredients: "basmati rice"
  },
  greenbeans_50g: {
    price: 0.50,
    calories: 16,
    protein: 1.1,
    fat: 0.1,
    carbs: 3,
    ingredients: "green beans"
  },
  greenbeans_100g: {
    price: 1,
    calories: 32,
    protein: 2.2,
    fat: 0.2,
    carbs: 6,
    ingredients: "green beans"
  },
  greenbeans_150g: {
    price: 1.50,
    calories: 48,
    protein: 3.3,
    fat: 0.3,
    carbs: 9,
    ingredients: "green beans"
  },
  broccoli_50g: {
    price: .50,
    calories: 17,
    protein: 1.4,
    fat: 0.2,
    carbs: 2,
    ingredients: "broccoli"
  },
  broccoli_100g: {
    price: 1,
    calories: 34,
    protein: 2.8,
    fat: 0.4,
    carbs: 4,
    ingredients: "broccoli"
  },
  broccoli_150g: {
    price: 1.50,
    calories: 51,
    protein: 4.2,
    fat: 0.6,
    carbs: 6,
    ingredients: "broccoli"
  },
  cauliflowerrice_50g: {
    price: .50,
    calories: 12,
    protein: 1,
    fat: 0.2,
    carbs: 2.2,
    ingredients: "cauliflower rice"
  },
  cauliflowerrice_100g: {
    price: 1,
    calories: 24,
    protein: 2,
    fat: 0.4,
    carbs: 4.4,
    ingredients: "cauliflower rice"
  },
  cauliflowerrice_150g: {
    price: 1.50,
    calories: 36,
    protein: 3,
    fat: 0.6,
    carbs: 6.6,
    ingredients: "cauliflower rice"
  },
  zucchinispaghetti_50g: {
    price: .50,
    calories: 8,
    protein: 0.5,
    fat: 0.4,
    carbs: 0.8,
    ingredients: "zucchini noodles"
  },
  zucchinispaghetti_100g: {
    price: 1,
    calories: 16,
    protein: 1,
    fat: 0.8,
    carbs: 1.6,
    ingredients: "zucchini noodles"
  },
  zucchinispaghetti_150g: {
    price: 1.50,
    calories: 24,
    protein: 1.5,
    fat: 1.2,
    carbs: 2.4,
    ingredients: "zucchini noodles"
  }
};
const sidesTwo = {
  sweetpotatomash_50g: {
    price: 1,
    calories: 45,
    protein: 1,
    fat: .1,
    carbs: 10.2,
    ingredients: "sweet potato"
  },
  sweetpotatomash_100g: {
    price: 1.50,
    calories: 90,
    protein: 2,
    fat: .2,
    carbs: 20.4,
    ingredients: "sweet potato"
  },
  sweetpotatomash_150g: {
    price: 2,
    calories: 135,
    protein: 3,
    fat: .3,
    carbs: 30.6,
    ingredients: "sweet potato"
  },
  brownriceandquinoa_50g: {
    price: 1,
    calories: 189,
    protein: 5.6,
    fat: 2.2,
    carbs: 35.6,
    ingredients: "brown rice, quinoa"
  },
  brownriceandquinoa_100g: {
    price: 1.50,
    calories: 378,
    protein: 11.2,
    fat: 4.4,
    carbs: 71.2,
    ingredients: "brown rice, quinoa"
  },
  brownriceandquinoa_150g: {
    price: 2,
    calories: 567,
    protein: 16.8,
    fat: 6.6,
    carbs: 106.8,
    ingredients: "brown rice, quinoa"
  },
  roastchatpotato_50g: {
    price: 1,
    calories: 54,
    protein: 1.2,
    fat: 1.1,
    carbs: 10.3,
    ingredients: "potato,paprika, salt, pepper"
  },
  roastchatpotato_100g: {
    price: 1.50,
    calories: 108,
    protein: 2.4,
    fat: 2.2,
    carbs: 20.6,
    ingredients: "potato,paprika, salt, pepper"
  },
  roastchatpotato_150g: {
    price: 2,
    calories: 162,
    protein: 3.6,
    fat: 3.3,
    carbs: 30.9,
    ingredients: "potato,paprika, salt, pepper"
  },
  basmatirice_50g: {
    price: 1,
    calories: 64,
    protein: 1.4,
    fat: 0.3,
    carbs: 13.5,
    ingredients: "basmati rice"
  },
  basmatirice_100g: {
    price: 1.50,
    calories: 128,
    protein: 2.8,
    fat: 0.6,
    carbs: 27,
    ingredients: "basmati rice"
  },
  basmatirice_150g: {
    price: 2,
    calories: 192,
    protein: 4.2,
    fat: 0.9,
    carbs: 40.5,
    ingredients: "basmati rice"
  },
  greenbeans_50g: {
    price: 0.50,
    calories: 16,
    protein: 1.1,
    fat: 0.1,
    carbs: 3,
    ingredients: "green beans"
  },
  greenbeans_100g: {
    price: 1,
    calories: 32,
    protein: 2.2,
    fat: 0.2,
    carbs: 6,
    ingredients: "green beans"
  },
  greenbeans_150g: {
    price: 1.50,
    calories: 48,
    protein: 3.3,
    fat: 0.3,
    carbs: 9,
    ingredients: "green beans"
  },
  broccoli_50g: {
    price: .50,
    calories: 17,
    protein: 1.4,
    fat: 0.2,
    carbs: 2,
    ingredients: "broccoli"
  },
  broccoli_100g: {
    price: 1,
    calories: 34,
    protein: 2.8,
    fat: 0.4,
    carbs: 4,
    ingredients: "broccoli"
  },
  broccoli_150g: {
    price: 1.50,
    calories: 51,
    protein: 4.2,
    fat: 0.6,
    carbs: 6,
    ingredients: "broccoli"
  },
  cauliflowerrice_50g: {
    price: .50,
    calories: 12,
    protein: 1,
    fat: 0.2,
    carbs: 2.2,
    ingredients: "cauliflower rice"
  },
  cauliflowerrice_100g: {
    price: 1,
    calories: 24,
    protein: 2,
    fat: 0.4,
    carbs: 4.4,
    ingredients: "cauliflower rice"
  },
  cauliflowerrice_150g: {
    price: 1.50,
    calories: 36,
    protein: 3,
    fat: 0.6,
    carbs: 6.6,
    ingredients: "cauliflower rice"
  },
  zucchinispaghetti_50g: {
    price: .50,
    calories: 8,
    protein: 0.5,
    fat: 0.4,
    carbs: 0.8,
    ingredients: "zucchini noodles"
  },
  zucchinispaghetti_100g: {
    price: 1,
    calories: 16,
    protein: 1,
    fat: 0.8,
    carbs: 1.6,
    ingredients: "zucchini noodles"
  },
  zucchinispaghetti_150g: {
    price: 1.50,
    calories: 24,
    protein: 1.5,
    fat: 1.2,
    carbs: 2.4,
    ingredients: "zucchini noodles"
  }
};
const sauces = {

};

function combineArrays( array_of_arrays ){
    if( ! array_of_arrays ){
        return "";
    }

    if( ! Array.isArray( array_of_arrays ) ){
        return "";
    }

    if( array_of_arrays.length == 0 ){
        return "";
    }

    for( let i = 0 ; i < array_of_arrays.length; i++ ){
        if( ! Array.isArray(array_of_arrays[i]) || array_of_arrays[i].length == 0 ){
            return "";
        }
    }


    let odometer = new Array( array_of_arrays.length );
    odometer.fill( 0 ); 

    let output = "Handle,Title,Body (HTML),Vendor,Type,Tags,Published,Option1 Name,Option1 Value,Option2 Name,Option2 Value,Option3 Name,Option3 Value,Variant SKU,Variant Grams,Variant Inventory Tracker,Variant Inventory Policy,Variant Fulfillment Service,Variant Price,Variant Compare At Price,Variant Requires Shipping,Variant Taxable,Variant Barcode,Image Src,Image Position,Image Alt Text,Gift Card,SEO Title,SEO Description,Google Shopping / Google Product Category,Google Shopping / Gender,Google Shopping / Age Group,Google Shopping / MPN,Google Shopping / AdWords Grouping,Google Shopping / AdWords Labels,Google Shopping / Condition,Google Shopping / Custom Product,Google Shopping / Custom Label 0,Google Shopping / Custom Label 1,Google Shopping / Custom Label 2,Google Shopping / Custom Label 3,Google Shopping / Custom Label 4,Variant Image,Variant Weight Unit,Variant Tax Code,Cost per item\r";

    let newCombination = formCombination( odometer, array_of_arrays );

    let logNum = 1;
    
    while ( odometer_increment( odometer, array_of_arrays ) ){
        newCombination = formCombination( odometer, array_of_arrays );

        newCombination = newCombination.slice(0, -1);
        
        let handle = newCombination.replace(/ /g, '').replace(/_/g, '-').toLowerCase();

        let title = newCombination.replace(/_/g, " ");
  
        let splitHandle = handle.split('-');
        let protein = [splitHandle[0] + '_' + splitHandle[1]];

        let sideOne = [splitHandle[2] + '_' + splitHandle[3]];
        let sideTwo = [splitHandle[4] + '_' + splitHandle[5]];

      let price = proteins[protein].price + sidesOne[sideOne].price + sidesTwo[sideTwo].price; // + sauce.price;

      
        let calories = proteins[protein].calories + sidesOne[sideOne].calories + sidesTwo[sideTwo].calories; // + sauce.calories; 
        let proteinValue = proteins[protein].protein + sidesOne[sideOne].protein + sidesTwo[sideTwo].protein;
        let fat = proteins[protein].fat + sidesOne[sideOne].fat + sidesTwo[sideTwo].fat;
        let carbs = proteins[protein].carbs + sidesOne[sideOne].carbs + sidesTwo[sideTwo].carbs;
        let ingredients = proteins[protein].ingredients + "," + sidesOne[sideOne].ingredients + "," + sidesTwo[sideTwo].ingredients;


      
        output += handle + ",";
        // title 
          
        output += title
        // Body (HTML)
        output += ',"' + ingredients + '",' ;
        // Vendor
        output += 'Live Fit Nutrition,' ;
        // Type
        output += '"",';

      
        // Tags
        output += '"calories-' + calories.toFixed(1) + ', carbs-' + carbs.toFixed(1) + ', fat-' + fat.toFixed(1) + ', protein-' + proteinValue.toFixed(1) + '",' ;
        // Published 
        output += 'true,' ;
        // Option1 Name 
        output += 'Title,' ;
        //
        output += 'Default Title,,,,,5,0.0,shopify,continue,manual,' ;

        output += price;
        
        //
        output += ',,true,true,"",https://cdn.shopify.com/s/files/1/0300/5366/2813/products/performance_menu_3c44e6e6-377e-49c9-841e-0a178256608f.png?v=1597708231,1,false,,,,,,,,,,,,,,,,,kg,,\r' ;

    }

    return output;
}


function formCombination( odometer, array_of_arrays ) {
    return odometer.reduce(
      function(accumulator, odometer_value, odometer_index){
        return "" + accumulator + array_of_arrays[odometer_index][odometer_value];
      },
      ""
    );
}/* formCombination() */

function odometer_increment( odometer, array_of_arrays ){

    for( let i_odometer_digit = odometer.length-1; i_odometer_digit >=0; i_odometer_digit-- ){ 

        let maxee = array_of_arrays[i_odometer_digit].length - 1;         

        if( odometer[i_odometer_digit] + 1 <= maxee ){
            odometer[i_odometer_digit]++;
            return true;
        }
        else{
            if( i_odometer_digit - 1 < 0 ){
                return false;
            }
            else{
                odometer[i_odometer_digit]=0;
                continue;
            }
        }
    }/* for( let odometer_digit = odometer.length-1; odometer_digit >=0; odometer_digit-- ) */

}/* odometer_increment() */


  let arraysCombined = combineArrays([ ["Lemon Pepper Chicken Breast_","Beef and Quinoa Meatballs_","Turkey Mince_", "Grilled Barramundi_", "Tofu_", "Tempeh_"],
                 ["100g_", "200g_", "300g_"],
                 ["Sweet Potato Mash_","Brown Rice and Quinoa_", "Roast Chat Potato_", "Basmati Rice_", "Green Beans_", "Broccoli_", "Cauliflower Rice_", "Zucchini Spaghetti_"], ["50g_", "100g_", "150g_"],
                ["Sweet Potato Mash_","Brown Rice and Quinoa_", "Roast Chat Potato_", "Basmati Rice_", "Green Beans_", "Broccoli_", "Cauliflower Rice_", "Zucchini Spaghetti_"], ["50g_", "100g_", "150g_"]] );



                           





                           



