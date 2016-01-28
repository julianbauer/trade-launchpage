import Html from './components/Html/index.jsx';
import React from 'react';
//import scrollMonitor from 'scrollmonitor';
//import $ from 'jquery';
React.render(<Html />, document.body);


//// Scroll Events
//// -------------
//
//// Variables
//
//var redThreadLinks = document.getElementById('redThread-links'); // use -links instead of the whole section as it is the core element
//
//var overniceLogo = document.getElementById('overnice-logo');
//var keyGradient = document.getElementById('key-gradient');
//var redThread = document.getElementById('redThread');
//var overnice_short = document.getElementById('overniceLogo-short');
//
//var floatingImageContainer = document.getElementsByClassName('floatingImageComponent-container');
//var floatingImageComponent = document.getElementsByClassName('floatingImageComponent');
//var floatingTextComponent = document.getElementsByClassName('floatingTextComponent');
//
//var whatWeBelieveInFloatingComponent = document.getElementById('whatWeBelieveIn-floatingComponent');
//var whatWeBelieveInFloatingImageBox = document.getElementById('whatWeBelieveIn-floatingComponent').getElementsByClassName('floatingImageBox');
//var whatWeBelieveInFloatingTextBox = document.getElementById('whatWeBelieveIn-floatingComponent').getElementsByClassName('floatingTextBox');
//var whatWeBelieveInSummary = document.getElementById('whatWeBelieveIn-summary');
//
//var howWeWorkFloatingComponent = document.getElementById('howWeWork-floatingComponent');
//var howWeWorkFloatingTextBox = document.getElementById('howWeWork-floatingComponent').getElementsByClassName('floatingTextBox');
//
//var whatWeBelieveIn = document.getElementById('whatWeBelieveIn');
//var howWeWork = document.getElementById('howWeWork');
//var whatWereGoodAt = document.getElementById('whatWereGoodAt');
//
//
//// Update Link Handler
//
//var l = document.getElementsByName('redThread-link');
//
//// RedThread Events
//// ----------------
//
//var redThreadOffset = window.innerHeight*0.1;
//var redThreadHeight = window.innerHeight*0.7;
//
//// RedThread & Logo Moving
//
//var redThreadWatcher = scrollMonitor.create(redThreadLinks, redThreadOffset);
//
//redThreadWatcher.enterViewport(function() {
//	overniceLogo.className = 'isMoved';
//	redThreadLinks.className = 'isMoved';
//});
//
//redThreadWatcher.exitViewport(function() {
//		if (redThreadWatcher.isBelowViewport) {
//			overniceLogo.className = '';
//			redThreadLinks.className ='';
//		};
//});
//
//// RedThread Shrinking
//
//var redThreadShrinkWatcher = scrollMonitor.create(redThread);
//redThreadShrinkWatcher.lock();
//
//redThreadShrinkWatcher.partiallyExitViewport(function() {
//		if (redThreadShrinkWatcher.isAboveViewport) {
//			redThread.className = 'isShrinked';
//		};
//});
//
//redThreadShrinkWatcher.fullyEnterViewport(function() {
//			redThread.className = '';
//});
//
//
//// KeyGradient Fix to top
//// ----------------------
//
//var keyGradientWatcher = scrollMonitor.create(keyGradient, -5);
//keyGradientWatcher.lock();
//
//keyGradientWatcher.exitViewport(function() {
//	keyGradient.className = 'isFixed isLoading whatWeBelieveIn step1-of-4';
//	overnice_short.className = 'isVisible';
//});
//
//keyGradientWatcher.enterViewport(function() {
//		keyGradient.className = '';
//		overnice_short.className = '';
//});
//
//
//
//// Bluring + Loader animation + RedThread update
//// --------------------------
//
//// What we believe in
//
//var whatWeBelieveInStepWatcher1 = scrollMonitor.create(whatWeBelieveInFloatingTextBox[0]);
//var whatWeBelieveInStepWatcher2 = scrollMonitor.create(whatWeBelieveInFloatingTextBox[1]);
//var whatWeBelieveInStepWatcher3 = scrollMonitor.create(whatWeBelieveInFloatingTextBox[2]);
//var whatWeBelieveInStepWatcher4 = scrollMonitor.create(whatWeBelieveInSummary);
//
////var whatWeBelieveInStepWatcherTexts = eval(
////	for (i=0; i<10; i++) {
////	
////	whatWeBelieveInStepWatcher[i] = scrollMonitor.create(document.getElementById('whatWeBelieveIn-floatingComponent').getElementsByClassName('floatingTextBox'));
////
////};
////);
//
////console.log(whatWeBelieveInStepWatcherTexts);
//
//
//var whatWeBelieveInStepWatcher = [whatWeBelieveInStepWatcher1,whatWeBelieveInStepWatcher2,whatWeBelieveInStepWatcher3, whatWeBelieveInStepWatcher4];
//
//
//whatWeBelieveInStepWatcher.forEach(function(v, i, ar) {
//	
//	if(whatWeBelieveInFloatingTextBox[i].dataset.floating == "true") {
//		v.stateChange(function() {
//			if(v.isFullyInViewport) {
//				keyGradient.className = 'isFixed isLoading whatWeBelieveIn step' + (i + 1) + '-of-' + [ar.length];
//				
//				whatWeBelieveInFloatingTextBox[i].classList.add('fromBlurred');
//				whatWeBelieveInFloatingTextBox[i].classList.remove('toBlurred');
//			} else {
//				whatWeBelieveInFloatingTextBox[i].classList.add('toBlurred');
//				whatWeBelieveInFloatingTextBox[i].classList.remove('fromBlurred');
//			}
//		});
//	} else {
//		v.stateChange(function() {
//			if(v.isFullyInViewport) {
//				keyGradient.className = 'isFixed isLoading whatWeBelieveIn step' + (i + 1) + '-of-' + [ar.length];
//			};
//		});
//	};
//	
//	v.stateChange(function() {
//		if(v.isFullyInViewport && ( i == 0 || i == (ar.length - 1))) {
//
//				var j;
//				for (j = 0; j < l.length; j++) {
//					l[j].className = '';
//				}
//				
//				document.getElementById('redThread-link-to-whatWeBelieveIn').className = 'active';
//		};
//	});
//});
//
//// How We Work
//
//var howWeWorkStepWatcher1 = scrollMonitor.create(howWeWorkFloatingTextBox[0]);
//var howWeWorkStepWatcher2 = scrollMonitor.create(howWeWorkFloatingTextBox[1]);
//var howWeWorkStepWatcher3 = scrollMonitor.create(howWeWorkFloatingTextBox[2]);
//
//var howWeWorkStepWatcher = [howWeWorkStepWatcher1,howWeWorkStepWatcher2,howWeWorkStepWatcher3];
//
//
//howWeWorkStepWatcher.forEach(function(v, i, ar) {
//	
//	if(howWeWorkFloatingTextBox[i].dataset.floating == "true") {
//		v.stateChange(function() {
//			if(v.isFullyInViewport) {
//				keyGradient.className = 'isFixed isLoading howWeWork step' + (i + 1) + '-of-' + [ar.length];
//				
//				howWeWorkFloatingTextBox[i].classList.add('fromBlurred');
//				howWeWorkFloatingTextBox[i].classList.remove('toBlurred');
//			} else {
//				howWeWorkFloatingTextBox[i].classList.add('toBlurred');
//				howWeWorkFloatingTextBox[i].classList.remove('fromBlurred');
//			}
//		});
//	} else {
//		v.stateChange(function() {
//			if(v.isFullyInViewport) {
//				keyGradient.className = 'isFixed isLoading howWeWork step' + (i + 1) + '-of-' + [ar.length];
//			};
//		});
//	};
//	
//	v.stateChange(function() {
//		if(v.isFullyInViewport && ( i == 0 || i == (ar.length - 1))) {
//				
//				var j;
//				for (j = 0; j < l.length; j++) {
//					l[j].className = '';
//				}
//				
//				document.getElementById('redThread-link-to-howWeWork').className = 'active';
//		};
//	});
//});
//
//
////howWeWorkStepWatcher1.stateChange(function() {
////	if(howWeWorkStepWatcher1.isFullyInViewport) {
////		keyGradient.className = 'isFixed isLoading howWeWork step1-of-3';
////		howWeWorkFloatingTextBox[0].classList.add('fromBlurred');
////		howWeWorkFloatingTextBox[0].classList.remove('toBlurred');
////		
////		var i;
////		for (i = 0; i < l.length; i++) {
////			l[i].className = '';
////		}
////		
////		document.getElementById('redThread-link-to-howWeWork').className = 'active';
////		
////	} else {
////		howWeWorkFloatingTextBox[0].classList.add('toBlurred');
////		howWeWorkFloatingTextBox[0].classList.remove('fromBlurred');
////	}
////});
////
////howWeWorkStepWatcher2.stateChange(function() {
////	if(howWeWorkStepWatcher2.isFullyInViewport) {
////		keyGradient.className = 'isFixed isLoading howWeWork step2-of-3';
////		howWeWorkFloatingTextBox[1].classList.add('fromBlurred');
////		howWeWorkFloatingTextBox[1].classList.remove('toBlurred');
////	} else {
////		howWeWorkFloatingTextBox[1].classList.add('toBlurred');
////		howWeWorkFloatingTextBox[1].classList.remove('fromBlurred');
////	}
////});
////
////howWeWorkStepWatcher3.stateChange(function() {
////	if(howWeWorkStepWatcher3.isFullyInViewport) {
////		keyGradient.className = 'isFixed isLoading howWeWork step3-of-3';
////		howWeWorkFloatingTextBox[2].classList.add('fromBlurred');
////		howWeWorkFloatingTextBox[2].classList.remove('toBlurred');
////		
////		var i;
////		for (i = 0; i < l.length; i++) {
////			l[i].className = '';
////		}
////		
////		document.getElementById('redThread-link-to-howWeWork').className = 'active';
////		
////	} else {
////		howWeWorkFloatingTextBox[2].classList.add('toBlurred');
////		howWeWorkFloatingTextBox[2].classList.remove('fromBlurred');
////	}
////});
//
//
//// What Were Good At
//
//var whatWereGoodAtWatcher = scrollMonitor.create(document.getElementById('whatWereGoodAt'));
//
//whatWereGoodAtWatcher.stateChange(function() {
//	if(whatWereGoodAtWatcher.isFullyInViewport) {
//		keyGradient.className = 'isFixed isLoading whatWereGoodAt step1-of-1';
//		
//		var i;
//		for (i = 0; i < l.length; i++) {
//			l[i].className = '';
//		}
//		
//		document.getElementById('redThread-link-to-whatWereGoodAt').className = 'active';
//	}
//});
//
//// Who We Are
//
//var whoWeAreWatcher = scrollMonitor.create(document.getElementById('whoWeAre'));
//
//whoWeAreWatcher.stateChange(function() {
//	if(whoWeAreWatcher.isFullyInViewport) {
//		keyGradient.className = 'isFixed isLoading whoWeAre step1-of-1';
//		
//		var i;
//		for (i = 0; i < l.length; i++) {
//			l[i].className = '';
//		}
//		
//		document.getElementById('redThread-link-to-whoWeAre').className = 'active';
//	}
//});
//
//// Contact
//
//var contactWatcher = scrollMonitor.create(document.getElementById('contact'));
//
//contactWatcher.stateChange(function() {
//	if(contactWatcher.isFullyInViewport) {
//		keyGradient.className = 'isFixed isLoading contact step1-of-1';
//		
//		var i;
//		for (i = 0; i < l.length; i++) {
//			l[i].className = '';
//		}
//		
//		document.getElementById('redThread-link-to-contact').className = 'active';
//	}
//});
//
//
//
//// Floating
//// --------
//
//// Inititalize
//
//floatingImageComponent[0].style.width = whatWeBelieveInFloatingComponent.clientWidth*0.4 +  'px';
////
////floatingImageComponent[1].style.width = howWeWorkFloatingComponent.clientWidth*0.4 +  'px';
////floatingImageComponent[1].style.left = howWeWorkFloatingComponent.clientWidth*0.6 +  'px';
//// due to right-aligned image component
//
//// What we believe in
//
//var whatWeBelieveInFloatingInitializeWatcher = scrollMonitor.create(floatingTextComponent[0]);
//
//whatWeBelieveInFloatingInitializeWatcher.stateChange(function() {
//	if (whatWeBelieveInFloatingInitializeWatcher.isFullyInViewport) {
//		floatingImageComponent[0].className = 'floatingImageComponent isFixed';
//	} else {
//		floatingImageComponent[0].className = 'floatingImageComponent';
//		whatWeBelieveInFloatingInitializeWatcher.recalculateLocation;
//	};
//	if (!whatWeBelieveInFloatingInitializeWatcher.isBelowViewport) {
//		floatingImageComponent[0].className = 'floatingImageComponent sticksToBottom';
//	};
//});
//
//// How we work
//
////var howWeWorkFloatingInitializeWatcher = scrollMonitor.create(floatingTextComponent[1]);
////
////howWeWorkFloatingInitializeWatcher.stateChange(function() {
////	if (howWeWorkFloatingInitializeWatcher.isFullyInViewport) {
////		floatingImageComponent[1].className = 'floatingImageComponent isFixed';
////	} else {
////		floatingImageComponent[1].className = 'floatingImageComponent';
////		howWeWorkFloatingInitializeWatcher.recalculateLocation;
////	};
////	if (!howWeWorkFloatingInitializeWatcher.isBelowViewport) {
////		floatingImageComponent[1].className = 'floatingImageComponent sticksToBottom';
////	};
////});
//
////var howWeWorkFloatingInitializeWatcher = scrollMonitor.create(floatingTextComponent[1]);
//
////var howWeWorkFloatingImageBox = document.getElementById('howWeWork-floatingComponent').getElementsByClassName('floatingImageBox');
////
////
////var howWeWorkFloatingInitializeWatcher = scrollMonitor.create(howWeWorkFloatingComponent, - (window.innerHeight*0.5 - 5));
////var howWeWorkFloatingEndWatcher = scrollMonitor.create(floatingTextComponent[1]);
////// 5px represent KEYGRADIENTHEIGHT
////
////
////howWeWorkFloatingInitializeWatcher.stateChange(function() {
////	
////		
//////			howWeWorkFloatingInitializeWatcher.recalculateLocation;
////	
////		if (howWeWorkFloatingInitializeWatcher.isAboveViewport) {
////			floatingImageComponent[1].className = 'floatingImageComponent isFixed';
////		} else {
////			floatingImageComponent[1].className = 'floatingImageComponent';
//////			howWeWorkFloatingInitializeWatcher.recalculateLocation;
////		};
////});
////
////howWeWorkFloatingEndWatcher.stateChange(function() {
////	
////			howWeWorkFloatingEndWatcher.recalculateLocation;
////	
////		if (!howWeWorkFloatingEndWatcher.isBelowViewport) {
////			floatingImageComponent[1].className = 'floatingImageComponent stickToBottom';
////		} else {
////			floatingImageComponent[1].className = 'floatingImageComponent';
//////			howWeWorkFloatingEndWatcher.recalculateLocation;
////		};
////});
//
//
//
//// Sync Text to Image
//
//// What we believe in
//
//var whatWeBelieveInFloatingTextBoxWatcher1 = scrollMonitor.create(whatWeBelieveInFloatingTextBox[0]);
//var whatWeBelieveInFloatingTextBoxWatcher2 = scrollMonitor.create(whatWeBelieveInFloatingTextBox[1]);
//var whatWeBelieveInFloatingTextBoxWatcher3 = scrollMonitor.create(whatWeBelieveInFloatingTextBox[2]);
//
//whatWeBelieveInFloatingTextBoxWatcher1.fullyEnterViewport(function() {
//	
//	var i;
//	for (i = 0; i < whatWeBelieveInFloatingImageBox.length; i++) {
//		whatWeBelieveInFloatingImageBox[i].className = 'floatingImageBox';
//	}
//	whatWeBelieveInFloatingImageBox[0].className = 'floatingImageBox active';
//});
//
//whatWeBelieveInFloatingTextBoxWatcher2.fullyEnterViewport(function() {
//	
//	var i;
//	for (i = 0; i < whatWeBelieveInFloatingImageBox.length; i++) {
//		whatWeBelieveInFloatingImageBox[i].className = 'floatingImageBox';
//	}
//	whatWeBelieveInFloatingImageBox[1].className = 'floatingImageBox active';
//});
//
//whatWeBelieveInFloatingTextBoxWatcher3.fullyEnterViewport(function() {
//	
//	var i;
//	for (i = 0; i < whatWeBelieveInFloatingImageBox.length; i++) {
//		whatWeBelieveInFloatingImageBox[i].className = 'floatingImageBox';
//	}
//	whatWeBelieveInFloatingImageBox[2].className = 'floatingImageBox active';
//});
//
//// How we work
//
////var howWeWorkFloatingTextBoxWatcher1 = scrollMonitor.create(howWeWorkFloatingTextBox[0]);
////var howWeWorkFloatingTextBoxWatcher2 = scrollMonitor.create(howWeWorkFloatingTextBox[1]);
////var howWeWorkFloatingTextBoxWatcher3 = scrollMonitor.create(howWeWorkFloatingTextBox[2]);
////
////howWeWorkFloatingTextBoxWatcher1.fullyEnterViewport(function() {
////	floatingImageContainer[1].style.transform = 'translate3d(0, 0, 0)';
////});
////
////howWeWorkFloatingTextBoxWatcher2.fullyEnterViewport(function() {
////	floatingImageContainer[1].style.transform = 'translate3d(0, -100vh, 0)';
////});
////
////howWeWorkFloatingTextBoxWatcher3.fullyEnterViewport(function() {
////	floatingImageContainer[1].style.transform = 'translate3d(0, -200vh, 0)';
////});
//
//
//// Change Background of redThread on summary sections
//// --------------------------------------------------
//
//var whatWeBelieveInSummaryWatcher = scrollMonitor.create(whatWeBelieveInSummary);
//var whatWereGoodAtWatcher = scrollMonitor.create(whatWereGoodAt);
//
//whatWeBelieveInSummaryWatcher.partiallyExitViewport(function() {
//	if(whatWeBelieveInSummaryWatcher.isAboveViewport) {
//		redThread.className = 'isShrinked isOnGray';
//	} else {
//		redThread.className = 'isShrinked';
//	};
//});
//
//whatWeBelieveInSummaryWatcher.exitViewport(function() {
//	if(whatWeBelieveInSummaryWatcher.isAboveViewport) {
//		redThread.className = 'isShrinked';
//	};
//});
//
//whatWereGoodAtWatcher.partiallyExitViewport(function() {
//	if(whatWereGoodAtWatcher.isAboveViewport) {
//		redThread.className = 'isShrinked isOnGray';
//	} else {
//		redThread.className = 'isShrinked';
//	};
//});
//
//whatWereGoodAtWatcher.exitViewport(function() {
//	if(whatWereGoodAtWatcher.isAboveViewport) {
//		redThread.className = 'isShrinked';
//	};
//});
//
