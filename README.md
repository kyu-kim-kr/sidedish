# SideDish Web Application Project By Rano, Eve, Kyu of Team 18

SideDish 웹 어플리케이션은 코드스쿼드에서 샘플로 제공하는 웹 기획서와 Mock API를 참고해서 웹개발을 하는 프로젝트입니다.

## Description

주요 구현 사항은 아래와 같습니다:

### 프론트
1. 리액트를 통한 Single Page Application
2. 로그인, 장바구니 등이 나타난 헤더 구현
3. 카테고리 별로 나뉘어진 반찬들과 슬라이더
4. 모든 카테고리 보기를 누르면 반찬들이 더 나오는 ..
5. 반찬 이미지의 호버 효과
6. 반찬 이미지를 누르면 주문할 수 있는 페이지가 나옴

### 백
1. 스프링 부트를 통해서 프론트가 DB와 연동할 수 있는 API 구현
2. EC2에서 Ngnix와 Tomcat연동 (구현예정)
3. Github Oauth를 통한 로그인 (구현예정)

## 실행 방법

### 프론트

클론해서 `frontend` 폴더로 들어갑니다.
아래 명령어를 통해서 npm을 install합니다.
```
npm install
```
nodejs, npm, npx 등이 최신버전이어야 에러가 안납니다.
install이 완료되면 아래 명령어를 통해 리액트 앱을 실행할 수 있습니다.
```
npm start
```

### 백
먼저, 클론합니다.
`application.properties`에서 MySQL 테이블이름, 아이디, 비밀번호를 설정해줍니다.

`backend` 폴더로 가서 아래 명령어를 통해 프로젝트를 빌드합니다.
```
./gradlew build jar
```
빌드가 완료된 파일은 `backend/build/libs` 파일에 생성되게 됩니다.

실행하고 싶은 서버에서 아래 명령어를 통해 jar 파일을 실행합니다.
```
java -jar <파일이름>
```

## 백-API 안내

기본적으로 URL은 `/api`로 시작합니다.
자세한 API 내용은 일단 코드를 참고해주세요.

## 커밋 메시지 규칙

- feat : 새로운 기능 추가
- fix : 버그 수정
- docs : 문서의 수정
- style : (코드의 수정 없이) 스타일(style)만 변경(들여쓰기 같은 포맷이나 세미콜론을 빼먹은 경우)
- refactor : 코드를 리펙토링
- test : Test 관련한 코드의 추가, 수정
- chore : (코드의 수정 없이) 설정을 변경

커밋은 기본적으로 한글로, 말머리만 영어로

## 프론트 컴포넌트 구조

![컴포넌트 구조](https://user-images.githubusercontent.com/62237639/116667247-f09f4f80-a9d6-11eb-8afe-03110e3d4ab3.png)

## 브랜치 규칙

![브랜치 규칙](https://user-images.githubusercontent.com/62237639/115202663-94fcd880-a131-11eb-8708-23c7a09cc200.png)

## 프로젝트 관리

![프로젝트 관리](https://user-images.githubusercontent.com/62237639/115204101-16a13600-a133-11eb-994c-f4c8ba1d22db.png)

## 애자일하게?

![프로젝트 진행 방식](https://user-images.githubusercontent.com/62237639/115204313-4fd9a600-a133-11eb-9e1a-13d6f06182c5.png)



