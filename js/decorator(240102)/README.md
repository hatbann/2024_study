<!-- @format -->

## Decorator

`:fire: 다른 객체를 꾸며주는 역할을 하는 함수`

- ES6에 새롭게 추가된 문법(아직 자바스크립트에서 정식지원 X)
- babel을 설치해 트랜스파일링을 거친 코드를 실행해야함

```
$ npm i -D @babel/cli @babel/node @babel/core @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties
```

```
// .babelrc
{
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": false }]
  ]
}

```

### Usage

- 클래스의 method, property 변경 뿐만 아니라 메서드 실행 전 후로 추가적인 코드를 실행하는 등, 별도의 코드 수정을 안할 수 있다

### Target, Property, Descriptor

데코레이터 함수는 target, property, descriptor의 3가지 인자를 받는다

- target : 데코레이터가 적용될 객체
- property : 데코레이터가 적용될 객체의 프로퍼티 이름
- descriptor : 객체의 프로퍼티에 대한 정보(writable, value 등)

### 종류

1. Class Method decorator(https://github.com/hatbann/2024_study/js/decorator(240102)/classMethodDecorator)
2. Class Property(멤버변수) decorator(https://github.com/hatbann/2024_study/js/decorator(240102)/classPropertyDecorator)
3. Class decorator(https://github.com/hatbann/2024_study/js/decorator(240102)/classDecorator)
