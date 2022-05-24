# Banner-Maker

아는 사람은 알겠지만 이미 velog에서 나름 상용화되어있는 배너 생성기가 존재한다.
[Banner Maker](https://velog.io/@godori/banner-maker)를 보면 제작 과정을 포함하여 편리하고 심플한 배너생성기가 이미 존재한다. 하지만 단색배경이나 랜덤한 이미지가 아닌 특정한 이미지를 활용해 시리즈물의 배너를 만들경우 활용할 수 없다는 단점이 존재하였고, 이 단점을 극복하기 위해 이 토이프로젝트를 구상하였다.
https://donggni0712.github.io/banner-maker/

## Goals

- [Banner Maker](https://velog.io/@godori/banner-maker)에서 구현되어 있는 기본적인 기능들을 사용할 수 있다.
- 태그를 통해 이미지를 불러오고 저장할 수 있다.
- 불러온 이미지가 마음에 들 경우 다음에 또 활용하기 위해 저장할 수 있다.
- 내 컴퓨터에서 특정한 이미지를 배너의 배경으로 활용할 수 있다.

## Stack

### Use Stack

| <a href="https://ko.reactjs.org/"><img src = "./doc/img/react.png" height = 40px></a> | <a href="https://www.npmjs.com/"><img src = "./doc/img/npm.png" height = 25px></a> | <a href="https://nodejs.org/ko/https://nodejs.org/ko/"><img src="./doc/img/nodejs.png" height= 35px></a> | <a href="https://pages.github.com/"><img src="./doc/img/github.png" height=40px></a> |
| :-----------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------: |
|                                         React                                         |                                        npm                                         |                                                 Node Js                                                  |                                     Github Page                                      |

## Todo

- Figmaf를 이용해 디자인 후 코드 수정
- UseEffect가 수시로 호출됨 => 과부하 위험. promise, then await등을 이용해 적절히 처리할 필요가 있음.

## Development Note

- 22.05.22 : 이미지 업로드 기능, 글자 색, 배경색 설정 기능 구현
- 22.05.23 : 글자 폰트 변경 기능 구현
- 22.05.24 : 하나의 js파일로 구성된 지저부한 코드 refactoring
