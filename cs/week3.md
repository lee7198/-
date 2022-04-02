
### CSS로 Login Form 구성하기
### Bootstrap 사용하여 UI 구성하기
 [실습물](https://lee7198.github.io/LikeLion/week3-2/)

## 이벤트 버블링이란

이벤트 버블링은 예를 들어 DOM 객체의 자식 노드에서 이벤트 발생 시 부모 노드로 이벤트 요소들이 전달되어 가는 특성을 의미합니다.

> 반대의 의미인 캡처링 또한 존재하며 가장 최상위 노드인 HTML로 부터 내려오는 구조입니다.

![이벤트 버블링](/img/버블링.png)

원하지않은 이벤트 버블링을 막기위한 방법도 존재합니다.

```html
<body onclick="alert(`버블링은 여기까지 도달하지 못합니다.`)">
  <button onclick="e.stopPropagation()">클릭해 주세요.</button>
</body>
```

e.stopPropagation() 함수를 통해 버블링을 중단할 수 있습니다.

# 쉐도우 DOM 이란?

쉐도우 DOM은 DOM 구조를 지니고 있으나, 외부의 노출되지 않은 DOM을 의미하고, DOM의 구조를 캡슐화, 동작을 숨기는 등 다른 코드와의 충돌을 막기위한 분리 등으로 쓰입니다.

쉐도우 DOM은 숨겨진 DOM 트리가 통상적인 DOM 트리에 속한 요소에 부착될 수 있게 합니다. 이 shadow DOM 트리는 shadow root로부터 시작되어 원하는 모든 요소의 안에 부착될 수 있으며, 그 방법은 일반 DOM과 같습니다.

![쉐도우 DOM](/img/쉐도우.png)
쉐도우 DOM은 숨겨진 DOM 트리가 통상적인 DOM 트리에 속한 요소에 부착될 수 있게 합니다. 이 shadow DOM 트리는 shadow root로부터 시작되어 원하는 모든 요소의 안에 부착될 수 있으며, 그 방법은 일반 DOM과 같습니다.

알아야 할 조금의 shadow DOM 용어가 있습니다.

- **Shadow host**: shadow DOM이 부착되는 통상적인 DOM 노드.
- **Shadow tree**: shadow DOM 내부의 DOM 트리.
- **Shadow boundary**: shadow DOM이 끝나고, 통상적인 DOM이 시작되는 장소.
- **Shadow root**: shadow 트리의 root 노드.
