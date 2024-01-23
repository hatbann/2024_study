<!-- @format -->

## Xstate

-> 자바스크립트로 만든 유한 상태 기계

<br>

설치

```
npm i xstate @xstate/react
```

<br>

### Machine 정의

- createMachine 을 통해 생성
- id : machine을 식별할 수 있는 고유 Id
- initial : 초기 상태가 필요할 경우 정의
- states : 가질 수 있는 상태 정의(중첩 가능)

### Event

- on : 실행 될 수 있는 이벤트 정의
- target : 이벤트 실행 후 전이되는 상태
- action : 이벤트 발생시 실행되는 함수 정의

### Context

- machine에 정의된 양적 데이터(문자열, 숫자 , 개체 등)

### State Nodes

- type
  - atomic : 자식 states X
  - compound : 하나 이상의 자식 states, inital state 존재
  - parallel : 하나 이상의 자식 states, inital state 존재 X
  - final : 가장 끝의 leaf node
  - history : 직전의 상태 기억(shallow, deep 가능)
