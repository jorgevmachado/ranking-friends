import {animate, query, state, style, transition, trigger} from '@angular/animations';

export const openClose = trigger('openClose', [
  state(
    'open', style({
      opacity: 1
    })
  ),
  state('closed', style({
      height: '0px',
      opacity: 0,
      padding: 0,
      'margin-top': '0',
      position: 'absolute',
      'z-index': '-1'
    })
  ),
  transition('open => closed', [animate('0.2s')]),
  transition('closed => open', [animate('0.2s')])
]);

export const routerTransition = trigger('routerTransition', [
  // route 'enter' transition
  transition(':enter', [
    style({opacity: 0}),
    animate('5s', style({opacity: 1}))
  ])
]);

export const fade = trigger('fade', [
  state('in', style({opacity: 0})),
  state('show', style({opacity: 1})),
  state('hide', style({opacity: 0})),

  transition('show => hide', [animate('.5s')]),
  transition('hide => show', [animate('.5s')]),
  transition(':leave', [
    // before 2.1: transition('* => void', [
    style({opacity: 1}),
    animate('0.5s ease-in-out', style({opacity: 0}))
  ])
]);

export const fadeIn = trigger('fadeIn', [
  state('in', style({opacity: 0})),
  transition(':enter', [
    // before 2.1: transition('* => void', [
    style({opacity: 0}),
    animate('0.5s ease-in-out', style({opacity: 1}))
  ]),
  transition(':leave', [
    // before 2.1: transition('* => void', [
    style({opacity: 1}),
    animate('0.5s ease-in-out', style({opacity: 0}))
  ])
]);

export const slide = trigger('slide', [
  transition('* <=> *', [
    // Initial state of new route
    query(':enter', style({
        position: 'fixed',
        width: '100%',
        transform: 'translateX(-100%)'
      }),
      {optional: true}
    ),

    // move page off screen right on leave
    query(
      ':leave', animate('500ms ease', style({
          position: 'fixed',
          width: '100%',
          transform: 'translateX(100%)'
        })
      ),
      {optional: true}
    ),

    // move page in screen from left to right
    query(':enter', animate('500ms ease', style({
        opacity: 1,
        transform: 'translateX(0%)'
      })
      ),
      {optional: true}
    )
  ])
]);

export const fadeIns =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('fadeIn', [
    state('*', style({opacity: 0, transition: 'opacity 3s'})),

    transition(':enter', [
      style({opacity: 0, display: 'none'}),
      animate('2s', style({opacity: 1, display: 'inherit'}))
    ]),
    transition(':leave', [
      style({opacity: 1, color: 'green', display: 'none'}),
      // animate(500, style({ opacity: 0 }))
      animate('.1s', style({opacity: 0, display: 'none'}))
    ])
  ]);

export const slideInOutAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('slideInOutAnimation', [
    // end state styles for route container (host)
    state('*', style({
        // the view covers the whole screen with a semi tranparent background
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
      })
    ),

    // route 'enter' transition
    transition(':enter', [
      // styles at start of transition
      style({
        // start with the content positioned off the right of the screen,
        // -400% is required instead of -100% because the negative position adds to the width of the element
        right: '-400%',

        // start with background opacity set to 0 (invisible)
        backgroundColor: 'rgba(0, 0, 0, 0)'
      }),

      // animation and styles at end of transition
      animate('.5s ease-in-out', style({
          // transition the right position to 0 which slides the content into view
          right: 0,
          // transition the background opacity to 0.8 to fade it in
          backgroundColor: 'rgba(0, 0, 0, 0.8)'
        })
      )
    ]),

    // route 'leave' transition
    transition(':leave', [
      // animation and styles at end of transition
      animate('.5s ease-in-out', style({
          // transition the right position to -400% which slides the content out of view
          right: '-400%',
          // transition the background opacity to 0 to fade it out
          backgroundColor: 'rgba(0, 0, 0, 0)'
        })
      )
    ])
  ]);
