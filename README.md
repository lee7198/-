🦁 멋쟁이 사자처럼 10기
===============

> 계명대학교 전공반 이도경

* [1주차 프론트엔트 과제물 ](#week_1)
  * HTML, CSS, Javascript 란?
  * 브라우저의 동작 방식에 대해서
  * DOM에 대해서
  * HTTP, HTTPS에 대해서
* 공통
  * git 사용해보기 
  * github 계정만들기
  * README.md 파일에 정리하고 github에 올리기

week_1
---------
#### HTML, CSS, Javascript 란?
**HTML (hypertext markup language)** 의 약자로써 익히 일려 진 웹 서비스를 위한 언어이다. 태그(Tag) 혹은 요소(Element)들로 비교적 간단하게 구조적 문서를 작성할 수 있는 장점이 있습니다. 
> 하지만 프로그래밍 언어가 아니기에 단독 사용 시 제한된  기능들이 다수 존재합니다. 
##### 대표적인 HTML의 기본 구조
```html
<!doctype html>
<html>
  <head>
    <title>Lion's HTML</title>
  </head>
  <body>
    <p>Hello Lion!</p>
  </body>
</html>
```
예를 들어 같이 사용되는 언어 중 하나인 CSS (cascading style sheets)는 마크업 언어의 시각적인 속성들을 조작할 수 있는 언어입니다. 개발자는 HTML + CSS로 대부분의 요구 조건들을 만족할 수 있지만 해당 언어 역시 프로그래밍 언어가 아니기에 특수한 효과 및 기능에 제한이 있습니다. 
>번외로 CSS 내 변수나 상속 기능, 반복문 등을 지원하여 양이 많아 복잡한 스타일 시트를 조금 더 편하게 도와주는 SASS, LESS 등이 존재합니다. 
##### 선택자를 활용하여 속성을 제어할 수 있으며 HTML 내에서 사용 시 <style> 태그로 감싸져야 한다.
```css
p {color: "#6dbfb6"}
```
CSS + HTML으로 웹페이지는 제작하였지만 다소 정적인 상태를 유지합니다. 이를 더욱 유연하고 동적인 페이지로 만들기 위해서는 Javascript를 활용하여 완성도 있는 결과물을 제작할 수 있습니다. Javascript는 객체 기반의 프로그래밍 언어로써 웹 브라우저에서 주로 사용되며, 접근성과 범용성이 넓어 많은 라이브러리 등에 기반하여 사용되고 있다.
##### Javascript의 함수 사용 예시이며 CSS와 마찬가지로 문서 내 사용 시 <script> 태그로 감싸야 한다.
```javascript
alert("Hello Lion!");
```
#### 브라우저의 동작 방식에 대해서
#### DOM에 대해서
#### HTTP, HTTPS에 대해서
