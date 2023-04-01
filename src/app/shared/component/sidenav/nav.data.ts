import { INavbarData } from "./helper";

export const navbarDataAdmin:INavbarData[]=[
    {
        routeLink:'dashboard',
        icon:'fal fa-home',
        label:'Dashboard'
    },
    {
        routeLink: 'utilisateur',
        icon: 'fal fa-user',
        label: 'Utilisateur',
        items:[
            {
                routeLink: 'utilisateur/liste',
                icon: 'fal fa-user',
                label:'Liste',
                
            },
            {
                routeLink: 'utilisateur/roles',
                icon: 'fal fa-user',
                label:'Roles',
                
            },
        ]
    },
    {
        routeLink: 'dataListe',
        icon: 'fal fa-list',
        label: 'Data Liste',
        items:[   
            {  
                routeLink: 'dataListe/newsletter',
                icon: 'fal fa-user',
                label:'Newsletters',
                
            },
            {
                routeLink: 'dataListe/nosContact',
                icon: 'fal fa-user',
                label:'Nos Contact',
                
            },
        ]
    },


    {
        routeLink: 'products',
        icon: 'fal fa-box-open',
        label: 'Products',
        items:[
            {
                routeLink: 'products/level1',
                icon: 'fal fa-box-open',
                label:'liste produit1',
                items:[
                    {
                        routeLink: 'products/level1_1',
                        icon: 'fal fa-box-open',
                        label:'produit1.1'
                    },
                    {
                        routeLink: 'products/level1_2',
                        icon: 'fa fa-circle',
                        label:'produit1.2'
                    },
                ]
            },
            {
                routeLink: 'products/Level2',
                icon: 'fal fa-box-open',
                label:'produit2',
                items:[
                    {
                        routeLink: 'products/Level2..1',
                        icon: 'fa fa-circle',
                        label:'produit2..1'
                    },
                ]
            },
            {
                routeLink: 'products/Level3',
                icon: 'fal fa-box-open',
                label:'produit3'
            }
        ]
    },
    {
        routeLink: 'statistics',
        icon: 'fal fa-chart-bar',
        label: 'Statistics'
    },
    {
        routeLink: 'coupens',
        icon: 'fal fa-tags',
        label: 'Coupens',
        items:[
            {
                routeLink: '/coupens/create',

                label:'Coupens1',
                items:[
                    {
                        routeLink: 'products/Level1..1',
                        label:'produit1..2'
                    },
                    {
                        routeLink: 'products/Level1..2',
                        label:'produit1..2'
                    },
                ]
            },
            {  
                routeLink: 'coupens/liste',
                label:'Coupens2',
                // items:[
                //     {
                //         routeLink: 'products/Level1..1',
                //         label:'liste produit1..2'
                //     },
                //     {
                //         routeLink: 'products/Level1..2',
                //         label:'liste produit1..2'
                //     },
                // ]
            }
        ]
    },
    {
        routeLink: 'pages',
        icon: 'fal fa-file',
        label: 'Pages',
        items:[
            {
                routeLink: 'pages/accueil',
                label:'Accueil',
            },
            {
                routeLink: 'pages/presentations',
                label:'presentation',
            },
            {
                routeLink: 'pages/clients',
                label:'client',
               
            },
            {
                routeLink: 'pages/atouts',
                label:'atous',
               
            }, 
            {
                routeLink: 'pages/contacts',
                label:'contact',
            },
            {
                routeLink: 'pages/services',
                label:'service',
               
            },
            
                
        ]
    },
    {
        routeLink: 'media',
        icon: 'fal fa-camera',
        label: 'Media',
        items:[
            {  
                routeLink: 'media/essai',
                label:'essai',
                
            },
           
        ]
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Settings',
        expanded:false,
        items:[
            {
                routeLink: 'settings/profile',
                label:'Profile'
            },
            { 
                routeLink: 'settings/customize',
                label:'Customize'
            },
        ]
    },
];
 
   
