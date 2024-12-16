import { lazy } from 'react';

export const MainLayout = lazy(() => import('../screens/MainLayout.jsx'));
export const Dashboard = lazy(() => import('../screens/Dashboard'));
export const Faq = lazy(() => import('../screens/Faq.jsx'));
export const Pricing = lazy(() => import('../screens/Pricing.jsx'));
export const PrivacyPolicy = lazy(() => import('../screens/PrivacyPolicy.jsx'));
export const Profile = lazy(() => import('../screens/Profile.jsx'));
export const Settings = lazy(() => import('../screens/Setting.jsx'));
export const Supports = lazy(() => import('../screens/Support.jsx'));
export const Unhandled = lazy(() => import('../screens/Unhandled'));
export const Landing = lazy(() => import('../screens/Landing.jsx'));
export const SignUpPage = lazy(() => import('../screens/SignUpPage'));
export const SignInPage = lazy(() => import('../screens/SignInPage'));
export const ForgotPasswordPage = lazy(() => import('../screens/ForgotPasswordPage.jsx'));
