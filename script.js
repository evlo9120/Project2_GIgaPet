$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and power level of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.mayonaise_donut-button').click(clickedMayonaiseDonutButton);
    $('.illness').text(pet_info['illness']);
    $('.pet-image').hover(
      function() {
        $(this).css('opacity', '0.7');
        showPetReply("Teeheeheehee");
      },
      function() {
        $(this).css('opacity', '1');
      }
    );
    $('.pet-image').click(function() {
      $('.pet-reply').slideToggle();
    });
  

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), power level (number), and happiness (number) of your pet
    var pet_info = {name:"Goku", power_level:9000, happiness:55, illness:45};
  
    function clickedTreatButton() {
      // Increase pet happiness
      pet_info.happiness += 30;
      // Increase pet power level
      pet_info.power_level += 900;
      // Decrease pet illness
      pet_info.illness -= 20;
      showPetReply("Time to power up!");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      pet_info.happiness += 30;
      // Decrease pet power level
      pet_info.power_level -= 900;
      // Decrease pet illness
      pet_info.illness -= 20;
      showPetReply("Kamehameha!");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      pet_info.happiness -= 30;
      // Decrease pet power level
      pet_info.power_level -=900;
      // Decrease pet illness
      pet_info.illness -= 20;
      showPetReply("Alright, let's take a break.");
      checkAndUpdatePetInfoInHtml();
    }

    function clickedMayonaiseDonutButton() {
      // Decrease pet happiness
      pet_info.happiness -= 30;
      // Increase pet power level
      pet_info.power_level += 900;
      // Increase pet illness
      pet_info.illness +=20;
      showPetReply("Something Doesn't feel right");
      checkAndUpdatePetInfoInHtml();
    }
    
    function showPetReply(reply) {
      $('.pet-reply').text(reply).hide().fadeIn(300);
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkPowerLevelAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkPowerLevelAndHappinessBeforeUpdating() {
      // Add conditional so if power level is lower than zero.
      if (pet_info.power_level < 0) {
        pet_info.power_level = 0;
      }

      // Keep illness from going below zero
      if (pet_info.illness < 0) {
        pet_info.illness = 0;
      }
    }

    

    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.power_level').text(pet_info['power_level']);
      $('.happiness').text(pet_info['happiness']);
      $('.illness').text(pet_info['illness']);
    }
  