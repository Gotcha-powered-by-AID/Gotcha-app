
# Gotcha App

AI 기반 불법주정차 자동 신고 서비스 **Gotcha**의 실험 프로젝트 앱입니다. 이 앱은 차량의 블랙박스 카메라를 대체하는 기능을 테스트하기 위해 제작되었습니다. 앱에서 촬영된 사진은 AWS S3 버킷으로 업로드되며, 이후 Gotcha의 클라우드 서비스에서 AI 모델을 통해 불법주정차 차량을 분석합니다.

본 프로젝트는 **[react-native-vision-camera](https://github.com/mrousavy/react-native-vision-camera)** 레포지토리를 참고하여 구현되었으며, 주요 기능과 로직을 Gotcha 서비스에 맞게 커스터마이징하였습니다.

---

## 📚 프로젝트 개요

### 주요 기능
- **실시간 카메라 촬영**: 블랙박스 카메라처럼 앱을 통해 사진 촬영.
- **AWS S3 업로드**: 촬영된 사진을 AWS S3 버킷으로 자동 업로드.
- **Gotcha 클라우드 연동**: 업로드된 사진은 클라우드에서 AI 모델로 분석되어 불법주정차 차량을 탐지.

### 활용 목적
- 블랙박스가 없는 환경에서도 불법주정차 신고 데이터를 수집.
- S3 업로드와 클라우드 AI 분석 간의 데이터 플로우 테스트.
- Gotcha 서비스의 데이터 수집 실험을 위한 프로토타입 개발.

---

## 🛠️ 실행 방법

### 1. 프로젝트 클론
레포지토리를 로컬로 클론합니다:
```bash
git clone https://github.com/Gotcha-powered-by-AID/Gotcha-app.git
cd Gotcha-app
```

### 2. 의존성 설치
React Native 환경에서 필요한 패키지를 설치합니다:
```bash
npm install
```

### 3. AWS 설정
S3 업로드를 위한 AWS 설정 정보를 `.env` 파일에 추가해야 합니다. 프로젝트 루트에 `.env` 파일을 생성하고 다음 내용을 입력하세요:
```plaintext
AWS_ACCESS_KEY_ID=<your-access-key>
AWS_SECRET_ACCESS_KEY=<your-secret-key>
AWS_S3_BUCKET_NAME=<your-bucket-name>
AWS_S3_REGION=<your-region>
```

### 4. iOS 및 Android 설정
#### iOS
```bash
cd ios
pod install
cd ..
npx react-native run-ios
```

#### Android
```bash
npx react-native run-android
```

---

## 📁 디렉토리 구조
```
📂 Gotcha-app
├── 📂 android          # Android 프로젝트 파일
├── 📂 ios              # iOS 프로젝트 파일
├── 📂 src              # 주요 소스 코드
│   ├── App.tsx         # 앱 진입점
│   ├── components/     # React Native 컴포넌트
│   ├── services/       # S3 업로드 로직
│   └── utils/          # 유틸리티 함수
├── .env                # AWS 환경 변수 파일
├── package.json        # Node.js 패키지 설정
├── README.md           # 프로젝트 설명 파일
└── ...
```

---

## 🌟 주요 파일 설명
- **`src/services/S3Uploader.ts`**: 사진을 AWS S3로 업로드하는 로직이 포함된 파일.
- **`src/components/CameraView.tsx`**: 실시간 카메라 화면과 촬영 기능을 담당하는 React Native 컴포넌트.
- **`.env`**: AWS S3 업로드를 위한 환경 변수 설정.

---

## 🧪 테스트 환경
- **React Native**: 0.71.x
- **Node.js**: 16.x
- **AWS SDK**: 최신 버전
- **플랫폼**: iOS 16 / Android 12

---

## ✨ 참고한 레포지토리
이 프로젝트는 **[react-native-vision-camera](https://github.com/mrousavy/react-native-vision-camera)**를 참고하여 구현되었습니다. 카메라 모듈의 커스터마이징과 AWS S3 업로드 연동 기능이 추가되었습니다.

---

## 📝 라이선스
이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 [LICENSE](./LICENSE)를 참조하세요.
