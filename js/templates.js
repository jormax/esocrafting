function getTemplatesSelectHTML(templatesArray){
    var selectBox = document.getElementById('templateSelect');
    //https://stackoverflow.com/questions/14473207/how-can-i-give-an-array-as-options-to-select-element
    for(var i = 0, l = templatesArray.length; i < l; i++){
        var option = templatesArray[i];
        selectBox.options.add( new Option(option.Name, option.Name, option.selected) );
    }
}

function applyTemplate(selectedElement,templatesArray){
    var name = selectedElement.value;
    resetForm();

    if(name == ""){
       
    }else{
    
        for(var i = 0, l = templatesArray.length; i < l; i++){
            
            if(templatesArray[i].Name == name){

                for(var x = 0; x < templatesArray[i].Items.length; x++){
                    //$("#armorweapon"+x).value(templatesArray[i].Items[x].Type);
            
                    //templatesArray[i].Items[x].Type

                    $('select#armorweapon' + x).val(templatesArray[i].Items[x].Type);
                    $('select#armorweapon' + x).trigger("change"); 
                    $('select#itemType' + x).val(templatesArray[i].Items[x].Item);
                    $('select#itemType' + x).trigger("change");
                    $('select#trait' + x).val(templatesArray[i].Items[x].Trait);
                    $('select#trait' + x).trigger("change");
                    $('select#set' + x).val(templatesArray[i].Items[x].Set);
                    $('select#set' + x).trigger("change");
                   
                }

                
                break;
            }
        }
    }
    applyTemplateLevel( document.getElementById("templateLevelSelect"));
    applyTemplateLevel( document.getElementById("templateQualitySelect"));

    $('select#templateLevelSelect').trigger("change"); 
    $('select#templateQualitySelect').trigger("change"); 

   
   
}


function fire_trigger(id){
  var evt = document.createEvent("HTMLEvents");
  evt.initEvent("change", true, true);

  document.getElementById(id).dispatchEvent(evt);
}

function applyTemplateLevel(selectedElement){
  var level = selectedElement.value;
  $('select[id^="level"]').val(level); 
  setTimeout(function(){  $('select[id^="level"]').trigger("change"); }, 200);
}

function applyTemplateQuality(selectedElement){
  var quality = selectedElement.value;
  $('select[id^="improvement"]').val(quality); 
  setTimeout(function(){  $('select[id^="improvement"]').trigger("change");  }, 200);
  
}


function getLevelSelectHTML(lvlArray){
  var selectBox = document.getElementById('templateLevelSelect');
  //https://stackoverflow.com/questions/14473207/how-can-i-give-an-array-as-options-to-select-element
  for(var i = 0, l = lvlArray.length; i < l; i++){
      var option = lvlArray[i];
      selectBox.options.add( new Option(option, option, option.selected) );
  }
}

function getQualitySelect(){
  var selectBox = document.getElementById('templateQualitySelect');
  var qualityArray = ["普通","優良","上乘","史詩","傳說"];

  //https://stackoverflow.com/questions/14473207/how-can-i-give-an-array-as-options-to-select-element
  for(var i = 0, l = qualityArray.length; i < l; i++){
      var option = qualityArray[i];
      selectBox.options.add( new Option(option, option, option.selected) );
  }
}

function resetForm(){
    //https://stackoverflow.com/questions/16452699/how-to-reset-a-form-using-jquery-with-reset-method
    $('form#craftForm').trigger("reset"); 
    $('select[id^="set"]').val('No set'); 
    $('form#craftForm select').trigger("change"); 

    
}

