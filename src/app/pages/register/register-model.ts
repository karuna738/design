export const menuData: any[] = [
    { id: 1, step: 'STEP 1', title: 'YOUR INFO' },
    { id: 2, step: 'STEP 2', title: 'SELECT PLAN' },
    { id: 3, step: 'STEP 3', title: 'ADD-ONS' },
    { id: 4, step: 'STEP 4', title: 'SUMMARY' }
]

export const addOnsMonth: any[] = [
    { id: 0, service: "Online servie", content: "Access to multiplayer games", plan: "+$1/mo", checked: false },
    { id: 1, service: "Larger storage", content: "Extra 1TB of cloud save", plan: "+$2/mo", checked: false },
    { id: 2, service: "Customizable profile", content: "Custom theme on your profile", plan: "+$3/mo", checked: false }
];

export const addOnsYear: any[] = [
    { id: 0, service: "Online servie", content: "Access to multiplayer games", plan: "+$10/yr", checked: false },
    { id: 1, service: "Larger storage", content: "Extra 10TB of cloud save", plan: "+$20/yr", checked: false },
    { id: 2, service: "Customizable profile", content: "Custom theme on your profile", plan: "+$30/yr", checked: false }
];

export const planMonth = [
    { id: 0, image: '/register_img/icon-arcade.svg', title: 'Arcade', plan: '$9/mo', month: '' },
    { id: 1, image: '/register_img/icon-advanced.svg', title: 'Advanced', plan: '$12/mo', month: '' },
    { id: 2, image: '/register_img/icon-pro.svg', title: 'Pro', plan: '$15/mo', month: '' }
];

export const planYear = [
    { id: 0, image: '/register_img/icon-arcade.svg', title: 'Arcade', plan: '$90/yr', month: '2 months free' },
    { id: 1, image: '/register_img/icon-advanced.svg', title: 'Advanced', plan: '$120/yr', month: '2 months free' },
    { id: 2, image: '/register_img/icon-pro.svg', title: 'Pro', plan: '$150/yr', month: '2 months free' }
]