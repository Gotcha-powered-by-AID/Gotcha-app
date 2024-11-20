import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_BUCKET_NAME, AWS_REGION } from '@env'
import { RNS3 } from 'react-native-aws3';

// S3 업로드 설정
const s3Options = {
  keyPrefix: 'uploads/',
  bucket: AWS_BUCKET_NAME,
  region: AWS_REGION,
  accessKey: AWS_ACCESS_KEY_ID,
  secretKey: AWS_SECRET_ACCESS_KEY,
  successActionStatus: 201,
}

// 파일 업로드 함수
export const uploadToS3 = async (filePath: string) => {
    const file = {
      uri: filePath,
      name: `photo-${Date.now()}.jpg`, // 파일 이름을 고유하게 생성 (여기서는 'photo-<timestamp>.jpg')
      type: 'image/jpeg', // 이미지 타입 지정
    };
  
    try {
    const response = await RNS3.put(file, s3Options);
      console.log('File uploaded successfully', response);
      return response;
    } catch (error) {
      console.error('File upload failed', error);
      throw new Error('File upload failed');
    }
  };