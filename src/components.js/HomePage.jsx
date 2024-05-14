import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './MainPage';
import { AboutPage } from './AboutPage';

export function HomePage() {
    return (
        <div>
            <div>
                <MainPage />
            </div>
            <h1>Главная страница</h1>
        </div>
    );
}
