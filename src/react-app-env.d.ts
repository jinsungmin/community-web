/// <reference types="react-scripts" />
declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production';
        REACT_APP_FILE_URL: string;
        REACT_APP_GOOGLE_CLIENT_ID: string;
    }
}