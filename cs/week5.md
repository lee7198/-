### 4주차 과제물

-Stop Watch 만들기

TIme() 함수와 SetInterval() 함수 중 고민했지만, 간단한 값을 원했기에 SetInterval()을 사용하였습니다.

```javascript
//setInterval([실행할 함수], 주기);
//주기는 밀리세컨즈 단위이며 1000 = 1초

let Interval = setInerval(countUp, 10);

//정지 시 사용하게될 함수
// crlearInterval([변수]);

crlearInterval(interval);
```

```javascript
//초단위로 받은 값을 분, 시로 구분해야 했기에 Math 객체를 이용하였습니다.
//나머지의 몫을 구할 때 사용하였습니다.

Math.floor(3.123);
//3 
```

```javascript
//Math를 사용하기 전에는 toFixed() 함수를 사용했었지만, 반올림 해버려 사용하지 못했습니다.

3.567.toFixed(2)
//3.57 
```
