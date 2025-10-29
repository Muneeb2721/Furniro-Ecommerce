import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Shop } from './shop/shop';
import { SingleProduct } from './single-product/single-product';
import { ProductComparison } from './product-comparison/product-comparison';
import { Cart } from './cart/cart';
import { Checkout } from './checkout/checkout';
import { Contact } from './contact/contact';
import { Blog } from './blog/blog';
import { Frame } from './frame/frame';
import { CartSidebar } from './cart-sidebar/cart-sidebar';
import { About } from './about/about';
import { WishList } from './wish-list/wish-list';



export const routes: Routes = [
    
    {
    path: '',
    redirectTo: 'home-page',
    pathMatch: 'full' // ✅ Important
    }
    ,
    {
        path: 'home-page',
        component: Home
    }
    ,
    {
        path: 'shop-page',
        component: Shop
    }
    ,
    {
        path: 'single-product-page',
        component: SingleProduct
    }
    ,
    {
        path: 'product-comparison-page',
        component: ProductComparison
    }
    ,
    {
        path: 'cart-page',
        component: Cart
    }
    ,
    {
        path: 'checkout-page',
        component: Checkout
    }
    ,
    {
        path: 'contact-page',
        component: Contact
    }
    ,
    {
        path: 'blog-page',
        component: Blog
    }
    ,
    {
        path: 'about-page',
        component: About
    }
    ,
    {
        path: 'wish-page',
        component: WishList
    }
    ,
    {
        path: 'footer-page',
        component: Footer
    }
        
];