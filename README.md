<h1 align="center">Vue Calendar</h1>
<p align="center">calendar + datepicker for Vue.js</p>

## Demo
Demo 👉 ./dist/index.html

or check 👉 <a href="https://ghost.cs.nccu.edu.tw/~s9862/dist/">here</a>

___

## Project Setup 

### install and run

```
npm install
npm run serve
```

### run unit test
```
npm run test
```

### build dist

```
npm run build
```
___

## Usage

### Vue.use()

```javascript
import VueCalendar from '@/components/VueCalendar/index';
// VueCalendar will be registered globally
Vue.use(VueCalendar);
````
#### Calendar Template Usage
````html
<VueCalendar
  :date="date"  // YYYY-MM-DD
  @selectDate="selectDate"
/>
````
#### Date Picker Template Usage
````html
<VueCalendar
  :date="date"  // YYYY-MM-DD
  isDatePickerMode
  @selectDate="selectDate"
/>
````
---
## Available props
| Prop                          | Type            | Default     | Example     | Description                              |
|-------------------------------|-----------------|-------------|-------------|------------------------------------------|
| date                          | String          | null        | '2021-08-09'| Calendar Current Date                    |
| isDatePickerMode              | Boolean         | false       | true        | Switch calendar to date picker           |

### Events

| Event          | Output       | Description                                                        |
| :------------- | :------------- | :-----------------------------------------------------------: 
| selectDate |String| Get clicked day string

