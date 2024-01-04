<!-- @format -->

```
💡 특정 요소를 드래그 가능하게 하려면 요소의 "draggable" 속성을 "true"로 설정해야 한다
```

- drop 이벤트의 경우 dragenter 와 dragover 이벤트를 차단해야 하므로, 보통 핸들러에서 e.preventDefault()를 이용해 다른 이벤트를 차단

### 1. drag

요소를 드래그 할 때 계속 발생

### 2.dragstart

dragstart 이벤트는 draggable한 요소를 끌기 시작할 때 발생

### 3. dragenter

드래그한 요소가 드롭 대상 위에 올라갔을 때 발생

### 4. dragleave

드래그한 요소가 드롭 대상에서 벗어났을 때 발생

### 5. dragover

드래그한 요소가 대상 위로 지나갈 때 계속 발생
클라이언트 윈도우를 기준으로 한 마우스의 위치(event.clientX, clientY) 와 동시에 이벤트 요소의 왼쪽 상단을 기준으로한 마우스의 위치(event.offsetX, offsetY)

### 6. drop

드래그한 요소를 드롭 대상에 드롭했을 때 발생

### dataTransfer

- 드래그&드롭 이벤트 중에 필요한 데이터를 저장하는 객체
- 모든 드래그 이벤트에서 dataTransfer 속성으로 접근이 가능
- dataTransfer.setData(string, value) 메서드를 이용해 값을 저장(string = key)
- dataTransfer.getData(string) 메서드를 이용해서 값을 가져온다