var templates = [
    {
    "Name": "法系輸出(五件身體)",
    "Items":
    [
       
        {
          "Type": "Armor",
          "Item": "輕型襯衫",
          "Trait": "神性Divines",
          "Set": "Order's Wrath"
        },
        {
          "Type": "Armor",
          "Item": "輕型鞋",
          "Trait": "神性Divines",
          "Set": "Order's Wrath"
        },
        
        {
          "Type": "Armor",
          "Item": "輕型手套",
          "Trait": "神性Divines",
          "Set": "Order's Wrath"
        },
        {
          "Type": "Armor",
          "Item": "輕型飾帶",
          "Trait": "神性Divines",
          "Set": "Order's Wrath"
        },
        
        {
          "Type": "Armor",
          "Item": "輕型長褲",
          "Trait": "神性Divines",
          "Set": "Order's Wrath"
        }

       ]
    },
    {
      "Name": "耐系輸出(五件身體)",
      "Items":
      [
         
          {
            "Type": "Armor",
            "Item": "中型上衣",
            "Trait": "神性Divines",
            "Set": "Order's Wrath"
          },
          {
            "Type": "Armor",
            "Item": "中型護腕",
            "Trait": "神性Divines",
            "Set": "Order's Wrath"
          },
          
          {
            "Type": "Armor",
            "Item": "中型靴子",
            "Trait": "神性Divines",
            "Set": "Order's Wrath"
          },
          {
            "Type": "Armor",
            "Item": "中型腰帶",
            "Trait": "神性Divines",
            "Set": "Order's Wrath"
          },
          
          {
            "Type": "Armor",
            "Item": "中型護腿",
            "Trait": "神性Divines",
            "Set": "Order's Wrath"
          }
  
         ]
      }
];


