import { lazy } from 'react';

export const Navbar = lazy(() => import('../components/Navbar/Navbar'));
export const NavbarHeader = lazy(() => import('../components/Navbar/NavbarHeader'));
export const NavbarMain = lazy(() => import('../components/Navbar/NavbarMain'));
export const NavbarFooter = lazy(() => import('../components/Navbar/NavbarFooter'));
export const MainLayoutHeader = lazy(() => import('../components/MainLayout/MainLayoutHeader'));
export const MainLayoutBody = lazy(() => import('../components/MainLayout/MainLayoutBody'));
export const MainLayoutFooter = lazy (() => import('../components/MainLayout/MainLayoutFooter'));
export const LandingHeader = lazy(() => import('../components/Landing/LandingHeader'));
export const LandingBody = lazy(() => import('../components/Landing/LandingBody'));
export const LandingFooter = lazy(() => import('../components/Landing/LandingFooter'));
export const LandingBodyFirstSection = lazy(() => import('../components/Landing/LandingBodyFirstSection'));
export const LandingBodySecondSection = lazy(() => import('../components/Landing/LandingBodySecondSection'));
export const LandingBodyThirdSection = lazy(() => import('../components/Landing/LandingBodyThirdSection'));
export const LandingBodyFourthSection = lazy(() => import('../components/Landing/LandingBodyFourthSection'));