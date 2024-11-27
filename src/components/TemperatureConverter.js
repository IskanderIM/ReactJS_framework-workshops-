// homework lesson 3
// task1
// Задание 1: Температурный конвертер с Material UI
// Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.
// Компоненты:
// Используйте TextField для ввода значения температуры.
// Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).
// Логика:
// При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
// Реализуйте конвертацию температур в обоих направлениях.

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";

export default function TemperatureConverter() {
    const [textCelsius, setCelsius] = useState("")
    // const [printedTextCelsius, setPrintedCelsius] = useState("")
    const [textFahrenheit, setFahrenheit] = useState("")
    // const [printedTextFahrenheit, setPrintedFahrenheit] = useState("")
    const converted = (e) => {
        e.preventDefault();
        if (!isNaN(textCelsius) && textCelsius.length !== 0) {
            setFahrenheit((textCelsius * 1.8) + 32);
            //setCelsius('');
        } else if (!isNaN(textFahrenheit) && textFahrenheit.length !== 0) {
            setCelsius((textFahrenheit - 32) * 5 / 9)
            //setFahrenheit('')
        } else {
            return;
        }
    }
    const clearFahrenheit = () => {
        setFahrenheit('')
    }
    const clearCelsius = () => {
        setCelsius('')
    }
    return (
        <div>
            <TextField id="Celsius" label="Цельсия" variant="standard" value={textCelsius} onChange={(e) => setCelsius(e.target.value)} onClick={clearFahrenheit} />
            <Button variant="contained" onClick={converted}>Преобразовать</Button>
            <TextField id="Fahrenheit" label="Фаренгейта" variant="standard" value={textFahrenheit} onChange={(e) => setFahrenheit(e.target.value)} onClick={clearCelsius} />

        </div>
    );
}