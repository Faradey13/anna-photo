import {RouteProps} from "react-router-dom";
import MainPage from "../pages/main/MainPage.tsx";
import About from "../pages/about/about.tsx";
import Contact from "../pages/contact/contact.tsx";
import Price from "../pages/price&service/price.tsx";
import Nu from "../pages/gallery/nu/nu.tsx";
import Content from "../pages/gallery/content/content.tsx";
import Family from "../pages/gallery/family/family.tsx";
import Child from "../pages/gallery/child/child.tsx";
import Goods from "../pages/gallery/goods/goods.tsx";
import Love from "../pages/gallery/love/love.tsx";
import Personal from "../pages/gallery/personal/personal.tsx";
import Thematic from "../pages/gallery/thematic/thematic.tsx";


export enum AppRoute {
    MAIN = 'main',
    ABOUT = 'about',
    CONTACT = 'contact',
    PRICE = 'price',
    CHILD = 'child',
    CONTENT = 'content',
    FAMILY = 'family',
    GOODS = 'goods',
    LOVE = 'love',
    NU = 'nu',
    PERSONAL = 'personal',
    THEMATIC = 'thematic'
}

export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.MAIN] : '/',
    [AppRoute.ABOUT]: '/about',
    [AppRoute.CONTACT]: '/contact',
    [AppRoute.PRICE]: '/price',
    [AppRoute.CHILD]: '/child',
    [AppRoute.CONTENT]: '/content',
    [AppRoute.FAMILY]: '/family',
    [AppRoute.GOODS]: '/goods',
    [AppRoute.LOVE]: '/love',
    [AppRoute.NU]: '/nu',
    [AppRoute.PERSONAL]: '/personal',
    [AppRoute.THEMATIC]: '/thematic',
}

export const RouteConfig: Record<AppRoute, RouteProps> = {
    [AppRoute.MAIN]:{
        path: RoutePath.main,
        element: <MainPage/>,
    },
    [AppRoute.ABOUT]:{
        path: RoutePath.about,
        element: <About/>,
    },
    [AppRoute.CONTACT]: {
        path: RoutePath.contact,
        element: <Contact/>,
    },
    [AppRoute.PRICE]:{
        path: RoutePath.price,
        element: <Price/>
    },
    [AppRoute.NU] : {
        path: RoutePath.nu,
        element: <Nu/>
    },
    [AppRoute.CONTENT] : {
        path: RoutePath.content,
        element: <Content/>,
    },
    [AppRoute.FAMILY]: {
        path: RoutePath.family,
        element: <Family/>,
    },
    [AppRoute.CHILD] : {
        path: RoutePath.child,
        element: <Child />,
    },
    [AppRoute.GOODS] : {
        path: RoutePath.goods,
        element: <Goods/>
    },
    [AppRoute.LOVE] : {
        path: RoutePath.love,
        element: <Love/>,
    },
    [AppRoute.PERSONAL] : {
        path: RoutePath.personal,
        element: <Personal/>,
    },
    [AppRoute.THEMATIC]: {
        path: RoutePath.thematic,
        element: <Thematic/>,
    }

}