/*


,
    {
        "Name": "DPS - Stamina ",
        "Items":[
           
            {
            "Type": "Armor",
            "Item": "Heavy Helmet",
            "Trait": "Training",
            "Set": "Kvatch Gladiator"
            },
            {
            "Type": "Armor",
            "Item": "Light Shoulders",
            "Trait": "Training",
            "Set": "Kvatch Gladiator"
            },
             {
            "Type": "Armor",
            "Item": "Medium Chest",
            "Trait": "Training",
            "Set": "Hunding's Rage"
            },
            {
            "Type": "Armor",
            "Item": "Medium Gloves",
            "Trait": "Training",
            "Set": "Hunding's Rage"
            },
            {
            "Type": "Armor",
            "Item": "Medium Boots",
            "Trait": "Training",
            "Set": "Hunding's Rage"
            },
            {
            "Type": "Armor",
            "Item": "Medium Legs",
            "Trait": "Training",
            "Set": "Hunding's Rage"
            },
            {
            "Type": "Armor",
            "Item": "Medium Waist",
            "Trait": "Training",
            "Set": "Hunding's Rage"
            },
            {
            "Type": "Jewelry",
            "Item": "Ring",
            "Trait": "Robust",
            "Set": "Kvatch Gladiator"
            },
            {
            "Type": "Jewelry",
            "Item": "Ring",
            "Trait": "Robust",
            "Set": "Kvatch Gladiator"
            },
            {
            "Type": "Jewelry",
            "Item": "Necklace",
            "Trait": "Robust",
            "Set": "Kvatch Gladiator"
            },
            {
            "Type": "Weapon",
            "Item": "Dagger",
            "Trait": "Training",
            "Set": "Ashen Grip"
            },
            {
            "Type": "Weapon",
            "Item": "Dagger",
            "Trait": "Training",
            "Set": "Ashen Grip"
            },
            {
            "Type": "Weapon",
            "Item": "Bow",
            "Trait": "Training",
            "Set": "Ashen Grip"
            }
        ]
    },
    {
        "Name": "Healer - Magicka ",
        "Items":[
           
            {
            "Type": "Armor",
            "Item": "Medium Helmet",
            "Trait": "Training",
            "Set": "Seducer"
            },
            {
            "Type": "Armor",
            "Item": "Heavy Shoulders",
            "Trait": "Training",
            "Set": "Seducer"
            },
             {
            "Type": "Armor",
            "Item": "Shirt",
            "Trait": "Training",
            "Set": "Kagrenac's Hope"
            },
            {
            "Type": "Armor",
            "Item": "Light Gloves",
            "Trait": "Training",
            "Set": "Kagrenac's Hope"
            },
            {
            "Type": "Armor",
            "Item": "Light Boots",
            "Trait": "Training",
            "Set": "Kagrenac's Hope"
            },
            {
            "Type": "Armor",
            "Item": "Light Legs",
            "Trait": "Training",
            "Set": "Kagrenac's Hope"
            },
            {
            "Type": "Armor",
            "Item": "Light Waist",
            "Trait": "Training",
            "Set": "Kagrenac's Hope"
            },
            {
            "Type": "Jewelry",
            "Item": "Ring",
            "Trait": "Arcane",
            "Set": "Seducer"
            },
            {
            "Type": "Jewelry",
            "Item": "Ring",
            "Trait": "Arcane",
            "Set": "Seducer"
            },
            {
            "Type": "Jewelry",
            "Item": "Necklace",
            "Trait": "Arcane",
            "Set": "Seducer"
            },
            {
            "Type": "Weapon",
            "Item": "Restoration Staff",
            "Trait": "Training",
            "Set": "Senche-raht's Grit"
            },
            {
            "Type": "Weapon",
            "Item": "Lightning Staff",
            "Trait": "Training",
            "Set": "Senche-raht's Grit"
            }
        ]
    },
    {
        "Name": "Tank - Magicka ",
        "Items":[
           
            {
            "Type": "Armor",
            "Item": "Medium Helmet",
            "Trait": "Training",
            "Set": "Shacklebreaker"
            },
            {
            "Type": "Armor",
            "Item": "Light Shoulders",
            "Trait": "Training",
            "Set": "Shacklebreaker"
            },
             {
            "Type": "Armor",
            "Item": "Heavy Chest",
            "Trait": "Training",
            "Set": "Torug's Pact"
            },
            {
            "Type": "Armor",
            "Item": "Heavy Gloves",
            "Trait": "Training",
            "Set": "Torug's Pact"
            },
            {
            "Type": "Armor",
            "Item": "Heavy Boots",
            "Trait": "Training",
            "Set": "Torug's Pact"
            },
            {
            "Type": "Armor",
            "Item": "Heavy Legs",
            "Trait": "Training",
            "Set": "Torug's Pact"
            },
            {
            "Type": "Armor",
            "Item": "Heavy Waist",
            "Trait": "Training",
            "Set": "Torug's Pact"
            },
            {
            "Type": "Jewelry",
            "Item": "Ring",
            "Trait": "Healthy",
            "Set": "Shacklebreaker"
            },
            {
            "Type": "Jewelry",
            "Item": "Ring",
            "Trait": "Healthy",
            "Set": "Shacklebreaker"
            },
            {
            "Type": "Jewelry",
            "Item": "Necklace",
            "Trait": "Healthy",
            "Set": "Shacklebreaker"
            },
            {
            "Type": "Weapon",
            "Item": "Sword (1h)",
            "Trait": "Training",
            "Set": "Twilight's Embrace"
            },
            {
            "Type": "Armor",
            "Item": "Shield",
            "Trait": "Training",
            "Set": "Twilight's Embrace"
            },
            {
            "Type": "Weapon",
            "Item": "Ice Staff",
            "Trait": "Training",
            "Set": "Twilight's Embrace"
            }
        ]
    },
    {
        "Name": "Tank - Stamina ",
        "Items":[
           
            {
            "Type": "Armor",
            "Item": "Medium Helmet",
            "Trait": "Training",
            "Set": "Shacklebreaker"
            },
            {
            "Type": "Armor",
            "Item": "Light Shoulders",
            "Trait": "Training",
            "Set": "Shacklebreaker"
            },
             {
            "Type": "Armor",
            "Item": "Heavy Chest",
            "Trait": "Training",
            "Set": "Torug's Pact"
            },
            {
            "Type": "Armor",
            "Item": "Heavy Gloves",
            "Trait": "Training",
            "Set": "Torug's Pact"
            },
            {
            "Type": "Armor",
            "Item": "Heavy Boots",
            "Trait": "Training",
            "Set": "Torug's Pact"
            },
            {
            "Type": "Armor",
            "Item": "Heavy Legs",
            "Trait": "Training",
            "Set": "Torug's Pact"
            },
            {
            "Type": "Armor",
            "Item": "Heavy Waist",
            "Trait": "Training",
            "Set": "Torug's Pact"
            },
            {
            "Type": "Jewelry",
            "Item": "Ring",
            "Trait": "Healthy",
            "Set": "Shacklebreaker"
            },
            {
            "Type": "Jewelry",
            "Item": "Ring",
            "Trait": "Healthy",
            "Set": "Shacklebreaker"
            },
            {
            "Type": "Jewelry",
            "Item": "Necklace",
            "Trait": "Healthy",
            "Set": "Shacklebreaker"
            },
            {
            "Type": "Weapon",
            "Item": "Sword (1h)",
            "Trait": "Training",
            "Set": "Night's Silence"
            },
            {
            "Type": "Armor",
            "Item": "Shield",
            "Trait": "Training",
            "Set": "Night's Silence"
            },
            {
            "Type": "Weapon",
            "Item": "Ice Staff",
            "Trait": "Training",
            "Set": "Night's Silence"
            }
        ]
    }



*/


