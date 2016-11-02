var StepsModule = (function () {
  var isRepeat;
  var textData;
  var stepNumber = 8;
  var currentStep = 1;
  var nextStep;
  var href = 'http://appliedgroup.se/secured/index.html';


  var removeActiveTabs = function () {
    $('.nav-tabs li').removeClass('active');
    $('.tab-pane').removeClass('active');
  };

  var checkSlideoverIsOpen = function () {
    if (!$('#slideover2').hasClass('opened')) {
      $('[data-slideover="open2"]').trigger('click');
    }
  };

  var setNextStep = function (valueNextStep) {
    currentStep = +$('.wizard-banner').attr('data-step');
    if (currentStep < stepNumber) {
      if (valueNextStep) {
        nextStep = valueNextStep;
      } else {
        nextStep = currentStep + 1;
      }

      var currentStepNumber = $('#stepCurrent');
      var stepTitle = $('#stepName');
      var stepDescription = $('#stepAction');
      var buttonText = $('.button-text');


      currentStepNumber.text(nextStep);
      stepTitle.text(textData[nextStep - 1].stepTitle);
      stepDescription.text(textData[nextStep - 1].stepDescription);
      buttonText.text(textData[nextStep - 1].buttonTitle);
      $('.wizard-banner').attr('data-step', nextStep);
    } else if (valueNextStep) {
      nextStep = valueNextStep;

      var currentStepNumber = $('#stepCurrent');
      var stepTitle = $('#stepName');
      var stepDescription = $('#stepAction');
      var buttonText = $('.button-text');


      currentStepNumber.text(nextStep);
      stepTitle.text(textData[nextStep - 1].stepTitle);
      stepDescription.text(textData[nextStep - 1].stepDescription);
      buttonText.text(textData[nextStep - 1].buttonTitle);
      $('.wizard-banner').attr('data-step', nextStep);
    } else {
      nextStep = currentStep + 1;
    }
  };

  var performAction = function () {
    switch (nextStep - 1) {
      case 1: {
        $('[data-slideover="open2"]').trigger('click');
        break;
      }
      case 2: {
        SigmaSoftware.initRoundChart();
        console.log(isRepeat)
        if (isRepeat) {
          $('[data-trans="toDetails"]').trigger('click');
        } else {
          $('*[data-slideover="close"]').trigger('click');
          setTimeout(function () {
            isRepeat = true;
            $('[data-trans="toDetails"]').trigger('click');
          }, 200);
        }


        break;
      }
      case 3: {
        removeActiveTabs();

        $('.c-menu__promotion-offer').trigger('click');
        $('.c-menu__promotion-offer').addClass('active');
        $('#panelPromo').addClass('active');

        checkSlideoverIsOpen();
        break;
      }
      case 4: {
        removeActiveTabs();

        $('.c-menu__rewards').trigger('click');
        $('.c-menu__rewards').addClass('active');
        $('#panelRewards').addClass('active');

        checkSlideoverIsOpen();
        break;
      }
      case 5: {
        removeActiveTabs();

        $('.c-menu-chat').trigger('click');
        $('.c-menu-chat').addClass('active');
        $('#panelChat').addClass('active');

        checkSlideoverIsOpen();
        break;
      }
      case 6: {
        removeActiveTabs();

        $('.c-menu-todo').trigger('click');
        $('.c-menu-todo').addClass('active');
        $('#panelTodo').addClass('active');

        checkSlideoverIsOpen();
        break;
      }
      case 7: {
        removeActiveTabs();

        $('.c-menu__history').trigger('click');
        $('.c-menu__history').addClass('active');
        $('#panelHistory').addClass('active');

        checkSlideoverIsOpen();
        break;
      }
      case 8: {
        location.href = href;
      }
    }
  };

  var setNextStepAndPerformAction = function () {
    setNextStep();
    performAction();
  };

  var loadTexts = function () {
    $.getJSON("text.json", function (data) {
      textData = data.bannerText;
    })
  };

  var events = function () {
    $('.js-button-step').on('click', setNextStepAndPerformAction);

    // tab events
    $('.c-menu__profile').on('click', function () {
      setNextStep(2);
    });
    $('.c-menu__offer').on('click', function () {
      setNextStep(3);
    });
    $('.c-menu__promotion-offer').on('click', function () {
      setNextStep(4);
    });
    $('.c-menu__rewards').on('click', function () {
      setNextStep(5);
    });
    $('.c-menu-chat').on('click', function () {
      setNextStep(6);
    });
    $('.c-menu-todo').on('click', function () {
      setNextStep(7);
    });
    $('.c-menu__history').on('click', function () {
      setNextStep(8);
    });
  };

  return {
    loadTexts: loadTexts,
    events: events,
    setNextStep: setNextStep
  }
})();

StepsModule.loadTexts();
StepsModule.events();