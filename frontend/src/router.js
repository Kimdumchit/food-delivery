
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import FrontOrderManager from "./components/listers/FrontOrderCards"
import FrontOrderDetail from "./components/listers/FrontOrderDetail"
import FrontPaymentManager from "./components/listers/FrontPaymentCards"
import FrontPaymentDetail from "./components/listers/FrontPaymentDetail"

import StoreFoodCookingManager from "./components/listers/StoreFoodCookingCards"
import StoreFoodCookingDetail from "./components/listers/StoreFoodCookingDetail"

import RiderDeliveryManager from "./components/listers/RiderDeliveryCards"
import RiderDeliveryDetail from "./components/listers/RiderDeliveryDetail"



export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/fronts/orders',
                name: 'FrontOrderManager',
                component: FrontOrderManager
            },
            {
                path: '/fronts/orders/:id',
                name: 'FrontOrderDetail',
                component: FrontOrderDetail
            },
            {
                path: '/fronts/payments',
                name: 'FrontPaymentManager',
                component: FrontPaymentManager
            },
            {
                path: '/fronts/payments/:id',
                name: 'FrontPaymentDetail',
                component: FrontPaymentDetail
            },

            {
                path: '/stores/foodCookings',
                name: 'StoreFoodCookingManager',
                component: StoreFoodCookingManager
            },
            {
                path: '/stores/foodCookings/:id',
                name: 'StoreFoodCookingDetail',
                component: StoreFoodCookingDetail
            },

            {
                path: '/riders/deliveries',
                name: 'RiderDeliveryManager',
                component: RiderDeliveryManager
            },
            {
                path: '/riders/deliveries/:id',
                name: 'RiderDeliveryDetail',
                component: RiderDeliveryDetail
            },




    ]
})
