// 백앤드 개발자
// 기능 개발자
// 유지 목록을 가져오는 기능
// AI기능을 적용한다면? 클라이언트 쪽에서 이미지만 서버한테 전달
// 서버에서 받은 이미지를 AI모델로 돌림 - > 클라이언트에게 전달..
// 인증 허가
// 백엔드 개발이 끝나면 => 명세서 작성

- yarn/npm
- npm 예전에 나온 라이브러리 관리툴
- yarn 빠른버전의 npm

# API 명세서
## GET /data
- 필요해더
    - 없음
- 예상결과값
```
[
     {
          "id": 0,
          "title": "Hi",
          "body": "Hello World"
     },
     {
          "id": 1,
          "title": "two",
          "body": "Hello World2"
     }
]
```

## GET /data/:id
- 필요해더
    - 없음
- Responde Data
```
  {
          "id": 0,
          "title": "Hi",
          "body": "Hello World"
     }
```
## POST /data
- 필요해더
    - Content-Type:"application/json"
- 필요바디
    - Any JSON
- Response
    ~~~

## DELETE/data/:id
- 필요해더 
    -없음
- response


